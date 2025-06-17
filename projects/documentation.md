---
title: Documentation
layout: project_default
permalink: /projects/documentation/
---

## Automated

- DB scrape by keyword

	- the official "inclusion rule" is the connection between the scrape and the chosen incident articles

- The subset of reddit posts to be used as sources from human-selected batch 

	- Automated check if urls in reddit batch already exist in source_master.yml

	- If source already exists, automated add of incident id to the source 

- Claude API will code each incident

	- Questionable whether we will have to code together or not. Can I get claude working well enough to code independently? How much time will that take? 

## Human in the loop 

- Incident selection via applying incident selection criteria to DB

	- Not easy, multiple incidents per DB article and multiple articles may reference a single incident

	- To keep it manageable, total incident count should be approximately 60 

	- Keep two databases tracking incident relationship to sources

		- In source_master.yml, each source should have the incidents it covers as part of its metadata

		- Created incident_data.yml, each incident should have a list of contributing sources as part of its metadata

- Sources 

	- Admin statements

	- Using keywords isn't a great way to select reddit posts, I will select the batch of reddit posts per incident

	- X posts

	- IG posts

	- Local, beat, and mainstream media articles 

- I will code each incident (?)

## To dos 

- Reddit scraper completed✔️, due to the potential for source duplication as I run through incidents, the functionality in the automated section above should be implemented

- Claude UI was just not working

	- Helpfulness shortcuts, speculation, and nondeterminism made it impossible to design inputs that could get repeatable outputs. There was no way to compensate for the range of responses I was getting. Moving to API. 

	- Don't ask the API to assume too much, if it says it doesn't want to "assume" a photo is affiliation because it may just be documentation, then tell Claude the gathered sources were procured, pre-processed; don't force it to assume too much, that may lead to a range of responses, even in the API (claude doesn't need to identify affiliation, it needs to verify)

	- The photo alt text can also do this, the UI was struggling with the semantics of the photo: the posters were the "actors" sharing the incident and "targeting" the Jewish affiliates. One can then infer that they were not merely "documenting." How much of this kind of context should be included?

- At some point need to consolidate files, no duplicates in separate git repo's, choose the appropriate place and manage one file only (e.g. source_master.ysl, sources folder)

	- if I want to autolink sources in blog posts, then two separate source_master.ysl need to be maintained. What is the most streamlined approach depending on my publishing end goal?

	- field_definitions.yml was updated to variable_data.yml and moved to quiet-crawler ✔️(update and maintain there) 

	- move keywords.yml to quiet-crawler (maintain there), now scraper_inputs/daily_bruin/universal_keywords.yml ✔️

- organizational-notes.md needs to become a proposal ✔️, update it, clean it up, make it presentable 

	- Project definitions was merged with "Project Proposal," keyword and coding variable data (called "field definitions") were deleted, source management prefixes kept (bottom of the document). ✔️

- `_protocols` needs maintenance, "Incident Coding Protocols" can likely be deleted, keep "Codebook with Incident Coding Protocols" both versions to prompt Claude API 

	- When the API version of the "Codebook with Incident Coding Protocols" is complete, then Codebook will have taken its final form, keep one version (published) on the website project page

		- Note: this means Codebook.md will be moved ✔️ and maintained in quiet-crawler 

- Each time an incident is defined, create a summary (to prompt Claude) and add it to a master incident list, other metadata can be added as well (e.g. "incidentness", date, sources)

	- File created in quiet-crawler/data/incident_data.yml ✔️

	- There's an Incident Index on the projects page of the website, sunset it after Claude API training is complete

		- Each index entry links to a markdown. This is obsolete, eliminate it. Doesn't need the coding output there. Only one evidence file (INC-001.yml) with coding output and justifications will be maintained.  

- quiet-crawler/scrapers has directories (eventually flattened), not sure what to do with the chancellor scraper, chancellor data is really dependent upon incidents and can't be analyzed independently (delete?)

- For every change and added features, update quiet-crawler README 

- For every change and general progress, update the website README, eliminate the duplicate ✔️. Just maintain a single README. 

## Anthropic features

- [Models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)

- [Prompt caching](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)

