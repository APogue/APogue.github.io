---
title: Codebook
layout: project_default
permalink: /projects/codebook/
---

# Codebook

This codebook defines all structured and qualitative fields used in the incident analysis project. Each variable includes its function, valid values (if applicable), and notes for interpretation. Field types are grouped according to a consistent classification system (see [Field Type Reference](#field-type-reference)).

---

## Critical Source Validation Protocol

To prevent the error of confusing codebook examples with actual source content:

1. **REMEMBER**: Examples in this codebook are ILLUSTRATIVE ONLY. All coding decisions must be based on actual source content, not examples.

2. **Required Source Verification**: For each variable coded:
   - First, extract and isolate the relevant source text
   - Copy exact quotes that support your coding decision
   - Verify quotes match the source verbatim before including in justifications
   - Never rely on memory or paraphrasing when direct evidence is required

3. **Justification Format Requirements**:
   - Begin each justification with a verbatim quote from the source (in quotation marks)
   - For longer sources, include the specific paragraph or section being referenced
   - Only after presenting direct evidence, provide your interpretation

4. **Double-Verification Step**: Before submitting any coding:
   - For each variable, re-open the source document
   - Confirm any quotes used in justifications appear exactly as cited
   - Flag and review any justification that lacks direct quotes

## Source Reference Protocol

To prevent references to existing sources using non-existent source names: 

1. **Use ONLY source IDs explicitly provided in materials**: 
   - Reference sources EXCLUSIVELY by the filename/ID given to you (e.g., "ADM-001.txt", "DB-001.txt", "SOC-006.png")
   - NEVER create, invent, or assume source IDs that weren't explicitly provided
   - If referencing an image or visual content, use its exact filename (e.g., "SOC-006" not "Image 5")

2. **No renumbering or reorganizing**:
   - Source IDs may not be consecutive (e.g., you might have SOC-001, SOC-006, SOC-014)
   - NEVER attempt to renumber, reorganize, or create a new naming system
   - If uncertain about a source ID, quote directly from the filename as given

3. **Direct filename referencing**:
   - When citing a source, include its exact filename in your sources list
   - Example: sources: [ADM-001, DB-001, SOC-006]
   - For any visual source, use the exact filename without creating alternative labels

4. **Source verification**:
   - Before submitting coding, verify that every source ID cited exists in the provided materials
   - Remove any reference to sources that cannot be verified with exact filenames

## Justification Protocol

To prevent confusion in using adjacent incidents or broader context as evidence for the incident being coded:

1. **Contextual Accuracy**:
   - Ensure quotations refer SPECIFICALLY to the incident being coded, not broader events
   - Track narrative flow in sources to understand what pronouns (e.g., "it", "this") refer to
   - Verify that statements aren't about adjacent issues or general climate

2. **Evidence Verification**:
   - Read the FULL paragraph surrounding any quote you use as evidence
   - Never extract quotes without understanding their complete context
   - If a statement refers to multiple events or a general situation, do not use it as evidence for a specific incident

3. **Precision in Counting**:
   - When noting "found approximately X references" to a particular tone or theme, only count references that specifically address the incident being coded
   - For variables requiring quantitative thresholds (e.g., >60% of references), document your counting methodology

## 🔹 Metadata & Utility Fields

- **`incident_id`**  
  Globally unique identifier for each incident (e.g., `INC-001`)

- **`date`**  
  Date the incident occurred (`YYYY-MM-DD`)

- **`source_ids`**  
  List of internal source references used for incident documentation  
  → Format: `[DB-001, ADM-014]`

- **`keywords`**  
  Internal-use incident tags for filtering and scrape  
  → Format: `[task-force, encampment]`

---

## 🔹 Binary / Boolean

- **`org_affiliated_actor`**  
  Was the actor affiliated with either a UCLA student org or USAC?  
  → `true`, `false`  
  Mark `true` if:  
  - An org member was quoted, claimed responsibility, hosted, or was listed as a sponsor  
  - The org publicly endorsed or amplified the act (e.g., repost, montage, statement of support)  
  *Do not infer membership solely from an individual's participation in an org-associated protest*

- **`actor_student`**  
  Was the actor a student at UCLA?     
  → `true`, `false`  
  Mark `true` if  
  - There is no assertion of non-affiliation by the Daily Bruin or 3rd party media. It is not necessary to find evidence in any source otherwise, if there is no assertion of non-affiliation, that is sufficient. 

---

## 🔹 Nominal Categorical

- **`admin_response_type`**  
  Categorizes whether and how the administration publicly acknowledged the incident  
  → `incident_specific`, `general_statement`, `none`  
  Use:
  - `incident_specific` → The incident was explicitly named or clearly referenced in a public admin statement within 2 weeks 
  - `general_statement` → A public communication addressed related issues (e.g., protest safety, antisemitism) within 2 weeks but did not mention the incident
  - `none` → No public administrative response occurred within 2 weeks

  Note: `general_statement` is meant to identify umbrella statements that are likely purposed as a "catch-all" for several campus incidents. Concurrent statements that may incidentally relate, but are not "responses" are not considered (i.e. a UC-wide campus climate initiative announced at an event where an incident takes place at UCLA is not considered a response).

- **`accountability_follow_up`**  
  Categorizes the nature of any administrative follow-up action (disciplinary process, civil and/or police investigation) to hold offending actors accountable  
  → `none`, `proposed`, `n/a`  
  Use:
  - `proposed` → Follow-up action was proposed 
  - `none` → Response occurred, but no action was proposed
  - `n/a` → No admin response occurred  

  Note: This variable captures what the administration **explicitly named or offered** in communications. It does *not* confirm whether actions were completed. Actions initiated by students are credited to functioning accountability systems (e.g., reporting to EDI office) and are **not** coded. This variable isolates **administrative discretion** and reflects whether university leadership publicly acknowledged a duty to act.

- **`admin_support_offered`**  
  Whether there was supportive language included in an administrative response to assist students who may require justice, accountability, or repair  
  → `n/a`, `none`, `counseling/referral`, `violation_warning`, `campus_climate_initiative`, `institutional_alignment`
  - `counseling/referral` → Students were directed to services such as CAPS, ombuds, or external reporting channels (e.g., UCPD, Title IX office)
  - `violation_warning` → Admin issued a statement referencing applicable university rules, laws, or policies, and explicitly warned students or groups about possible violations or consequences
  - `campus_climate_initiative` → Admin referenced a programmatic effort or institutional partnership aimed at improving the long-term inclusion or cultural environment of the campus
  - `positive_inclusion` → Explicitly affirms the dignity and rights of the named, targeted group (*not to be confused with condemnation of acts against that group*) e.g. "Those who advocate on behalf of Palestinians should also be confident of their physical safety on our campuses."
  - `institutional_responsibility` →  Explicitly acknowledges gaps or failures in the institution's approach and commits to specific improvements or changes (does not require the implication of legal fault) e.g. “This display is a painful reminder that we must do more to foster understanding and compassion.” "We are tracking incidents, if behavior becomes pervasive consequences will be imposed.”
  - `general_commitment` → Reaffirms existing commitments as sufficient, without acknowledging specific responsibility or need for change (e.g., "We remain committed to doing all we can...")
  - `none` → An administrative response occurred, but no support was offered
  - `n/a` → No admin response occurred 

- **`target_group`, `actor_group`**  
  Primary identity or identity affiliated with group targeted or affected  
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`media_coverage_level`**  
  Degree of public visibility based on external coverage (excluding Daily Bruin, which is baseline AND excluding any admin activity to avoid endogeneity)  

  CRITICAL CODING REQUIREMENTS: 

  1. Code the **highest qualifying level**. All counts are minimum thresholds.

  2. When coding “moderate” or “high” levels, explicitly identify and list the specific sources that qualify as having “general public reach” in your justification. Do not count mentions of media coverage in other sources. Only use sources provided to you directly in file format.  

  3. If there is ambiguity about whether the threshold for a higher level is met (e.g., unclear if exactly 5 sources exist or if a source truly has "general public reach"), default to the lower classification level. Only assign the higher level when the evidence clearly meets all criteria specified. 

  - `none`: Fewer than 2 sources
  - `low`: At least 2 internal or niche sources (e.g., org IG + campus newspaper other than DB or reddit r/UCLA), no external visibility  
  - `network-amplified`: At least 5 sources within a single ecosystem (e.g., Jewish outlets, topic-specific subreddits or social media groups), no mainstream or outside-community pickup
  - `moderate`: At least 5 sources **across ecosystems**, including **at least two sources** with general public reach (e.g., LAist, KTLA, local media)
  - `high`: At least 5 sources with cross-ecosystem or mainstream pickup (e.g., LAT, NYT, CNN) **or** viral social media exposure (≥ 100k views/interactions)

  Note: 
  1. This variable is inclusive of all incidents that meet the inclusion rule. Incidents coded as `network-amplified`, `moderate`, or `high` necessarily meet the ≥ 5-source threshold due to the replication dynamics of media ecosystems. No qualifying incident is excluded on source-count grounds alone. 
  2. Reflects the degree of public visibility *at the time of the incident*, not retrospective amplification. Only sources published within 14 days of the incident contribute to the level assigned. This ensures media coverage functions as a proxy for real-time administrative visibility and potential public pressure and that `media_coverage_level` is with respect to an incident alone. Some incidents appear much later as part of an aggregate group of incidents (reflecting reporting on a task force report for example) or serve as context alongside more serious incidents; these cases that technically qualify it for mainstream pickup are disregarded. 
  
- **`location`**  
  Location where the incident took place  
  → `on-campus`, `off-campus`, `other`

- **`policy_status`**  
  Whether the incident violated or complied with a campus policy in effect at the time (e.g., TPM, student conduct, anti-discrimination).
  
  **CRITICAL CODING INSTRUCTION:** You MUST read POL-001-POL-003.txt and PHIL-001.txt thoroughly before coding this variable. Your determination must be based on direct evidence, not assumptions:
  
  1. If the administration explicitly states a policy was violated → code as `violated`
  
  2. If no explicit statement of violation exists:
     - Code as `violated` if the incident is stated as unambiguously unprotected by the First Amendment in PHIL-001, i.e. true-threats, etc.  
     - While the incident may conflict with specific policy language, **it must be weighed against UCLA's responsibility as a state actor**: as a public university bound by the First Amendment, UCLA has significant constraints on restricting speech, **even when offensive or containing antisemitic/racist elements**. Content-based speech restrictions face strict scrutiny. 
     - Expressions of hate, unless rising to the level of true threats, fighting words, or harassment that substantially interferes with educational access (not just creating subjective discomfort), are generally protected even when strongly condemned by the administration. 
     - **Administrative condemnation does not automatically mean policy violation**. When in doubt about whether offensive/hateful speech crosses the boundary into unprotected harassment or discrimination, lean toward protecting speech in accordance with constitutional principles outlined in PHIL-001.
     
  
  → `compliant`, `violated`, `combination`, `unclear`, `contested`  
  - `compliant` → The incident clearly followed all applicable policies  
  - `violated` → The incident clearly violated at least one applicable policy  
  - `combination` → The incident involved both compliance and violation (e.g., a protest began in violation of TPM policy but later moved to a **location consistent with university protest guidelines**)  
  - `unclear` → It is not possible to determine from available records whether a policy was violated or which policy applies  
  - `contested` → Administration or participants **disagreed over whether a policy was violated**, or the policy's applicability/enforcement was formally challenged

- **`policy_status`**  
  Whether the incident violated or complied with a campus policy in effect at the time (e.g., TPM, student conduct, anti-discrimination).  
  → `compliant`, `violated`, `combination`, `unclear`, `contested`  
  - `compliant` → The incident clearly followed all applicable policies  
  - `violated` → The incident clearly violated at least one applicable policy  
  - `combination` → The incident involved both compliance and violation (e.g., a protest began in violation of TPM policy but later moved to a **location consistent with university protest guidelines**)  
  - `unclear` → It is not possible to determine from available records whether a policy was violated or which policy applies  
  - `contested` → Administration or participants **disagreed over whether a policy was violated**, or the policy's applicability/enforcement was formally challenged

 

- **`policy_violation_type`**  
  What type of formal university policy was violated, if any  
  → `TPM_policy`, `student_conduct`, `anti_discrimination`, `non-affiliate`, `combination`, `none`
  - `TPM_policy` → Breach of Time, Place, and Manner policies (e.g., unpermitted amplification, obstruction, disruption as defined in policy)
  - `student_conduct` → Code of conduct violations by individuals or groups  
  - `anti_discrimination` → Incident involved or was alleged to involve identity-based exclusion, hate speech, retaliation, or targeted harassment  
  - `non-affiliate` → Non-affiliate conduct violations by individuals or groups
  - `combination` → Violated a combination of above categories  
  - `none` → No violation occurred (use if `incident_policy_status: compliant`)
  
  Note: This is a qualitative indicator. The variable is in reference to the incident in question only. If within the broader context there are also policy violations, those violations are addressed in their originating incidents, not propagated to all related incidents. 

- **`norm_violation_type`**  
  What type of institutional or ethical norm was undermined, regardless of policy status  
  → `bias/discrimination`, `admin_policy_failure`, `student_policy_failure`, `resource_misuse`, `community_harm`, `individual_harm`, `none`, `multiple`
  - `bias/discrimination` → Incident involved or was alleged to involve identity-based exclusion, derogatory expression, retaliation, or targeted behavior perceived as hostile toward a protected group 
  - `admin_policy_failure` → The university failed to follow or uphold its own stated policies or procedures in relation to the incident (e.g., did not enforce relevant rules, bypassed due process, failed to intervene when policy clearly applied)
  - `student_policy_failure` → A student organization or governing body failed to follow its own published rules or commitments (e.g., violated non-exclusivity, misused funds, failed to follow internal procedures)  
  - `resource_misuse` → Misuse of university-allocated resources (e.g., student fee funding, exclusive use of shared spaces, improper access to facilities)  
  - `community_harm` → Cultural damage or damage to group morale caused by disruptive acts having impact on a large-scale (e.g. impromptu chants by groups of students in classroom hallways) 
  - `individual_harm` → Bullying, physical aggression, hostility, non-credible threats
  - `none` → No discernible norm was violated  
  - `multiple` → More than one norm violation applies

  Note: An institutional norm violation means an incident that undermines or contradicts the core values, expectations, or ethical standards of the institution—even if no specific written policy was technically broken. It captures harm or dysfunction beyond technical rules—the kinds of things that erode trust, equity, or accountability within a campus community. It’s what the university is supposed to stand for, even if it's not always written down neatly. Looking for soft failures (e.g., passive admin neglect), structural problems (e.g., uneven enforcement), moral or reputational failures, and/or institutional and organizational responsibility to self-regulate (e.g. self-governance failures). Tracking these violations may also contribute to hostile environment by totality of circumstances (a case for report submission even when a single incident that doesn't meet the school or federal policy violation threshold occurs). 

---

## 🔹 Ordinal Categorical

- **`severity_score`**  
  FOUNDATIONAL DEFINITION: **The extent of OBSERVABLE direct physical harm, credible risk, or disruption caused by escalation to individuals, campus operations, or institutional safety at the time the incident occurred.**

  OPERATIONAL DEFINITIONS:
  - "Observable" means documented in primary sources, not secondary sources (defined in Note 2)
  - "Disruption" means measurable interference with normal university operations
  - "Credible risk" means a specific threat with reasonable likelihood of execution
  
  REQUIRED VERIFICATION CHECKLIST:
  Before assigning a severity score, explicitly verify the presence or absence of:
  □ Direct physical harm to persons
  □ Credible risk to physical safety 
  □ Disruption to campus operations
  □ Disruption to institutional safety
  □ Escalation that affected individuals, operations, or safety

  If NONE of these elements are present, the incident MUST be coded as 'low' severity regardless of psychological impact or offensive content.

  COMMON ERROR WARNING: Subjective feelings of fear, psychological distress, or offensive content - while important for other variables like `target_tone` - do NOT constitute observable harm, risk, or disruption for severity_score unless they resulted in measurable disruption to campus operations or institutional safety.

  Justifications must explicitly address why the incident does NOT qualify for higher severity levels when coding as low or moderate.

  - `low`
    - No credible threat or physical harm
    - Any disturbance was brief, self-resolving, and required no monitoring or intervention
  - `moderate`
    - Some disruption or localized risk. Examples: confrontations, non-credible threats, brief space occupation, or minor property damage
    - May have prompted police or admin response, but no formal escalation (e.g., no dispersal order, use of force, arrest)
  - `elevated`
    - Institutional escalation without confirmed harm. Examples: dispersal order issued, event shutdown, or police mobilization—but no arrests, injuries, or force used
    - Used when admin or police took significant preventive action despite limited or ambiguous actual risk
  - `high`
    - Clear, immediate harm or serious disruption. Examples: physical violence, credible threats, arrests, dispersal orders with enforcement, or hospitalization
    - Triggered formal institutional responses: investigation, discipline, shutdown, or use of force

  Note: 1. Lack of administrative action affects response variables, not severity (severity is an IV). 2. Primary sources are contemporaneous, direct, or verifiable records of harm or disruption (e.g., police reports, medical records, Daily Bruin coverage, video evidence). These determine core variable values such as `severity_score`. Secondary sources include retrospective or interpretive materials (e.g., lawsuits, OCR complaints, task force reports, social media). These do not define severity but may clarify ambiguous cases, reveal overlooked harm, or flag contested narratives. Use them to supplement—not override—primary evidence. Discrepancies between source types should be documented in the `evidence/` YAML file.
  
- **`police_involvement`**  
  The extent of police involvement    
  → `none`, `intervention`, `escalation`, `arrest`

---

## 🔹 Quantitative

- **`latency_days`**  
  Number of days between the earliest incident date stated by a source and the earliest admin response date, as defined by the time stamp in any ADM source
  → Integer  
  → *Derived from* `date` and timestamp of first admin statement

---

## 🔹 Structured Qualitative

- **`administrative_tone`**  
  Language tone used by administration  
  → `conciliatory`, `neutral`, `dismissive`, `condemnation`,  `combination`
  - `conciliatory`→ Expresses empathy, acknowledges difficulties or distress, and emphasizes community values or healing  
  e.g., “We understand the circumstances are hard on everyone,” “We hope everyone adheres to university values”
  - `neutral`→ Uses factual, procedural, or objective language regarding rules or policy without overt emotional or moral framing  
  e.g., “The university will review the incident according to established procedures,” “We are evaluating the situation under applicable campus guidelines.”
  - `dismissive`→ Uses vague or generic language when attributing responsibility or identifying actors, even when detailed information is publicly available. May conflate activity in violation of applicable law or policy with behavior that goes against values  
  e.g., “There were reports of violence by some,” “Some demonstrators partook in activity that goes against our values”
  - `condemnation`→ Denounces specific behavior as morally wrong, harmful, or against institutional standards or values  
  e.g., “We are appalled by this hateful act,” “This behavior has no place in our community.”
  - `combination` → Exhibits multiple tones in distinct parts of the response 

  Note: A combination may occur if the administration is using a parallel rhetoric method to handle multiple incidents involving Jewish students and students who identify as pro-Palestinian in a single statement, if this is confounding then I'll keep only the portions of statements relevant to an incident when coding. There should be no 'judgement' words, or as few as possible, e.g. 'even when detailed info is publicly available and of public interest' should be reduced, and any "judgement" should come out in the results.

- **`administrative_positioning`**  
  How the incident was framed in administrative narratives  
  → `civil_rights`, `safety/security_threat`, `alleged_policy_violation`, `none`, `n/a`  
  - `civil_rights` → Framed as implicating the university’s duty to protect or balance civil rights, i.e. free expression, equal protection  
  e.g., “The university has long-held beliefs in the right to protest”, “We are committed to the rights of all students to attend classes in an environment free from discrimination”
  - `safety/security_threat` → Framed as endangering physical safety, public order, or campus operations; used to justify law enforcement or restrictions  
  e.g., “The protest posed a threat to campus security,” “TPM rules are enforced to ensure student safety”
  - `alleged_policy_violation` → Framed as a violation of established university rules, codes of conduct, or procedural guidelines  
  e.g., “The encampment was unauthorized,” “Posting flyers without permission violated campus policy”
  - `none` → No discernible narrative frame was offered in relation to the incident
  - `n/a` → No admin response occurred 

- **`media_positioning`**  
  How the incident was framed in media narratives from sources contributing to `media_coverage_level`  
  → `group_targeting`, `security_failure`, `student_endangerment`, `impermissible_behavior`, `reputational`, `political_strategy`, `financial_impact`, `unclear`, `n/a`
  - `group_targeting` → Frames the incident as harassment or discrimination targeting a particular group; may involve political identity or protected class status  
  e.g., “Jewish students face growing antisemitism campus,” “Muslim students report bullying on campus”
  - `security_failure` → Frames the incident as a breakdown of institutional control by admin, police, and/or campus operations—focus is on failure to contain, prevent, or manage unrest  
  e.g., “Campus protest spirals out of control,” “Officials slow to respond to unrest.”
  - `student_endangerment` → Frames the incident around risk or harm directly experienced by students—focus is on physical danger, trauma, or unsafe conditions  
  e.g., “Students injured during protest crackdown,” “Tensions on campus put safety at risk.”
  - `impermissible_behavior` → Highlights breaches of law, code of conduct, or permit allowances  
  e.g., “Demonstrators trespassed into restricted areas,” “Protest violated campus rules.”  
  - `reputational` → Stresses impact of the incident on university image, branding, or donor relations  
  e.g., “University faces backlash from alumni over protest response,” “School's reputation at stake amid controversy.”
  - `political_strategy` → Links the incident to partisan goals, elections, broader ideological movements, or legislative agendas  
  e.g., “Campus protests echo national political divides,” “Activists push policy change through campus unrest.”
  - `financial_impact` → Focuses on monetary costs, damages, or budgetary consequences tied to the incident  
  e.g., “Protest damages cost university $500,000,” “Security costs for demonstrations strain university budget.”
  - `unclear` → Media report mentions the incident but does not offer a clear narrative framing.
  - `n/a` → No media coverage, i.e. `media_coverage_level` = `none`

- **`actor_tone`, `target_tone`**  
  How students speak (attitude / rhetorical style) or depict an incident; captures emotional flavor rather than narrative framing or strategy.  
  
  CRITICAL CODING REQUIREMENTS FOR `target_tone` and `actor_tone`:

  1. COMPREHENSIVE SOURCE REVIEW: 
     - You MUST examine ALL sources that contain statements or reactions from the relevant group (actor or target).
     - Review ALL social media (SOC sources), news quotes, and other documented reactions before determining tone.

  2. QUANTITATIVE THRESHOLD:
     - When different tones appear across sources, count the number of distinct references for each tone category.
     - Code the predominant tone ONLY if it represents at least 60% of all tone references.
     - Otherwise, code as 'combination' and specify which tones are present in your justification.

  3. REQUIRED JUSTIFICATION FORMAT:
     - List EACH SOURCE containing relevant tone indicators
     - For EACH tone identified, provide at least two specific quotations or examples
     - Explicitly state your counting methodology: "Found approximately X references to [tone1] and Y references to [tone2]"

  4. WEIGHTING CONSIDERATIONS:
     - Statements from formal organization representatives should be given equal weight to multiple individual statements
     - Consider both frequency AND intensity of tone indicators

  5. CROSS-SOURCE VERIFICATION:
     - Look for consistency across different types of sources (official statements vs. social media)
     - When inconsistencies exist between sources, prioritize statements directly from affected individuals/groups over third-party characterizations

  → `accusatory`, `fear/distress`, `defensive`, `defiant`, `mobilizing/escalatory`, `conciliatory`, `solidarity`, `combination`  
  - `accusatory` → Attributes blame or wrongdoing to another group or actor with moral judgment or indignation  
    e.g., “Admin has failed us,” “They are complicit”
  - `fear/distress` → Emphasizes emotional vulnerability, fear, or a sense of being targeted, unsafe, or endangered   
    e.g., “We no longer feel safe on campus”, "We were physically threatened"
  - `defensive` → Justifies or defends the group’s own actions or counters criticisms  
    e.g., “We acted within policy…”, “This was misrepresented…”
  - `defiant` → Rejects authority or consequences with pride, disdain, or resistance  
    e.g., “You’re fascist aggressors,” “Don’t obey in advance”
  - `mobilizing/escalatory` → Urges greater collective action, confrontation, or disruption; a call to action, a threat to escalate, or both  
    e.g., “Join us at noon!”, “If they don’t agree, we'll shut it down!”
  - `conciliatory` → Seeks compromise, mutual understanding, or de-escalation  
    e.g., “We welcome dialogue,” “Let’s find common ground”
  - `solidarity` → Expresses emotional identification with or support for another group’s cause  
    e.g., “We stand with…”
  - `combination` → Multiple distinct tones present in the response (e.g., fear + accusation)

- **`actor_positioning`, `target_positioning`**  
  How students frame the incident’s meaning, goals, or implications; captures strategic narrative rather than emotional tone  
  → `rights-based`, `oversight_failure`, `policy_violation_defense`, `financial_fairness`, `combination`, `none`, `n/a` 
  - `rights-based` → Frames the incident around students’ legally or morally protected rights and freedoms, including any claim of being denied fair treatment, representation, or inclusion under civil rights principles  
  e.g., “University overreach is chilling protected speech,” “We were subject to a heckler’s veto," "This organization discriminates"
  - `oversight_failure` → Frames the incident as resulting from administrative indifference, selective enforcement, or unjust policing  
  e.g., “The university failed to intervene,” “Police escalated without cause,” "The office failed to respond to reports"
  - `policy_violation_defense` → Frames student actions as compliant with university policies, or accuses administration of unfair discretionary action  
  e.g., “Their structure was allowed to remain after permit expiration,” “We have the right to unplanned protest in the free speech zone”
  - `financial_fairness` → Cites tuition or resource-allocation as basis for grievances with administration or another party  
  e.g., “UCPD budget increases to fund more less-than-lethal weapons,” “Organization that uses student fees partakes in activities that exclude certain groups”
  - `combination` → Multiple framings presented in one narrative (e.g., citing both rights violations and oversight failures)
  - `none` → No clear framing detected or purely factual logistics 
  - `n/a` → No student response occurred  

---

## 🔹 Unstructured Qualitative

- **`notes`**  
  Freeform summary or contextual annotation  
  → No predefined values

---

## Automated Logic (Baseline)

- **`admin_response_level`**  (Derived)
  Strength or adequacy of the administrative response  
  → `none`, `minimal`, `adequate`, `strong`

| `admin_response_level` | `admin_response_type`   | `accountability_follow_up`      | `admin_support_offered`                                           |
|------------------------------------|--------------------------|----------------------------------|-------------------------------------------------------------------|
| `none`                             | `none`                   | `n/a`                            | `n/a`                                                   |
| `minimal`                          | `general_statement`      | `none`                           | `none`                                                            |
| `adequate`                         | `incident_specific`      | `proposed`| **Any one** of: `admin_support_offered` |
| `strong`                           | `incident_specific`      | `proposed`                       | **Any two or more** of: `admin_support_offered`|

  Note: If two or more options reside on a response level, that is the designated level. E.g. if `admin_response_type` = `incident_specific` but both `accountability_follow_up` and `admin_support_offered` = `none`, downgrade to `minimal` by manual override. This captures purely symbolic responses.

## 📊 Field Type Reference

| **Type**                   | **Ordered** | **Numeric** | **Needs Rules?** | **Structured** | **Examples**                                   |
|----------------------------|-------------|-------------|------------------|----------------|------------------------------------------------|
| Binary / Boolean           | No          | No          | No               | ✅ Yes         | `admin_response`, `follow_up_action`           |
| Nominal Categorical        | No          | No          | ✅ Yes           | ✅ Yes         | `target_group`, `media_coverage_level`         |
| Ordinal Categorical        | ✅ Yes       | No          | ✅ Yes           | ✅ Yes         | `severity_score`, `tone_of_response`           |
| Quantitative               | ✅ Yes       | ✅ Yes       | No               | ✅ Yes         | `latency_days`, `injury_count`                 |
| Structured Qualitative     | Maybe        | No          | ✅ Yes           | ✅ Yes         | `narrative_positioning`, `student_tone`        |
| Unstructured Qualitative   | No          | No          | —                | ❌ No          | `notes`, `admin_statement_text`                |
