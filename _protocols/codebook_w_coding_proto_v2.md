---
title: Codebook with Integrated Protocols V2
layout: project_default
permalink: /projects/codebook_w_coding_proto_v2/
---


### V2 Goals

Claude is doing a fine job in some areas and ignoring instructions in others. Previous iterations of the document sought to add more text to emphasize where instructions needed to be followed. This doesn't work. Either Claude needs to be instructed in different ways, or certain areas must remain discretionary because no set of instructions will obtain the exact desired behavior. Places where this is the case should be documented. 

1. Identify which behaviors are actually controllable through instructions vs. which are judgment calls

2. Streamline protocols to focus only on trackable, auditable requirements

3. Make citation/source-checking requirements the primary enforcement mechanism

4. Remove redundant verification checklists that don't actually change behavior

5. Document where discretion is inevitable rather than pretending it can be eliminated

I want it to mimic the Citations function in the Claude API. I want transparent, trackable, auditable decisions based on direct quotes from sources. (Really I want to use the API, it might even be cheaper for me, but it would be complex and make the project unusable in general for others if that's an option I want to leave open).

1. Granular citation linking - Each claim should be directly tied to specific source content

2. Transparent sourcing - Show exactly where each piece of evidence comes from

3. Minimal but sufficient evidence - Check enough sources to support the decision, but don't over-analyze

4. Auditable methodology - Make it clear how I arrived at each conclusion

The point is to streamline the codebook_with_coding_protocol - to focus on citation requirements and evidence standards rather than trying to control subjective judgment calls through excessive rules.

### CORE METHODOLOGY SECTIONS

### SECTION 1: INCIDENT BOUNDARY IDENTIFICATION

- Begin with the OFFICIAL INCIDENT SUMMARY provided for each incident
- The incident is defined ONLY by the specific event, actors, location, and timeframe in the summary
- For each source, identify ONLY content that directly describes this specific incident
- INCLUDE: Content explicitly referencing the specific actions, symbols, or events named in the incident summary
- INCLUDE: Direct reactions to or impacts of this specific incident
- EXCLUDE: General campus climate, similar incidents, or broader contextual information unless explicitly tied to THIS incident
- If uncertain whether content refers to THIS specific incident, DO NOT USE IT

### SECTION 2: SOURCE IDENTIFICATION AND CITATION

- Reference sources by exact filename/ID provided (e.g., "ADM-001", "DB-001", "SOC-006")
- Do NOT reference sources from the source_master.yml unless they were also provided as actual file content
- ONLY reference sources that were actually provided as files, using their exact IDs
- Prioritize sources most likely to contain relevant information (e.g., SOC-sources for student tone, ADM-sources for admin response)

### SECTION 3: EVIDENCE STANDARDS

- Check sources systematically until sufficient evidence is found for each variable ("sufficient" will be further defined in variable definitions below)
- Every claim must be supported by specific quotes with source attribution
- If no direct evidence exists for a variable, code as "insufficient evidence"
- Connect quotes to coding decision with clear reasoning

### SECTION 4: OUTPUT GUIDELINES

- Format: SOURCE [ID]: "[exact quote]"