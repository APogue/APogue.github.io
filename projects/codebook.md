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

- **`admin_response`**  
  Whether any public administrative response occurred  
  → `true`, `false`

- **`follow_up_action`**  
  Whether any administrative follow-up actions (discipline, policy) were proposed  
  → `true`, `false`

- **`org_affiliated_actor`**  
  Was the actor affiliated with either a UCLA student org or USAC?  
  → `true`, `false`

- **`actor_student`**  
  Was the actor a student at UCLA?  
  → `true`, `false`


---

## 🔹 Nominal Categorical

- **`target_group`**  
  Primary identity or identity affiliated with group targeted or affected  
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`actor_group`**  
  Primary identity or identity affiliated with acting group   
  → `Jewish`, `Israeli`, `Palestinian`, `Muslim`, `Arab`, `Multiple`, `Unknown`

- **`media_coverage_level`**  
  Degree of public visibility based on external coverage (excluding Daily Bruin, which is baseline AND excluding any admin activity to avoid endogeneity)  
  - `low`: ≤ 2 sources (e.g., one student org post + one blog mention)  
  - `moderate`: 3–5 sources (e.g., student org + LAist + social media)  
  - `high`: ≥ 6 sources or ≥ 1 mainstream outlet (e.g., LA Times, CNN) or viral spread (≥ 25k views/interactions)

- **`stated_recourse`**  
  Whether the administration offered any actionable path for justice, accountability, or repair    
  → `none`, `counseling/referral`, `formal investigation`, `disciplinary process`, `restorative dialogue`, `claim of responsibility`

- **`location`**  
  Location where the incident took place  
  → `on-campus`, `off-campus`, `other`

- **`incident_policy`**  
  Did the incident that took place follow campus policy?  
  → `yes`, `no`, `combination`
  

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
