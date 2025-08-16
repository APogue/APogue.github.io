---
layout: single
title: Explore the Framework
permalink: /projects/
author_profile: true
---

## Building Transparent Audit Tools for Institutional Accountability

This framework integrates a source-traceable AI system into an institutional analysis pipeline to assess potential inequities in responses to critical incidents. The AI converts incident records into structured data, making administrative behavioral patterns measurable. The pilot focuses on higher education, where incident response data offer a well-bounded testing ground for evaluating oversight processes.

## Current Focus: UCLA Case Study

The pilot implementation analyzes 50+ incidents from 2023-2024, testing whether the framework can identify patterns in administrative responses, including group-based disparities, selective responsiveness, or institutional inaction. 

Methods include:

- Cross- and within-group comparisons — analyzing response variations while controlling for incident severity, media visibility, and policy violations
- Correlation analysis — measuring relationships between responses and these same variables

This case study serves as a proof-of-concept for the broader methodology.

## The Problem

When identity-based harm, protest activity, or policy violations occur, universities must decide how to balance safety, speech, and discipline — often under scrutiny. Yet key questions are rarely answered:

- Were incidents handled with equal urgency and care?
- Did discretion override established policy?
- Was harm acknowledged or met with indifference?  
- Were sanctions applied consistently and fairly?

Current oversight relies on anecdotal narratives or delayed complaints. This framework closes that gap with a reproducible, evidence-based method for evaluating how institutions apply their standards in practice.

## The Approach

### Incident Discovery

Incident selection is based on a transparent inclusion rule, not subjective judgment.

Each incident must:

- Appear in a neutral discovery source (e.g. the Daily Bruin)
- Be bounded in time and scope
- Involve identity-based harm, protest activity, policy conflict, or safety failures
- Show clear escalation, impact, or administrative attention

This method avoids selection bias by excluding incidents discovered through outside media (or social media), administrative framing, or legal complaints.

### Coding an Incident

Each incident is systematically coded across more than 20 variables in order to characterize how institutions respond to incidents. 

Key dimensions include:

- Administrative response: timing, tone, intervention type, engagement level
- Incident attributes: severity, visibility, actor/target identity
- Policy application: whether rules were enforced consistently or cited selectively
- Community impact: coverage intensity and framing across various types of media

This structure "datafies" incidents, enabling comparative analysis across events while preserving context through qualitative evidence and firsthand accounts.

### Source-Traceable Analysis

Every coded value links directly to the underlying source material.

All claims must be justified with exact quotes, drawn from:

- Student, local, or national media coverage, including social media posts and forums  
- Chancellor and administrative statements  
- Official policy documents and institutional guidance  
- Internal communications, third-party reports, and legal filings

Each justification is stored in structured YAML, making the decision process transparent, auditable, and reproducible.

### AI-Assisted Rigor

The AI system used in this framework is not a black box or generative assistant. It is a protocol-constrained agent designed to apply structured coding standards consistently across incidents.

Unlike human coders, it offers:

- Consistency — decisions are rule-based, reducing subjective variation
- Reproducibility — designed to produce the same outputs for a given set of inputs
- Auditability — every classification includes an embedded justification block that can be independently reviewed
- Scalability — the system is designed to process incidents efficiently, making multi-incident analysis feasible 

This model does not trade off rigor for speed. It is designed to scale without sacrificing evidentiary standards, enabling semi-automated analysis that remains accountable at every step.

### Open Methodology

This framework is designed for transparency, adaptation, and long-term accountability. While originally developed for higher education, its structure supports replication across institutions and oversight contexts.

- Transparent — The criteria for how sources are linked to incidents and how evidence is coded will be public and version-controlled
- Adaptable — The rules for selecting incidents and how coding variables are defined can be tailored to other settings
- Reproducible — Incident outputs can be regenerated and audited from scratch using the same inputs
- Evolving — The system is under active development and welcomes community review, testing, and refinement

By making each step explicit and verifiable, the methodology invites trust — not just in its findings, but in its process.


## Methodological Principles

### Neutrality Through Structure

- Apply consistent inclusion rules regardless of identity group
- Code observable actions and outcomes, not inferred motives
- Allow patterns to emerge from the data rather than starting with conclusions

### Controlled Comparison

Disparities are analyzed while controlling for:

- Incident severity *(scale of harm or disruption involved)*
- Media visibility *(extent and reach of coverage)*
- Policy violations *(whether formal rules were cited or enforced)*
- Temporal factors *(time between incident and administrative response)*

This approach helps separate correlation from potential bias.

### Transparency and Auditability

Every decision in the dataset is:

- Documented with its reasoning
- Linked directly to source evidence
- Reproducible by others using the same inputs
- Open to independent validation

## Future Adaptation

This research's current build has a specific purpose — analyzing how university administrations respond to campus incidents — but the method behind it is distinctive. It combines structured coding with qualitative context in a way that’s uncommon in oversight work, allowing patterns to be measured without losing the contextual detail needed to see the full picture. The framework offers a model for modernizing accountability in any setting where response equity matters. 

Adapting the framework to other fields would require sector-specific evidence sources, coding rules, and API configuration.

Potential contexts include:

- Workplace grievance or HR case handling
- Utility outage response tracking
- Grant or funding award decision audits
- Prioritization of time-critical service requests in healthcare 
- Case resolution consistency in government agencies

## Open-Source Commitment

This project is being developed with a strong commitment to open-source principles. The full audit framework — including code, logic, and enforcement protocols — will be released under a permissive license once it’s finalized and validated.

Early release isn’t possible because the system is still in development, and premature publication could:

- Invite misuse or misinterpretation of incomplete logic
- Open enforcement thresholds to public comment before validation
- Reduce credibility through untested deployment

Until then, the code remains private, though specific modules (e.g., output formats, schemas, redacted examples) may be shared with vetted collaborators. Full release is planned after the UCLA case study and audit layer are complete.

This approach follows best practices in responsible AI, open science, and peer-reviewed research: share when stable, not before.

---


<!-- 


## [HERO SECTION - usually styled differently]

### Explore the Framework

A deeper technical dive

[Cards/buttons that link OUT to sub-pages]

[View Sample] → links to /research/sample-analysis

[Read Docs] → links to /research/methodology  

[Get Code] → links to GitHub


---

- [Documentation](/projects/documentation/)

- [Project Proposal](/projects/project_proposal)

This is a comment and won't be displayed 

- [Codebook](/projects/codebook/)

- [Incident Coding Protocols](/projects/incident_coding_protocol/)

- [Codebook with Incident Coding Protocols](/projects/codebook_with_coding_protocol/)

- [Codebook with Incident Coding Protocols V2](/projects/codebook_w_coding_proto_v2/)

- [Incident Response Index](/projects/incident_index/)



<footer class="site-footer">
  <p><strong>This is a test footer override.</strong></p>
</footer>

-->




