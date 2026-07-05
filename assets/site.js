/* amangoel.ai — shared behavior: lamplight toggle, scroll reveals, proof demo.
   No dependencies. Everything respects prefers-reduced-motion; the site is fully
   usable with JS disabled (static first example, no hidden content). */
(function () {
  'use strict';
  var doc = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- lamplight (dark) toggle ---------------------------------------- */
  var btn = document.getElementById('themetoggle');
  function currentTheme() {
    if (doc.dataset.theme) return doc.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function paint() { if (btn) btn.textContent = currentTheme() === 'dark' ? '☀' : '☾'; }
  if (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      doc.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      paint();
      window.dispatchEvent(new CustomEvent('themechange'));
    });
    paint();
  }

  /* ---- scroll reveals --------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length && 'IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- proof demo: type a claim, check it, stamp a verdict -------------- */
  var demo = document.getElementById('proofdemo');
  if (!demo) return;

  var EXAMPLES = [
    {
      policy: 'Refunds up to $500, within 24 hours of booking.',
      claim: '“You’ll get the full $620 back.”',
      check: 'refund ≤ 500 ∧ hours ≤ 24  ⊢  refund = 620 ?',
      verdict: '✗ refuted — counterexample: refund = 620 > 500',
      cls: 'bad'
    },
    {
      policy: '20 vacation days after 2 years of tenure.',
      claim: '“Three years in — you have 20 days.”',
      check: 'tenure ≥ 2  ⊢  days = 20 ?',
      verdict: '✓ verified — entailed by the policy',
      cls: 'ok'
    },
    {
      policy: 'Refunds up to $500, within 24 hours of booking.',
      claim: '“Your booking qualifies for a refund.”',
      check: 'refund ≤ 500 ∧ hours ≤ 24  ⊢  eligible ?',
      verdict: 'unknown — missing fact: cancellation time. abstain.',
      cls: 'unk'
    }
  ];

  var elPolicy = demo.querySelector('.p-policy .ptext');
  var elClaim = demo.querySelector('.p-claim .ptext');
  var elCheck = demo.querySelector('.p-check .ptext');
  var elVerdict = demo.querySelector('.pverdict');
  var idx = 0, running = false, visible = true, timer = null;

  if (reduced || !elPolicy) return; // static first example stays

  var vio = new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting;
    if (visible && !running) { running = true; schedule(2200); }
  }, { threshold: 0.3 });
  vio.observe(demo);

  function schedule(ms) { clearTimeout(timer); timer = setTimeout(step, ms); }

  function type(el, text, speed, done) {
    el.textContent = '';
    el.classList.add('typing');
    var i = 0;
    (function tick() {
      if (!visible) { el.textContent = text; el.classList.remove('typing'); done(); return; }
      el.textContent = text.slice(0, ++i);
      if (i < text.length) { setTimeout(tick, speed); }
      else { el.classList.remove('typing'); done(); }
    })();
  }

  function step() {
    if (!visible) { running = false; return; }
    idx = (idx + 1) % EXAMPLES.length;
    var ex = EXAMPLES[idx];
    elVerdict.className = 'pverdict pending';
    elVerdict.textContent = '…';
    elPolicy.textContent = ex.policy;
    type(elClaim, ex.claim, 26, function () {
      setTimeout(function () {
        type(elCheck, ex.check, 12, function () {
          setTimeout(function () {
            elVerdict.className = 'pverdict ' + ex.cls;
            elVerdict.textContent = ex.verdict;
            schedule(4600);
          }, 420);
        });
      }, 260);
    });
  }
})();

/* ---- proof rain: logic glyphs drifting in the margins. A column that
   resolves flashes one green QED (∎) and respawns. The pointer is a quiet
   presence: nearby glyphs brighten a touch, movement leaves a dissolving
   wake of symbols, a tap scatters a small ripple. All of it lives on a
   background canvas at watermark alpha — the content layer never changes.
   Paused when the tab is hidden; absent under prefers-reduced-motion. ---- */
