---
title: Incident coding protocol
layout: project_default
permalink: /projects/incident_coding_protocol/
---

## PROTOCOLS

## SECTION 1: INCIDENT CODING RESET PROTOCOL

This protocol ensures that incident coding outputs are fully auditable, transparent, and free from unintended memory-based behavior. It establishes a clean baseline for all future incident analysis.

### MEMORY RESET REQUIREMENTS

Before any new incident coding session begins, the AI assistant must perform the following:

1. **Clear system-level memory**  
   Remove all stored behavioral instructions related to variable order, source validation, default logic, derived variables, or any prior enforcement logic.

2. **Clear hybrid-layer memory**  
   Discard all implicit or inferred behaviors based on prior coding sessions, even if not stored as formal memory. This includes:
   - Scoping conventions
   - Daily Bruin as IV assumption
   - Prior tone inference defaults
   - Policy-based logic or variable grouping patterns

3. **Reset session assumptions**  
   Do not assume any prior incidents, quoting protocols, scoping logic, or enforcement practices are still valid.

4. **Acknowledge baseline state**  
   Assistant must confirm when a clean state is active and no enforcement rules remain unless explicitly provided in the current project files or session instructions.

### RULES FOR POST-RESET BEHAVIOR

After a memory reset:

- The assistant must **only follow rules explicitly defined in the user-provided protocol documents or session prompts**.
- Codebook content is considered reference only unless promoted to active protocol.
- No variable defaults (e.g., `actor_student: true`) or YAML structures may be inferred.
- All quoting, variable order, scoping logic, and derived field behaviors must be **driven exclusively by the active project instructions.**

## SECTION 2: VARIABLE ORDERING PROTOCOL

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

24. admin_response_level

Before submitting any evidence file, verify that the variable sequence matches the list above exactly.

## SECTION 3: INCIDENT BOUNDARY IDENTIFICATION
- ALWAYS begin with the OFFICIAL INCIDENT SUMMARY provided for each incident
- The incident is defined ONLY by the specific event, actors, location, and timeframe described in the summary
- For each source, identify ONLY sections that directly describe the specific incident as defined
- Apply these boundary rules for every incident:
  * INCLUDE: Content that explicitly references the specific actions, symbols, or events named in the incident summary
  * INCLUDE: Direct reactions to or impacts of the specific incident
  * EXCLUDE: References to general campus climate unless directly tied to this specific incident
  * EXCLUDE: Information about similar incidents unless explicitly comparing to THIS incident
  * EXCLUDE: Broader contextual information that doesn't directly address THIS incident
- When sources contain multiple incidents or broader issues, isolate ONLY content about the current incident
- If uncertain whether content refers to THIS specific incident, DO NOT USE IT
- If no content specifically addressing this incident can be identified for a variable:
  * Return "insufficient evidence" for that variable
  * Document the lack of incident-specific evidence in your justification
  * Proceed to the next variable

## SECTION 4: SOURCE IDENTIFICATION AND REFERENCE
- Reference sources EXCLUSIVELY by the exact filename/ID provided (e.g., "ADM-001", "DB-001", "SOC-006")
- NEVER create, invent, or assume source IDs that weren't explicitly provided
- For images/visual content, use ONLY the exact filename (e.g., "SOC-006" not "Image 5")
- Source IDs may not be consecutive - never renumber or reorganize them
- If uncertain about a source ID, use ONLY IDs directly from provided materials
- When listing sources, include their exact filenames: `sources: [ADM-001, DB-001, SOC-006]`
- Before submitting coding, verify every source ID cited exists in the provided materials

## SECTION 5: SOURCE EXTRACTION AND VALIDATION
- Open each relevant source document
- Identify ONLY sections relevant to THIS SPECIFIC incident
- Extract VERBATIM quotes that directly reference THIS incident
- Flag and exclude quotes about similar incidents or general conditions
- If no direct quotes about THIS incident can be found for a coding decision:
  * Return "insufficient evidence" for that variable
  * Document the lack of incident-specific quotes in your justification
  * Proceed to the next variable

