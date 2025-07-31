
# 📊 Incident Response Analysis Project

This project documents and analyzes university administrative response to identity-based incidents from 2023–2024 using structured data, public sources, and reproducible methods.

---

## 🔧 Project Structure

## 🔧 Current Repo Structure (Triage)

```
.
├── .git/
├── .jekyll-cache/
├── _data/ <!-- navigation.yml and source_master.yml -->
│   └── evidence/ <!-- a couple files of practice runs with the codebook on INC-001 (4o and Claude UI) -->
├── _drafts/
│   └── _unpulbished_drafts/ <!-- notes on title VI and title IX, 6 files -->
│   └── OG_blog_posts/ <!-- oldest (longest form) blog posts with complicated layouts and lots of links to messy, unorganized image files with bad naming conventions (want to refactor to source_master.yml) -->
│   └── outline-v2/ <!-- outline v2 files (attempt at building the story narrative), 4 files -->
│   └── outline-v3/ <!-- outline v3 files (later attempt at building the story narrative), 2 files -->
│   └── protest_activities/ <!-- in-depth research, in outline form and divided into different subjects, 14 files -->
│   └── published_drafts/ <!-- the latest attempt at building the story narrative, (post outline-v3), 2 files -->
│   └── research_notes/ <!-- in-depth (not totally organized but in docs) research divided into 7 documents based on research area, i.e. appendix, notes, law suits and task force reports, public records requests, etc. -->
├── _incidents/
├── _includes/
├── _layouts/
├── _plugins/
├── _protocols/
├── _sass/
├── _site/
├── assets/
├── images/
├── interviews/
├── pages/
├── projects/
├── research/
├── .gitattributes
├── .gitignore
├── _config.yml
├── CNAME
├── Gemfile
├── Gemfile.lock
├── index.md
└── Readme.md

├── _drafts/
<!-- Contains dozens of unstructured outlines, half-posts, raw thoughts. Some should be moved to _outlines/, some are junk. -->

├── _includes/
<!-- Bloated. Over 40 snippets, many only used once in one specific blog post. Should migrate to _fragments/post-name/. -->

├── images/
<!-- Dumping ground for everything — blog headers, figures, charts, screenshots. Needs sorting into folders by type or topic. -->


```

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

## 📁 Proposed Clean Structure

```
.
├── _posts/                  # Finalized blog posts (Jekyll standard)
│   └── yyyy-mm-title.md
├── _drafts/                 # Jekyll drafts (unpublished)
│   └── topic-notes.md
├── _outlines/               # Structured post ideas or essay skeletons
│   └── incident-safety-outline.md
├── _includes/               # ONLY reusable components for layout
│   └── post_header.html
├── _fragments/              # Snippets or includes tied to individual posts
│   └── post-slug/
│       ├── chart.svg
│       └── code-block.html
├── _data/                   # YAML/JSON/CSV files (people, sources, tags)
│   └── sources.yml
├── _interviews/             # Interview prep, notes, and transcripts
│   └── 2025-07-30-professor-smith.md
├── _pages/                  # Longform pages (projects, about, etc.)
│   └── project-analysis.md
├── assets/
│   ├── images/
│   │   └── protests/2024-encampment.jpg
│   ├── pdfs/
│   │   └── ADM-014.pdf
│   └── charts/
│       └── trendline.svg
├── sources/                 # Fulltext source documents
│   └── DB-045.txt
├── appendix/                # Tables, exports, or supplemental analysis
│   └── incident-timeline.csv
├── _config.yml
└── README.md

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

⚠️ This project is under construction. Please do not cite or circulate.

Questions? Open an issue or email me.
