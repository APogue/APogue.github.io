---
title: Incident coding protocol
layout: project_default
permalink: /projects/incident_coding_protocol/
---

If I'm building a system for rigorous research auditability, version control, and multi-agent consistency, then relying on hidden memory is a liability, not a feature.

## This file will include:

- The Critical Source Validation Protocol

- Variable justification rules

- Prompting conventions for AI coders (Claude, GPT, or others)

- Optional: guidance for humans using Replit, YAML editors, etc.

## What GPT will do 

- If you give me the key rules in plaintext (or markdown), I’ll:

- Structure it cleanly

- Suggest section headers

- Add YAML frontmatter if you want it GitHub-viewable as a page (layout: project_default etc.)

- Follow only what's in that file — and ignore memory overlays unless explicitly instructed

## GPT memory specific

- Export everything I’ve memorized so far for review

- Delete what you no longer want tracked in memory

- This keeps your whole project epistemically clean.

## We want global enforcement 

- Put protocols in the project instructions 

- If your goal is: “Always quote exactly before justifying, for every variable, no exceptions,” then it must go into my project instructions or model memory.

- Automatically applied, even before I open a codebook

- Cross-referenced every time I generate YAML or do variable justification

- Used whether or not you mention the protocol in the moment

- If I leave the rulesets in the codebook

	- Even though it's written there, I treat the codebook as a content reference, not as a behavioral rulebook unless you also elevate the rule into my system-level memory or are actively prompting it.

## Claude says:

The most effective way to get me to follow rules consistently across incidents is to:

Create a clear, structured checklist or protocol that I must explicitly complete for each variable being coded
Have me acknowledge these steps at the beginning of my response and commit to following them
Structure the rules as an explicit algorithm or decision tree with clear IF-THEN logic rather than descriptive guidelines
Add a verification step where I must validate my work against the rules before submitting it
Use numbered steps rather than paragraph-style instructions where possible

For example, with a variable like "target_tone", instead of general guidelines, a more effective approach would be:

CODING PROTOCOL FOR TARGET_TONE:

1. EXAMINE ALL sources containing target group reactions
2. EXTRACT exact quotes from each source that indicate tone
3. COUNT distinct references to each tone category
4. CALCULATE percentage of each tone (must be ≥60% for single tone)
5. FORMAT justification with:
   a. List of ALL sources with tone indicators
   b. At least TWO direct quotes for each identified tone
   c. Explicit count statement: "Found X references to [tone1] and Y references to [tone2]"
6. VERIFY before submission that all requirements are met

This algorithmic approach with mandatory steps and verification would be much more effective than general guidelines, as it forces me to explicitly work through each required element.


## GPT and Claud are making different kinds of mistakes

They both need to make sure they read the coding examples (e.g. ...), nuance error still occurring, but seems fixable as opposed to methodology, 

- Claude is struggling with methodology, it ignores things like "don't rename files and make sure to reference PHIL and POL when making policy decisions"

- GPT is struggling with hallucinations, it relies on fading memory so to speak rather than sticking to exact text in order to code. So in some cases it is coding its own made-up scenarios. I'm also unsure of what it's committing to memory, so that should be cleared before proceeding. 

## Initial rules

## PROTOCOL: [Variable Name]

1. Locate all sources relevant to this variable.
2. Extract only the portions that directly reference the incident (not adjacent context).
3. Apply codebook thresholds (e.g., quote count, percentage, identity verification).
4. Copy exact source quotes (do not paraphrase).
5. Format the justification with:
   a. The direct quote
   b. An explicit explanation of how it satisfies the codebook criteria
6. Include only the cited source IDs in the `sources:` list.
7. Verify: all claims must be directly traceable to uploaded source files.


## VARIABLE ORDERING PROTOCOL

All YAML files in _data/evidence/ must follow the canonical variable order listed below. This order reflects the structure defined in the codebook and must be preserved across all incidents for consistency, rendering, and auditability.  

Do not group variables by theme or restructure them. Do not include unused variables as null placeholders—only include variables that are present, in the correct order.

Canonical order:

1. org_affiliated_actor

2. actor_student

3. admin_response_type

4. accountability_follow_up

5. admin_support_offered

6. actor_group

7. target_group

8. media_coverage_level

9. location

10. policy_status

11. policy_violation_type

12. norm_violation_type

13. severity_score

14. police_involvement

15. latency_days

16. administrative_tone

17. administrative_positioning

18. media_positioning

19. actor_tone

20. target_tone

21. actor_positioning

22. target_positioning

23. notes

Before submitting any evidence file, verify that the variable sequence matches the list above exactly.