## SECTION 6: JUSTIFICATION CONSTRUCTION
- BEGIN EACH justification with "SOURCE [exact ID]: [exact quote about THIS incident]"
- Format ALL quotes with quotation marks
- For longer sources, specify paragraph/section: "SOURCE [exact ID] paragraph X: [exact quote]"
- Explicitly connect each quote to THIS specific incident (not general patterns)
- ONLY AFTER presenting direct evidence about THIS incident, provide interpretation
- If unable to provide direct quotes specifically about THIS incident:
  * Return to SECTION 5 to search for additional evidence
  * If still insufficient, return "insufficient evidence" for that variable
  * Document the lack of incident-specific quotes in your justification
  * Proceed to the next variable

## SECTION 7: SOURCE VERIFICATION
- Re-open EACH source document referenced
- Verify EACH quote appears EXACTLY as cited
- Check that each quote is ACTUALLY about THIS incident (not similar incidents)
- Check for contextual accuracy (quotes aren't misleading when isolated)
- If finding any justification lacking direct quotes about THIS incident:
  * Return to SECTION 6 to correct the justification
  * If direct quotes cannot be added, return "insufficient evidence" for that variable
  * Document the verification failure in your justification
  * Proceed to the next variable

## SECTION 8: VARIABLE-SPECIFIC REQUIREMENTS

### media_coverage_level
When coding the media_coverage_level variable:

1. Review the specific protocol for media_coverage_level before coding
2. Code the **highest qualifying level** where ALL minimum thresholds are clearly met
3. For each level:
   * `none`: Fewer than 2 sources
   * `low`: At least 2 internal or niche sources, no external visibility
   * `network-amplified`: At least 5 sources within a single ecosystem, no mainstream pickup
   * `moderate`: At least 5 sources across ecosystems, including at least two with general public reach
   * `high`: At least 5 sources with cross-ecosystem mainstream pickup or ≥100k views
4. When coding "moderate" or "high" levels:
   * EXPLICITLY identify and LIST each specific source that qualifies as having "general public reach"
   * DO NOT count mentions of media coverage in other sources
   * ONLY use sources provided directly in file format
5. If there is ambiguity about threshold requirements:
   * DEFAULT to the lower classification level
   * ONLY assign the higher level when the evidence clearly meets ALL criteria specified
6. Media_coverage_level justification MUST:
   * Begin with "Following the media_coverage_level protocol..."
   * List EVERY qualifying source counted toward the threshold
   * Specify which sources have "general public reach" and why
   * Document the exact number of sources identified
   * Explain why the chosen level was assigned based on the count and criteria

### policy_status

### MANDATORY PRE-CODING REQUIREMENTS
Before attempting to code policy_status:

1. **COMPLETE DOCUMENT REVIEW REQUIREMENT**
   - You MUST read POL-001, POL-002, POL-003, and PHIL-001 IN THEIR ENTIRETY
   - Do not proceed until you have thoroughly reviewed all policy documents
   - Flag any coding attempt where you have not completely reviewed these documents

2. **ESTABLISH FIRST AMENDMENT CONTEXT**
   - Review PHIL-001 sections on "Free Speech 101," "Myth Busting," and "What's UCLA to Do"
   - Acknowledge: UCLA as a state actor is bound by First Amendment principles
   - Understand that content-based speech restrictions face strict scrutiny
   - Note the crucial distinction between protected offensive speech and unprotected categories

### DECISION HIERARCHY FOR POLICY_STATUS
Follow this exact decision tree:

1. **IF administration explicitly states a policy was violated in official sources:**
   - Code as `violated`
   - Cite the exact statement with source ID

2. **IF no explicit statement of violation exists:**
   
   A. **TRUE THREATS/UNPROTECTED SPEECH TEST:**
      - Carefully review PHIL-001 section on "categorical exceptions" to free speech
      - Check if incident involves true threats, fighting words, harassment that substantially interferes with educational access, etc.
      - If incident clearly falls into one of these explicitly unprotected categories → code as `violated`
      - Provide direct quotes from PHIL-001 showing why the speech is categorically unprotected
   
   B. **FIRST AMENDMENT BALANCING TEST:**
      - Even if the incident appears to conflict with policy language, it MUST be weighed against UCLA's state actor status
      - Reminder: Offensive, antisemitic, or racist content is generally protected speech unless it rises to unprotected categories
      - **CRITICAL:** Administrative condemnation does NOT automatically mean policy violation
      - When ambiguous: lean toward protecting speech in accordance with constitutional principles

3. **DEFAULT DIRECTION:**
   - In cases of doubt about whether offensive speech constitutes unprotected harassment/discrimination
   - Code as `compliant` rather than `violated`
   - Explain balancing test in justification

### COMMON CODING ERRORS TO AVOID
- **ERROR:** Assuming that hateful/offensive speech automatically violates policy
  - **CORRECTION:** Per PHIL-001, "hate speech is protected speech" unless it rises to level of true threats, etc.

- **ERROR:** Treating administrative condemnation as evidence of policy violation
  - **CORRECTION:** UCLA can condemn speech while still recognizing it as constitutionally protected

- **ERROR:** Relying solely on POL documents without balancing First Amendment concerns
  - **CORRECTION:** PHIL-001 explicitly discusses limitations on UCLA's ability to restrict speech

- **ERROR:** Applying content-based restrictions without strict scrutiny
  - **CORRECTION:** UCLA as state actor cannot restrict speech based on viewpoint/content without meeting high standard

### REQUIRED JUSTIFICATION FORMAT
Your policy_status justification MUST include:

1. Confirmation that you thoroughly reviewed ALL policy documents: 
   - "After reviewing POL-001, POL-002, POL-003, and PHIL-001 in their entirety..."

2. Direct quotes from relevant policies AND from PHIL-001 regarding free speech protections

3. Explicit First Amendment balancing analysis:
   - "Weighing the potentially [offensive/concerning] nature of the speech against UCLA's obligation as a state actor bound by the First Amendment..."

4. Clear reasoning for why the incident does or does not qualify as unprotected speech

5. Acknowledgment of the high bar for speech restriction at public universities

### severity_score

### FOUNDATIONAL DEFINITION
**Severity Score measures: The extent of OBSERVABLE direct physical harm, credible risk, or disruption caused by escalation to individuals, campus operations, or institutional safety at the time the incident occurred.**

### OPERATIONAL DEFINITIONS
- "Observable" means documented in primary sources (contemporaneous, direct records), not secondary sources
- "Disruption" means measurable interference with normal university operations
- "Credible risk" means a specific threat with reasonable likelihood of execution
- "Primary sources" include contemporaneous reports, police documentation, medical records, Daily Bruin coverage, and video evidence
- "Secondary sources" include retrospective analyses, social media commentary, or task force reports that lack direct documentation

### CODING DECISION TREE
1. **IF ANY verification items are clearly present and documented:**
   - Review severity level definitions to determine appropriate level
   - Cite specific evidence documenting each element present

2. **IF NONE of these elements are present:**
   - Incident MUST be coded as 'low' severity
   - Regardless of psychological impact or offensive content

### SEVERITY LEVEL DEFINITIONS
- **Low:** No credible threat or physical harm; any disturbance was brief, self-resolving, requiring no intervention
- **Moderate:** Some disruption or localized risk (confrontations, non-credible threats, brief space occupation); may have prompted response but no formal escalation
- **Elevated:** Institutional escalation without confirmed harm (dispersal order, event shutdown, police mobilization without arrests/force)
- **High:** Clear immediate harm or serious disruption (physical violence, credible threats, arrests, dispersal with enforcement, hospitalization)

### COMMON ERROR PREVENTION
**CRITICAL:** Subjective feelings of fear, psychological distress, or offensive content are NOT sufficient for higher severity scores unless they resulted in measurable disruption to campus operations or institutional safety.

These psychological impacts are captured in `target_tone` - do not double-count them in severity.

### JUSTIFICATION REQUIREMENTS
All severity_score justifications MUST:
1. Explicitly address each element on the verification checklist
2. Provide direct evidence for any elements present
3. **Explicitly explain why the incident does NOT qualify for higher severity levels**
4. Cite only observable impacts documented in primary sources
5. Begin with: "Based on the verification checklist, this incident shows [elements present/not present]..."

### actor_tone and target_tone

### 1. COMPREHENSIVE SOURCE REVIEW (MANDATORY)
- You MUST examine ALL sources that contain statements or reactions from the relevant group (actor or target)
- Review ALL sources before determining tone:
  * ALL social media (SOC sources)
  * ALL news quotes and interviews
  * ALL official statements
  * ALL documented reactions in any format
- Do NOT code tone until completing a full review of ALL available sources

### 2. QUANTITATIVE THRESHOLD DETERMINATION
- When different tones appear across sources:
  * Count the number of distinct references for each tone category
  * Explicitly document the count for each tone identified
  * Code the predominant tone ONLY if it represents at least 60% of all tone references
  * Otherwise, code as 'combination' and specify which tones are present
- Example calculation:
  * 5 references to 'fear/distress' out of 8 total references = 62.5% → code as 'fear/distress'
  * 4 references to 'accusatory' out of 7 total references = 57% → code as 'combination'

### 3. WEIGHTING AND EVALUATION RULES
- Statements from formal organization representatives count as equal weight to multiple individual statements
- Consider both frequency AND intensity of tone indicators
- Official statements (e.g., organization press releases) count as ONE source but carry equal weight
- Multiple similar statements from individuals carry cumulative weight
- Evaluate intensity based on:
  * Language strength and emotional content
  * Context and prominence
  * Directness of expression

### 4. CROSS-SOURCE VERIFICATION
- Look for consistency across different types of sources:
  * Compare official statements vs. social media
  * Compare organization representatives vs. individual members
  * Compare contemporaneous vs. later reactions
- When inconsistencies exist between sources:
  * Prioritize statements directly from affected individuals/groups
  * Give less weight to third-party characterizations or paraphrasing
  * Document the inconsistency in your justification

### 5. REQUIRED JUSTIFICATION FORMAT
Your justification MUST include:

1. **Source listing section:**
   - "I reviewed the following sources containing [actor/target] tone indicators: [list ALL relevant sources]"

2. **Quantitative methodology:**
   - "Found approximately X references to [tone1], Y references to [tone2], etc."
   - "This represents [calculate percentage]% of all tone references"

3. **Evidence section for EACH tone:**
   - For EACH tone identified, provide at least TWO specific quotations
   - Format: "SOURCE-XXX: \"[exact quote demonstrating tone]\""

4. **Weighting explanation:**
   - "Formal organization statements were weighted as: [explanation]"
   - "I considered both frequency and intensity by: [explanation]"

5. **Decision explanation:**
   - "[Selected tone] represents the predominant tone because [explanation]"
   - OR "No single tone reaches the 60% threshold, so coding as 'combination' of [list tones]"

## SECTION 7: GENERAL COMPLIANCE VERIFICATION

☐ I have included VERBATIM quotes specifically about THIS incident for each claim  
☐ ALL quotes are properly attributed to specific source IDs exactly as provided  
☐ I have verified each quote refers to THIS incident (not general patterns)  
☐ I have RE-VERIFIED all quotes against original sources  
☐ My interpretation follows, not precedes, direct evidence  
☐ I have EXCLUDED information about similar incidents or general conditions  
☐ I have used ONLY source IDs explicitly provided in materials  
☐ I have verified all source IDs exist in the provided materials  

## SECTION 8: VARIABLE-SPECIFIC CHECKLISTS 

### MEDIA_COVERAGE_LEVEL AUDIT CHECKLIST

Before submitting the incident coding, verify for media_coverage_level:

□ I have EXPLICITLY counted each qualifying source (minimum thresholds must be met)  
□ I have LISTED BY NAME each source with "general public reach" in my justification  
□ I have NOT counted mentions of media coverage in other sources  
□ I have ONLY used sources provided directly in file format  
□ I have defaulted to the lower level in ANY case of ambiguity  
□ My justification EXPLICITLY shows how I followed the protocol  
□ I have triple-checked this variable to ensure correct application of the protocol  

### POLICY_STATUS AUDIT CHECKLIST

Before finalizing the policy_status coding, complete this mandatory verification checklist:

□ I have read POL-001, POL-002, POL-003, and PHIL-001 in their ENTIRETY (not just skimmed)  
□ I have specifically reviewed PHIL-001's sections on "Free Speech 101," "Categorical Exceptions," and "What's UCLA to Do"  
□ I have identified whether the administration explicitly stated a policy violation (providing exact quote if so)  
□ I have rigorously tested whether the incident falls into a SPECIFIC category of unprotected speech per PHIL-001:  
□ Incitement of imminent lawless action  
□ True threats  
□ Fighting words (addressed at specific individual to trigger immediate fistfight)  
□ Harassment that substantially interferes with educational access (not just causing discomfort)  
□ Other categorical exceptions explicitly listed in PHIL-001  
□ I have explicitly acknowledged in my justification that UCLA is bound by the First Amendment as a state actor  
□ I have distinguished between administrative condemnation and actual policy violation in my analysis  
□ I have recognized that offensive, antisemitic, or racist expression is generally protected speech unless it rises to the level of unprotected categories  
□ In cases of ambiguity, I have defaulted to protecting speech rather than restricting it  
□ My justification includes explicit quotes from BOTH policy documents AND PHIL-001's free speech sections  
□ I have included a clear First Amendment balancing analysis in my justification  
□ I have NOT coded as "violated" based solely on the offensive or hateful nature of the speech  
□ I have NOT equated administrative condemnation with policy violation  
□ I have double-checked my reasoning to ensure I'm not defaulting to moral judgments rather than constitutional analysis

### SEVERITY_SCORE AUDIT CHECKLIST

Before assigning a severity score, explicitly verify and document the presence or absence of:

□ Direct physical harm to persons (documented injuries or medical attention)  
□ Credible risk to physical safety (specific threats with likelihood of execution)  
□ Disruption to campus operations (measurable interference with university functions)  
□ Disruption to institutional safety (required security response)  
□ Escalation that affected individuals, operations, or safety (documented intervention)

### ACTOR_TONE AND TARGET_TONE AUDIT CHECKLIST

Before finalizing any `actor_tone` or `target_tone` coding, complete this required verification:

□ I have examined EVERY source that contains statements or reactions from the relevant group  
□ I have verified that content from EVERY source chosen for justification is RELEVANT TO THE INCIDENT 
□ I have disregarded ANY justification containing statements or reactions from the relevant group that DOES NOT refer directly to the incident 
□ I have documented EACH source reviewed in my justification  
□ I have counted the EXACT number of references for EACH tone category identified  
□ I have calculated the PERCENTAGE that each tone represents of all references  
□ I have verified whether any tone reaches or exceeds the 60% threshold  
□ I have provided AT LEAST TWO specific quotations for EACH tone identified  
□ I have explicitly stated my counting methodology in the justification  
□ I have properly weighted organizational statements equally to multiple individual statements  
□ I have considered both frequency AND intensity in my analysis  
□ I have prioritized direct statements from affected individuals/groups over third-party characterizations  
□ I have coded as 'combination' if no single tone reaches the 60% threshold  
□ I have specified which tones are present when coding as 'combination'  
□ I have reviewed my calculations to ensure mathematical accuracy  
□ I have re-examined any borderline cases (near 60% threshold) for potential miscounts

This checklist MUST be completed for both `actor_tone` and `target_tone` variables. If ANY item cannot be checked, return to the sources and revise your analysis accordingly.


## SECTION 9: OUTPUT FORMAT

For each incident, produce a YAML file following this exact structure (below is a subset, used as an example):

```yaml
incident_id: INC-XXX
date: YYYY-MM-DD
source_ids: [SOURCE-001, SOURCE-002, ...]
keywords: [keyword1, keyword2, ...]

variable_name:
  value: selected_value
  justification: "SOURCE-001: \"Exact quote from source about THIS incident.\" SOURCE-002: \"Another relevant exact quote.\" Based on these quotes, the evidence indicates that [interpretation]."
  sources: [SOURCE-001, SOURCE-002, ...]

# For media_coverage_level specifically
media_coverage_level:
  value: selected_level
  justification: "Following the media_coverage_level protocol: SOURCE-001: \"Exact quote about coverage.\" I have identified exactly X qualifying sources: [list each source]. Of these, the following have general public reach: [name specific sources and explain why]. This meets the criteria for [selected_level] because [explain how thresholds are met]."
  sources: [SOURCE-001, SOURCE-002, ...]

# For policy_status specifically
policy_status:
  value: selected_value
  justification: "After reviewing POL-001, POL-002, POL-003, and PHIL-001 in their entirety, I have determined that this incident [value]
     POL-XXX: \"[Exact quote from relevant policy document]\"
     PHIL-001: \"[Exact quote about free speech protections and categorical exceptions]\"
     [If administrative statement exists]: ADM-XXX: \"[Exact quote showing administrative position]\"
     Weighing the [nature of speech/conduct] against UCLA's obligations as a state actor bound by the First Amendment, this incident [does/does not] rise to the level of unprotected speech because [specific analysis referencing categorical exceptions in PHIL-001]. [Explain why the speech does/doesn't meet specific unprotected categories]."
   sources: [POL-XXX, PHIL-001, other relevant sources]

severity_score:
  value: [low/moderate/elevated/high]
  justification: "Based on the verification checklist, this incident shows [presence/absence of each element]. 
  
  SOURCE-XXX: \"[Exact quote documenting presence/absence of physical harm]\"
  SOURCE-XXX: \"[Exact quote documenting presence/absence of credible risk]\"
  SOURCE-XXX: \"[Exact quote documenting presence/absence of disruption]\"
  
  This incident does not qualify for [higher level] because [explicit explanation of why higher threshold not met]. The incident is properly classified as [selected level] because [specific criteria met]."
  sources: [SOURCE-XXX, SOURCE-XXX]

actor_tone:  # or target_tone
  value: [selected_tone or 'combination']
  justification: "I reviewed the following sources containing [actor/target] tone indicators: [list ALL sources]. 
  
  Found approximately X references to [tone1] (X%), Y references to [tone2] (Y%), etc.
  
  Evidence for [tone1]:
  SOURCE-XXX: \"[exact quote demonstrating tone]\"
  SOURCE-XXX: \"[second exact quote demonstrating tone]\"
  
  Evidence for [tone2] (if applicable):
  SOURCE-XXX: \"[exact quote demonstrating tone]\"
  SOURCE-XXX: \"[second exact quote demonstrating tone]\"
  
  [If organization representatives]: The statement from [organization] was weighted equally to individual statements because [explanation].
  
  Based on this quantitative analysis, [selected_tone] represents [X%] of tone references, [meeting/not meeting] the 60% threshold for predominant tone. Therefore, the appropriate coding is [selected value]."
  sources: [list ALL sources reviewed for tone]

# For insufficient evidence cases
insufficient_variable:
  value: "insufficient evidence"
  justification: "After examining all provided sources, no content specifically addressing this incident was found regarding this variable."
  sources: []

notes:
  value: "Concise summary of the incident including key details established by the sources."
```

Each variable follows this exact structure, with justifications always beginning with direct quotes from properly identified sources.