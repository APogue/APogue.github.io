---
layout: default
title: "Project Definitions"
permalink: /projects/project-definitions/
---


This page documents the structured fields, inclusion rule, and keyword logic used in the UCLA Incident Analysis project.

---

## 🔢 Field Definitions

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Description</th>
      <th>Options (if applicable)</th>
    </tr>
  </thead>
  <tbody>
    {% for field in site.data.field_definitions %}
    <tr>
      <td><code>{{ field.name }}</code></td>
      <td>{{ field.type | capitalize }}</td>
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

- protest  
- encampment  
- Israel  
- Palestine  
- Zionist  
- apartheid  
- antisemitism  
- Islamophobia  
- occupation  
- TPM violation  
- demonstration
