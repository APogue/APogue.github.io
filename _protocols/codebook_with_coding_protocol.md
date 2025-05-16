---
title: Improved Codebook with Integrated Protocols
layout: project_default
permalink: /projects/codebook_with_coding_protocol/
---

# Codebook with Integrated Coding Protocols

This document integrates the codebook definitions with specific coding protocols to ensure consistent, rigorous analysis across all incidents.

## CORE METHODOLOGY SECTIONS
**THESE SECTIONS MUST BE REVIEWED BEFORE CODING ANY VARIABLE**

### SECTION 1: INCIDENT CODING RESET PROTOCOL

This protocol ensures that incident coding outputs are fully auditable, transparent, and free from unintended memory-based behavior. It establishes a clean baseline for all future incident analysis.

#### MEMORY RESET REQUIREMENTS

Before any new incident coding session begins, the AI assistant must perform the following:

1. **Clear system-level memory**  
   Remove all stored behavioral instructions related to variable order, source validation, default logic, derived variables, or any prior enforcement logic.

2. **Clear hybrid-layer memory**  
   Discard all implicit or inferred behaviors based on prior coding sessions, even if not stored as formal memory. This includes:
   - Scoping conventions
   - Prior tone inference defaults
   - Policy-based logic or variable grouping patterns

3. **Reset session assumptions**  
   Do not assume any prior incidents, quoting protocols, scoping logic, or enforcement practices are still valid.

4. **Acknowledge baseline state**  
   Assistant must confirm when a clean state is active and no enforcement rules remain unless explicitly provided in the current project files or session instructions.

#### RULES FOR POST-RESET BEHAVIOR

After a memory reset:

- The assistant must **only follow rules explicitly defined in the user-provided protocol documents or session prompts**.
- Codebook content is considered reference only unless promoted to active protocol.
- No variable defaults (e.g., `actor_student: true`) or YAML structures may be inferred.
- All quoting, variable order, scoping logic, and derived field behaviors must be **driven exclusively by the active project instructions.**

### SECTION 2: INCIDENT BOUNDARY IDENTIFICATION

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

### SECTION 3: SOURCE IDENTIFICATION AND REFERENCE

- Reference sources EXCLUSIVELY by the exact filename/ID provided (e.g., "ADM-001", "DB-001", "SOC-006")
- NEVER create, invent, or assume source IDs that weren't explicitly provided
- For images/visual content, use ONLY the exact filename (e.g., "SOC-006" not "Image 5")
- Source IDs may not be consecutive - never renumber or reorganize them
- If uncertain about a source ID, use ONLY IDs directly from provided materials
- When listing sources, include their exact filenames: `sources: [ADM-001, DB-001, SOC-006]`
- Before submitting coding, verify every source ID cited exists in the provided materials

### SECTION 4: SOURCE EXTRACTION AND VALIDATION

- Open each relevant source document
- Identify ONLY sections relevant to THIS SPECIFIC incident
- Extract VERBATIM quotes that directly reference THIS incident
- Flag and exclude quotes about similar incidents or general conditions
- If no direct quotes about THIS incident can be found for a coding decision:
  * Return "insufficient evidence" for that variable
  * Document the lack of incident-specific quotes in your justification
  * Proceed to the next variable

### SECTION 5: JUSTIFICATION CONSTRUCTION

- BEGIN EACH justification with "SOURCE [exact ID]: [exact quote about THIS incident]"
- Format ALL quotes with quotation marks
- For longer sources, specify paragraph/section: "SOURCE [exact ID] paragraph X: [exact quote]"
- Explicitly connect each quote to THIS specific incident (not general patterns)
- ONLY AFTER presenting direct evidence about THIS incident, provide interpretation
- If unable to provide direct quotes specifically about THIS incident:
  * Return to SECTION 4 to search for additional evidence
  * If still insufficient, return "insufficient evidence" for that variable
  * Document the lack of incident-specific quotes in your justification
  * Proceed to the next variable

### SECTION 6: SOURCE VERIFICATION

