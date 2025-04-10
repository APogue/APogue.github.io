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

<ul>
  {% for keyword in site.data.keywords %}
    <li>{{ keyword }}</li>
  {% endfor %}
</ul>
---

## Source Categories 

🔹 Dependent Variable (DV) Sources

- Used to measure administrative behavior, the core outcome of the study.

| Category | Description |
|-------------|-------------|
| `admin`     | Official statements, emails, press releases, policy actions — used to code response level, tone, latency, recourse. |

---

🔸 Incident-Triggering Source (Primary IVs)

- Used to define and timestamp incidents — the study’s core independent variables.

| Category         | Description |
|------------------|-------------|
| `daily_bruin`    | Core event log; used to define incident inclusion, date, location, and participants. 

---

🟨 Explanatory / Control Variable Sources

- Used to contextualize or explain administrative response — never to define incidents.

- Separate the "standard" sources: everything but media, and list them here. Check each source over every incident. 

| Category         | Description |
|------------------|-------------|
| `student_org`    | Public-facing statements and videos used to code protest tone, intensity, and framing. |
| `local_blog`     | e.g., LAist or other campus-affiliated publication |
| `social`         | Public, attributable posts used to assess large-scale visibility or pressure. |
| `mainstream`     | Big, third-party coverage (e.g. LAT, NYT, CNN) |    
| `legal`          | OCR complaints, lawsuits — used to code `recourse_offered`, escalation, or external scrutiny. |
| `report`         | Task force reports, 3rd party investigations, external studies --- contextualizes behavior from various perspectives. 
