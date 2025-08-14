---
layout: single
title: "Core Capabilities"
permalink: /research/capabilities/
---

> In oversight work, the distance between "what happened" and "what gets measured" often determines whether accountability is possible at all. This framework treats that gap as an engineering problem: how do we preserve the full context of human experience while creating data rigorous enough to reveal institutional patterns? The answer isn't to choose between stories and statistics, but to build a bridge between them—one that's transparent, reproducible, and designed to resist the very biases it aims to detect.

---

### 1. What This System Is
A quasi-automated incident analysis framework that applies a semantic lens to source material—such as news coverage, administrative statements, and policy documents—in order to extract incident attributes so that events can be compared. This is accomplished by systematically mapping portions of the text to predefined values in a codebook—a kind of rubric that tells the AI how to make judgments on specific aspects of an incident, based on which categorical values best fit the source evidence. The codebook and relevant protocols ensure source processing is targeted, focusing only on elements relevant to institutional behavior and context, and the system is rule-bound, ensuring that judgments are made consistently and objectively.


---

### 2. Coding, Defined

At the core of the framework is the codebook — the structured logic that drives the entire system and represents the project's key intellectual property.

**What is "coding" in this context?**  
In social science research, "coding" means systematically categorizing qualitative information to identify patterns, themes, and relationships. It's not about programming in the computer science sense — it's about understanding complex human events.

**How the system works:**

- Variables: 20+ aspects of each incident (e.g., administrative response, severity, tone)
- Values: Each variable has specific classification options:

  - Binary (yes/no)
  - Categorical (e.g., target group)
  - Ordinal (low/moderate/high)
  - Quantitative (number of days)
  - Structured qualitative (interpreted but systematic)

**What makes this approach unique:**  
Evidentiary requirements organically pair data and context, e.g. "`administrative_response = Yes`" involves finding and citing exact quotes. Every solution is then stored in YAML with:

  - `value` (coded outcome)
  - `justification` (reasoning)
  - `sources` (document IDs)

**Why this approach matters:**  
Manual coding tools like NVivo or Atlas.ti are rigorous but slow; automated detectors like GDELT are fast but often context-blind. This system keeps the rigor *and* adds scale—every claim is still traceable to the exact words that support it, and it can handle dozens of incidents efficiently. 






---

### 3. The AI System
Most AI tools summarize, score sentiment, or flag topics without showing their work.  
This framework uses an LLM differently:

- Acts as a **protocol-bound auditor**, not a free-form summarizer  
- Follows codebook logic and evidence thresholds exactly  
- Cannot make claims without verifiable quotes  
- Outputs structured YAML, not prose

Very few current workflows enforce this kind of per-variable justification inside an automated pipeline.

---

### 4. Evidence Standards & Auditability
- **Quote-level evidence:** every coded value links to specific, in-boundary text  
- **Structured reasoning:** justifications embedded alongside citations  
- **Reproducibility:** same inputs produce the same outputs, all version-controlled  
- **Audit-ready:** any third party can retrace the logic from source to code

---

### 5. Human-in-the-Loop Oversight
Automation accelerates the mechanical work, but human judgment remains critical for:

- Setting the incident inclusion rules  
- Resolving ambiguous or edge cases  
- Checking for consistency drift  
- Investigating gaps via FOIA, interviews, and supplemental searches  

This ensures the system remains accountable and context-aware.

---

### 6. Technical Implementation
- **Pipeline:**  
  1. Input curated sources (DB articles, admin comms, policies)  
  2. Claude API applies codebook rules and extracts quotes  
  3. Outputs YAML with `value` + `justification` + `sources`  
  4. Automated and human validation  

- **Scale:** ~50+ incidents coded with 20+ variables each in ~10 minutes/incident (once sources are prepped)  
- **Interoperability:** YAML is human-readable and machine-parsable for analysis, visualization, or external audit

---

### How This Compares to Current Approaches
*Most systems force a trade-off between rigor, speed, and auditability — this framework delivers all three.*

| Feature / Goal | **Manual Coding** (e.g., NVivo, Atlas.ti) | **Automated Detection** (e.g., GDELT, ACLED) | **This Framework** |
|----------------|------------------------------------------|----------------------------------------------|--------------------|
| **Evidence Link** | Quotes cited manually, not always consistent | Usually none – relies on keyword or topic flags | **Every value tied to in-scope quotes** |
| **Rigor** | High, but slow and expensive | Low to moderate – shallow context | **High – enforces strict codebook rules** |
| **Scale** | ~10 incidents/month per researcher | Thousands/day | **50+ incidents in hours, with audit trail** |
| **Consistency** | Varies by coder | Consistent, but brittle to context changes | **Consistent + context-aware** |
| **Auditability** | Manual review of notes | Not audit-ready | **Fully audit-ready YAML outputs** |
| **Human Oversight** | Full | Minimal or none | **Targeted – humans handle edge cases** |
| **Use of AI** | None or basic text search | Pattern detection, sentiment scoring | **Protocol-bound LLM as evidence auditor** |
| **Reproducibility** | Moderate – depends on documentation | Low – often proprietary | **High – same inputs produce same outputs** |
| **Typical Output** | Narrative themes, coded spreadsheets | Event counts, maps | **Structured, machine-readable YAML + justifications** |
