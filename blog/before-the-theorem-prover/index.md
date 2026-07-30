<!-- Markdown twin. Canonical HTML: https://amangoel.ai/blog/before-the-theorem-prover/ -->

# Before the theorem prover: verification is older than the alphabet
*The checksum, the audit, the acceptance test, the signed certificate — none of them is a
twentieth-century idea, and the oldest of them predates writing itself. What the twentieth century actually
invented is smaller, and stranger.*

![Cuneiform tablet case carrying rolled cylinder-seal impressions above the contract text in cuneiform](/assets/plates/hero-kultepe.jpg)
*Cuneiform tablet case · Kültepe (Karum Kanesh) · ca. 1900 BC · The Metropolitan Museum of Art 66.245.16b*

---

Sometime around 3300 BC, in Susa or Uruk, an accountant faced a problem we would recognize
instantly. A sealed container, a hollow clay ball holding little tokens — the era's receipt for so
many sheep or so many measures of grain — could be trusted only by breaking it. Verification
destroyed the thing verified. The fix some accountants adopted was brilliant: before sealing the
tokens inside, they pressed each one into the ball's wet outer surface. The result was a container
that carried a redundant external record of its own contents. Anyone could check the count against
the surface marks at any time; the cylinder-seal impressions of the responsible officials guaranteed
nobody had tampered with either. If the count was ever disputed, breaking the envelope would settle
it — though no record of such a showdown survives, the design is unambiguous about what it is for.

We have these objects. The Louvre holds a Susa envelope whose interior tokens match its exterior
impressions; researchers have CT-scanned still-sealed envelopes from Choga Mish to count the tokens
without breaking them: modern non-destructive verification of an ancient non-destructive
verification device. And the reading is not one enthusiast's theory. Robert Englund, the leading
*skeptic* of the grand token-to-writing narrative, granted exactly this much: tokens gathered and
sealed into clay balls in the period before proto-cuneiform emerged around 3300 BC, with exterior
impressions that "conform exactly" to the numerical signs on the earliest clay tablets.

I work in formal verification. My field tends to date itself to Turing's 1949 note on checking a
large routine, or to Floyd and Hoare in the late 1960s, or to model checking in the early 1980s.
That history is true for *mechanized* verification. But the underlying idea is not a
twentieth-century idea: check an artifact against a specification by a rule-governed, repeatable
procedure that does not depend on anyone's judgment. It is one of the oldest ideas civilization has.
It is arguably *the* idea that made civilization administrable. On one influential (and contested)
reading of the evidence, writing itself grew out of verification technology, not the other way
around.

This essay traces the deep history of that idea through artifacts you can visit in museums, each one
checked as carefully as I could manage against primary sources and modern scholarship. Verifying an
essay about verification seemed like the least I could do. There is a graveyard at the end for the
claims that did not survive, including the single most-repeated "fact" about the world's first
measurement standard, which turns out to be a modern invention.

## What counts as "formal"?

"Verification" alone is everywhere in history — every witness oath and market inspection qualifies.
To keep the word *formal* honest, I hold each artifact against four ingredients that define modern
formal verification:

1. **Specification** — an explicit reference distinct from the artifact: a written rule, a golden
   standard, a ledger of expected values.
2. **Procedure** — a check that is an algorithm, not an expert opinion. A different person running it
   gets the same verdict.
3. **Soundness** — a reason the check catches the errors it claims to: redundancy, inverse operations,
   exhaustive enumeration, physical matching.
4. **Institution** — the check is mandated and repeatable — a law, an office, a ritual — not one
   clever act.

Almost nothing ancient scores four out of four. What is remarkable is how much scores three, and how
early.

## Mesopotamia: verification before writing

The token envelopes (~3500–3300 BC) are the earliest physical verification artifacts we have. What is
attested is *redundant-count verification*: the
external marks let you check the number and shape of the sealed tokens. A stronger claim you will
sometimes read, that the surface marks were a full semantic mirror of the contents — an exact
"golden reference" — does not survive scrutiny; the quote usually cited for it actually describes
the solid tablets that *replaced* envelopes around 3200 BC. I caught that only on re-reading the
source in context — one paragraph further down than the quote usually stops. The difference between
the two claims is the difference between a checksum and a full specification.

When the envelopes flattened into tablets, and writing proper arrived, the verification structure
came along and grew stronger. Proto-cuneiform accounts of Uruk (c. 3300–3000 BC) routinely carry
subtotals and grand totals inscribed on the reverse face, summing the entries on the front. The
document checks itself: anyone can re-add it. Modern Assyriologists do exactly that — recomputing
the totals is how the decipherment is *tested*.

