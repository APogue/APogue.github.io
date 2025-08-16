---
layout: single
title: "The Pipeline"
permalink: /research/entry/
---

This page - How it works

[ Source Documents ]
    ↓
(Incident scope boundaries)
    ↓
[ AI System (Claude) ]
    ├─ Applies codebook rules
    ├─ Checks evidence thresholds
    ├─ Extracts direct quotes
    ↓
[ YAML Justification Block ]
    ├─ Variable: actor_student = true
    ├─ Justification: "DB-001: 'The student…'"
    ├─ Source IDs: [DB-001]
    ↓
[ Auditable Output ]
    → Human-verifiable
    → Structured + reproducible
    → No inference beyond evidence

## System Architecture

The framework follows a structured pipeline:

The framework is built on a repeatable sequence — from neutral incident discovery through structured source collection and rule-based coding, to pattern analysis and validation.

Each stage preserves a clear chain from source to conclusion, making findings reproducible and open to review.

Each step maintains:
- Clear audit trails
- Source-to-output traceability
- Reproducible methods
- Transparent decision logic

Annotate it with:

“Constrained, not generative”

“Protocol-bound decision logic”

“Evidence-first processing”

“Supports transparency + policy review”


The pipeline (at a glance)

Incident → Source Trace → Claude API → Structured YAML → Analysis

Incident: Defined via a neutral inclusion rule (Daily Bruin used for event discovery).

Source Trace: Link each data point to specific sources (admin statements, policy docs, media, org posts).

Claude API: Applies the codebook + protocols to produce justified variable assignments.

Structured YAML: One evidence file per incident with values + citations.

Analysis: Compare patterns (e.g., response disparities holding severity/visibility constant).

Core components

1) Inclusion & discovery

Neutral incident rule (scope, dates, campus affiliation)

Keyword search → human screening (multiple incidents can map to one article and vice‑versa)

2) Codebook & protocols

Clear variable definitions (binary, categorical, ordinal, quantitative, structured qualitative)

Enforcement logic prioritizes evidence standards over subjective judgement

3) Evidence standards

Granular citations: claims → exact passages

Minimal sufficient evidence: enough to support, no over‑analysis

Auditability: each decision traceable end‑to‑end

4) AI + human review

Single‑pass AI with attention refresh at checkpoints

Human verification for boundary cases and rubric drift





### 🔍 Explore the Pipeline  
**When the record stops, the questions start.**

---

#### **Step 1: Source-Based Structuring**
📄 **Source Documents → 🧠 Structured Output**  
Claude codes each variable using official sources — articles, policies, statements — with traceable logic.

> *If a variable can’t be resolved from the record...*

---

#### **Step 2: Gap Detection**
❓ **Information Gap → 🔍 Investigative Escalation**  
The system flags where the evidence ends — missing follow-through, unclear enforcement, or institutional silence.

> *When documentation fails to answer a key question...*

---

#### **Step 3: External Outreach**
📂 **→ FOIA / Public Records Requests**  
💬 **→ Request for Institutional Comment**  
🎤 **→ Interviews With Involved Parties**  

When documents go silent, the pipeline continues — through structured outreach and testimony designed to fill the gap.



### 6. Technical Implementation
- **Pipeline:**  
  1. Input curated sources (DB articles, admin comms, policies)  
  2. Claude API applies codebook rules and extracts quotes  
  3. Outputs YAML with `value` + `justification` + `sources`  
  4. Automated and human validation  

- **Scale:** ~50+ incidents coded with 20+ variables each in ~10 minutes/incident (once sources are prepped)  
- **Interoperability:** YAML is human-readable and machine-parsable for analysis, visualization, or external audit


---

> **Every interview is tied to the question that prompted it. Every step stays on record.**


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



## Different standards 

codebook - definitions and values

codebook protocols - standards for evidence collection and thresholds for justification

neutrality standards - source inclusion 

## What is being studied 

Ahh, I see — thanks for clarifying. The core point of your framework is:

Control for the “obvious” explanatory factors (severity, visibility, policy violations, timing).

That way, if disparities remain, they’re less likely to be just correlation and more likely to reflect identity-based differences.

Then, as an add-on, you can explore whether those controlled variables do have predictive value in other contexts.


## Jargon

key factors - Severity, visibility, policy violations

core factors - group identity 

all *aspects* of an incident. this is what the AI searches for. there's an inclusion rule, there's an incident, there's an incident boundary. Then the AI searches and finds all *aspects* of the incident in order to assign *attributes*, these attributes are bla (see below)

response attribute is like timing, or policy whether formal rules were cited or enforced

Severity, visibility, policy violations, etc → these are incident attributes (things about the event itself). They can plausibly be used as controls to explain variation in responses.

Timing of the response → that’s already a response attribute. It’s part of the outcome, not an explanatory variable. Controlling for it or asking whether it predicts “response type” is circular.

Temporal factors *(time between incident and administrative response)*

I developed the framework’s core components — from codebook and protocol design to Claude API configuration and workflow optimization — integrating engineering methods with social science research standards to ensure both technical precision and methodological rigor.

codebook is full of definitions, protocols are logic, api config are rules so that's api input side. api output side is reasoning not logic so as to not be messy with jargon. 

### Controlled Comparison

- Incident severity *(scale of harm or disruption involved)*
- Media visibility *(extent and reach of coverage)*
- Policy violations *(whether formal rules were clearly broken)*


