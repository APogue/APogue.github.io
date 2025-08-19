---
layout: single
title: "Institutional Behavior Proofs"
author: Alexie Pogue
date: 2025-08-18 9:43
---


## Variables

- **G ∈ {0,1}** — identity group  
  (1 = advantaged group, 0 = comparison group)

- **V ∈ {low, high, max}** — visibility

- **A ∈ {0,1}** — specific, actor‑targeted action (imposes concrete sanctions, identifies perpetrator group, or names targeted group)

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

- **V → C**: higher visibility produces more comms (observed).  
- **V → R_cost**: visibility raises reputational stakes (assumed).  
- **V → G**: visibility is not evenly distributed; it clusters on one group (empirical).
- **S → A**: in principle, higher severity should drive more specific action — but this channel collapses (Lemma 1)   
- **S → V**: severity can raise visibility, but this link is inconsistent and group-dependent.  

**Implication:** If V is the driver, you cannot separate whether the institution is communicating for **reputation** (PR logic) or for **group** (non-neutral).  

---

## Lemma 1: Severity vs. Specific Action (Part I: Specific Action Analysis (Unconditional))

**Question:**  
What action is taken to address bad actors? If no specific action is taken, specific communication may serve as action. This study determines what action was taken, regardless of incident visibility. 

**Hypothesis:**  
- **Within groups:** ∂Pr(A_specific)/∂S ≈ 0 for both groups — increased severity does not drive meaningful increases in specific action.  

- **Between groups:** 
  - Pr(A_specific | G=1) > Pr(A_specific | G=0) across severity levels.

**Observed Pattern:**  
- **G=1 (advantaged group):** Some reactive measures, some symbolic specificity (e.g., initiating review, naming antisemitism, emotional framing).
- **G=0 (comparison group):** No specificity at all — environmental measures, responses limited to generic safety concerns and procedural language (e.g., "we are reviewing safety protocols," "the situation is being monitored").

**Critical Finding:**  
The institution largely failed to sanction bad actors for either group, even as severity persisted. **Only G=1** received symbolic recognition of targeted harm.

**Implication:**  
This shows two layers of failure:  
1. The institution's systematic failure to identify and sanction bad actors allowed a hostile environment to persist for both groups.  
2. In the absence of specific action, a discriminatory refusal to acknowledge protected-class harm for G=0 existed.

---

## Lemma 2: Communication Tracks Visibility (Part II: Communication Analysis)

Given that meaningful action conditioned on severity fails systematically, we now examine communication patterns conditional on visibility.

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

In the maximum-visibility, maximum-severity case, where reputational cost = 0, the reputation channel predicts protective content (P=1 if any criterion is met in the same communication instance (naming, specific warning, or concrete guidance)).  

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

G ⟶ P   (non-neutral).

---

### Corollary (Practical Test)

Let X = {V = max, S = max, R_cost = 0}.  
Define  
Δ = Pr(P=1 | G=1, X) − Pr(P=1 | G=0, X).  

If Δ > 0 with narrow confidence intervals, then protective communication is **group-dependent, not reputation-dependent**. This isolates non-neutral communication in protective content.

---

## Lemma 4: High-Stakes Comms and Mitigation Duty

**The argument:**
1. Past incidents showed hostile actors were reactive to comms (established knowledge)
2. University did not remove/mitigate these actors (M=0)
3. University issued high-stakes comms anyway
4. Therefore: They knowingly accepted the risk of *triggering hostile actors*

**This IS deliberate indifference because:**
- They had actual knowledge of the risk (from past reactivity)
- They chose to act despite that knowledge
- They had alternatives (mitigate first, or don't communicate)

## Legal Parallel

This is like:
- A school knows certain students react violently to announcements about rival gangs
- School doesn't remove those students
- School makes inflammatory announcement anyway
- = Deliberate indifference (they knew and chose to risk it)

I don't need to prove violence actually occurred after the announcement - just that they **knew it could** based on past behavior.

**Variables:**  
- **C*** — comms traction (reach/visibility of admin comms, in response to national news, viral rumors, made during a high-stakes situation unfolding in real time)  
- **T_known ∈ {0,1}** — presence of hostile actors (premeditated behavior, coordinated action, motivated by threats to a protected group, repeat presence on campus, and demonstrably reactive to university communications (directly or indirectly))  
- **M ∈ {0,1}** — any institutional mitigation of those threats (ban, sanction, removal, initiation of police investigations, unlawful conduct warning, or deterrence of unlawful behavior through stated preparedness)

**Hypothesis:**  
Once T_known=1, institutions are obligated to mitigate (M=1) within a reasonable window.  
If they fail to mitigate (M=0) but continue to communicate (C*>0), *this constitutes deliberate indifference: the university uses comms while leaving a known threat intact.*

**Observed:**  
- **T_known = 1** (Kaplan incident revealed organized, repeat hostile actors motivated by group-based animus)  
- **M = 0** (no bans, no sanctions, no removals, no deterrent warnings between Kaplan and April 30)  
- **C*** = high (April 30 post with 160k views, national-level traction)

**Critical Finding:**  
By April 30, the university had months of notice that hostile actors were present and reactive to communications, yet no mitigation occurred. High-traction comms were then issued into that same environment, with known threats unaddressed. This is deliberate indifference: a choice to speak while failing to eliminate a foreseeable risk.

**Implication:**  
Mitigation must occur once threats are known. The absence of mitigation, combined with continued high-stakes comms, demonstrates deliberate indifference and permits hostile actors to remain empowered.

---

## Conclusion

- **Action channel:** A favors G=1 regardless of visibility (Lemma 1).  
- **Communication frequency:** C tracks visibility (Lemma 2).  
- **Protective content:** Even when V=max, S=max, and R_cost=0, P=0 for G=0 (Lemma 3).  

➡️ **This cleanly eliminates the “just visibility” defense. Group identity, not visibility or severity, determines whether protective communication is provided.**
