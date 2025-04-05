---
layout: default
title: "Analysis by Incident"
---

## Incident Index

{% for incident in site.incidents %}
- [{{ incident.title }}]({{ incident.url }}) — {{ incident.date }} — Severity: {{ incident.severity_score }}
{% endfor %}
