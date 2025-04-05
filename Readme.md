
# 📊 Incident Response Analysis Project

This project documents and analyzes university administrative response to identity-based incidents from 2023–2024 using structured data, public sources, and reproducible methods.

---

## 🔧 Project Structure
. 

├── _config.yml 

├── _incidents/ # One Markdown file per incident (YAML front matter + narrative) 

│ └── INC-001.md 

├── _data/ # Centralized structured data (e.g., sources.yml) 

│ └── sources.yml 

├── sources/ # Actual source documents (PDFs, screenshots, admin emails) 

│ └── DB-045.txt 

│ └── ADM-014.txt 

├── appendix/ # Outputs: tables, charts, exports 

├── projects/ # Project-facing pages (e.g., index of all incidents) 

│ └── statistical-analysis.md 

├── _layouts/ # Custom layout for incident rendering 

│ └── incident.html



---

## 🧱 Folder Purpose

- **`_incidents/`** — Stores structured incident files with consistent metadata (`incident_id`, `severity_score`, etc.)  
- **`_data/sources.yml`** — Master list of source metadata, referenced across incidents  
- **`sources/`** — Holds raw files like PDFs, admin statements, Daily Bruin articles  
- **`projects/`** — Markdown pages like public-facing analysis summaries or indexes  
- **`appendix/`** — Exported data, figures, and charts (for publication or inspection)  
- **`_layouts/`** — Controls how each incident renders on the site

---

## 📘 Content Types

- **Incident pages** → Generated from `_incidents/*.md` using `layout: incident`  
- **Incident index** → Rendered via Liquid loop in `projects/statistical-analysis.md`  
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
