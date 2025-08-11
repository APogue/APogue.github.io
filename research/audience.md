---
layout: single
title: "For You"
permalink: /research/audience/
---

### Get Involved

[Different CTAs for different audiences]

[For Participants] → links to /research/for-participants

[For Researchers] → links to /research/technical

[For Funders] → links to contact form



Definition of AI System (Technical)
In this study, the AI system refers to a constrained large language model (LLM) workflow configured for structured incident coding, not open-ended content generation. It functions as a controlled classification agent, operating under strict protocols to ensure reproducibility, rigor, and auditability.

Key properties:

- Evidence-Grounded Operation:
All outputs are derived exclusively from a bounded set of source documents. The system is prohibited from speculative inference. Each coded variable must be supported by direct textual evidence.

- Threshold-Based Evaluation:
The system applies variable-specific criteria to determine whether evidentiary thresholds are met (e.g., quote count, actor identification, presence of policy language). These criteria are defined in a formal codebook and justification protocol.

- Structured Output Format:
For each variable, the system produces a YAML-encoded justification block that includes:

	- the selected value

	- an inline citation of one or more exact quotes

	- an explanation of how those quotes satisfy the required standard

- Source Traceability:
All decisions are accompanied by document-level source IDs and exact quote strings, enabling full reconstruction and third-party verification of any output.

- Non-Generative, Protocol-Constrained Use of LLMs:
The LLM is treated as an evidence auditor, not a knowledge generator. It operates within a closed context, with fixed boundaries (incident scope, coding logic, source set), and its reasoning is recorded step-by-step using XML-tagged chains of thought.

This architecture supports the development of transparent, source-traceable AI systems for institutional accountability — optimized for policy validity and public trust, not speed or scale.




## Get Involved

### For Researchers
Interested in adapting this framework for your institution? The methodology is designed for replication. Contact me to discuss implementation or to access redacted methodology documents.

### For Participants
If you have direct experience with the incidents being studied, your perspective adds crucial context to the coded data. Interviews help bridge the gap between structural analysis and lived experience.

### For Collaborators
This framework benefits from interdisciplinary review. Whether you work in data science, policy analysis, civil rights, or institutional governance, your expertise can strengthen this methodology.
