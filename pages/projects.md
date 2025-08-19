---
layout: single
title: Explore the Framework
permalink: /projects/
author_profile: true
---

## Building Transparent Audit Tools for University Accountability

This framework integrates a source-traceable AI system into an institutional analysis pipeline to test whether universities respond equitably to critical incidents. The pilot examines campus climate cases under Title VI involving antisemitism, Islamophobia, and related national-origin bias, where incident response data provide a well-bounded testing ground for evaluating oversight processes.

## Current Focus: UCLA Case Study

The pilot implementation analyzes 30+ incidents from 2023–2024 to test whether the framework can detect systematic disparities in administrative response. Two types of analysis guide this case study:

- Cross-group disparity — do administrative responses differ across student groups once incidents are comparable in severity and media visibility?  
- Within-group drivers — when identity is held constant, do factors such as severity or visibility correlate with response patterns?  

Together, these tests evaluate whether group identity predicts outcomes, or whether institutional responses track neutral factors more closely. The UCLA case study provides the initial demonstration of how the accountability methodology operates in practice.

## The Problem

When identity-based harm, protest activity, or policy violations occur, universities must decide how to balance safety, speech, and discipline — often under scrutiny. Yet key questions are rarely answered clearly:

- Were incidents handled with equal urgency and care?
- Did discretion override established policy?
- Was harm acknowledged or met with indifference?  
- Were sanctions applied consistently and fairly?

Current oversight relies on anecdotal narratives or delayed complaints. This framework closes that gap with an evidence-based method for evaluating how institutions apply their standards in practice.

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

To characterize how institutions respond to incidents, each incident is systematically coded across multiple variables.

Key dimensions include:

- Administrative response: timing, intervention type, engagement level
- Incident attributes: severity, actor/target identity
- Media visibility: coverage intensity and framing across various types of media

Coding enables comparative analysis across events while preserving context through evidence collection and firsthand accounts.

### Source-Traceable Analysis

Every coded value links directly to the underlying source material.

All claims must be justified with exact quotes, drawn from:

- Student, local, or national media coverage, including social media posts and forums  
- Chancellor and administrative statements  
- Official policy documents and institutional guidance  
- Internal communications, third-party reports, and legal filings

Each justification is stored in structured YAML, making the decision process transparent, auditable, and reproducible.

### AI-Assisted Rigor

The AI system used in this framework is not a black box or generative assistant. It is a protocol-constrained agent designed to apply high methodological standards to every incident.

Unlike human coders, it offers:

- Consistency — decisions are rule-based, reducing subjective variation
- Reproducibility — designed to produce the same outputs for a given set of inputs
- Auditability — every classification includes an embedded justification block that can be independently reviewed
- Scalability — the system is designed to process incidents efficiently, making multi-incident analysis feasible 

In practice, this means the workflow can handle complex case files with the same evidentiary care that would normally require extensive manual review.

### Open Methodology

By making each step explicit and verifiable, the methodology is open to validation of both its process and its findings.

- Transparent — the source code for automated steps, the Claude API configuration, and the methodology for processing the system’s output data will be public and version-controlled
- Adaptable — all pilot-specific rules and configurations can be tailored to other academic settings
- Reproducible — no incident-specific heuristics or hard-coding; all incident outputs can be regenerated using the same inputs
- Evolving — the system is under development and welcomes community review, testing, and refinement

This framework was developed for Title VI contexts in higher education but can be adapted to other academic contexts such as Title IX accountability. Based on the Office of Civil Rights complaint log, this already provides plenty to do.

## Methodological Principles

### Neutrality Through Structure

- Apply consistent inclusion rules regardless of identity group
- Code observable actions and outcomes, not inferred motives
- Allow patterns to emerge from the data rather than starting with conclusions

### Controlled Comparison

The analysis is built around a controlled comparison framework:

- Primary predictor: group identity  
- Key controls: incident severity and media visibility 

Two tests guide the design:  

- Cross-group test — hold severity and visibility constant to see whether identity alone predicts institutional response.  
- Within-group test — hold identity constant; then test one factor at a time (severity or visibility) to see whether it drives response differences.  

This structure ensures the study can distinguish whether outcomes are shaped more by group identity or by other neutral factors.

### Transparency and Auditability

Every decision in the dataset is:

- Documented with its reasoning
- Linked directly to source evidence
- Reproducible by others using the same inputs
- Open to independent validation

## Future Adaptation

This research's current build has a specific purpose — analyzing how university administrations respond to campus incidents — but the method behind it is distinctive. It combines structured coding with qualitative context in a way that’s uncommon in oversight work, allowing patterns to be measured without losing the contextual detail needed to see the full picture. The framework offers a model for modernizing accountability in any setting where response equity matters. 

Potential contexts include:

- Workplace grievance or HR case handling
- Utility outage response tracking
- Grant or funding award decision audits
- Prioritization of time-critical service requests in healthcare 
- Case resolution consistency in government agencies

## Open-Source Commitment

This project is being developed with a strong commitment to open-source principles. The full audit framework will be released under a permissive license once it’s finalized and validated.

Early release isn’t possible because the system is still in development, and premature publication could:

- Invite misuse or misinterpretation of incomplete logic
- Open enforcement thresholds to public comment before validation
- Reduce credibility through untested deployment

Until then, the code remains private, though specific modules may be shared with vetted collaborators. Full release is planned after the UCLA case study and audit layer are complete.

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




