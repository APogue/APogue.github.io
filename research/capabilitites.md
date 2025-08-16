---
layout: single
title: "Core Capabilities"
permalink: /research/capabilities/
---

> In oversight work, the distance between "what happened" and "what gets measured" often determines whether accountability is possible at all. This framework treats that gap as an engineering problem: how do we preserve the full context of human experience while creating data rigorous enough to reveal institutional patterns? The answer isn't to choose between stories and statistics, but to build a bridge between them—one that's transparent, reproducible, and neutral.

---

### 1. What This System Is

A quasi-automated incident analysis framework that reviews source material — such as news coverage, administrative statements, and policy documents — to extract and classify key details so that incidents can be compared. 

It works by mapping portions of text to predefined values in a codebook, a kind of rubric that defines how each aspect of an incident should be classified based on the evidence. 

The codebook and its protocols ensure source processing is targeted, focusing only on elements relevant to institutional behavior and context, and the system is rule-bound, ensuring judgments are objective and consistent.

<!-- 
A quasi-automated incident analysis framework that applies a semantic lens to source material—such as news coverage, administrative statements, and policy documents—in order to extract incident attributes so that events can be compared. This is accomplished by systematically mapping portions of the text to predefined values in a codebook—a kind of rubric that tells the AI how to make judgments on specific aspects of an incident, based on which categorical values best fit the source evidence. The codebook and relevant protocols ensure source processing is targeted, focusing only on elements relevant to institutional behavior and context, and the system is rule-bound, ensuring that judgments are made consistently and objectively.
-->

---

### 2. Coding, Defined

At the core of the framework is the **codebook** — the structured logic that drives the entire system and represents the project's key intellectual property.

**What is "coding" in this context?**  
In social science research, **"coding"** means systematically categorizing qualitative information to identify patterns, themes, and relationships. It's not about programming in the computer science sense — it's about understanding complex human events.

**How the system works:**

- **Variables**: 20+ aspects of each incident (e.g., administrative response, severity, tone)
- **Values**: Each variable has specific classification options:

  - Binary (yes/no)
  - Categorical (e.g., target group)
  - Ordinal (low/moderate/high)
  - Quantitative (number of days)
  - Structured qualitative (interpreted but systematic)

**What makes this approach unique:**  
Evidentiary requirements organically pair data and context, e.g. "`administrative_response = Yes`" involves finding and citing exact quotes. Every solution is then stored in YAML with:

  - `value` (coded outcome)
  - `justification` (quotes and final reasoning)
  - `sources` (document IDs)

**Why this approach matters:**  
Manual coding tools like NVivo or Atlas.ti are rigorous but slow; automated detectors like GDELT are fast but often context-blind. This system keeps the rigor *and* adds scale—every claim is traceable to the exact words that support it, and it can handle dozens of incidents efficiently. 

---
   
## 3. The AI System is Analytical, Not Creative

This system uses the AI model to apply a predefined set of decision rules — a process a human could follow step-by-step — within a controlled, auditable pipeline.

**How this differs from typical AI use:**  
AI is often used for open-ended tasks — summarizing, generating content, or flagging patterns without showing their work.  

This framework instead uses the model as an **analytical decision engine** that:  

- Executes production rules derived from the codebook (IF-THEN logic)  
- Can only output what it can prove with direct, relevant quotes  
- Applies deterministic, procedural logic — the same inputs always yield the same outputs
- Documents its reasoning chain inside structured tags for auditability  
- Operates as part of a decision support system, not a creative assistant

> *Example:* If coding for “police involvement,” the model must confirm police presence in the sources, determine the role played (e.g., monitoring, enforcement), and classify accordingly — all based solely on direct, relevant quotes.  

**Built-in verification:**  
The system enforces a three-layer audit trail common to expert systems:  

- **Quote-level** — Every value is tied to exact text from source material  
- **Reasoning-level** — Thinking steps preserved in structured, machine-readable tags  
- **Output-level** — Validated YAML that can be parsed, checked, and re-run for reproducibility  

**Why this approach matters:**  
Unlike black-box AI or conventional human coding, every classification is **transparent, reproducible, and falsifiable**. Any third party can follow the chain from *source document → quoted evidence → decision rule → output*. For researchers, journalists, or oversight bodies reviewing this work: You can verify every coding decision by checking the quoted evidence against the stated rule. This transforms qualitative coding into a form of **algorithmic decision-making** that retains full context while enforcing strict evidence standards at scale.

---


### 4. Human-in-the-Loop Oversight

While the AI handles systematic evidence processing, human expertise drives the framework's critical decisions and quality controls.

#### System Design & Architecture

I developed the framework’s core components — from codebook and protocol design to Claude API configuration and workflow optimization — integrating engineering methods with social science research standards to ensure both technical precision and methodological rigor.

#### Active Oversight Functions

- **Incident Inclusion:** Reviewing candidate incidents from the broader scrape to ensure they meet the defined inclusion rule  
- **Evidence Scope Validation:** Spot-checking that collected source evidence falls within the incident scope as generated by the system
- **Edge Case Resolution:** When evidence conflicts or classification is ambiguous, human judgment decides whether to flag, investigate further, or exclude  
- **Gap Investigation:** When the documentary record is incomplete, targeted outreach is initiated through FOIA requests, interview protocols, and supplementary searches  

#### Quality Control Framework

In proof-of-concept testing, the model consistently produced accurate, quote-bound outputs without hallucinations or logically inconsistent classifications. These validation layers are maintained as a safeguard — confirming system reliability and ensuring accountability as the dataset scales.

- **Consistency Testing:** Running incidents through multiple coding passes to ensure stable outputs  
- **Pattern Validation:** Statistical checks flag logically inconsistent outputs for human review  
- **Source Verification:** Spot-checking quote accuracy and attribution to confirm correct sourcing  
- **Temporal Stability:** Monitoring for drift in how edge cases are resolved over time  

This hybrid approach ensures automation never compromises human judgment. The system flags what needs review rather than forcing classifications, maintaining both efficiency and accountability.