- [Prompt design console](https://console.anthropic.com/workbench/ced257ec-1915-4dab-878b-a06e5c531951)

- [Chain of thought (COT) prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought)

	- Tasks requiring application of logic

- [Extended thinking](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)

- [Citations](https://docs.anthropic.com/en/docs/build-with-claude/citations)

- [Prompt library --cite your sources](https://docs.anthropic.com/en/resources/prompt-library/cite-your-sources)

- [Message batches](https://docs.anthropic.com/en/docs/build-with-claude/batch-processing)

- [Anthropic Just Released a Major New Feature...](https://www.inc.com/ben-sherry/anthropic-just-released-a-major-new-feature-to-make-your-ai-smarter/91132281)

## Test Claude API Script To do

- base script written (not optimized, optimize using o3)

	- test base script ✔️

	- check base script output ✔️

	- add a function for input of codebook, protocol (expect large docs), definitions, and summary ✔️

		- these are system messages: you need to be clear about the incident scope, and how to constrain citations to look at information, tone, and commentary directly related to that scope. It is possible to over-constrain that though (I think it occurred on a couple UI runs). If it is over-constrained it takes that command too literally and includes only obviously linked content. 

	- add a function for processing output to 1. logger and 2. YML evidence/justification file (this depends on citations really and how much of it is audit script or COT and how much is the response)

	- optimize base script ✔️

	- have a toggle for the bash output, toggle off

	- put the output and the COT into a audit file for now (debug)

	- start putting together proper system role instructions and user directives  (read the incident summary, the scope, code the task, etc.)

		- post-process into a YAML or now, without official citations maybe it can be end-to-end

	- look into caching, or actually implementing caching 

	- start migrating codebook and protocol to .txt files that the above function would feed in (system) 

		- not really needed actually it can read-in markdown fine, just edit (pared down protocol and supply the links to the test_claude.py)

	- Put the POL documents in as well (system? set it up so it can quote from system)

- Suppress output to git bash, output directly to file

- Separate the codebook and protocol or combine? Figure out what to do with these files

	- codebook 

	- protocol

	- codebook with protocol

	- codebook with protocol v2

- model_config helps track which model is output to the script (not the api), then output that to track it via the logger

- Because initially testing models + tweaking inputs frequently

	- So use overwrite mode by default, but:

		- Add an optional --versioned flag or config toggle in test_claude.py

		- On --versioned, save outputs to timestamped filenames

		- Always log model + config hash in header so you can trace behavior

- System messages checklist (don't have too many "knobs" it will be difficult to trace back issues)

	- Role 
	
	- Citation protocol (may include examples)

	- Definitions

		- Incident definition 

			- summary (its use)

			- scope (its purpose)

		- Source definitions 

		- Codebook definition

		- Protocol definitions 

	- Codebook 

	- Codebook protocol

	- POL + PHIL docs

	- YAML output protocol (may include structured examples)

		- maybe this can just be text that a post-processing script translates into YAML, but still requires structured examples

	-  Validation protocols 

		- Reminds Claude that its outputs will be parsed and checked line-by-line — to help nudge consistent formatting

- User messages checklist 

	- Sources

	- audit instructions (COT thinking, transparency logging)

	- confirmations and verifications

	- task requests "here is an incident I want you to code..."

	- incident id, date, summary, scope 


## Completed (first run)

```
.

quiet-crawler/
│
├── inputs/                             # Claude API prompt inputs (modular, editable)
│   ├── system/                             # System-level configuration (shared across all incidents)
│   │   ├── system_role.txt  ✔️                 # Claude's persona (e.g., "You are an evidence auditor...")
│   │   ├── justification_protocol.txt ✔️            # How to extract and attribute quotes (format, source ID rules)
│   │   ├── definitions.txt  ✔️                 # Incident boundaries, source types, codebook meta-rules
│   │   ├── codebook.md                       # Variable dictionary with descriptions and values
│   │   ├── codebook_protocol.md              # Logic for applying codebook (e.g., disqualifying evidence checks)
│   │   └── verifications.txt                 # Claude must confirm checklist (e.g. "I have reviewed all sources")
│   ├── incident/                           # Per-incident user message inputs
│   │   ├── user_prompt.txt  ✔️                # Task framing for Claude ("Here is an incident I want you to code...")
│   │   ├── audit_instructions.txt ✔️           # Central command points to modules, then requests COT, verification and justification

```