(function () {
  'use strict';
  var canvas = document.getElementById('proofrain');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { canvas.remove(); return; }
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var GLYPHS = '∀∃⊢⊨∧∨¬→↔φψλμπ≤≥≠=01⊤⊥';
  var FS = 15, TICK = 110, PR = 150;      // PR: pointer influence radius
  var W, H, colW, drops, colors = {}, timer = null, wrapL = 0, wrapR = 0;
  var ptr = { x: -1e4, y: -1e4, t: -1e9 };
  var sparks = [], lastSpark = { x: -1e4, y: -1e4 };

  function hexToRgb(h) {
    var m = /^#([0-9a-f]{6})$/i.exec((h || '').trim());
    if (!m) return null;
    var n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function readColors() {
    var cs = getComputedStyle(document.documentElement);
    colors.paper = hexToRgb(cs.getPropertyValue('--paper')) || [251, 250, 246];
    colors.ink = hexToRgb(cs.getPropertyValue('--ink')) || [23, 21, 15];
    colors.link = hexToRgb(cs.getPropertyValue('--link')) || [28, 110, 69];
    colors.dark = colors.paper[0] < 128;
  }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  function glyph() { return GLYPHS[(Math.random() * GLYPHS.length) | 0]; }

  function newDrop(i, seed) {
    return { x: i * colW + colW * (0.2 + 0.6 * Math.random()),
             y: seed ? Math.random() * H : -FS * (2 + Math.random() * 30),
             resolved: 0 };
  }
  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = FS + 'px "IBM Plex Mono", monospace';
    var n = Math.max(4, Math.floor(W / 110));
    colW = W / n;
    // the content column gets extra-quiet glyphs; the margins carry the rain
    wrapL = Math.max(0, (W - 760) / 2); wrapR = W - wrapL;
    drops = [];
    for (var i = 0; i < n; i++) drops.push(newDrop(i, true));
    repaint();
  }
  function repaint() { ctx.fillStyle = rgba(colors.paper, 1); ctx.fillRect(0, 0, W, H); }

  // pointer presence: nearby glyphs brighten; influence fades ~1.6s after the last move
  function boostAt(x, y, now) {
    var recency = 1 - (now - ptr.t) / 1600;
    if (recency <= 0) return 0;
    var dx = x - ptr.x, dy = y - ptr.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d > PR) return 0;
    return (1 - d / PR) * recency;
  }

  function tick() {
    var now = performance.now();
    // trail decay: wash the canvas with translucent paper
    ctx.fillStyle = rgba(colors.paper, colors.dark ? 0.09 : 0.13);
    ctx.fillRect(0, 0, W, H);
    var base = colors.dark ? 0.30 : 0.13, gain = colors.dark ? 0.28 : 0.14;
    for (var i = 0; i < drops.length; i++) {
      var d = drops[i];
      if (d.resolved > 0) {                        // green QED, held briefly
        if (d.resolved === 3) {
          ctx.fillStyle = rgba(colors.link, colors.dark ? 0.55 : 0.30);
          ctx.fillText('∎', d.x, d.y);
        }
        if (--d.resolved === 0) drops[i] = newDrop(i, false);
        continue;
      }
      var damp = (d.x > wrapL && d.x < wrapR) ? 0.45 : 1;
      ctx.fillStyle = rgba(colors.ink, (base + gain * boostAt(d.x, d.y, now)) * damp);
      ctx.fillText(glyph(), d.x, d.y);
      d.y += FS;
      if (d.y > H + FS) { drops[i] = newDrop(i, false); }
      else if (Math.random() < 0.004 && d.y > H * 0.25) { d.resolved = 3; }
    }
    // pointer wake: short-lived glyphs where the pointer passed
    for (var s = sparks.length - 1; s >= 0; s--) {
      var sp = sparks[s];
      ctx.fillStyle = rgba(colors.ink, (sp.life / 7) * (colors.dark ? 0.22 : 0.11));
      ctx.fillText(sp.g, sp.x, sp.y);
      if (--sp.life <= 0) sparks.splice(s, 1);
    }
  }
  function loop() { timer = setTimeout(function () { tick(); loop(); }, TICK); }
  function stop() { clearTimeout(timer); timer = null; }

  function addSpark(x, y) {
    if (sparks.length > 28) sparks.shift();
    sparks.push({ x: x + (Math.random() - 0.5) * 14, y: y + (Math.random() - 0.5) * 14,
                  g: glyph(), life: 7 });
  }
  window.addEventListener('pointermove', function (e) {
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = performance.now();
    var dx = e.clientX - lastSpark.x, dy = e.clientY - lastSpark.y;
    if (dx * dx + dy * dy > 42 * 42) {
      lastSpark.x = e.clientX; lastSpark.y = e.clientY;
      addSpark(e.clientX, e.clientY);
    }
  }, { passive: true });
  window.addEventListener('pointerdown', function (e) {
    ptr.x = e.clientX; ptr.y = e.clientY; ptr.t = performance.now();
    for (var k = 0; k < 3; k++) addSpark(e.clientX + (Math.random() - 0.5) * 40, e.clientY + (Math.random() - 0.5) * 40);
  }, { passive: true });

  readColors(); size(); loop();
  window.addEventListener('resize', function () { stop(); size(); loop(); });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else if (!timer) loop();
  });
  window.addEventListener('themechange', function () { readColors(); repaint(); });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { readColors(); repaint(); });
})();
