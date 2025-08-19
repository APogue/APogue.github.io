---
layout: single
title: "Proof of Institutional Bias Through Visibility Patterns"
author: Alexie Pogue
date: 2025-08-18 9:43
---


## Variables

- **G ∈ {0,1}** — identity group  
  (1 = advantaged group, 0 = comparison group)

- **V ∈ {low, high}** — visibility

- **A ∈ {0,1}** — institutional action (material steps)

- **C ∈ {0,1}** — institutional communication (any outward comms)

- **P ∈ {0,1}** — protective content within communication  
  (naming targeted group, specific warnings, concrete protective guidance)

- **S** — severity (ordinal; used as a control)

- **R_cost** — reputational cost of specific communication

---

## Assumptions

1. **Monotonicity:** higher visibility (V) weakly increases probability of A and C.  
2. **No reverse causation:** V is defined independently of A and C.  
3. **Reputational cost = 0** in Lemma 3 is established for the specific incident.  
4. **Reputation is visibility-linked:** institutions typically experience reputational pressure when V is high.

---

## Core Chain

- **V → C, A**: higher visibility produces more comms/actions (observed).  
- **V → R_cost**: visibility raises reputational stakes (assumed).  
- **V → G**: visibility is not evenly distributed; it clusters on one group (empirical).  
- **S → V**: severity can raise visibility, but this link is inconsistent and group-dependent.  

**Implication:** If V is the driver, you cannot separate whether the institution is acting for **reputation** (PR logic) or for **group** (bias).  

---

## Lemma 1: Action-Based Bias

**Given:**  

- Pr(A=1 | V=high) ≫ Pr(A=1 | V=low)  
- Pr(V=high | G=1) > Pr(V=high | G=0)

**Then (via the law of total probability through V):**  

- Pr(A=1 | G=1) > Pr(A=1 | G=0)

**Result:** Bias in institutional **action**.

---

## Lemma 2: Communication Tracks Visibility

**Given:**  

- Pr(C=1 | V=high) ≈ 1, Pr(C=1 | V=low) ≈ 0  
- Pr(V=high | G=1) > Pr(V=high | G=0)

**Then:**  

- Pr(C=1 | G=1) > Pr(C=1 | G=0)

**Interpretation note:**  
This only shows that **communication frequency** tracks visibility.  
Since R_cost rises with V, comms *look like* they are serving reputation.  
But in high-visibility scenarios, we cannot distinguish whether comms are driven by **reputation** or by **group identity**.  

---

## Lemma 3: The Chain-Breaking Outlier

In the maximum-visibility, maximum-severity case, where reputational cost = 0, the reputation channel predicts protective content (P=1).  

**Setup (maximum case):**  
- V = maximum (highest-visibility incident)  
- S = maximum (most severe: mob attack)  
- R_cost = 0 (condemning mob violence was reputationally safe)

**Observed:**  
- C = 1 (they communicated)  
- P = 0 (no protective content)

**Logic:**  
- If the reputation channel were operative, R_cost=0 with V=max should yield P=1
  - **Reputation channel (PR logic):** V → R_cost → P 
- Observed P=0 eliminates the reputation channel.  
- The only remaining determinant is group identity (G).  
  -  **Group channel (bias):** V → G → P
- Given X = {V = max, S = max, R_cost = 0},  
  equivalently, with X held constant:

G ⟶ P   (bias).

---

### Corollary (Practical Test)

Let X = {V = max, S = max, R_cost = 0}.  
Define  
Δ = Pr(P=1 | G=1, X) − Pr(P=1 | G=0, X).  

If Δ > 0 with narrow confidence intervals, then protective communication is **group-dependent, not reputation-dependent**.  
This isolates discrimination in protective content.

---

## Finding: Severity Channel Collapses

In principle, institutional protection could be driven by severity (S).  
If so, high-severity cases should consistently trigger protective communication.  

**Observed pattern:**  
- For G=0 (comparison group), even **high-severity cases** often had low visibility and received little or no protective communication.  
- For G=1 (advantaged group), even **low-severity cases** received protective communication when visibility was present.  

**Formally:**  
E[P | S=high, G=0] < E[P | S=low, G=1]  

**Implication:**  
Severity alone does not explain outcomes. Once V and S are controlled, protection is selectively extended by **G**.  

---

## Conclusion

- **Action channel:** A favors G=1 via visibility (Lemma 1).  
- **Communication frequency:** C tracks visibility (Lemma 2).  
- **Protective content:** Even when V=max, S=max, and R_cost=0, P=0 for G=0 (Lemma 3).  
- **Severity channel collapses:** High-S incidents for G=0 still fail to generate protective communication.  

➡️ **This cleanly eliminates the “just visibility” defense. Group identity, not visibility or severity, determines whether protective communication is provided.**