From almost the beginning, these archives distinguish what Assyriologists call *theoretical amounts*
— the credits an account was supposed to show — from actual deliveries. That is a specification, in
the engineer's sense: the number reality must be checked against.

![Cuneiform tablet recording a balanced account, its debits and credits closing to an explicit deficit](/assets/plates/dugga-tablet.jpg)
*Cuneiform tablet: balanced account of Dugga · Drehem · ca. 2039 BC · The Metropolitan Museum of Art 11.217.3*

By the Ur III period (2112–2004 BC) this had hardened into one of the most rigorous verification
institutions of the ancient world: the *balanced account*, ni₃-kas₇-aka. A fixed two-part format: a
debit section of capital and theoretical credits, a credit section of actual performance, closing
with an explicitly computed deficit (*la₂-ia₃*) or surplus (*diri*) carried forward into the next
period. The arithmetic closes exactly: on one Louvre tablet the debits of 201.42 shekels of silver
(converted here from sexagesimal), minus credits of 140.19, leave the recorded deficit of 61.23. You
can stand in front of one of these — the Metropolitan Museum's tablet 11.217.3, the balanced account
of a man named Dugga, from Drehem, dated to the year, month, and day: about 2039 BC. State-mandated,
periodic, rule-governed, arithmetically sound. Four ingredients for four, four thousand years ago.

And the scribes verified *computations*, not just inventories. Old Babylonian mathematics (c.
1800–1600 BC) includes a procedure now called "the Technique" for computing reciprocals in
sexagesimal arithmetic, and its texts check the result *by inverting it to recover the original
number*. Compute, apply the inverse operation, confirm you got your input back: any programmer who
has round-tripped a serializer knows the move. A British Museum tablet, BM 46550, shows the same
compute-then-verify routine still being executed twice in succession on one tablet, in the
Achaemenid era, over a thousand years later. The idiom had a service life of a millennium.

One boundary case belongs here, because it is so often miscast. Hammurabi's laws (~1754 BC, Louvre
stele Sb 8) famously prescribe death for a builder whose house collapses and kills the owner (§229),
require him to rebuild a buckling wall at his own cost (§233), and even set a one-year warranty on
boat caulking (§235). This is real, and it is on the stone. But it is a verification *incentive*,
not a verification *procedure*: no Mesopotamian text prescribes an inspection or acceptance test for
buildings, and scholars dispute whether the Code was enforced at all. Liability makes builders check
their own work; it is not itself a check.

## The Indus: a specification without a visible verifier

![A Harappan balance scale with a set of cubical stone weights](/assets/plates/indus-weights.jpg)
*Harappan (Indus Valley) balance and weights*


The Harappan civilization (urban floruit ~2600–1900 BC) left the opposite fragment of the puzzle: a
specification with no surviving procedure. Cubical stone weights appear at more than forty sites
across the Indus world, and when you run the corpus through cosine quantogram analysis, the
statistician's tool for asking whether one underlying unit is present, the answer is an
exceptionally clear yes: a single standard, a "Harappan shekel" of about 13.4–13.6 grams. Rahmstorf,
the leading specialist, judges it cleaner than the multiple concurrent standards documented across
Bronze Age Mesopotamia and Syria; a peer-reviewed 2021 PNAS reanalysis found it statistically
inconsistent with having drifted out of those western systems. Weight metrology appears during the
transition into the urban phase, around 2800–2600 BC, and holds for centuries.

Somebody enforced that. Statistical conformance that tight, across a subcontinent, for that long,
does not happen without checking. But no inspection office, no master weight, no procedural text
survives — the script is undeciphered and terse. So the Indus thread earns exactly one of the four
grades (specification), and stands as the essay's reminder that verification is sometimes
archaeologically invisible, leaving only its *effect*: the conformance it produced.

## Egypt: the audit, the proof, and a modern legend

The Egyptian document I keep returning to is not mathematical at all. Papyrus Abbott (British Museum EA 10221) is the official record of a state audit — of tombs. In Year 16 of Ramesses IX, about 1110 BC,
reports of royal-tomb robbery in the Theban necropolis triggered a formal commission: necropolis
inspectors, the vizier's scribe, the treasury's scribe. Over four days they walked a defined list of
monuments — ten royal tombs, four tombs of the Chantresses, then the Valley of the Queens — and
recorded, tomb by tomb, a standardized verdict: *examined this day; found intact* / *found to have
been violated by the thieves*. Each entry identifies the tomb by location and landmark, one by the
depth of its shaft. The itemized list closes with a summary tally — nine intact, one violated, of
ten royal tombs — that arithmetically cross-checks the entries. I redid that addition; it closes.

The report was deposited in the vizier's archives; integrity in the Queens' Valley was checked
against the tomb seals, a tamper-evident reference. Checklist, formulaic verdicts, identifying
specifications, arithmetic self-check, archival record. The protocol is thirty-one centuries old and
an auditor today would recognise every line of it.

