<!-- Markdown twin. Canonical HTML: https://amangoel.ai/ -->

# Aman Goel

*Senior Applied Scientist · [AWS Automated Reasoning Group](https://aws.amazon.com/security/provable-security/) · Seattle*

LLMs can’t be trusted without proofs. I work on what formal verification can — and cannot — do about that: neurosymbolic guardrails that check LLM outputs against formal logic (deployed in Amazon Bedrock), hallucination detection that needs no ground truth, and automated red teaming. Before that: automatic correctness proofs for hardware and distributed protocols, including the first automatic proof of Lamport’s Paxos.

## The idea, running

illustration

policy

Refunds up to $500, within 24 hours of booking.

claim

“You’ll get the full $620 back.”

check

refund ≤ 500 ∧ hours ≤ 24 ⊢ refund = 620 ?

✗ refuted — counterexample: refund = 620 > 500

## News & highlights

- **Jul 2026** — “A Neurosymbolic Approach to Natural Language Formalization and Verification” (arXiv 2511.09008), to appear at [CAV 2026](https://conferences.i-cav.org/2026/accepted/) (Lisbon, Jul 26–29) — the approach ships in Amazon Bedrock Guardrails as Automated Reasoning checks.
- **May 2026** — Panelist, ACL mentorship session “What AI tools and skills to prioritize for meaningful learning and career growth” ([recording](https://www.youtube.com/watch?v=ATw0LkMkqm4)).
- **Nov 2025** — “Zero-Knowledge LLM Hallucination Detection and Mitigation through Fine-Grained Cross-Model Consistency” (arXiv 2508.14314), [EMNLP 2025](https://2025.emnlp.org/) Industry Track (Suzhou, Nov 4–9).
- **Oct 2025** — AVR won a silver medal (word-level arrays) at [HWMCC 2025](https://hwmcc.github.io/2025/), announced at FMCAD 2025 (Menlo Park).
- **Aug 2025** — Automated Reasoning checks became [generally available](https://aws.amazon.com/about-aws/whats-new/2025/08/automated-reasoning-checks-amazon-bedrock-guardrails/) in Amazon Bedrock Guardrails.
- **Jul 2025** — “QSM-Cutoff: Systematic Derivation of Quantified Cutoff Formulas for Distributed Protocols” (Luo, Goel, Sakallah), [CAV 2025](https://doi.org/10.1007/978-3-031-98682-6_14); also served on the CAV 2025 program committee.
- **Apr 2025** — “TurboFuzzLLM” (arXiv 2502.18504), oral at [NAACL 2025](https://2025.naacl.org/) (Albuquerque, Apr 29–May 4); open-sourced.
- **Dec 2024** — Automated Reasoning checks — a research contribution from the AWS Automated Reasoning Group — [announced in preview](https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-bedrock-guardrails-automated-reasoning-checks-preview/) in Amazon Bedrock Guardrails at re:Invent.
- **Oct 2024** — AVR won gold (word-level bit-vectors + arrays) and silver (word-level bit-vectors) at [HWMCC 2024](https://hwmcc.github.io/2024/) — announced at FMCAD 2024 (Prague, Oct 14–18).
- **Oct 2021** — Completed the PhD at Michigan (advisor [Karem Sakallah](https://web.eecs.umich.edu/~karem/)). “Towards an Automatic Proof of Lamport’s Paxos” ([FMCAD 2021](https://fmcad.org/FMCAD21/), Oct 19–22, held online) — the first fully automatic proof of Lamport’s Paxos — reached the [Hacker News front page](https://news.ycombinator.com/item?id=29018988) (159 points) and was covered by [Michigan Engineering](https://cse.engin.umich.edu/stories/famous-paxos-distributed-protocol-automatically-determined-safe-and-secure). Joined the AWS Automated Reasoning Group the following month.

[full timeline, 2013–2026 →](https://amangoel.ai/research.html#timeline)

## Selected work — Neurosymbolic AI safety

Formal methods applied to LLM outputs: checking whether an answer is correct, detecting hallucinations, and adversarially stress-testing the models.

- **A Neurosymbolic Approach to Natural Language Formalization and Verification**
  Chenyang An, Sam Bayless, Stefano Buliani, and 27 others (alphabetical, incl. Aman Goel)
  CAV · 2026 · shipped in Amazon Bedrock Guardrails
  An LLM translates natural-language policies into formal logic; an SMT solver checks whether an answer satisfies them — catching hallucinations pure-LLM checks miss.
  Result: 99.2% soundness (2.5% false-positive rate)
  Links: [arXiv](https://arxiv.org/abs/2511.09008) · [Amazon Science](https://www.amazon.science/publications/a-neurosymbolic-approach-to-natural-language-formalization-and-verification) · [AWS](https://aws.amazon.com/about-aws/whats-new/2025/08/automated-reasoning-checks-amazon-bedrock-guardrails/)

- **Zero-Knowledge LLM Hallucination Detection and Mitigation through Fine-Grained Cross-Model Consistency**
  Aman Goel, Daniel Schwartz, Yanjun Qi
  EMNLP · 2025 · Industry
  Detects and mitigates hallucinations by measuring fine-grained consistency across models — no reference data, knowledge base, or ground truth required.
  Result: +39% F1 over baselines · +9pp GPQA-diamond · 5 benchmarks · 8 models
  Links: [arXiv](https://arxiv.org/abs/2508.14314)

- **TurboFuzzLLM: Mutation-Based Fuzzing for Jailbreaking LLMs in Practice**
  Aman Goel, Xian Carrie Wu, Zhe Wang, Dmitriy Bespalov, Yanjun Qi
  NAACL · 2025 · oral · open-sourced
  An automated red team that finds jailbreaks via mutation-based fuzzing with RL-guided selection, used to surface vulnerabilities before deployment.
  Result: ≥95% attack success on GPT-4o / GPT-4 Turbo · 3× fewer queries
  Links: [arXiv](https://arxiv.org/abs/2502.18504) · [code](https://github.com/amazon-science/TurboFuzzLLM)

## Selected work — Automated verification of systems & protocols

Automatic correctness proofs for distributed protocols and hardware — detecting bugs or proving their absence without manually supplied invariants.

- **Towards an Automatic Proof of Lamport’s Paxos**
  Aman Goel, Karem Sakallah
  FMCAD · 2021 · IC3PO
  Lamport’s Paxos is a notoriously intricate consensus protocol; existing correctness proofs were hand-written, and earlier automation had reached only simpler protocols and Paxos variants. IC3PO produced the first fully automatic proof of Lamport’s Paxos, via a symmetry-aware algorithm for infinite-state verification.
  Result: enabled Sift (ATC’22), Bakery proof (FORTE’23)
  Links: [PDF](https://doi.org/10.34727/2021/isbn.978-3-85448-046-4_20) · [code](https://github.com/aman-goel/ic3po) · [talk](https://youtu.be/nPwlj6w6EXU)

- **AVR: Abstractly Verifying Reachability**
  Aman Goel, Karem Sakallah
  TACAS · 2020 · 1st place HWMCC 2020 (7 gold) · medals at HWMCC 2024 & 2025
  A word-level hardware model checker using abstraction-refinement and SMT; evaluated on 1000+ industrial designs and placed first at HWMCC 2020.
  Links: [PDF](https://link.springer.com/chapter/10.1007/978-3-030-45190-5_23) · [code](https://github.com/aman-goel/avr) · [HWMCC](https://fmv.jku.at/hwmcc20/)

- **Sift: Using Refinement-Guided Automation to Verify Complex Distributed Systems**
  Haojun Ma, Hammad Ahmad, Aman Goel, Eli Goldweber, Jean-Baptiste Jeannin, Manos Kapritsos, Baris Kasikci
  USENIX ATC · 2022
  Verified complex distributed-system implementations by combining refinement with IC3PO’s automatic invariant inference — evidence the automation transfers beyond its home lab.
  Links: [PDF](https://www.usenix.org/conference/atc22/presentation/ma)

+ 11 more — I4 (SOSP’19), reTLA, Bakery proof (FORTE’23), DATE, ICCAD … [all publications, talks & service →](https://amangoel.ai/research.html#publications)

## Software

[IC3PO](https://github.com/aman-goel/ic3po) — automatic verifier for distributed protocols; produced the first automatic proof of Lamport’s Paxos.
[AVR](https://github.com/aman-goel/avr) — word-level hardware model checker; 1st at HWMCC 2020, medals at HWMCC 2024 & 2025.
[TurboFuzzLLM](https://github.com/amazon-science/TurboFuzzLLM) — open-source LLM red-teaming fuzzer; ≥95% attack success on GPT-4o and GPT-4 Turbo.

## Writing

Coming soon.

## Honors & service

First fully automatic proof of Lamport’s Paxos · 1st place HWMCC 2020 (7 gold) · medals at HWMCC 2024 & 2025 · Rackham Predoctoral Fellow · Best Student Research Award (Michigan CSE) · IIT Madras Silver Medalist · National Award for the Empowerment of Persons with Disabilities (Govt. of India, 2013).

Program committee — CAV 2025; FMCAD 2022 (student forum). Reviewer — TOCL, TCAD. Artifact evaluation — SOSP, CAV, OSDI, MICRO, VMCAI.

I’ve spent ten years on one question: how do you get a machine to prove a system correct? First hardware (AVR), then distributed protocols (IC3PO and the Paxos proof), now LLM outputs (the guardrails behind Amazon Bedrock’s Automated Reasoning checks). PhD from the [University of Michigan](https://cse.engin.umich.edu/) with [Karem Sakallah](https://web.eecs.umich.edu/~karem/); before AWS, SMT solving at SRI (Yices 2) and formal verification at Cadence (JasperGold). Based in Seattle. Email me about neurosymbolic verification, hallucination detection, red teaming, or speaking — [aman@amangoel.ai](mailto:aman@amangoel.ai).
