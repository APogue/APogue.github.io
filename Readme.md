
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
├── _incidents/ <!-- early trial runs coding incidents (001-004), may be hand coded, 4 docs -->
├── _includes/ <!-- evidence_list.html, social-meta.html, source-list.html, not really sure what they do, not essential at all, infrastructure files for file templates that never went into full usage and have now been retired -->
│   └── sections/ <!-- 24 markdown files, all tied to the OG_blog_posts/In-the-Aftermath-of ... blog post -->
│   └── UCLA-administrative-sections/ <!-- 1 markdown file connected to OG_blog_posts/Major protest-related incidents are continuing to happen at UCLA post but it's not a "section" it is the entire content of the post -->
├── _layouts/ <!-- old layout files to override the minimal mistakes remote (to keep the old blog posts functioning), 4 html files, also one file, project_default.html, is connected to codebook formatting -->
├── _plugins/ <!-- footnotes.rb file, don't know where it came from or how it got there -->
├── _protocols/ <!-- more major testing of the of the gpt and claude UI's, there are proof of concept output files here for the quiet-crawler project, there are some notes files as well related to testin, incident_coding_protocol.md, codebook_with_codiong_protocol.md, and codebook_w_coding_proto_v2.md are located here as well (core backend engine files, copied to quiet-crawler, need to be revised, consolidated, organized with final versions sitting here and in quiet-crawler), 9 files in total (maybe should just live in quiet-crawler? or while editing is happening, live here then move permanently to quiet crawler?) -->
├── _sass/ <!-- base.scss lives here I don't know what that is -->
├── _site/ <!-- this must be auto-generated lots of folders and files -->
├── assets/ 
│   └── css/ <!-- css files (css files connected to legacy layout files) -->
│   └── icons/ <!-- website icon files -->
│   └── images/ <!-- splash page banner and feature row images -->
│   └── js/ <!-- not sure maybe legacy javascript files, custom.js, figure-references.js, footnotes.js, lightbox.js -->
│   └── videos/ <!-- screenshot captures that I embedded into my OG_blog_post/In-the-Aftermath-of -->
├── images/
│   └── 2024-05-08/ <!-- 21 files, reddit screenshots used in 3 OG_blog_post files -->
│   └── 2024-05-20/ <!-- holds 8 sub-directories that contain more images, likely pertaining to 2 OG_blog_post files -->
│   └── 2024-07-03/ <!-- 16 image files, likely pertaining to at least 1 OG_blog_post file -->
│   └── 2024-08-02/ <!-- 15 image files not yet used in blog posts but may serve as evidence for future research (quiet-crawler) -->
│   └── 2024-10-03/ <!-- 50 files, a mix of social media and reddit screenshots, some SCU (Title-IX project) policy docs, and images that can possibly be used for future research (quiet-crawler) -->
│   └── 2025-2-20/ <!-- screenshots from a FOIA request, some of the more important documents I came across, may be related to the _drafts/research/2024-12-24-public-records-requests.md doc, 13 files -->
│   └── 2025-2-21/ <!-- screenshots from a FOIA request, different case or request institution response than the above folder, 13 files -->
│   └── 2025-2-23/ <!-- screenshots from a FOIA request, different case or request institutional response than the above folders, 17 files -->
<!-- I don't have a full repo of the FOIA request response docs anywhere here, if their Box link goes dead or something happens I need to find a place to put the full response docs -->
│   └── 2025-4-22/ <!-- 2 PDF's looks like research, some form of these sources are in OG_blog_posts but these are the sources in full, Hillel_statement_may2024.pdf and a Haaretz article -->
│   └── excel-data/ <!-- 23 files, data related to In-the-Aftermath-of, looks like Title IX and VI related data-->
│   └── Gene Block Messages/ <!-- 29 files, all PDF, Gene block messages downloaded for record keeping purposes -->
│   └── pdf_downloads_2025-3-10/ <!-- must've thought these were important, 2 PDF's, one from an independent journalism outlet and one from the Daily Bruin-->
│   └── policy research/ <!-- looks like 3 PDF's that maybe I thought were important at the time, related to policy or policy changes -->
│   └── public records requests/ <!-- documentation of a public records request I've made -->
│   └── title_VI/ <!-- 28 PDF files, related to dept of education OCR dear colleague and resolution letters -->
│   └── UCLA_Title_IX_Training/ <!-- Documents (PDF) and png related to UCLA Title IX training -->
│       └── Final_Assessment/ <!-- png snapshots of the training quiz -->
├── interviews/ <!-- 6 markdown files that (empty) that i'd like to build context in, each file is for each interviewee I'm interested in talking to (first round), i'd like to reference source material, so I'd like as I go through this source material to organized it (refactor) and build one organized, unified, system -->
├── pages/ <!-- new, updated website pages - about, blog, contact, projects, and terms (projects is an offshoot CTA button with the main framework of quiet-crawler (in progress)-->
├── projects/ <!-- living project direction documents, including the codebook which might evolve as I work on quiet-crawler (quiet-crawler backend), incident_index.md is legacy and should be retired -->
├── research/ <!-- these are the CTA offshoots of the splash page feature row (in progress), audience.md, capabilities.md, entry.md, the titles of the files aren't even complete because the splash page design is in flux -->
├── .gitattributes
├── .gitignore
├── _config.yml
├── CNAME
├── Gemfile
├── Gemfile.lock
├── index.md <!-- splash page (design in progress) -->
└── Readme.md <!-- outdated, needs a total update -->

```

## 📁 Proposed Clean Structure

```
.
├── _posts/                      # ✅ Published blog posts
│   └── 2025-06-10-title.md
│
├── _drafts/                     # 🟡 Latest working drafts
│   ├── published_drafts/
│   ├── outline-v3/
│   └── outline-v2/
│
├── _research_notes/            # 🟡 Longform or domain-specific notes
│   └── lawsuits.md
│   └── public-records.md
│   └── appendix-compilation.md
│
├── _outlines/                  # ✅ Skeletons or post blueprints
│   └── campus-bias-outline.md
│
├── _interviews/                # ✅ Interview prep, sources, and transcripts
│   └── 2025-08-01-benjamin.md
│
├── _incidents/                 # ✅ Finalized incident writeups (e.g. INC-001.md)
│   └── 001-ucla-encampment.md
│
├── _includes/                  # ✅ Layout helpers, lean only
│   └── post_header.html
│
├── _layouts/                   # ✅ Custom Jekyll layouts (for incidents, etc.)
│   └── project_default.html
│
├── _data/                      # ✅ YAML, CSV, and structured reference files
│   ├── source_master_public.yml # Supports layout generation, citation display, and cross-linking between your posts and sources
│   ├── field_definitions.yml
│   └── evidence/               # trial evidence files for incidents
│
├── _protocols/                 # 🟡 Coding protocols + templates (merge later into quiet-crawler)
│   ├── codebook.md
│   ├── incident_coding_protocol.md
│   └── test_runs/              # test inputs/outputs from GPT and Claude
│
├── _projects/                  # ✅ Living project definition docs
│   └── codebook.md
│   └── methodology.md
│
├── _pages/                     # ✅ Top-level site pages
│   ├── about.md
│   ├── contact.md
│   ├── blog.md
│   ├── terms.md
│   └── projects.md
│
├── sources/                    # ✅ Fulltext raw documents (PDFs, TXT, DOCX)
│   ├── DB-045.txt
│   ├── title_VI/
│   ├── public-records-FOIA/
│   ├── training_materials/
│   └── press-releases/
│
├── appendix/                   # ✅ Tables, exports, timelines
│   └── incidents-by-month.csv
│
├── assets/
│   ├── images/                 # Static visual assets, general use
│   │   └── protests/2024-05-encampment.jpg
│   ├── pdfs/
│   │   └── SCU_Policy.pdf
│   └── charts/
│       └── sentiment-vs-response.svg
│
├── fragments/                  # ✅ Snippets (e.g. evidence snippets tied to a post)
│   └── aftermath/
│       ├── reddit1.png
│       └── post_snippet.md
│
├── quiet-crawler/              # ✅ Staging basket, to be migrated to quiet-crawler repo
│   ├── prompts/                # Prompt templates and instruction files (Claude, GPT)
│   │   ├── system_prompt.txt
│   │   ├── codebook_protocol.txt
│   │   └── validation_prompt.txt
│   ├── model_outputs/          # Claude/GPT raw and semi-formatted outputs
│   │   ├── INC-001_output_claude.md
│   │   ├── SCU_test_run_gpt.md
│   │   └── exploration_notes.md
│   ├── protocols/              # Temporary holding for protocol files to migrate
│   │   ├── codebook_with_coding_protocol.md
│   │   ├── codebook_w_coding_proto_v2.md
│   │   └── incident_coding_protocol.md
│   ├── parse_scripts/          # Optional early Jupyter or Python parsing tools (if any)
│   │   └── extract_used_in.py
│   ├── evidence_trials/        # Local evidence runs with source refs (used in `_data/evidence/`)
│   │   ├── INC-001_gpt_run.md
│   │   └── CLAUDE_ui_trial.md
│   └── README.md               # Temporary README explaining this is a staging area
│
├── .gitignore
├── CNAME
├── _config.yml
├── Gemfile
├── Gemfile.lock
├── index.md                    # Splash page
└── README.md                   # 🟥 Needs full rewrite

```

## 🧹 Repo Refactor Checklist (2025-Aug)

## ✅ Week 1 – Setup + Early Cleanup
- [ ] Move `_drafts/research_notes/` → `_research_notes/`
- [ ] Move `outline-v2/` and `outline-v3/` into `_drafts/`
- [ ] Create basic structure for `_interviews/`; initialize 6 files with:
  - `## context`
  - `## potential questions`
- [ ] Move `OG_blog_posts/` → `_posts/legacy/` (stash, do not clean yet)

---

## ✅ Week 2 – Organize Source Materials
- [ ] Move FOIA-related screenshots and PDFs from `images/2025-*` → `sources/public-records-FOIA/`
- [ ] Create or clean `source_master.yml` with at least 10 verified entries
- [ ] Link at least 2 interviews to source documents in `source_master.yml`

---

## ✅ Week 3 – Protocols + Readme
- [ ] Organize `_protocols/`; decide which files merge into `quiet-crawler/`
- [ ] Delete or consolidate:
  - `incident_coding_protocol.md`
  - `codebook_with_codiong_protocol.md`
  - `codebook_w_coding_proto_v2.md`
- [ ] Rebuild `README.md`:
  - Describe updated structure
  - Document project goals
  - Link to `quiet-crawler/` backend repo

---

## ✅ Week 4 – Final Reorg Pass
- [ ] Reorganize `images/2024-*` → `assets/images/protests/YYYY-MM/` if used in blog content
- [ ] Confirm and clean up `_layouts/`, `_includes/`, `_pages/` (only keep what’s in use)
- [ ] Evaluate and merge/retire `projects/` and `research/` directories

## Source_master_public.yml 

```
- id: SCU-001
  type: foia
  date: 2024-12-24
  title: "SCU Title IX Investigation Notes"
  url: https://box.com/s/example
  used_in: [SCU-002]

```



---


## 🧱 Folder Purpose (this and below are being sunsetted, moved to quiet-crawler)

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