And then the twist that makes it modern in the uncomfortable way too. T. E. Peet, whose 1930 edition
remains canonical, read the day-19 seal inspection as "a carefully staged scene": the audit sat
inside a political feud between two officials, Paser (who alleged the robberies) and Paweraa (on
whose watch they had happened). The commission was not disinterested, and a queen's tomb the
commission passed as intact was proven robbed within a year. The procedure was sound; the verifier
was compromised. Every security engineer knows this failure mode: the auditee controls the auditor.
It is why SOC 2 has independence requirements, and why a compiler cannot certify itself. The
Egyptians invented the audit and the audit-capture scandal in the same document.

![A plate from the Rhind Mathematical Papyrus](/assets/plates/rhind-plate15.jpg)
*Rhind Mathematical Papyrus, Plate XV (Chace facsimile) · British Museum EA 10057–10058*

The Rhind Mathematical Papyrus (British Museum EA 10057/10058, copied by the scribe Ahmose around
1550 BC from a Middle Kingdom original of about 1850 BC) does not just present answers — it *checks*
them. Peet's edition notes that many problems end in an explicit
**"proof"** showing the computed result "actually satisfies the conditions of the problem," by
substituting the found answer back through the prescribed operations and closing with a QED-like
formula, *mitt pw* — "that is it." In Problem 25, a computed quantity of 10⅔ plus its half, 5⅓, is
shown to equal the required 16. The false-position problems (guess a trial number, compute forward,
scale to fit: Problems 24–27, 30, 32–38) are all verified this way. Problem 31, tellingly, is left
unproved. Red auxiliary numbers keep the checking separate from the working. This is the same
inverse-operation idiom as the Babylonian reciprocals: substitute the answer back and confirm. The
papyrus is roughly 3,500 years old.

