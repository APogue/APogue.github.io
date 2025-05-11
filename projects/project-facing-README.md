---
layout: project_default
title: "📊 UCLA Incident Response Analysis Project"
published: true
author: Alexie Pogue
date: 2025-4-5 2:52 PM
---

# 📊 Incident Response Analysis Project

This project documents and analyzes university administrative response to identity-based incidents from 2023–2024 using structured data, public sources, and reproducible methods.

---

## 🔧 Project Structure

```
.
├── _config.yml
├── _incidents/                # One Markdown file per incident (YAML front matter + narrative)
│   └── INC-001.md
├── _includes/                 # Reusable Liquid include snippets for rendering source and evidence lists
│   ├── evidence-list.html
│   └── source-list.html
├── _data/                     # Centralized structured data
│   ├── evidence/              # YAML files with structured variable justifications per incident
│   │   └── INC-001.yml
│   ├── source_master.yml      # Master source registry (DB-, ADM-, SOC-, etc.)
│   └── field_definitions.yml  # Field definitions and structured variable schema
├── _protocols/                # Authoritative rule files for coding, sourcing, and validation
│   └── incident_coding_protocol.md
├── sources/                   # Raw source documents (Daily Bruin articles, admin emails, social media posts)
│   ├── DB-045.txt
│   └── ADM-014.txt
├── appendix/                  # Output files: charts, tables, YAML exports, etc.
├── projects/                  # Public-facing markdown pages describing methodology and schema
│   ├── incident-analysis.md
│   ├── project-definitions.md
│   └── codebook.md
└── _layouts/                  # Custom Jekyll layout templates for rendering incidents and pages
    └── incident.html

```
---

## 🧱 Folder Purpose

- **`_incidents/`** — Contains one Markdown file per incident with YAML front matter for metadata (`incident_id`, `severity_score`, etc.) and a narrative body for summaries
- **`_includes/`** — Reusable HTML snippets (e.g., evidence/source lists) used in site rendering
- **`_data/sources.yml`** — Canonical list of source metadata (ID, title, type, etc.), referenced by all incident and evidence files
- **`_data/evidence/`** — Holds per-incident YAML files that justify variable values using quoted sources
- **`_data/field_definitions`** — Master schema for all coded fields, including names, types, and allowed values for structured variables
- **`_protocols/`** — Defines project-wide standards for evidence citation, coding workflows, and quote validation (e.g., Critical Source Validation Protocol)
- **`sources/`** — Contains raw source documents (PDFs, emails, Daily Bruin articles, screenshots, OCR text)
- **`appendix/`** — Used to store final output formats (YAML exports, CSVs, charts) for publication or audit
- **`projects/`** — Public-facing project documentation (e.g., method pages, incident lists, field guides)
- **`_layouts/`** — Custom Jekyll layout templates that determine how incidents and project pages render on the site

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
