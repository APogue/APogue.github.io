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
While the core logic remains under development, the framework is designed for:
- Replicability across institutions
- Adaptation to different oversight contexts
- Transparent validation processes
- Community review and improvement

## System Architecture

The framework follows a structured pipeline:

```
Incident Discovery → Source Collection → Structured Coding → AI Analysis → Pattern Detection → Validation
```

Each step maintains:
- Clear audit trails
- Evidence linkage
- Reproducible processes
- Transparent decision logic

## The Codebook

At the heart of this framework is a rigorously defined variable schema that enables consistent cross-incident comparison. The codebook includes:

- **Variable definitions**: Clear criteria for each measured attribute
- **Coding protocols**: Step-by-step logic for classification
- **Evidence standards**: Requirements for source validation
- **Quality controls**: Consistency checks and validation procedures

*Note: Full codebook access is available to vetted collaborators and reviewers.*

## Broader Applications

While developed for higher education, this framework can adapt to:
- Protest policing accountability
- Civil rights enforcement monitoring
- Corporate DEI audit frameworks
- Any context requiring systematic measurement of institutional bias

The methodology prioritizes:
- Reproducibility over interpretation
- Evidence over assumption
- Patterns over anecdotes
- Transparency over opacity

## Methodological Principles

### Neutrality Through Structure
- Apply consistent inclusion rules regardless of group identity
- Code surface-level observable behaviors, not intentions
- Let patterns emerge from data, not predetermined conclusions

### Controlled Comparison
When analyzing disparities, the framework controls for:
- Incident severity
- Media visibility
- Policy violations
- Temporal factors

This isolation of variables helps distinguish between correlation and potential bias.

### Transparency and Auditability
Every analytical decision is:
- Documented with justification
- Linked to source evidence
- Reproducible by other researchers
- Open to validation

## Open-Source Commitment

This project is being developed with a commitment to open-source principles. The audit framework, once finalized and validated, will be released publicly to support adaptation across civil rights, journalism, and institutional oversight communities.

**Why not yet?** The core logic and enforcement protocols are still evolving. Premature release could lead to misuse or inconsistent application. Until validation is complete, vetted collaborators may request access to specific components under review agreements.


---

*This framework represents an ongoing effort to bring rigor and transparency to institutional accountability. It's not about proving predetermined conclusions—it's about developing better tools to see patterns that matter.*





























<!-- 


## [HERO SECTION - usually styled differently]

### Explore the Framework

A deeper technical dive

[Cards/buttons that link OUT to sub-pages]

[View Sample] → links to /research/sample-analysis

[Read Docs] → links to /research/methodology  

[Get Code] → links to GitHub


### Current Focus: University Case Study

#### The Problem
- When incidents happen on campus...
- How do we know if responses are fair?
- Current oversight relies on...
- [fourth bullet point]

This is an active, alive project

Text + stat box or heatmap/screenshot

[Left column content]

Analyzing institutional responses to campus incidents...

[Right column - styled box]

**Quick Stats:**
- 60+ incidents analyzed
- 20+ variables per incident
- 3 years of data


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