Egypt is also where I have to kill a beloved story. You will read, in metrology textbooks and
standards lore, that Egyptian working cubits were recalibrated against a royal master cubit "at each
full moon, on pain of death" — often cited as the first calibration regime in history. The physical
standard is real: surviving royal cubit rods (Kha's folding rule and Amenhotep II's gold-leaf rod,
both in Turin's Museo Egizio) measure about 52.4 cm, and the Great Pyramid's dimensional precision
is genuine indirect evidence of a consistently held unit.

But the full-moon recalibration story has *no primary Egyptian source*. Its earliest traceable
appearance is a modern metrologists' commentary — popularised in materials from the instruments firm
Brüel & Kjær — that cites nothing and appears to derive from a 2005 opinion piece by P. De Bièvre.
The most-cited fact about the world's first measurement standard is an uncited twenty-first-century
embellishment. I verified the cubit; I could not verify the ritual. (And when I pushed the "pyramid
proves an enforced standard" claim, the fact-check killed it outright: exquisite construction proves
careful work, not necessarily a calibration bureaucracy.)

## India: encoded recitation and a rule system

![A Rigveda manuscript page in Devanagari with red Vedic accent marks](/assets/plates/rigveda-newberry.jpg)
*Rigveda saṃhitā, opening at 1.1.1 · Devanagari with Vedic accent marks in red · early 19th
century · Newberry Library, Chicago, ORMS 960*

The Vedic *pāṭhas* are a redundancy scheme for *oral* transmission with no real parallel anywhere.
The same text was memorized and chanted in multiple interleaved orderings — beyond the natural word
order (*saṁhitā*), reciters learned the *pada* (word-by-word), the *krama* (each word paired with
the next: AB, BC, CD…), and permutation modes (*jaṭā*, *ghana*) weaving the words forward and
backward in fixed patterns. Because each mode re-encodes the same words under a different rule, a
slip in one ordering fails to reconcile with the others: a purely oral error-detecting code. The written
copies are the late witness, not the mechanism — the red accent marks a manuscript like the one above
preserves are precisely the pitch information the recitation modes existed to protect. The
claim commonly attached to it — that this preserved the Rigveda's word order and phonetics across
nearly three millennia — is extraordinary, and I flag it as such.

Pāṇini's *Aṣṭādhyāyī* (~350 BCE) sits at the other end of the abstraction ladder: a grammar of
Sanskrit as roughly 4,000 ordered rules with a real formal apparatus — a regimented metalanguage,
compression devices, and an explicit conflict-resolution metarule (1.4.2, "in conflict, the later
rule prevails"), intended to drive a derivation toward a single well-defined result that can be
checked step by step, though how completely the architecture achieves that is exactly what modern
Pāṇinian scholarship, Kiparsky included, still argues about. The checking was practiced: within two
centuries the commentarial tradition (Kātyāyana, Patañjali) was testing the rules against attested
usage. It verifies *language derivations*, not artifacts or computations.

## China: the standard, the tally, and the state as verifier

The Mohist canon supplies the doctrine. The *Mozi* (5th c. BCE) says the hundred artisans make squares with the
set-square, circles with the compass, straight lines with the string, verticals with the plumb-line,
flats with the level — judging work against explicit physical standards (*fa*). What makes it
strikingly modern is that a *fa* functions as what we would now call an
**operator-independent decision procedure** — as Chris Fraser glosses the Mohist position, *fa* are
"objective, reliable, and easy to use, so that with minimal training anyone can employ them to
perform a task or check the results" — and judgment proceeds by citing a *fa*, comparing the object
to it, and ruling that **what matches the *fa* is "this" (correct) and what does not is "not."**
That is a binary, rule-governed conformance verdict, stated as a principle — the clearest ancient
articulation of the idea of checking against a specification.

![Bronze tiger tally with gold-inlaid inscription, split along its mating face](/assets/plates/tiger-tally.jpg)
*Bronze tiger tally with gold inlay · China, 2nd–1st century BC · San Diego Museum of Art*

The device is the tiger tally (*hufu* 虎符): a bronze token cast in two interlocking halves, the ruler
keeping the right, the field commander the left. A mobilization order was authenticated by
physically matching the two halves — a forged half will not fit the cast mate. The Du tiger tally in
the Shaanxi History Museum carries an inscription conditioning troop movements on the match — above
a threshold of fifty men, and with an explicit exemption for beacon-fire emergencies. A scoped authentication requirement with an availability bypass, cast in bronze. It is, precisely, a
**split-key, dual-control** authentication device from the Warring States / Qin era: two halves of one
casting are a single factor — possession — held under divided authority.

The bureaucracy is documented in the Shuihudi Qin bamboo slips (a tomb sealed around 217 BC, some
1,155 slips — mostly Qin statutes and legal-administrative texts, alongside a personal chronicle and
divination almanacs). Among them is the *Xiàolǜ* (效律), literally "statutes concerning checking": an
audit code that penalizes discrepancies in official accounts, with fines triggered only when errors
exceed set numerical thresholds — a rule-governed audit with explicit tolerances. Another statute
requires every government weapon to be branded with its issuing office; on return, the physical
brand is checked against the register, and a mismatch means confiscation: an artifact checked
against a golden recorded reference. There is a graduated schedule of fines cascading down the
supervisory hierarchy when manufactured goods fail inspection. This is the legal machinery behind
the famous Qin practice of "inscribe the maker's name" (物勒工名) on products for accountability.
Specification, procedure, soundness, institution: the Qin checking statutes are the essay's second
four-for-four — the only artifact besides the Ur III balanced account to earn all four grades. And
the incentive thread from Babylon recurs here on schedule: another Shuihudi statute makes
supervising officials liable if a city wall collapses within a year of completion — Hammurabi's
boat-caulking warranty, fifteen centuries on and a continent away.

A caution the specialists insist on, and so will I: the bronze crossbow triggers of the Terracotta
Army, often invoked as proof of Qin "interchangeable parts" and assembly-line mass production, do
not support that reading. Metrical analysis shows *batch* (cellular) production by small workshops,
with parts still individually filed to fit and match-marked so co-fabricated pieces stayed together.
The defensible analogy is accountability-marking and check-against-register, not proto-Fordism.

## Greece: verification carved in marble

If you want a single ancient artifact that a verification engineer would recognize as a colleague's
work, it is a marble stele dug out of a drain in the Athenian Agora in 1970. It carries the law of
Nikophon, 375/4 BC, on silver coinage — and it is, structurally, a complete verification system:

- **The specification.** Attic silver currency *must be accepted* when it is determined to be silver and bears the public stamp — the *dēmosios charaktēr*. Two conditions, conjoined, written down.
- **The verifier.** A standing public official — the *dokimastēs*, a state-owned slave, expert and
  permanent where magistrates rotated — required to sit among the bankers' tables and test coins *every
  day*, under penalty of fifty lashes if he fails to appear. The law creates a second post in Piraeus,
  scaling the service to the port.
- **The verdict-to-action mapping.** Outcomes are enumerated by defect class: a good foreign imitation of Athenian coin is returned to the presenter; a coin with a bronze or lead core, or otherwise debased, is
  *cut through* on the spot, consecrated to the Mother of the Gods, and deposited with the Council. The
  failed artifact is physically invalidated and removed from circulation — and everyone in the market can
  see the cut.
- **The meta-rules.** Sellers must accept what the *dokimastēs* approves — the verdict binds the whole market. And the law orders its own publication on stone, set up among the bankers' tables and in
  Piraeus. The specification of the verification system is itself a public, checkable artifact.

Specification, procedure, institution — and a partial soundness argument: the cut exposes the very
core the test is about, though it catches plated and debased coins rather than every defect class.
The scholarly hedges are minor and worth carrying: one clause's verb is restored, the "test-cut and
return" detail for passing imitations follows a 2017 restoration, and Athens likely had a
*dokimastēs* decades before Nikophon, so the law codified an existing office rather than inventing
it. Codifying an existing practice into published, sanction-backed rules is, of course, exactly what
writing a specification is.

Greece also gives us the written build-spec and the acceptance test. The Arsenal of Philon
inscription (IG II² 1668, 347/6 BC) is a marble stele carrying a complete building specification —
the *syngraphai* — for the Piraeus naval arsenal: dimensions, materials, and construction detail
prescribed *in advance*. The companion machinery is spelled out in temple-building contracts such as
the one from Lebadeia: inspection of delivered materials, acceptance of finished work, penalties for
nonconformance, all run by oath-bound overseers. A written spec from 347/6 BC and the acceptance
machinery in a sibling contract roughly a century later, together, give contract-based design with
acceptance testing, on stone.

And there is a tunnel. On Samos, around 550 BC, the engineer Eupalinos drove a kilometre-long
aqueduct tunnel from *both ends of the mountain at once*, to meet in the middle — a feat Herodotus
thought worth recording (Histories 3.60). What makes it a verification story rather than a lucky
guess is the physical evidence Hermann Kienast documented on the walls: a system of red-painted,
alphabetically-lettered measuring marks laid down as a reference grid, and geometric evidence that
the diggers detected a drift in one heading and corrected it. The two headings met with a horizontal
offset of about 60 cm over a kilometre — and a vertical error of a few centimetres.

Here the evidence is thinner than the story wants: the wall marks are the *reference grid*, and the
course-correction is *inferred from the tunnel's geometry*, not read directly off the marks; and
whether the famous zig-zag near the junction was a planned catching manoeuvre or a corrected mistake
is genuinely disputed. Either way, it is measurement against a planned line — verification of a
work-in-progress against a geometric specification.

## Rome: certifying the coin, auditing the water

Rome's contribution is the verification certificate as a physical object. A *tessera nummularia* is
a small bone or ivory tag that a professional coin-tester — a *nummularius* — attached to a sealed
bag of coins he had checked. It carries his name, his master's name, the verb **spectavit** ("has
inspected"), and a date. One in the Kunsthistorisches Museum in Vienna reads *Hilario Caecili
sp(ectavit)* — Hilario, slave of Caecilius, inspected — followed by the day and consular year: 30
October, 26 BC. Over a thousand survive; more than 160 carry consular dates, falling between 96 BC
and AD 88. It is a signed, timestamped attestation that a specific artifact passed a specific check
by a specific, named verifier — a build attestation in bone, two thousand years old. (The one thing
the tags do not preserve is the exact test the *nummularius* ran; that is scholarly reconstruction.)

And in AD 97 the emperor Nerva handed Sextus Julius Frontinus the curatorship of Rome's water
supply, and Frontinus did something any auditor today would recognise: he refused to trust the books. His *De aquaeductu* records the audit. The official records credited the system with 12,755 *quinariae* of water; downstream,
the same records accounted for 14,018 being delivered — a discrepancy of 1,263 he flags and
investigates. Rather than reconcile paper against paper, he sent gaugers to measure each aqueduct as
close to its source as the works allowed, and found reality exceeding the ledger substantially (*De
aq.* 64–73). Per aqueduct he ran a three-point cross-check — recorded versus gauged versus delivered
— and then classified the failures: arithmetic blunders in the original records; water-men
fraudulently using a smaller gauge at the reservoir than at the intake; landowners tapping the
conduits illegally. Every legal water grant, moreover, ran through a stamped bronze nozzle — the
*calix* — of certified bore, and he physically found oversized ones installed.

Ledger versus measurement, quantified discrepancy, classified root causes, hardware checked against
its certificate. The one thing hydraulic historians flag is that the *quinaria* measured
cross-sectional area, not flow, so his unit is not hydrodynamically sound. Frontinus ran the audit
right; he just measured in the wrong unit.

## The last thread: texts that check their copyists

![A page of the Aleppo Codex with marginal masoretic counts](/assets/plates/aleppo-codex.jpg)
*Aleppo Codex, Genesis 26:35–27:30 · photographed by William Wickes, 1887. These folios have been
missing since 1947; the page survives as this photograph and as the counts in its own margin.*


The subtlest ancient verification is the one that guards a text against its own copyists. The
scribes who transmitted the Hebrew Bible were called *soferim*, literally "counters," and the Talmud
(Kiddushin 30a) explains why: they counted the letters, words, and verses of the Torah, and marked
its exact midpoints (the middle letter is fixed as the *vav* of *gaḥon* in Leviticus 11:42). Those
counts became a marginal apparatus, the Masorah, carried in the great codices (the Aleppo Codex,
~925 AD; the Leningrad Codex, 1008 AD): a running redundancy over the consonantal text. To check a
new scroll you recounted it against the reference totals; a dropped or added letter shifts a count
and betrays itself. It is a checksum maintained for a millennium. The caveat matters: the Talmud's
own midpoint values no longer match the received text, and it concedes that the expertise to run the
check had been lost — an ancient verification system recording that its own procedure had become
unrunnable.

Which brings the arc, fittingly, to a check that is *provably* unsound. Casting out nines — verify
an arithmetic result by comparing digit-sums modulo nine — is the conceptual ancestor of the
checksum every network packet carries. Its earliest attestation as a verification method is
surprisingly late (an Indian text of about 950 AD; the Persian polymath Ibn Sina gave full details
around 1020, calling it "the Hindu method"), even though the underlying digit-sum was known to
Greco-Roman writers centuries earlier without being used to check anything. And it is *unsound*:
because it only sees the residue mod nine, it silently accepts any error that is a multiple of nine
— it would pass 44, 53, or 26 as the product of 5 and 7. (53 is the one a tired scribe actually
produces: 35 with its digits transposed.) Unsound as a *verifier*, though perfectly sound as a
*refuter* — when the check fails the answer is definitely wrong; when it passes, nothing follows.

The ancients had not only checks but checks we can now show to be unsound, though nothing in the
record suggests Aryabhata or Ibn Sina ever flagged the mod-nine blind spot. The Masoretes are the
stronger case: they watched their own check become unrunnable, and said so.

## What the ancients had — and what the twentieth century added

Line the artifacts up and the taxonomy is complete:

| Modern concept | Ancient instance | Date |
|---|---|---|
| Redundant encoding / checksum | Token envelopes with surface impressions | ~3500–3300 BC |
| Self-checking document | Proto-cuneiform reverse-face totals | ~3300–3000 BC |
| Expected-vs-actual reconciliation | Ur III balanced accounts (ni₃-kas₇-aka) | ~2100–2000 BC |
| Inverse-operation result check | "The Technique" for reciprocals; Rhind proofs; BM 46550 | ~1850 BC → 4th c. BC |
| Conformance to a standard | Harappan single weight standard (statistically verified) | ~2800–1900 BC |
| Checklist audit + tamper-evident seals | Papyrus Abbott tomb inspection | ~1110 BC |
| Redundant transmission encoding | Vedic *pāṭha* recitation modes | Vedic period |
| Deterministic rule-conflict resolution / derivation-checking | Pāṇini's *Aṣṭādhyāyī* | ~350 BC |
| Conformance doctrine (operator-independent) | Mohist *fa* | 5th c. BC |
| Split-key / dual-control authentication | Chinese tiger tallies (*hufu*) | Warring States–Han |
| Acceptance spec + certified verifier + defined outcomes | Nikophon's coinage law | 375/4 BC |
| Written build-spec + acceptance test | Arsenal of Philon; Lebadeia contract | 347/6 BC; ~220 BC |
| Survey verification against a geometric spec | Tunnel of Eupalinos | ~550 BC |
| Codified audit with tolerances; mark-vs-register | Qin *Xiàolǜ* statutes | 3rd c. BC |
| Signed, timestamped verification certificate | Roman *tesserae nummulariae* ("spectavit") | 96 BC–AD 88 |
| Ledger-vs-measurement audit + certified hardware | Frontinus, *De aquaeductu* | AD 97–98 |
| Text checksum (letter/word counts) | Masoretic Masorah | Talmudic → 10th–11th c. AD |
| Digit-sum check (known-unsound) | Casting out nines | attested ~950 AD |

Specification, golden reference, redundancy, inverse checks, audits, certification, split-key
authentication, even sanctions on the verifier and a frank grasp of unsoundness. So what, exactly,
did the twentieth century add?

Two things, I think. First, **the specification became formal in the logician's sense** — a
mathematical object, not a rule of practice, so that "the artifact meets the spec" became a
*theorem*. The ancients verified *instances*: this envelope, this coin, this account. We verify
*universals*: all executions, all inputs. That leap required logic itself. Antiquity had both halves
and never joined them: Euclid had universal proof about mathematical objects, Nikophon had
instance-checking of physical artifacts, and the two traditions never met. The modern move is making
an *engineered artifact* the subject of a universal theorem.

Second — and this is the part I would argue is the genuine twentieth-century invention — **the
checker became an artifact that could itself be checked.** Antiquity could make the verifier
accountable and the procedure public — Nikophon sanctions the
*dokimastēs*, binds his verdict, and publishes the rules on stone. What it could not do was leave a
re-checkable trace of the verification *act*. The tessera is the closest they came, and it does not
preserve the test. A machine-checked proof, by contrast, is a thing other machines can re-verify; a
model checker's verdict can be certified by an independent proof. We did not invent verification. We
automated the verifier, and then made the verifier's own work verifiable.

But the *pattern* is not ours: a cheap, sound, redundant check certifying an expensive, fallible
computation. It is the oldest trick in the administrative book. When I attach a proof certificate to
a compiler's output, I am doing what a Susa accountant did when they pressed the tokens into the
clay before sealing them inside: making the artifact carry the evidence of its own correctness, so
that trust does not require breaking it open.

The theorem prover is new. The job is five thousand years old.

---

## What didn't survive

Several well-travelled claims did not hold up and are not in the essay above. The token-envelope
"semantic mirror" reading rested on a quote taken from the wrong stage of the artifact's
development. The Egyptian cubit "recalibrated each full moon on pain of death" has no primary source
— it is modern metrology folklore. "The Great Pyramid proves an enforced length standard" proves
careful building, not a calibration regime. "Egyptian division is inherently self-checking" mistakes
the explicit proof steps for the arithmetic. And three claims about Eupalinos pushed the
verification framing past what the evidence supports, though the tunnel's anchored facts stand on
other grounds. Seven claims in all: six refuted by re-reading the sources, and the full-moon cubit,
which had no source to refute.

One correction rather than a kill: the frequently-repeated comparison of Pāṇini to Backus-Naur Form
turns out to belong to the computer scientist P. Z. Ingerman, who in 1967 proposed calling BNF
"Panini-Backus Form." It is not a claim Sanskritists make about Pāṇini.

Each was a correction to an overreach rather than the collapse of a thread — but several of them
were among the most quotable things I had.

## Colophon

Written with Claude — including the fact-checking, which ran three independent adversarial passes
over each claim, every pass re-reading the primary source; two refutations killed a claim. I
adjudicated, and the kills are in the section above.

Every claim here is anchored to a museum object, an inscription, or a scholarly edition wherever one
exists. Four entries below are survey links rather than scholarship, and one — the early history of
casting out nines — I could not pin to a scholarly edition at all. Remaining errors are mine.

## References

1. Schmandt-Besserat, D. "The Evolution of Writing." University of Texas at Austin. sites.utexas.edu/dsb/tokens. <https://sites.utexas.edu/dsb/tokens/the-evolution-of-writing/>
2. Englund, R. K. "Accounting in Proto-cuneiform," in The Oxford Handbook of Cuneiform Culture (2011). cdli.earth (PDF). <https://cdli.earth/files-up/publications/englund2011a.pdf>
3. Nissen, H., Damerow, P. & Englund, R. Archaic Bookkeeping (Univ. of Chicago Press, 1993). academia.edu. <https://www.academia.edu/88331225/Archaic_Bookkeeping>
4. Metropolitan Museum of Art, cuneiform tablet 11.217.3 — "balanced account of Dugga," Drehem, ca. 2039 BC. metmuseum.org. <https://www.metmuseum.org/art/collection/search/322447>
5. D'Agostino, F. & Pomponio, F. on Ur III balanced accounts (ni₃-kas₇-aka), Rivista di storia economica (2007). ideas.repec.org. <https://ideas.repec.org/a/mul/jrkmxm/doi10.1410-24582y2007i1p7-32.html>
6. Fincke, J. C. & Ossendrijver, M. "BM 46550 — a Late Babylonian mathematical tablet," Zeitschrift für Assyriologie 106 (2016). doi:10.1515/za-2016-0016 · artifact: CDLI P499419. <https://www.degruyterbrill.com/document/doi/10.1515/za-2016-0016/html>
7. Laws of Hammurabi §§229–235, §108 — Louvre stele Sb 8; trans. M. Roth, Law Collections from Mesopotamia and Asia Minor (1995). Print.
8. Rahmstorf, L. "Weight metrology in the Harappan Civilization." academia.edu. <https://www.academia.edu/42176412/Weight_metrology_in_the_Harappan_Civilization>
9. Ialongo, N., Hermann, R. & Rahmstorf, L. "Bronze Age weight systems as a measure of market integration," PNAS 118 (2021). doi:10.1073/pnas.2105873118. <https://www.pnas.org/doi/10.1073/pnas.2105873118>
10. Peet, T. E. The Great Tomb-Robberies of the Twentieth Egyptian Dynasty (1930). archive.org. <https://archive.org/stream/THEGREATTOMBROBBERIESOFTHETWENTIETHEGYPTIANDYNASTY/THE%20GREAT%20TOMB%20ROBBERIES%20-%20OF%20T%20H%20E-TWENTIETH%20EGYPTIAN%20DYNASTY_djvu.txt>
11. Papyrus Abbott, British Museum EA 10221 — overview. wikipedia.org/wiki/Abbott_Papyrus. <https://en.wikipedia.org/wiki/Abbott_Papyrus>
12. Rhind Mathematical Papyrus, BM EA 10057/10058 — Chace, The Rhind Mathematical Papyrus (1927–29) and Peet (1923), print; British Museum introduction: britishmuseum.org. <https://www.britishmuseum.org/blog/learn-maths-egyptian-secrets-rhind-mathematical-papyrus>
13. Filliozat, P.-S. "Ancient Sanskrit Mathematics: An Oral Tradition and a Written Literature," in Chemla (ed.), History of Science, History of Text (Springer, 2006); survey: wikipedia.org/wiki/Vedic_chant. <https://en.wikipedia.org/wiki/Vedic_chant>
14. Ingerman, P. Z. "'Pānini-Backus Form' suggested," Communications of the ACM 10(3):137 (1967). doi:10.1145/363162.363165. <https://dl.acm.org/doi/10.1145/363162.363165>
15. Fraser, C. "Mohism," Stanford Encyclopedia of Philosophy. plato.stanford.edu/entries/mohism. <https://plato.stanford.edu/entries/mohism/>
16. Shuihudi Qin bamboo texts (incl. the Xiàolǜ 效律, "statutes concerning checking") — overview: wikipedia.org; trans. A. F. P. Hulsewé, Remnants of Ch'in Law (Brill, 1985), print. <https://en.wikipedia.org/wiki/Shuihudi_Qin_bamboo_texts>
17. Li, X. et al. "Marking practices and the making of the Qin Terracotta Army," Journal of Anthropological Archaeology 42 (2016). doi:10.1016/j.jaa.2016.04.002. <https://www.sciencedirect.com/science/article/abs/pii/S0278416516300022>
18. Li, X. et al. "Crossbows and imperial craft organisation: the bronze triggers of China's Terracotta Army," Antiquity 88 (2014). cambridge.org. <https://www.cambridge.org/core/journals/antiquity/article/crossbows-and-imperial-craft-organisation-the-bronze-triggers-of-chinas-terracotta-army/DB32EADD77493B84692756138D21D036>
19. Law of Nikophon (SEG 26.72 = RO 25), Agora I 7180 — Attic Inscriptions Online, with translation. atticinscriptions.com/inscription/RO/25. <https://www.atticinscriptions.com/inscription/RO/25>
20. Stroud, R. "An Athenian Law on Silver Coinage," Hesperia 43 (1974), print; discussion: Ober, J., ssrn.com/abstract=1432143. <https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1432143>
21. Eupalinos tunnel — Herodotus, Histories 3.60; Kienast, H., Samos XIX (1995); Apostol, T., "The Tunnel of Samos," Engineering & Science 67 (2004). Print.
22. Frontinus, De aquaeductu urbis Romae, trans. Bennett (Loeb, 1925). LacusCurtius. <https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Frontinus/De_Aquis/text*.html>
23. Tessera nummularia of Hilario (26 BC), Kunsthistorisches Museum Wien, Antikensammlung Inv. III 183; corpus: Herzog, Tesserae nummulariae (1919), print. khm.at/en/objectdb/detail/52488. <https://www.khm.at/en/objectdb/detail/52488/>
24. Babylonian Talmud, Kiddushin 30a (soferim as "counters"; the vav of gaḥon). sefaria.org/Kiddushin.30a. <https://www.sefaria.org/Kiddushin.30a>
25. Casting out nines — history and unsoundness (Aryabhaṭa II, Mahāsiddhānta ~950; Ibn Sīnā ~1020). wikipedia.org/wiki/Casting_out_nines. <https://en.wikipedia.org/wiki/Casting_out_nines>
26. Pāṇini scholarship — Kiparsky, P., "On the Architecture of Pāṇini's Grammar"; Cardona, G., Pāṇini: His Work and its Traditions (1997); Bhate, S. & Kak, S., "Pāṇini's Grammar and Computer Science," ABORI 72 (1993). Print.
27. Du tiger tally (杜虎符), bronze, Qin — Shaanxi History Museum, Xi'an. Museum object; inscription conditions troop mobilization on matching the two halves.
28. Arsenal of Philon inscription, IG II² 1668 (EM 12538, Athens, 347/6 BC); acceptance machinery in the Lebadeia temple contract, IG VII 3073 (= Syll³ 972). Epigraphic editions; cf. de Waele's study of IG II² 1668. Print.