- Re-open EACH source document referenced
- Verify EACH quote appears EXACTLY as cited
- Check that each quote is ACTUALLY about THIS incident (not similar incidents)
- Check for contextual accuracy (quotes aren't misleading when isolated)
- If finding any justification lacking direct quotes about THIS incident:
  * Return to SECTION 5 to correct the justification
  * If direct quotes cannot be added, return "insufficient evidence" for that variable
  * Document the verification failure in your justification
  * Proceed to the next variable

---

## VARIABLE-SPECIFIC DEFINITIONS AND PROTOCOLS

### METADATA & UTILITY FIELDS

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference

#### `incident_id`
**Definition:** Globally unique identifier for each incident (e.g., `INC-001`)

**Coding Protocol:**
- Use the exact incident ID provided in the case materials
- Do not modify or create new IDs
- Format exactly as provided (e.g., `INC-001`)

#### `date`
**Definition:** Date the incident occurred (`YYYY-MM-DD`)

**Coding Protocol:**
- Use the exact date format: YYYY-MM-DD
- Determine date from primary source materials, prioritizing contemporaneous accounts
- If multiple dates are associated with an ongoing incident, use the starting date
- If date is ambiguous, document the ambiguity in notes

#### `source_ids`
**Definition:** List of ALL internal source references provided to you in file format for incident documentation  

**Coding Protocol:**
- List ALL sources provided in file format
- Use exact format: `[DB-001, ADM-014]`
- Include ALL sources regardless of whether they were used in coding justifications
- Verify each source ID exists in the provided materials
- Never invent or assume source IDs

#### `keywords`
**Definition:** Internal-use incident tags for filtering and scrape  

**Coding Protocol:**
- Use format: `[keyword1, keyword2]`
- Include only keywords directly relevant to the incident
- Use lowercase terms separated by commas
- Limit to terms explicitly mentioned in source documents

---

### BINARY/BOOLEAN VARIABLES

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `org_affiliated_actor`
**Definition:** Was the actor affiliated with either a UCLA student org or USAC?  
→ `true`, `false`  

**Coding Protocol:**
- Mark `true` ONLY if at least ONE of these conditions is explicitly documented:
  * An org member was quoted, claimed responsibility, hosted, or was listed as a sponsor
  * The org publicly endorsed or amplified the act (e.g., repost, montage, statement of support)
- Do NOT infer membership solely from an individual's participation in an org-associated protest
- Do NOT mark `true` based on assumptions or patterns from other incidents
- Begin justification with direct quotes establishing organization affiliation
- If no explicit evidence of org affiliation exists, code as `false`

**Required Verification:**
- Verify that quoted statements specifically refer to THIS incident
- Verify that organization endorsement/amplification is explicitly documented, not assumed
- Verify that the specific organization is clearly named in source materials

#### `actor_student`
**Definition:** Was the actor a student at UCLA?     
→ `true`, `false`  

**Coding Protocol:**
- Mark `true` if:
  * There is no assertion of non-affiliation by the Daily Bruin or 3rd party media
- Mark `false` ONLY if:
  * A source explicitly identifies the actor as non-student (e.g., "outside agitator," "non-affiliate")
- It is NOT necessary to find explicit evidence of student status if there's no assertion of non-affiliation
- Begin justification with direct quotes about actor identity if available
- If status is ambiguous but no assertion of non-affiliation exists, default to `true`

**Required Verification:**
- Check Daily Bruin and all media sources for any assertions of non-student status
- Verify that any claims about actor identity specifically refer to THIS incident
- Document ambiguity if present, but still apply coding rule

---

### NOMINAL CATEGORICAL VARIABLES - PART 1

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `admin_response_type`
**Definition:** Categorizes whether and how the administration publicly acknowledged the incident  
→ `incident_specific`, `general_statement`, `none`  

**Coding Protocol:**
- Examine all administrative sources (ADM-prefix) within 2 weeks of incident date
- Code as `incident_specific` if:
  * The incident was explicitly named OR
  * The incident was clearly referenced (even without naming it directly)
  * The statement was issued within 2 weeks of the incident
- Code as `general_statement` if:
  * A public communication addressed related issues (e.g., protest safety, antisemitism) 
  * The statement was issued within 2 weeks of the incident
  * But did NOT explicitly mention the specific incident
- Code as `none` if:
  * No public administrative response occurred within 2 weeks
- "General_statement" identifies umbrella statements likely purposed as a "catch-all" for several campus incidents
- Concurrent statements that may incidentally relate but are not "responses" are not considered (e.g., a UC-wide campus climate initiative announced at an event where an incident takes place)

**Required Verification:**
- Verify statement timeframe (must be within 2 weeks)
- Verify whether statement explicitly references THIS specific incident
- Distinguish between general climate statements and true responses to the specific incident

#### `accountability_follow_up`
**Definition:** Categorizes the nature of any administrative follow-up action (disciplinary process, civil and/or police investigation) to hold offending actors accountable  
→ `none`, `proposed`, `n/a`  

**Coding Protocol:**
- Examine all administrative communications in sources
- Code as `proposed` if:
  * Administration explicitly stated an intent to pursue accountability actions
  * This includes mentions of investigations, disciplinary processes, or administrative referrals of the incident to appropriate authorities or oversight bodies
  * Key distinction: The administration must specifically commit to TAKING action, not merely suggest resources for others to take action
- Code as `none` if:
  * A response occurred, but no accountability action was proposed
- Code as `n/a` if:
  * No admin response occurred (`admin_response_type` = `none`)
- This variable captures what the administration **explicitly named or offered** in communications
- It does *not* confirm whether actions were completed
- Actions initiated by students through existing systems (e.g., reporting to EDI office) are **not** coded
- This variable isolates **administrative discretion** and reflects whether university leadership publicly acknowledged a duty to act

**Required Verification:**
- Verify existence of explicit statements about follow-up actions
- Verify that follow-up relates specifically to THIS incident (a follow-up for several incidents inclusive of this incident qualifies)

#### `admin_support_offered`
**Definition:** Whether there was supportive language included in an administrative response to assist students who may require justice, accountability, or repair  
→ `n/a`, `none`, `counseling/referral`, `violation_warning`, `campus_climate_initiative`, `positive_inclusion`, `institutional_responsibility`, `general_commitment`, `multiple`

**Coding Protocol:**
- Examine all administrative communications in sources
- Code as `counseling/referral` if:
  * Students were directed to services such as CAPS, ombuds, or external reporting channels (e.g., UCPD, Title IX office)
- Code as `violation_warning` if:
  * Admin issued a statement referencing applicable university rules, laws, or policies
  * AND explicitly warned about possible violations or consequences
  * e.g., “We are tracking incidents, if behavior becomes pervasive consequences will be imposed”
- Code as `campus_climate_initiative` if:
  *  Admin referenced a programmatic effort or institutional partnership aimed at improving the long-term inclusion or cultural environment of the campus
- Code as `positive_inclusion` if:
  * Admin explicitly affirmed the dignity and rights of the named, targeted group
  * This is NOT the same as condemning acts against that group
  * e.g., "Those who advocate on behalf of Palestinians should also be confident of their physical safety on our campuses"
- Code as `institutional_responsibility` if:
  * Admin explicitly acknowledged gaps or failures in the institution's approach
  * AND committed to specific improvements or changes
  * Does not require legal fault admission
  * e.g., "This display is a painful reminder that we must do more to foster understanding and compassion"

- Code as `general_commitment` if:
  * Admin reaffirmed existing commitments as sufficient
  * Without acknowledging specific responsibility or need for change
  * e.g., "We remain committed to doing all we can..."
- Code as `multiple` if:
  * More than one type of supportive language was included
- Code as `none` if:
  * An administrative response occurred, but no support was offered
- Code as `n/a` if:
  * No admin response occurred (`admin_response_type` = `none`)

**Required Verification:**
- Verify that support language specifically relates to THIS incident
- Verify the support type with direct quotes from administrative statements
- DO NOT STOP when one support type is detected in the admin statement(s), thoroughly search language for the possibility that the option is `multiple`
- Name each support type when coding as `multiple`

#### `target_group`, `actor_group`
**Definition:** Primary identity or identity affiliated with group targeted or affected  
→ `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

**Coding Protocol:**
- Examine all sources for explicit identification of actor/target groups
- Code based on the primary identity explicitly mentioned in sources
- Code as `Multiple` only when sources specifically identify more than one group
- Code as `Unknown` when no clear identification is made in any source
- If sources conflict in their identification, code based on the most frequently mentioned identity
- Begin justification with direct quotes identifying the group(s)

**Required Verification:**
- Verify identity claims with direct quotes from sources
- Verify that identity references specifically relate to THIS incident
- Verify the distinction between actor and target when coding both variables

---

### NOMINAL CATEGORICAL VARIABLES - PART 2

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `media_coverage_level`
**Definition:** Degree of public visibility based on external coverage (excluding Daily Bruin and admin activity)  
→ `none`, `low`, `network-amplified`, `moderate`, `high`

**Special Protocol for media_coverage_level:**

1. **Pre-coding requirements:**
   - Make an initial list of ALL relevant sources (excluding Daily Bruin and admin sources)
   - For each source, document publication date to verify it falls within 14 days of incident
   - Classify each source as: internal/niche, ecosystem-specific, or general public reach

2. **Threshold determination:**
   - Count the EXACT number of qualifying sources for each level
   - Assign the HIGHEST qualifying level where ALL minimum thresholds are met:
     * `none`: Fewer than 2 sources
     * `low`: At least 2 internal or niche sources, no external visibility
     * `network-amplified`: At least 5 sources within a single ecosystem (e.g., Jewish outlets, topic-specific subreddits or social media groups), no mainstream pickup
     * `moderate`: At least 5 sources across ecosystems, including at least two with general public reach (e.g., LAist, KTLA, local media)
     * `high`: At least 5 sources with cross-ecosystem mainstream pickup (e.g., LAT, NYT, CNN)  OR viral social media (≥100k views)

3. **Critical clarifications:**
   - Only count sources published within 14 days of the incident
   - Do NOT count mentions of media coverage in other sources
   - Do NOT count retrospective coverage that uses the incident as context
   - ONLY use sources provided directly in file format
   - If there is ambiguity about threshold requirements, DEFAULT to the lower level

4. **Required justification format:**
   - Begin with: "Following the media_coverage_level protocol..."
   - List EVERY qualifying source counted toward the threshold
   - Specify which sources have "general public reach" and why
   - Document the exact number of sources identified
   - Explain why the chosen level was assigned based on the count and criteria

**Verification checklist:**
- I have EXPLICITLY counted each qualifying source (minimum thresholds must be met)
- I have LISTED BY NAME each source with "general public reach" in my justification
- I have NOT counted mentions of media coverage in other sources
- I have ONLY used sources provided directly in file format
- I have defaulted to the lower level in ANY case of ambiguity
- My justification EXPLICITLY shows how I followed the protocol
- I have triple-checked this variable to ensure correct application of the protocol

#### `location`
**Definition:** Location where the incident took place  
→ `on-campus`, `off-campus`, `other`

**Coding Protocol:**
- Examine all sources for explicit location information
- Code as `on-campus` if incident occurred within UCLA campus boundaries
- Code as `off-campus` if incident occurred outside campus but in nearby areas associated with UCLA
- Code as `other` for digital spaces, multiple locations, or ambiguous cases
- Begin justification with direct quotes specifying location

**Required Verification:**
- Verify location with direct quotes from sources
- Verify that location information specifically relates to THIS incident
- Verify geographic boundaries when distinguishing between on-campus and off-campus

#### `policy_status`
**Definition:** Whether the incident violated or complied with a campus policy in effect at the time (e.g., TPM, student conduct, anti-discrimination), properly balanced against UCLA's obligations as a state actor bound by First Amendment principles  
→ `compliant`, `violated`, `combination`, `unclear`, `contested`  

**Coding Protocol:**

1. **MANDATORY PRE-CODING STEPS:**
  - You MUST read POL-001, POL-002, POL-003, and PHIL-001 IN THEIR ENTIRETY
  - Review PHIL-001 sections on "Free Speech 101," "Myth Busting," and "What's UCLA to Do"
  - Flag any coding attempt where you have not completely reviewed these documents
  - Acknowledge: UCLA as a state actor is bound by First Amendment principles
  - Understand that content-based speech restrictions face strict scrutiny
  - Note the distinction between protected offensive speech and unprotected categories

2. **DECISION HIERARCHY:**
   - IF administration explicitly states a policy was violated AND there is no available information stating that offending behavior was later brought into compliance:
     * Code as `violated`
     * Cite the exact statement with source ID

   - **IF NO** explicit statement of violation exists:
     
     A. **TRUE THREATS/UNPROTECTED SPEECH TEST:**
        * Review PHIL-001 section on "categorical exceptions" to free speech
        * Check if incident involves true threats, fighting words, or harassment that substantially interferes with educational access, etc.
        * If incident clearly falls into one of these explicitly unprotected categories → code as `violated`
        * Provide direct quotes from PHIL-001 showing why the speech is categorically unprotected
     
     B. **FIRST AMENDMENT BALANCING TEST:**
        * Even if the incident appears to conflict with policy language, it MUST be weighed against UCLA's state actor status
        * Reminder: Offensive, antisemitic, or racist content is generally protected speech unless it rises to unprotected categories
        * Administrative condemnation does NOT automatically mean policy violation
        * When ambiguous: lean toward protecting speech in accordance with constitutional principles

     C. **DEFAULT DIRECTION:**  
        * In cases of doubt about whether offensive speech is unprotected  
        * Code as `compliant` rather than `violated`  
        * Explain balancing test in justification
    
   - IF The incident involved both compliance and violation (e.g., a protest began in violation of TPM policy but later moved to a location consistent with university protest guidelines)  
     * Code as `combination`
     * Provide direct quotes from statements and/or sources that indicate the incident was both compliant with and in violation of policy 
  
   - IF insufficient information exists to determine whether a policy was violated or which policy applies  
     * Code as `unclear`
     * Comment on whether it was incident details or applicable policy information that was insufficient to code this variable
   
   - IF the administration and participants explicitly disagree about whether a policy was violated OR the policy's applicability or enforcement was formally challenged OR different administrative sources contradict each other regarding violation status
     * code as `contested`
     * Document the competing claims with direct quotes

3. **JUSTIFICATION REQUIREMENTS:**
  - Begin with: "After reviewing POL-001, POL-002, POL-003, and PHIL-001 in their entirety..."
  - Include direct quotes from relevant policies AND PHIL-001 regarding free speech protections
  - Provide explicit First Amendment balancing analysis
  - Explain clearly why the incident does or does not qualify as unprotected speech
  - Acknowledge the high bar for speech restriction at public universities

**Verification checklist:**
- I have read POL-001, POL-002, POL-003, and PHIL-001 in their ENTIRETY (not just skimmed)
- I have specifically reviewed PHIL-001's sections on "Free Speech 101," "Categorical Exceptions," and "What's UCLA to Do"
- I have identified whether the administration explicitly stated a policy violation (providing exact quote if so)
- I have checked that my analysis is in reference to the incident in question only
- I acknowledge that if within the broader context there are also policy violations, those violations are addressed as separate incidents (e.g. if the incident is an offensive display at a protest, only the policy status of the display with regard to TPM and speech are in question, not the policy status of any aspects of the protest in general)
- I have rigorously tested whether the incident falls into a SPECIFIC category of unprotected speech per PHIL-001
- I have explicitly acknowledged in my justification that UCLA is bound by the First Amendment as a state actor
- I have distinguished between administrative condemnation and actual policy violation in my analysis
- I have recognized that offensive, antisemitic, or racist expression is generally protected speech unless it rises to the level of unprotected categories
- In the absence of a statement of violation from the administration, in cases of ambiguity, I have defaulted to protecting speech rather than restricting it
- My justification includes explicit quotes from BOTH policy documents AND PHIL-001's free speech sections
- I have included a clear First Amendment balancing analysis in my justification
- I have NOT coded as "violated" based solely on the offensive or hateful nature of the speech
- I have NOT equated administrative condemnation with policy violation
- I have double-checked my reasoning to ensure I'm not defaulting to moral judgments rather than constitutional analysis

#### `policy_violation_type`
**Definition:** What type of formal university policy was violated, if any  
→ `TPM_policy`, `student_conduct`, `anti_discrimination`, `non-affiliate`, `combination`, `none`

**Coding Protocol:**
- Code as `TPM_policy` if:
  * Breach of Time, Place, and Manner policies occurred
  * Examples: unpermitted amplification, obstruction, disruption as defined in policy
- Code as `student_conduct` if:
  * Code of conduct violations by individuals or groups occurred
- Code as `anti_discrimination` if:
  * Incident involved or was alleged to involve identity-based exclusion, hate speech, retaliation, or targeted harassment
- Code as `non-affiliate` if:
  * Non-affiliate conduct violations by individuals or groups occurred
- Code as `combination` if:
  * Violated a combination of above categories
- Code as `none` if:
  * No violation occurred (use if `policy_status: compliant`)
- This variable refers to the specific incident in question only
- If broader context includes other policy violations, those violations are addressed in their originating incidents

**Required Verification:**
- Verify that policy violations specifically relate to THIS incident
- Verify the specific policy category with direct quotes from policy documents
- Verify consistency with `policy_status` coding (if `policy_status` = `compliant`, then `policy_violation_type` must be `none`)

#### `norm_violation_type`
**Definition:** What type of institutional or ethical norm was undermined, regardless of policy status  
→ `bias/discrimination`, `admin_policy_failure`, `student_policy_failure`, `resource_misuse`, `community_harm`, `individual_harm`, `none`, `multiple`

**Coding Protocol:**
- Code as `bias/discrimination` if:
  * Incident involved or was alleged to involve identity-based exclusion, derogatory expression, retaliation, or targeted behavior perceived as hostile toward a protected group
- Code as `admin_policy_failure` if:
  * The university failed to follow or uphold its own stated policies or procedures
  * Examples: not enforcing relevant rules, bypassing due process, failing to intervene when policy clearly applied
- Code as `student_policy_failure` if:
  * A student organization or governing body failed to follow its own published rules or commitments
  * Examples: violated non-exclusivity, misused funds, failed to follow internal procedures
- Code as `resource_misuse` if:
  * Misuse of university-allocated resources occurred
  * Examples: student fee funding, exclusive use of shared spaces, improper access to facilities
- Code as `community_harm` if:
  * Cultural damage or damage to group morale caused by disruptive acts having impact on a large-scale
  * Example: impromptu chants by groups of students in classroom hallways
- Code as `individual_harm` if:
  * Bullying, physical aggression, hostility, non-credible threats occurred
- Code as `none` if:
  * No discernible norm was violated
- Code as `multiple` if:
  * More than one norm violation applies
- An institutional norm violation undermines or contradicts core values, expectations, or ethical standards of the institution—even if no specific written policy was technically broken
- This captures harm or dysfunction beyond technical rules—factors that erode trust, equity, or accountability within a campus community
- Looking for soft failures (e.g., passive admin neglect), structural problems (e.g., uneven enforcement), moral or reputational failures, and/or institutional and organizational responsibility to self-regulate (e.g. self-governance failures)
- These violations may contribute to a hostile environment by totality of circumstances (a case for submitting a report for every incident even if on its own it doesn’t meet the school or federal policy violation threshold)

**Required Verification:**
- Verify that norm violations specifically relate to THIS incident
- Verify the norm violation category with direct quotes from sources
- If applicable, distinguish between technical policy violations and ethical/normative violations

---

### ORDINAL CATEGORICAL VARIABLES

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `severity_score`
**Definition:** The extent of OBSERVABLE direct physical harm, credible risk, or disruption caused by escalation to individuals, campus operations, or institutional safety at the time the incident occurred  
→ `low`, `moderate`, `elevated`, `high`

**Special Protocol for severity_score:**

1. **FOUNDATIONAL DEFINITION:**
   - Severity Score measures: The extent of OBSERVABLE direct physical harm, credible risk, or disruption caused by escalation to individuals, campus operations, or institutional safety at the time the incident occurred.

2. **OPERATIONAL DEFINITIONS:**
   - "Observable" means documented in primary sources (contemporaneous, direct records), not secondary sources
   - "Disruption" means measurable interference with normal university operations
   - "Credible risk" means a specific threat with reasonable likelihood of execution
   - "Primary sources" are contemporaneous, direct, or verifiable records of harm or disruption such as police reports, medical records, Daily Bruin coverage, and video evidence
   - "Secondary sources" include retrospective analyses or interpretive materials, such as lawsuits, OCR complaints, task force reports, or social media commentary (do not define severity but may clarify ambiguous cases, reveal overlooked harm, or flag contested narratives)---use them to supplement—not override—primary evidence

3. **VERIFICATION CHECKLIST:**
   Before assigning a severity score, explicitly verify and document the presence or absence of:
   - Direct physical harm to persons (documented injuries or medical attention)
   - Credible risk to physical safety (specific threats with likelihood of execution)
   - Disruption to campus operations (measurable interference with university functions)
   - Disruption to institutional safety (required security response)
   - Escalation that affected individuals, operations, or safety (documented intervention)

4. **DECISION CRITERIA:**
   - Code as `low` if:
     * No credible threat or physical harm
     * Any disturbance was brief, self-resolving, and required no monitoring or intervention
   - Code as `moderate` if:
     * Some disruption or localized risk occurred
     * Examples: confrontations, non-credible threats, brief space occupation, or minor property damage
     * May have prompted a police or admin response but no formal escalation (no dispersal order, use of force, arrest)
   - Code as `elevated` if:
     * Institutional escalation without confirmed harm
     * Examples: dispersal order issued, event shutdown, police mobilization—but no arrests, injuries, or force used
     * Admin or police took significant preventive action despite limited or ambiguous actual risk
   - Code as `high` if:
     * Clear immediate harm or serious disruption
     * Examples: physical violence, credible threats, arrests, dispersal orders with enforcement, or hospitalization
     * Triggered formal institutional responses: investigation, discipline, shutdown, or use of force

5. **CRITICAL REMINDER:**
   - Subjective feelings of fear, psychological distress, or offensive content are NOT sufficient for higher severity scores unless they resulted in measurable disruption to campus operations or institutional safety.
   - Nature of administrative action (whether it is a "strong" reaction, the "wrong" reaction, or none at all) is also irrelevant to severity level 

6. **REQUIRED JUSTIFICATION FORMAT:**
   - Begin with: "Based on the verification checklist, this incident shows [elements present/not present]..."
   - Provide direct evidence for any elements present with quotes from primary sources
   - If applicable, supplement primary source evidence with quotes from secondary sources
   - Explicitly explain why the incident does NOT qualify for higher severity levels

**Required Verification:**
- I have explicitly addressed each element on the verification checklist
- I have provided direct evidence for any elements present
- I have explicitly explained why the incident does NOT qualify for higher severity levels
- I have documented any discrepancies between sources
- I have documented which source types have contributed to my analysis (i.e. "primary" v. "secondary")
- I have begun my justification with: "Based on the verification checklist, this incident shows [elements present/not present]..."

#### `police_involvement`
**Definition:** The extent of police involvement    
→ `none`, `intervention`, `escalation`, `arrest`

**Coding Protocol:**
- Code as `none` if:
  * No police presence or involvement is documented
- Code as `intervention` if:
  * Police were present but primarily monitoring
  * Police facilitated movement or provided guidance
  * No direct enforcement actions were taken
- Code as `escalation` if:
  * Police took active enforcement steps
  * Examples: dispersal orders, physical containment, show of force, tactical deployment
  * But no arrests were made
- Code as `arrest` if:
  * Any arrests were made during the incident
- Begin justification with direct quotes documenting police actions

**Required Verification:**
- Verify police actions with direct quotes from sources
- Verify that police involvement specifically relates to THIS incident
- Distinguish between different levels of police involvement with explicit documentation

---

### QUANTITATIVE VARIABLES

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `latency_days`
**Definition:** Number of days between the earliest incident date stated by a source and the earliest admin response date, as defined by the time stamp in any ADM source
→ Integer

**Coding Protocol:**
- Identify the earliest incident date from sources
- Identify the earliest administrative response date from ADM sources
- Calculate the number of days between these two dates (inclusive)
- If no administrative response occurred, code as `n/a`
- Begin justification with direct quotes establishing both dates

**Required Verification:**
- Verify incident date with direct quotes from sources
- Verify administrative response date with direct quotes from ADM sources
- Verify correct calculation of days between dates
- Verify consistency with `admin_response_type` coding (if `admin_response_type` = `none`, then `latency_days` must = `n/a`)

---

### STRUCTURED QUALITATIVE VARIABLES - PART 1

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `administrative_tone`
**Definition:** Language tone used by administration  
→ `conciliatory`, `neutral`, `dismissive`, `condemnation`, `combination`

**Coding Protocol:**
- Examine all administrative communications in sources
- Code as `conciliatory` if:
  * Expresses empathy, acknowledges difficulties or distress
  * Emphasizes community values or healing
  * Examples: "We understand the circumstances are hard on everyone" 
- Code as `neutral` if:
  * Uses factual, procedural, or objective language regarding rules or policy
  * Without overt emotional or moral framing
  * Examples: "The university will review the incident according to established procedures"
- Code as `dismissive` if:
  * Uses vague or generic language when attributing responsibility or identifying actors, even when detailed information is publicly available.
  * Example: "There were reports of violence by some"
  * May conflate activity in violation of applicable law or policy with behavior that goes against values
  * Example: "Violence goes against our values"
- Code as `condemnation` if:
  * Denounces specific behavior as morally wrong, harmful, or against institutional standards or values
  * Examples: "We are appalled by this hateful act," "This behavior has no place in our community"
- Code as `combination` if:
  * Exhibits multiple tones in distinct parts of the response
- If combination occurs due to parallel rhetoric addressing multiple incidents, focus only on portions relevant to THIS incident
- Begin justification with direct quotes illustrating the administrative tone

**Required Verification:**
- Verify administrative tone with direct quotes from ADM sources
- Verify that tone indicators specifically relate to THIS incident
- Verify the presence of multiple distinct tones when coding as `combination`

#### `administrative_positioning`
**Definition:** How the incident was framed in administrative narratives  
→ `civil_rights`, `safety/security_threat`, `alleged_policy_violation`, `none`, `n/a`  

**Coding Protocol:**
- Examine all administrative communications in sources
- Code as `civil_rights` if:
  * Framed as implicating the university's duty to protect or balance civil rights
  * Examples: free expression, equal protection
  * E.g., "The university has long-held beliefs in the right to protest," “We are committed to the rights of all students to attend classes in an environment free from discrimination”
- Code as `safety/security_threat` if:
  * Framed as endangering physical safety, public order, or campus operations
  * Used to justify law enforcement or restrictions
  * E.g., "The protest posed a threat to campus security," “TPM rules are enforced to ensure student safety”
- Code as `alleged_policy_violation` if:
  * Framed as a violation of established university rules, codes of conduct, or procedural guidelines
  * E.g., "The encampment was unauthorized," "Posting flyers without permission violated campus policy"
- Code as `none` if:
  * No discernible narrative frame was offered in relation to the incident
- Code as `n/a` if:
  * No admin response occurred (`admin_response_type` = `none`)
- Begin justification with direct quotes illustrating the administrative framing

**Required Verification:**
- Verify administrative framing with direct quotes from ADM sources
- Verify that framing specifically relates to THIS incident
- Verify consistency with `admin_response_type` coding (if `admin_response_type` = `none`, then `administrative_positioning` must be `n/a`)

#### `media_positioning`
**Definition:** How the incident was framed in media narratives from sources contributing to `media_coverage_level`  
→ `group_targeting`, `security_failure`, `student_endangerment`, `impermissible_behavior`, `reputational`, `political_strategy`, `financial_impact`, `unclear`, `n/a`

**Coding Protocol:**
- Examine all media sources contributing to `media_coverage_level`
- Code as `group_targeting` if:
  * Frames the incident as harassment or discrimination targeting a particular group
  * May involve political identity or protected class status
  * E.g., "Jewish students face growing antisemitism on campus," “Muslim students report bullying on campus”
- Code as `security_failure` if:
  * Frames the incident as a breakdown of institutional control by admin, police, and/or campus operations
  * Focus is on failure to contain, prevent, or manage unrest
  * E.g., "Campus protest spirals out of control," “Officials slow to respond to unrest.”
- Code as `student_endangerment` if:
  * Frames the incident around risk or harm directly experienced by students
  * Focus is on physical danger, trauma, or unsafe conditions
  * E.g., "Students injured during protest crackdown," “Tensions on campus put safety at risk.”
- Code as `impermissible_behavior` if:
  * Highlights breaches of law, code of conduct, or permit allowances
  * E.g., "Demonstrators trespassed into restricted areas," “Protest violated campus rules”
- Code as `reputational` if:
  * Stresses impact of the incident on university image, branding, or donor relations
  * E.g., "University faces backlash from alumni over protest response," “School’s reputation at stake amid controversy”
- Code as `political_strategy` if:
  * Links the incident to partisan goals, elections, broader ideological movements, or legislative agendas
  * E.g., "Campus protests echo national political divides," “Activists push policy change through campus unrest”
- Code as `financial_impact` if:
  * Focuses on monetary costs, damages, or budgetary consequences tied to the incident
  * E.g., "Protest damages cost university $500,000," “Security costs for demonstrations strain university budget.”
- Code as `unclear` if:
  * Media report mentions the incident but does not offer a clear narrative framing
- Code as `n/a` if:
  * No media coverage (`media_coverage_level` = `none`)
- If multiple framings appear, code based on the most prominent/frequent framing
- Begin justification with direct quotes illustrating the media framing

**Required Verification:**
- Verify media framing with direct quotes from media sources
- Verify that framing specifically relates to THIS incident
- Verify consistency with `media_coverage_level` coding (if `media_coverage_level` = `none`, then `media_positioning` must be `n/a`)

---

### STRUCTURED QUALITATIVE VARIABLES - PART 2

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `actor_tone`, `target_tone`
**Definition:** How students speak (attitude/rhetorical style) or depict an incident; captures emotional flavor rather than narrative framing or strategy.  
→ `accusatory`, `fear/distress`, `defensive`, `defiant`, `mobilizing/escalatory`, `conciliatory`, `solidarity`, `combination`

**Special Protocol for actor_tone and target_tone:**

1. **COMPREHENSIVE SOURCE REVIEW (MANDATORY):**
   - You MUST examine ALL sources that contain statements or reactions from the relevant group (actor or target)
   - Review ALL sources before determining tone:
     * ALL social media (SOC sources)
     * ALL news quotes and interviews
     * ALL official statements
     * ALL documented reactions in any format
   - Do NOT code tone until completing a full review of ALL available sources

2. **QUANTITATIVE THRESHOLD DETERMINATION:**
   - When different tones appear across sources:
     * Count the number of distinct references for each tone category
     * Explicitly document the count for each tone identified
     * Code the predominant tone ONLY if it represents at least 60% of all tone references
     * Otherwise, code as 'combination' and specify which tones are present
   - Example calculation:
     * 5 references to 'fear/distress' out of 8 total references = 62.5% → code as 'fear/distress'
     * 4 references to 'accusatory' out of 7 total references = 57% → code as 'combination'

3. **WEIGHTING AND EVALUATION RULES:**
   - Statements from formal organization representatives count as equal weight to multiple individual statements
   - Consider both frequency AND intensity of tone indicators
   - Official statements (e.g., organization press releases) count as ONE source but carry equal weight
   - Multiple similar statements from individuals carry cumulative weight
   - Evaluate intensity based on:
     * Language strength and emotional content
     * Context and prominence
     * Directness of expression

4. **TONE CATEGORIES:**
   - Code as `accusatory` if:
     * Attributes blame, ignorance, or wrongdoing to another group or actor with moral judgment or indignation
     * E.g., "Admin has failed us," "They are complicit," “It was disheartening to see my fellow students defending that”
   - Code as `fear/distress` if:
     * Emphasizes emotional vulnerability, fear, or a sense of being targeted, unsafe, or endangered
     * E.g., "We no longer feel safe on campus", "We were physically threatened"
   - Code as `defensive` if:
     * Justifies or defends the group's own actions or counters criticisms
     * E.g., "We acted within policy…", "This was misrepresented…"
   - Code as `defiant` if:
     * Rejects authority or consequences with pride, disdain, or resistance
     * E.g., "You're fascist aggressors," "Don't obey in advance"
   - Code as `mobilizing/escalatory` if:
     * Urges greater collective action, confrontation, or disruption; a call to action, a threat to escalate, or both
     * E.g., "Walkout at noon!", "If they don't agree, we'll shut it down!"
   - Code as `conciliatory` if:
     * Seeks compromise, mutual understanding, or de-escalation
     * E.g., "We welcome dialogue," "Let's find common ground"
   - Code as `solidarity` if:
     * Expresses emotional identification with or support for another group's cause
     * E.g., "We stand with…"
   - Code as `combination` if:
     * Multiple distinct tones present without any reaching 60% threshold

5. **REQUIRED JUSTIFICATION FORMAT:**
   - Begin with: "I reviewed the following sources containing [actor/target] tone indicators: [list ALL sources]"
   - Include quantitative methodology: "Found approximately X references to [tone1], Y references to [tone2], etc. This represents [calculate percentage]% of all tone references"
   - For EACH tone identified, provide at least TWO specific quotations: "SOURCE-XXX: \"[exact quote demonstrating tone]\""
   - Include weighting explanation: "Formal organization statements were weighted as: [explanation]"
   - End with decision explanation: "[Selected tone] represents the predominant tone because [explanation]" OR "No single tone reaches the 60% threshold, so coding as 'combination' of [list tones]"

**Required Verification:**
- I have examined EVERY source containing statements or reactions from the relevant group
- I have verified that content from EVERY source chosen for justification is RELEVANT TO THE INCIDENT
- I have documented EACH source reviewed in my justification
- I have counted the EXACT number of references for EACH tone category identified
- I have calculated the PERCENTAGE that each tone represents of all references
- I have verified whether any tone reaches or exceeds the 60% threshold
- I have provided AT LEAST TWO specific quotations for EACH tone identified
- I have explicitly stated my counting methodology in the justification
- I have properly weighted organizational statements equally to multiple individual statements
- I have considered both frequency AND intensity in my analysis
- I have prioritized direct statements from affected individuals/groups OVER third-party characterizations
- I have coded as 'combination' if no single tone reaches the 60% threshold
- I have specified which tones are present when coding as 'combination'
- I have reviewed my calculations to ensure mathematical accuracy
- I have re-examined any borderline cases (near 60% threshold) for potential miscounts

#### `actor_positioning`, `target_positioning`
**Definition:** How students frame the incident's meaning, goals, or implications; captures strategic narrative rather than emotional tone  
→ `rights-based`, `oversight_failure`, `policy_violation_defense`, `financial_fairness`, `combination`, `none`, `n/a`

**Coding Protocol:**
- Examine all sources containing actor/target framings
- Code as `rights-based` if:
  * Frames the incident around students' legally or morally protected rights and freedoms
  * Includes claims of being denied fair treatment, representation, or inclusion under civil rights principles
  * E.g., "University overreach is chilling protected speech," “We were subject to a heckler’s veto,” “This organization discriminates”
- Code as `oversight_failure` if:
  * Frames the incident as resulting from administrative indifference, selective enforcement, or unjust policing
  * E.g., "The university failed to intervene," "Police escalated without cause," “The office failed to respond to reports”
- Code as `policy_violation_defense` if:
  * Frames student actions as compliant with university policies OR
  * Accuses administration of unfair discretionary action
  * E.g., "Their structure was allowed to remain after permit expiration," “We have the right to unplanned protest in the free speech zone”
- Code as `financial_grievance` if:
  * Cites tuition, fees, university resources, or funding allocation as basis for grievances with administration or another party
  * E.g., "Organization that uses student fees partakes in activities that exclude certain groups," “UCPD budget increases to fund more less-than-lethal weapons”
- Code as `combination` if:
  * Multiple framings presented in one narrative (e.g., citing both rights violations and oversight failures)
- Code as `none` if:
  * No clear framing detected or purely factual logistics
- Code as `n/a` if:
  * No student response occurred
- Begin justification with direct quotes illustrating the framing

**Required Verification:**
- Verify positioning with direct quotes from sources
- Verify that positioning specifically relates to THIS incident
- Verify the distinction between emotional tone (captured in `actor_tone`/`target_tone`) and strategic narrative framing (positioning can connect incident to broader narratives)
- Verify the presence of multiple distinct framings when coding as `combination`

---

### UNSTRUCTURED QUALITATIVE VARIABLES

**⚠️ BEFORE CODING THESE VARIABLES:**
- Review SECTION 2: Incident Boundary Identification
- Review SECTION 3: Source Identification and Reference
- Review SECTION 4: Source Extraction and Validation
- Review SECTION 5: Justification Construction
- Review SECTION 6: Source Verification

#### `notes`
**Definition:** Freeform summary or contextual annotation  
→ No predefined values

**Coding Protocol:**
- Provide a concise summary of the incident based on all sources
- Include key details established by the sources
- Focus on factual information rather than interpretation
- Highlight any noteworthy context not captured by other variables
- Keep to relevant information only - avoid speculation or editorial comments
- Maximum 3-5 sentences for clarity

**Required Verification:**
- Verify that notes are based on direct evidence from sources
- Verify that notes are factual rather than interpretive
- Verify that notes focus on THIS incident specifically

---

### DERIVED VARIABLES

#### `admin_response_level` (Derived)
**Definition:** Strength or adequacy of the administrative response  
→ `none`, `minimal`, `adequate`, `strong`

**Coding Protocol:**
- This variable is automatically derived from `admin_response_type`, `accountability_follow_up`, and `admin_support_offered`
- The derivation follows this matrix:

| `admin_response_level` | `admin_response_type`   | `accountability_follow_up`      | `admin_support_offered`                                           |
|------------------------------------|--------------------------|----------------------------------|-------------------------------------------------------------------|
| `none`                             | `none`                   | `n/a`                            | `n/a`                                                   |
| `minimal`                          | `general_statement`      | `none`                           | `none`                                                            |
| `adequate`                         | `incident_specific`      | `proposed`| **Any one** of: `admin_support_offered` |
| `strong`                           | `incident_specific`      | `proposed`                       | **Any two or more** of: `admin_support_offered`|

- If two or more options reside on a response level, that is the designated level
- E.g. if `admin_response_type` = `incident_specific` but both `accountability_follow_up` and `admin_support_offered` = `none`, downgrade to `minimal` by manual override (captures purely symbolic gestures)

**Required Verification:**
- Verify consistency with the source variables (`admin_response_type`, `accountability_follow_up`, `admin_support_offered`)
- Verify correct application of the derivation matrix

---

## OUTPUT FORMAT

For each incident, produce a YAML file following this exact structure:

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

## FINAL VERIFICATION

Before submitting any incident coding, complete this final verification:

1. **General Compliance:**
   - I have included VERBATIM quotes specifically about THIS incident for each claim
   - ALL quotes are properly attributed to specific source IDs exactly as provided
   - I have verified each quote refers to THIS incident (not general patterns)
   - I have RE-VERIFIED all quotes against original sources
   - My interpretation follows, not precedes, direct evidence
   - I have EXCLUDED information about similar incidents or general conditions
   - I have used ONLY source IDs explicitly provided in materials
   - I have verified all source IDs exist in the provided materials

2. **Variable-Specific Checks:**
   - I have completed all required verification checklists for special variables
   - I have applied the specific protocols for each variable type
   - I have maintained consistency between related variables
   - I have formatted justifications according to variable-specific requirements

3. **Output Format:**
   - My YAML follows the exact structure shown in the output format section
   - All variable names are correctly spelled and formatted
   - All justifications begin with direct quotes from sources
   - All sources are properly listed in the sources field for each variable