---
layout: default
title: "Incident Index"
---


{% assign sorted_incidents = site.incidents | sort: "date" %}
{% for incident in sorted_incidents %}
- [{{ incident.title }}]({{ incident.url }}) — {{ incident.date}} — Severity: {{ incident.severity_score }}
{% endfor %}
