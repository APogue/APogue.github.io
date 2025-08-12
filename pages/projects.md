---
layout: single
title: Explore the Framework
permalink: /projects/
author_profile: true
---

## Building Transparent Audit Tools for Institutional Accountability

This framework develops source-traceable AI systems to detect patterns of inequity in how institutions respond to critical incidents. The pilot implementation focuses on higher education, where incident response data offer a well-bounded testing ground for evaluating oversight processes.


## Current Focus: UCLA Case Study

The pilot implementation analyzes 50+ incidents from 2023-2024, testing whether the framework can:
- Identify patterns in administrative response
- Compare responses across different affected groups
- Control for variables like severity, visibility, and policy violations
- Reveal potential group-based disparities in institutional action

This case study serves as a proof-of-concept for the broader methodology.

## The Problem

When identity-based harm, protest activity, or policy violations occur on campus, universities must make decisions about safety, speech, and discipline — often under public scrutiny. But key questions are rarely answered clearly:

  Can we determine if institutional responses are fair by determining what patterns emerge when responses are examined systematically? In other words, are similar incidents handled the same way, regardless of who is involved?

Current oversight relies heavily on anecdotal narratives or formal complaints filed long after the fact. This framework addresses that gap by introducing a reproducible, evidence-based methodology for measuring how institutions respond and whether those responses reflect consistent standards across identity groups, protest types, and policy violations.

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

- Consistency — decisions are made the same way every time, without subjective variation
- Reproducibility — all outputs follow codified rules and transparent protocols
- Auditability — every classification includes an embedded justification block that can be independently reviewed
- Scalability — the system is built to process many incidents quickly, making large-scale oversight analysis feasible

This model does not trade off rigor for speed. It is designed to scale without sacrificing evidentiary standards, enabling automated analysis that remains accountable at every step.

### Open Methodology

This framework is designed for transparency, adaptation, and long-term accountability. While originally developed for higher education, its structure supports replication across institutions and oversight contexts.

- Transparent — All coding protocols, source rules, and variable definitions will be public and version-controlled
- Adaptable — The inclusion logic and variable structure can be tailored to other settings where response equity matters
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

- Incident severity
- Media visibility
- Policy violations
- Temporal factors

This approach helps separate correlation from potential bias.

### Transparency and Auditability

Every decision in the dataset is:

- Documented with its reasoning
- Linked directly to source evidence
- Reproducible by others using the same inputs
- Open to independent validation

## Future Adaptation

This research's current build has a specific purpose — analyzing how university administrations respond to campus incidents — but the method behind it is distinctive. It combines structured coding with qualitative context in a way that’s uncommon in oversight work, allowing patterns to be measured without losing the contextual detail needed to see the full picture. The framework offers a model for modernizing accountability in any setting where decisions are complex, high-stakes, or contested.

Adapting the framework to other fields would require sector-specific rules, data sources, and backend configuration.

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
- Undermine enforcement thresholds before validation
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




