# 🧪 quiet-crawler/ (Staging Basket)

This folder is a **temporary staging area** for AI-generated outputs, coding protocols, and prompt materials related to the `quiet-crawler` backend engine. Once files are finalized, they should be migrated into the [quiet-crawler repository](https://github.com/your-org/quiet-crawler) and removed from this site repo.

---

## 🗂 Folder Overview

### `prompts/`
- Prompt templates and instructions for Claude/GPT
- Includes codebook directives, validation prompts, and UI trials

### `model_outputs/`
- Raw or lightly formatted outputs from the Claude and GPT UI
- Includes exploratory analysis and test runs

### `protocols/`
- Codebooks and incident coding guidelines (under revision)
- Will be consolidated before migration

### `parse_scripts/`
- Lightweight scripts used to manipulate, validate, or test your YAML, Markdown, or model outputs — especially useful when you're prototyping or hand-verifying inputs and outputs before committing to a pipeline. This folder is a dev playground — not essential to the project, but helpful during refactor or schema alignment.
	- A Python script that extracts used_in values from source_master.yml and cross-checks against _incidents/
	- A utility to check for duplicate id fields
    - A YAML linter or formatter
    - A one-off Markdown-to-CSV converter for Claude runs

### `evidence_trials/`
-  Markdown files or notes where you experiment with linking source evidence to structured variables — a sort of lab notebook for testing your interpretation, LLM compliance, or concept fidelity. These are not structured outputs, but they're how I think through edge cases, UI input/output fidelity, and judgment boundaries before systematizing.
	- Hand-coded INC-001 evidence justification trials using Claude and GPT UI outputs
	- Attempts to map Reddit screenshots to source_master.yml entries and corresponding used_in
	- Commented side-by-side comparisons of LLM runs on the same source set (e.g., Claude vs GPT)
- Workflow
	- evidence_trials/ is a thought lab
	- Once confident in the logic or approach:
		- result moves to _data/evidence/ (for public site rendering)
		- Or incorporate it into your quiet-crawler prompt/output pipeline
	- Delete the trial once its content is versioned elsewhere

---

## 🔄 Migration Plan

| File Type             | Destination Repo      | Notes                                      |
|----------------------|------------------------|--------------------------------------------|
| Prompts + protocols  | `quiet-crawler`        | Move once stable and version-controlled    |
| Raw model output     | `quiet-crawler`        | Useful for test logs and LLM evaluation    |
| Finalized evidence   | `personal-site/_data/` | When referenced in posts or citations      |
| Local scripts        | `quiet-crawler`        | Keep backend logic out of public site repo |

---

## 🚨 Reminder

Once all files are migrated to the backend repo, this folder should be deleted from the public site to avoid duplication, confusion, and version skew.

