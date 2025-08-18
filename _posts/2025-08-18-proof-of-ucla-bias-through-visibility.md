---
layout: single
title: "Proof of Institutional Bias Through Visibility Patterns"
author: Alexie Pogue
date: 2025-8-18 3:31 PM 
---

## Natural Language Version

**Given (Assumption):** Visibility correlates with identity group

**Theorem:** If institutional responses are driven by visibility rather than incident attributes, the institution exhibits bias.

### Proof Structure:

**1. Action-Based Bias Test**
* If visibility → institutional action
* And visibility → identity group
* Then: institutional action → identity group (transitivity)
* **Therefore:** The institution is biased in its actions

**2. Communication Paradox Test**
* If visibility → institutional communication
* And visibility → identity group
* But the institution claims to have taken "action" regardless of visibility
* Then: The institution treats communication as non-actionable (mere words)
* **Therefore:** The institution's selective communication reveals it doesn't believe words protect students

**3. High-Stakes Contradiction**
* If the institution uses strategic communication in high-visibility scenarios (to manage outcomes)
* Then: The institution *does* believe words are actionable when stakes are high
* But if high-visibility scenarios → specific identity group
* And the institution only deploys "actionable words" for that group
* **Therefore:** The institution is biased in deploying protective communication

**Conclusion:** The institution exhibits bias through both:
* Selective action (driven by visibility, not severity)
* Selective protection through communication (reserved for visible/certain groups)

This reveals that institutional bias operates through the *mechanism* of visibility—using media attention as a filter for which students receive institutional protection.

---

## Proof of Institutional Bias Through Visibility Patterns (Mathematical Notation)

**Given:** V ↔ G (Visibility correlates with identity Group)

**To Prove:** Institution exhibits bias

### Proof:

#### Lemma 1: Action-Based Bias

1. V → A         (Visibility implies institutional Action)
2. V ↔ G         (Given: Visibility correlates with Group)
3. ∴ G → A       (By transitivity)

**Result:** Institutional action depends on group identity = bias

#### Lemma 2: Communication Reveals Non-Actionability

1. V → C         (Visibility implies institutional Communication)
2. V ↔ G         (Given)
3. ∃ incidents where A claimed but ¬C    (Action claimed without Communication)
4. If C only when V, then C ≠ protective action
5. ∴ Institution treats C as non-actionable

**Result:** Selective communication shows words aren't meant to protect

#### Lemma 3: High-Stakes Contradiction

1. High-stakes ∧ V → Strategic C    (High visibility + stakes → strategic Communication)
2. Strategic C → Actionable         (Strategic communication implies belief in word efficacy)
3. V ↔ G                            (Given)
4. ∴ Actionable C → G               (Actionable communication deployed for specific Group)

**Result:** Institution deploys protective communication selectively by group

### Conclusion:
**By Lemmas 1, 2, and 3:** Institution exhibits bias through both selective action and selective protective communication, mediated by visibility patterns that correlate with group identity.

□

**Note:** The transitivity step in Lemma 1 technically requires V to be strongly correlated with both A and G, not just correlated. For formal correctness, we specify the strength/direction of correlations.

## Mathematical Notation Version (Formally Correct)

**Definitions:**
- Let V = visibility level (continuous or ordinal)
- Let G = identity group (binary: protected group of interest vs. others)
- Let A = institutional action taken (binary)
- Let C = institutional communication issued (binary)

**Given:** 
- P(G=1|V=high) > P(G=1|V=low) (High visibility incidents more likely to involve Group 1)
- P(V=high|G=1) > P(V=high|G=0) (Group 1 incidents more likely to be highly visible)

**To Prove:** Institution exhibits bias

### Proof:

#### Lemma 1: Action-Based Bias
```
1. P(A=1|V=high) >> P(A=1|V=low)     (Strong positive correlation: V → A)
2. P(G=1|V=high) > P(G=1|V=low)      (Given: positive correlation V ↔ G)
3. ∴ P(A=1|G=1) > P(A=1|G=0)         (By probabilistic transitivity)
```
**Result:** Institutional action depends on group identity = bias

#### Lemma 2: Communication Reveals Non-Actionability
```
1. P(C=1|V=high) ≈ 1, P(C=1|V=low) ≈ 0    (C strongly determined by V)
2. P(G=1|V=high) > P(G=1|V=low)            (Given)
3. ∃ incidents where A=1 ∧ C=0             (Action claimed without Communication)
4. If P(C=1|A=1,V=low) ≈ 0, then C ≠ necessary for protective action
5. ∴ Institution treats C as non-actionable (reputational, not protective)
```
**Result:** Selective communication shows words aren't meant to protect

#### Lemma 3: High-Stakes Contradiction
```
1. P(Strategic C|High-stakes ∧ V=high) ≈ 1     (High visibility + stakes → strategic Communication)
2. Strategic C → Belief in C's causal efficacy  (Strategic use implies actionability)
3. P(V=high|G=1) > P(V=high|G=0)               (Given: correlation direction)
4. ∴ P(Strategic C|G=1) > P(Strategic C|G=0)   (Strategic communication deployed differentially)
```
**Result:** Institution deploys protective communication selectively by group

### Conclusion:
**By Lemmas 1, 2, and 3:** Institution exhibits bias through both selective action and selective protective communication, mediated by visibility patterns that correlate with group identity.

□

---

## Note on Correlation Strength and Formal Correctness

**Correlation Strength Requirements:**
- Weak correlation (r < 0.3): Patterns may exist but aren't systematic bias
- Moderate correlation (0.3 < r < 0.7): Suggestive of bias, warrants investigation
- Strong correlation (r > 0.7): Strong evidence of systematic bias
- The proof requires at least moderate correlations for transitivity to hold meaningfully

**For Formal Mathematical Correctness:**
- The transitivity in Lemma 1 requires V to be strongly correlated with both A and G
- We specify probabilistic relationships rather than deterministic implications
- P(A=1|G=1) > P(A=1|G=0) follows from the chain of conditional probabilities
- The strength of the final correlation depends on the strength of both component correlations