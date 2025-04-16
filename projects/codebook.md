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
  Categorizes whether and how the administration responded to the incident  
  → `incident_specific`, `general_statement`, `none`  
  Use:
  - `incident_specific` → The incident was explicitly referenced in an administrative statement or action within 2 weeks  
  - `general_statement` → A public communication addressed related issues (e.g., antisemitism, protest safety) during the same period but did **not** reference the specific incident  
  - `none` → No public administrative response occurred within 2 weeks
<br><br>
- **`follow_up_action`**  
  Categorizes the nature of any administrative follow-up action (discipline, policy)  
  → `none`, `proposed`, `not_specifically_linked`, `n/a`  
  Use:
  - `proposed` → A specific follow-up action was proposed **in** the admin response
  - `not_specifically_linked` → Action was proposed concurrently (to admin response, not event where incident occurred) but not clearly tied to the incident
  - `none` → Admin response occurred but **did not propose** any follow-up action
  - `n/a` → No admin response occurred

- **`target_group`**  
  Primary identity or identity affiliated with group targeted or affected  
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`actor_group`**  
  Primary identity or identity affiliated with acting group   
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`media_coverage_level`**  
  Degree of public visibility based on external coverage (excluding Daily Bruin, which is baseline AND excluding any admin activity to avoid endogeneity)  
  - `low`: At least 2 internal or niche sources (e.g., org IG + campus newspaper other than DB or reddit r/UCLA), no external visibility  
  - `network-amplified`: At least 5 sources within a single ecosystem (e.g., Jewish outlets), no mainstream or outside-community pickup
  - `moderate`: At least 5 sources **across ecosystems**, including **at least two sources** with general public reach (e.g., LAist, local media)
  - `high`: At least 5 sources with cross-ecosystem or mainstream pickup (e.g., LAT, NYT, CNN) **or** viral social media exposure (≥ 100k views/interactions)

  Note: 1. Code the **highest qualifying level**. All counts are minimum thresholds. 2. This variable is inclusive of all incidents that meet the inclusion rule. Incidents coded as `network-amplified`, `moderate`, or `high` necessarily meet the ≥ 5-source threshold due to the replication dynamics of media ecosystems. No qualifying incident is excluded on source-count grounds alone. 3. Reflects the degree of public visibility *at the time of the incident*, not retrospective amplification. Only sources published within 14 days of the incident contribute to the level assigned. This ensures media coverage functions as a proxy for real-time administrative visibility and potential public pressure. This is to ensure that `media_coverage_level` is with respect to an incident alone. Some incidents appear much later as part of an aggregate group of incidents (reflecting reporting on a task force report for example) or serve as context alongside more serious incidents; these cases that technically qualify it for mainstream pickup are disregarded.


- **`stated_recourse`**  
  Whether the administration offered any actionable path for justice, accountability, or repair    
  → `none`, `counseling/referral`, `formal investigation`, `disciplinary process`, `restorative dialogue`, `claim of responsibility`

- **`location`**  
  Location where the incident took place  
  → `on-campus`, `off-campus`, `other`

- **`incident_policy`**  
  Whether the incident violated or complied with a campus policy in effect at the time (e.g., TPM, student conduct, anti-discrimination).  
  → `yes`, `no`, `combination`, `unclear`, `contested`  
  - `yes` → The incident clearly followed all applicable policies  
  - `no` → The incident clearly violated at least one applicable policy  
  - `combination` → The incident involved both compliance and violation (e.g., a protest began in violation of TPM policy but later moved to a **location consistent with university protest guidelines**)  
  - `unclear` → It is not possible to determine from available records whether a policy was violated or which policy applies  
  - `contested` → Administration or participants **disagreed over whether a policy was violated**, or the policy's applicability/enforcement was formally challenged

---

## 🔹 Ordinal Categorical

- **`severity_score`**  
  Categorical estimate of harm or risk  
  → `Low`, `Moderate`, `High`

- **`admin_response_level`**  
  Strength or adequacy of the administrative response  
  → `none`, `minimal`, `adequate`, `strong`

- **`police_involvement`**  
  The extent of police involvement    
  → `none`, `intervention`, `escalation`, `arrest`

- **`tone_of_response`**  
  Language tone used by administration  
  → `Conciliatory`, `Neutral`, `Punitive`, `Dismissive`

---

## 🔹 Quantitative

- **`latency_days`**  
  Number of days between the incident and the first admin response  
  → Integer  
  → *Derived from* `date` and timestamp of first admin statement

---

## 🔹 Structured Qualitative

- **`narrative_positioning`**  
  How the incident was framed in public or administrative narratives  
  → *(e.g., civil rights, security threat, procedural neutrality)*

- **`student_tone`**  
  Tone or rhetorical framing used by student organizations  
  → `Rights-based`, `Accusatory`, `Conciliatory`, `Defensive`, `Escalatory`

---

## 🔹 Unstructured Qualitative

- **`notes`**  
  Freeform summary or contextual annotation  
  → No predefined values


---



## 📊 Field Type Reference

| **Type**                   | **Ordered** | **Numeric** | **Needs Rules?** | **Structured** | **Examples**                                   |
|----------------------------|-------------|-------------|------------------|----------------|------------------------------------------------|
| Binary / Boolean           | No          | No          | No               | ✅ Yes         | `admin_response`, `follow_up_action`           |
| Nominal Categorical        | No          | No          | ✅ Yes           | ✅ Yes         | `target_group`, `media_coverage_level`         |
| Ordinal Categorical        | ✅ Yes       | No          | ✅ Yes           | ✅ Yes         | `severity_score`, `tone_of_response`           |
| Quantitative               | ✅ Yes       | ✅ Yes       | No               | ✅ Yes         | `latency_days`, `injury_count`                 |
| Structured Qualitative     | Maybe        | No          | ✅ Yes           | ✅ Yes         | `narrative_positioning`, `student_tone`        |
| Unstructured Qualitative   | No          | No          | —                | ❌ No          | `notes`, `admin_statement_text`                |
