---
title: Codebook
layout: page
permalink: /projects/codebook/
---

# Codebook

This codebook defines all structured and qualitative fields used in the incident analysis project. Each variable includes its function, valid values (if applicable), and notes for interpretation. Field types are grouped according to a consistent classification system (see [Field Type Reference](#field-type-reference)).

---

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
<br><br>
- **`actor_student`**  
  Was the actor a student at UCLA?     
  → `true`, `false`  
  Mark `true` if  
  - There is no assertion of non-affiliation by the Daily Bruin or 3rd party media 

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
<br><br>
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
  → `n/a`, `none`, `counseling/referral`, `violation_warning`, `campus_climate_initiative`
  - `counseling/referral` → Students were directed to services such as CAPS, ombuds, or external reporting channels (e.g., UCPD, Title IX office)
  - `violation_warning` → Admin issued a statement referencing applicable university rules, laws, or policies, and explicitly warned students or groups about possible violations or consequences
  - `campus_climate_initiative` → Admin referenced a programmatic effort or institutional partnership aimed at improving the long-term inclusion or cultural environment of the campus
  - `none` → An administrative response occurred, but no support was offered
  - `n/a` → No admin response occurred 

  Note: While policy may mot compel administrators to seek "justice" after the fact, is it an administrative failure when it is known that policies are being broken and nothing is done after the fact to ensure policies are not broken in the future? 

- **`target_group`, `actor_group`**  
  Primary identity or identity affiliated with group targeted or affected  
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`media_coverage_level`**  
  Degree of public visibility based on external coverage (excluding Daily Bruin, which is baseline AND excluding any admin activity to avoid endogeneity)  
  - `none`: Fewer than 2 sources
  - `low`: At least 2 internal or niche sources (e.g., org IG + campus newspaper other than DB or reddit r/UCLA), no external visibility  
  - `network-amplified`: At least 5 sources within a single ecosystem (e.g., Jewish outlets), no mainstream or outside-community pickup
  - `moderate`: At least 5 sources **across ecosystems**, including **at least two sources** with general public reach (e.g., LAist, local media)
  - `high`: At least 5 sources with cross-ecosystem or mainstream pickup (e.g., LAT, NYT, CNN) **or** viral social media exposure (≥ 100k views/interactions)

  Note: 1. Code the **highest qualifying level**. All counts are minimum thresholds. 2. This variable is inclusive of all incidents that meet the inclusion rule. Incidents coded as `network-amplified`, `moderate`, or `high` necessarily meet the ≥ 5-source threshold due to the replication dynamics of media ecosystems. No qualifying incident is excluded on source-count grounds alone. 3. Reflects the degree of public visibility *at the time of the incident*, not retrospective amplification. Only sources published within 14 days of the incident contribute to the level assigned. This ensures media coverage functions as a proxy for real-time administrative visibility and potential public pressure and that `media_coverage_level` is with respect to an incident alone. Some incidents appear much later as part of an aggregate group of incidents (reflecting reporting on a task force report for example) or serve as context alongside more serious incidents; these cases that technically qualify it for mainstream pickup are disregarded.

- **`location`**  
  Location where the incident took place  
  → `on-campus`, `off-campus`, `other`

- **`policy_status`**  
  Whether the incident violated or complied with a campus policy in effect at the time (e.g., TPM, student conduct, anti-discrimination).  
  → `compliant`, `violated`, `combination`, `unclear`, `contested`  
  - `compliant` → The incident clearly followed all applicable policies  
  - `violated` → The incident clearly violated at least one applicable policy  
  - `combination` → The incident involved both compliance and violation (e.g., a protest began in violation of TPM policy but later moved to a **location consistent with university protest guidelines**)  
  - `unclear` → It is not possible to determine from available records whether a policy was violated or which policy applies  
  - `contested` → Administration or participants **disagreed over whether a policy was violated**, or the policy's applicability/enforcement was formally challenged

  Note: This can serve as a temporal indicator. It's also helpful to indicate when other variables, e.g. `accountability_follow_up`, are `none` or `n/a`, that there was no administrative failure if no violation occurred. 

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
  The extent of direct harm, credible risk, or disruption caused by the incident to individuals, campus operations, or institutional safety—as observable at the time the incident occurred.
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

  Note: 1. Lack of administrative action affects response variables, not severity (severity is an IV). 2. Primary sources are contemporaneous, direct, or verifiable records of harm or disruption (e.g., police reports, medical records, Daily Bruin coverage, video evidence). These determine core variable values such as `severity_score`. Secondary sources include retrospective or interpretive materials (e.g., lawsuits, OCR complaints, task force reports, social media). These do not define severity but may clarify ambiguous cases, reveal overlooked harm, or flag contested narratives. Use them to supplement—not override—primary evidence. Discrepancies between source types should be documented in the `_evidence/` YAML file.
  
- **`police_involvement`**  
  The extent of police involvement    
  → `none`, `intervention`, `escalation`, `arrest`

---

## 🔹 Quantitative

- **`latency_days`**  
  Number of days between the incident and the first admin response  
  → Integer  
  → *Derived from* `date` and timestamp of first admin statement

---

## 🔹 Structured Qualitative

- **`administrative_tone`**  
  Language tone used by administration  
  → `conciliatory`, `neutral`, `condemnation`, `dismissive`, `combination`
  - `conciliatory`→ Expresses empathy, acknowledges difficulties or distress, and emphasizes community values or healing
  - `neutral`→ Uses factual, procedural, or objective language regarding rules or policy without overt emotional or moral framing
  - `dismissive`→ Uses vague or generic language when attributing responsibility or identifying actors, even when detailed information is publicly available
  - `condemnation`→ Denounces specific behavior as morally wrong, harmful, or against institutional standards or values
  - `combination` → Exhibits multiple tones in distinct parts of the response 

  Note: A combination may occur if the administration is using a parallel rhetoric method to handle multiple incidents involving Jewish students and students who identify as pro-Palestinian in a single statement, if this is confounding then I'll keep only the portions of statements relevant to an incident when coding. There should be no 'judgement' words, or as few as possible, e.g. 'even when detailed info is publicly available and of public interest' should be reduced, and any "judgement" should come out in the results.
<br><br>
- **`actor_tone`, `target_tone`**  
  How students speak (attitude / rhetorical style) or depict an incident; captures emotional flavor rather than narrative framing or strategy.  
  → `accusatory`, `fear/distress`, `defensive`, `defiant`, `conciliatory`, `mobilizing/escalatory`, `solidarity`, `combination`  
  - `accusatory` → Attributes blame or wrongdoing to another group or actor with moral judgment or indignation  
    *e.g., “Admin has failed us,” “They are complicit”*
  - `fear/distress` → Emphasizes emotional vulnerability, fear, or a sense of being targeted, unsafe, or endangered   
    *e.g., “They targeted us,” “We no longer feel safe on campus”, "We were physically threatened"*
  - `defensive` → Justifies or defends the group’s own actions or counters criticisms  
    *e.g., “We acted within policy…”, “This was misrepresented…”*
  - `defiant` → Rejects authority or consequences with pride, disdain, or resistance 
    *e.g., “You’re fascist aggressors,” “Don’t obey in advance”*
  - `mobilizing/escalatory` → Urges greater collective action, confrontation, or disruption; a call to action, a threat to escalate, or both  
    *e.g., “Join us at noon!”, “If they don’t agree, we'll shut it down!”*
  - `conciliatory` → Seeks compromise, mutual understanding, or de-escalation  
    *e.g., “We welcome dialogue,” “Let’s find common ground”*
  - `solidarity` → Expresses emotional identification with or support for another group’s cause  
    *e.g., “We stand with…”*
  - `combination` → Multiple distinct tones present in the response (e.g., fear + accusation)
<br><br>
- **`institutional_positioning`**  
  How the incident was framed in administrative narratives  
  → `civil_rights`, `safety/security_threat`, `policy_violation`, `none`, `n/a`  
  - `civil_rights` → Framed as implicating legal, civil, or moral rights—such as free expression, equal protection, religious freedom, or protection from discrimination
  - `safety/security_threat` → Framed as endangering physical safety, campus security, or public order. Applies when the narrative cites threats of violence, disruption of operations, or the need for law enforcement or protective measures to maintain control
  - `policy_violation` → Framed as an infraction of established university rules, codes of conduct, or procedural guidelines (e.g. TPM restrictions, unauthorized signage, disruption of campus operations)
  - `none` → No discernible narrative frame was offered in relation to the incident
  - `n/a` → No admin response occurred 
<br><br>
- **`student_positioning`**  
  How students frame the incident’s meaning, goals, or implications; captures strategic narrative rather than emotional tone 
  → `rights-based`, `safety/security_threat`, `policy_violation`, `escalatory`, `mobilizing`, `financial_fairness`, `combination`, `none`, `n/a` 
  - `rights-based` → Frames the issue around legally or morally protected rights and freedoms e.g. “First-Amendment right…”, “civil liberties”, "academic freedom"
  - `oversight_failure` → States explicitly that incident occurred as a result of administrative indifference or unwarranted police escalation
  - `policy_violation` → Cites established university rules or administrative guidance in defense of student involvement in an incident
  - `financial_fairness` → Cites tuition/cost or resource-allocation arguments (“we pay fees for…”) as basis for certain behaviors, positions, or grievances with another party
  - `combination` → Combination reflects a multi-component narrative from one group or a multi-perspective narrative that characterizes multiple groups on the same or opposing sides of the incident
  - `none` → No clear framing detected or purely factual logistics 
  - `n/a` → No student response occurred  
<br><br>
- **`media_positioning`**  
  How the incident was framed in media narratives from sources contributing to `media_coverage_level`  
  → `group_targeting`, `security_failure`, `student_endangerment`, `policy_violation`, `unclear`, `n/a`
  - `group_targeting` → Harassment or discrimination targeting a particular group. Targeting may be political or directed towards a protected class. 
  - `security_failure` → Failure by the administration and/or police to maintain public order
  - `student_endangerment` → Incident involved unsafe conditions for students
  - `impermissible_behavior` →  Highlights breaches of law, code of conduct, or permit allowances
  - `reputational` →  Stresses impact on university image, donor measures
  - `political_strategy` → Links incident to partisan goals, elections, legislation
  - `financial_impact` → Focuses on costs and budgetary concerns 
  - `n/a` → `media_coverage_level` = `none`








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
| `adequate`                         | `incident_specific`      | `proposed`| **Any one** of: `counseling/referral`, `campus_climate_initiative`, or `violation_warning` |
| `strong`                           | `incident_specific`      | `proposed`                       | **Any two or more** of: `counseling/referral`, `campus_climate_initiative`, `violation_warning` |

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
