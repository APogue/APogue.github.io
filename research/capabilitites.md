---
layout: single
title: "Core Capabilities"
permalink: /research/capabilities/
---

> This section breaks down exactly what the system does, how it works, and why it’s different from existing methods.  
> If the “Explore the Framework” page is the overview, this is the engineering spec — designed to show both technical depth and practical novelty.

---

### 1. What This System Is
A quasi-automated incident coding and analysis framework that applies a targeted semantic lens to raw source material—such as news coverage, administrative statements, and policy documents—in order to extract incident attributes so that events can be comparable. This is accomplished by systematically mapping portions of the text to predefined values in a codebook—a kind of rubric that tells the AI how to make judgments on specific aspects of an incident, based on which categorical values best fit the source evidence. The codebook and relevant protocols ensure source processing is targeted, focusing only on elements relevant to institutional behavior and relevant context, and the system is rule-bound, ensuring that judgments are made consistently and objectively.


---

### 2. Coding, Defined
In social science, *coding* means systematically categorizing qualitative evidence to identify patterns.  
Here, that means:

- 20+ predefined variables from a formal codebook  
- Each variable assigned only when supported by **direct, in-scope quotes**  
- Every decision stored in **YAML** with:
  - `value` (coded outcome)
  - `justification` (reasoning)
  - `sources` (document IDs)

**Why this is different:**  
Manual coding tools like NVivo or Atlas.ti are rigorous but slow; automated detectors like GDELT are fast but often context-blind.  
This system keeps the rigor *and* adds scale—every claim is still traceable to the exact words that support it.

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
