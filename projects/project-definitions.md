---
layout: page
title: "Project Definitions"
permalink: /projects/project-definitions/
---


This page documents the structured fields, inclusion rule, and keyword logic used in the UCLA Incident Analysis project.



## 🔢 Field Definitions

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Data Type</th>
      <th>Role</th>
      <th>Description</th>
      <th>Options (if applicable)</th>
    </tr>
  </thead>
  <tbody>
    {% for field in site.data.field_definitions %}
    <tr>
      <td><code>{{ field.name }}</code></td>
      <td>{{ field.datatype | capitalize }}</td>
      <td>{{ field.role | capitalize }}</td>
      <td>{{ field.description }}</td>
      <td>
        {% if field.options %}
          {{ field.options | join: ", " }}
        {% else %}
          —
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>


---

## 📜 Inclusion Rule

Any campus-affiliated event between Sept 2023 and June 2024 where:

- (a) identity-based harassment, exclusion, or violence was alleged  
- (b) symbolic or physical protest occurred on university grounds  
- (c) TPM violations or safety breakdowns were documented

---

## 🔍 Keyword List

These keywords are used to surface candidate articles from the Daily Bruin archive:

<div style="columns: 3; -webkit-columns: 3; -moz-columns: 3;">
  <ul>
    {% for keyword in site.data.keywords %}
      <li>{{ keyword }}</li>
    {% endfor %}
  </ul>
</div>

---

## Source Categories 

🔹 Dependent Variable (DV) Sources

- Used to measure administrative behavior, the core outcome of the study.

| Prefix | Source Type               | Function in Dataset                                                              |
|--------|---------------------------|-----------------------------------------------------------------------------------|
| `ADM`-   | Administrative communications | Used to code administrative response, tone, latency, and stated recourse.        |

---

🔸 Incident-Triggering Source (Primary IVs)

- Used to define and timestamp incidents — the study’s core independent variables.

| Prefix | Source Type         | Function in Dataset                                                                 |
|--------|---------------------|--------------------------------------------------------------------------------------|
| `DB`-    | Daily Bruin articles | Defines incident inclusion. Used for timing, location, participants, and anchoring events. |

---

🟨 Explanatory / Control Variable Sources

- Used to contextualize or explain administrative response — never to define incidents.

| Prefix | Source Type                         | Function in Dataset   |
|--------|---------------------------------------------------------------------------------------------------------|
| `MED`-   | Third-party news media              | Visibility, amplification, and narrative framing (e.g., LA Times, Jewish Journal). |
| `SOC`-   | Social media posts                  | Public-facing visibility and grassroots traction (e.g., X, Instagram).             |
| `ORG`-   | Student org materials               | Protest tone, framing, and actor intent.                                           |
| `LEG`-   | Legal documents                     | Legal escalation, OCR complaints, lawsuits, external review.                       |
| `RPT`-   | Reports, investigations, or audits  | Institutional context, third-party evaluations, policy framing.                    |


---