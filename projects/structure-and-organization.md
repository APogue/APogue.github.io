---
layout: project_default
title: "📊 UCLA Incident Response Analysis Project"
published: true
author: Alexie Pogue
date: 2025-4-5 2:52 PM
---



This project documents and analyzes UCLA's administrative response to identity-based incidents from 2023–2024 using structured data, public sources, and reproducible methods.

## 🔧 Project Structure


```
.
├── _config.yml
├── _incidents/                # One Markdown file per incident (YAML front matter + narrative)
│   └── INC-001.md
├── _includes/                 # Reusable Liquid include snippets for rendering source lists
│   ├── evidence-list.html
│   └── source-list.html
├── _data/                     # Centralized structured data
│   ├── evidence/              # YAML files with evidence metadata per incident
│   │   └── INC-001.yml
│   ├── source_master.yml      # Master source registry (DB-, ADM-, SOC-...)
│   └── field_definitions.yml  # Variable definitions and coding schema
├── sources/                   # Raw source documents (PDFs, admin emails, Daily Bruin articles, etc.)
│   ├── DB-045.txt
│   └── ADM-014.txt
├── appendix/                  # Outputs: tables, charts, exports
├── projects/                  # Public-facing pages describing analysis + schema
│   ├── incident-analysis.md
│   ├── project-definitions.md
│   └── codebook.md
└── _layouts/                  # Custom Jekyll layouts for rendering incidents
    └── incident.html


```
---

## 🧱 Folder Purpose

- **`_incidents/`** — Stores structured incident files with consistent metadata (`incident_id`, `severity_score`, etc.)  
- **`_includes/`** — Reusable Liquid snippets for rendering source lists 
- **`_data/sources.yml`** — Master list of source metadata, referenced across incidents  
- **`_data/evidence/`** — Holds justifications for how fields were coded as evidence metadata  
- **`sources/`** — Holds raw files like PDFs, admin statements, Daily Bruin articles  
- **`projects/`** — Markdown pages like public-facing analysis summaries or indexes  
- **`appendix/`** — Exported data, figures, and charts (for publication or inspection)  
- **`_layouts/`** — Controls how each incident renders on the site

---

## 📘 Content Types

- **Incident pages** → Generated from `_incidents/*.md` using `layout: incident`  
- **Incident index** → Rendered via Liquid loop in `projects/incident-analysis.md`  
- **Sources** → Centralized metadata in `_data/sources.yml`, content in `sources/` folder

---

## ✅ To Add a New Incident

1. Create `INC-XXX.md` in `_incidents/`  
2. Fill out YAML front matter with required fields  
3. Add narrative summary as Markdown body  
4. Update `sources.yml` if new sources were used  
5. Drop new source files in `sources/`  
6. Rebuild site — incident auto-appears in index

---

## 🧪 Methodological Integrity

This project is designed for:
- Transparency  
- Replicability  
- Neutral source anchoring (e.g., Daily Bruin as sole inclusion source)

All structured variables (severity, visibility, admin response) are rule-based and consistently coded. Media bias and student narratives are treated as contextual controls, not incident selectors.

---

Questions? Open an issue or email me.
