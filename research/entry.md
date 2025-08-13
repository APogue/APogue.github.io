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

---

> **Every interview is tied to the question that prompted it. Every step stays on record.**
