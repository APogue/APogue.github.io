---
layout: single
title: "Core Capabilities"
permalink: /research/capabilities/
---

[Structured evidence. Source-linked analysis. AI-assisted coding.]

[View a sample analysis, read the methodology, or explore the code. See how incidents build the record — and how stories give it depth.]

### Explaining "coding"

In this project, “coded” is closest to the social sciences definition:

Assigning structured values to qualitative evidence using predefined rules.

I'm not writing software, tagging medical records, or running NLP pipelines — I'm applying a structured classification system to human, institutional, and contextual data drawn from sources like statements, reports, and media coverage.

⸻

✅ Recommended Explanation (for Clarity)

Wherever I say “coded,” consider linking or footnoting it once like this:

Every incident is coded using 20+ structured variables based on evidence from source documents.
(In this context, “coding” refers to systematically categorizing qualitative data using predefined rules — a method adapted from social science research.)

📘 Optional Sidebar Definition:

What does “coded” mean in this project?

In social science research, “coding” means categorizing qualitative information using a structured set of rules.

Here, every campus incident is reviewed and assigned values across 20+ variables (e.g. administrative response type, tone, policy enforcement) based on evidence from public records, statements, and media reports.

This ensures the analysis is reproducible, evidence-bound, and not based on personal interpretation.

Plainspoken definition — “qualitative evidence” can sound abstract or academic, especially to technical or engineering audiences. 

⸻

🧾 Definition: Qualitative Evidence

Qualitative evidence refers to non-numerical information — things like written statements, protest photos, administrative emails, news articles, or social media posts.

It’s data that captures what people say, do, or experience, rather than numbers or metrics. In this project, qualitative evidence includes:

- Student and faculty statements

- Official university communications
	
- Media coverage of incidents
	
- Policy text and enforcement language
	
- Screenshots or photos of protests

📌 Comparison (a contrast box)

Term | Description | Example
Qualitative | Words, statements, context | “The university condemned the protest.”
Quantitative | Numbers, measurements | 35 students were arrested


## The "AI System" Defined

In this framework, an AI system is not a black box or generative tool. It is a rigorous, protocol-bound agent that operates within well-defined constraints:

- It searches large volumes of source material for relevant content tied to specific incidents

- It applies predetermined rules and thresholds to classify incidents, assess responses, and flag inconsistencies

- Every output must be justified with direct evidence, using exact quotes from cited sources

- All reasoning is documented in a structured, auditable format (YAML), making decisions fully traceable and reproducible

This approach prioritizes precision over prediction, and accountability over automation. The system cannot make inferences beyond the evidence it is given — it must meet codified standards for each decision it outputs.




### Building Tools for Institutional Accountability
A transparent framework for detecting bias in institutional oversight 

[Visual workflow diagram or sample incident analysis screenshot to convey value]

2.	Before/After Comparison:
	- Before: “Anecdotal complaints, years later”
	- After: “Systematic evidence, real-time”
3.	The Problem/Solution Visual:
    - Show chaos/unclear responses → organized/transparent analysis

[View Sample Analysis or Explore the Framework Button (CTA)]


---

## The Approach
[4 key innovations, maybe with icon fonts or emoji]
- 📊 Structured Evidence Collection: Every incident coded using 20+ variables
- 🔍 Source-Traceable Analysis: All claims linked to specific documents
- 🤖 AI-Assisted Consistency: Using Claude API to scale rigorous coding protocols
- 📂 Open Methodology: Replicable framework others can adapt

---

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


FAQ (short)

Is this advocacy?No. It’s a neutral, rule‑based audit method. Findings are limited to the documented corpus and time window.

Why keep the full codebook private now?To prevent misuse and preserve integrity while thresholds are still being validated. The plan is to open it post‑validation.

What counts as evidence?Official statements, policy text, timestamped reporting, and defined org posts—each referenced directly in YAML outputs.