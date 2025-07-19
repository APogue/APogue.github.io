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

	- start putting together proper system role instructions and user directives  (read the incident summary, the scope, code the task, etc.) ✔️

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

	- this will just be output to a logger, no separate model config input file (see points below)

- Because initially testing models + tweaking inputs frequently

	- So use overwrite mode by default, but:

		- Add an optional --versioned flag or config toggle in test_claude.py

		- On --versioned, save outputs to timestamped filenames

		- Always log model + config hash in header so you can trace behavior

- System messages checklist (don't have too many "knobs" it will be difficult to trace back issues)

	- Role ✔️
	
	- Citation protocol (may include examples) ✔️

	- Definitions ✔️

		- Incident definition 

			- summary (its use)

			- scope (its purpose)

		- Source definitions 

		- Codebook definition

		- Protocol definitions 

	- Codebook 

	- Codebook + protocol

	- POL + PHIL docs (this will require a pre-process to condense material)

	- YAML output protocol (may include structured examples)

		- maybe this can just be text that a post-processing script translates into YAML, but still requires structured examples

	-  Validation protocols (only necessary if I want to refer Claude to a repeating verification set)

		- Reminds Claude that its outputs will be parsed and checked line-by-line — to help nudge consistent formatting

- User messages checklist 

	- Sources

	- audit instructions (COT thinking, transparency logging) ✔️

	- confirmations and verifications

	- incident id, date, summary, scope 

- verifications output should include the incident scope (in Claude's own words) this is a good audit check and transparency information to log for tracking errors. ✔️

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
│   │   ├── coding_workflow.txt ✔️           # Central command points to modules, then requests COT, verification and justification

```

## Source processing

# Instead of "forget previous variable," do this:
administrative_response_severity:
  # Restate the specific focus
  instruction: "For this variable, focus ONLY on official UCLA administrative statements and actions"
  # Restate relevant boundaries  
  timeframe: "Within 7 days of incident"
  # Restate what to ignore

-----------------------------------------------------

Given this incident: "Students displayed pig effigy with messaging at UC Regents meeting"

Extract sections from ALL provided documents that relate to:
- Visual displays, effigies, sculptures, or symbolic objects
- Demonstrations or protests at University events  
- Religious, ethnic, or national origin content
- Prior approval requirements for displays
- Expression and speech of any kind
- Time, place, and manner regulations

Search equally through:
- PHIL-001 (free speech document)
- POL-001 (non-affiliate conduct)  
- POL-002 (student conduct)
- POL-003 (anti-discrimination)

Do NOT determine whether conduct is protected or prohibited.
Do NOT skip documents.
Extract from ALL documents, even if sections seem contradictory.
Include complete text of each relevant section.
When in doubt, include rather than exclude.

```yaml
extracted_sections:
  - source: "PHIL-001 Part I"
    text: "[Full text of relevant section]"
    
  - source: "POL-003 Section II.A.1"
    text: "[Full text of relevant section]"
    
  - source: "POL-001 Section 100.004"
    text: "[Full text of relevant section]"

```

## Quiet-Crawler Claude Pipeline – Component Workflow
==================================================

🔹 1. doc_loader.py
- Loads source content (e.g., sources/DB-001.txt, sources/POL-003.txt, etc.)
- Loads system reference files from inputs/system/*.txt or *.md
- Validates incident metadata and checks that source files exist
- Provides helpers:
  - get_incident(incident_id)
  - load_source_content(source_id)
  - prepare_sources_for_api(source_ids)
  - prepare_system_documents(file_paths)

Used by:
➡️ preprocess_payload.py

🔹 2. preprocess_payload.py
- Wraps raw content into Claude-ready message/document payload blocks
- Pass 1: build_policy_condense_prompt(source_id)
  - Builds a "user" message to summarize a single policy/guidance file
- Pass 2: build_incident_coding_parts(incident_id, extra_system_paths)
  - Builds system message + documents + user prompt
  - Includes static rulebook files and merged policy file if present

Used by:
➡️ run_pass1_condense_policy.py
➡️ run_pass2_code_incident.py
➡️ (indirectly) main.py

🔹 3. claude_api.py
- Low-level API client for calling Claude
- Uses Anthropic SDK or raw HTTP to submit payload
- Returns Claude’s response (e.g., {"completion": ..., "raw_response": ...})

Used by:
➡️ test_claude.py

🔹 4. test_claude.py
- Handles Claude interaction during testing phase, API interface layer
- "Middleman" between 
		- 🧠 Prompt builders (preprocess_payload.py), 
		- 📤 Claude client (claude_api.py), 
		- 🪵 Logging layer (logger.py)
- Wraps logging + Claude call in a single function:

```
           Claude response
                 |
             test_claude
                 |
          +------+--------+
          |               |
   sent to logger     returned to caller
   (audit_log)        (for final use)

```

| Functionality                              | Description                      |
| ------------------------------------------ | -------------------------------- |
| Accepts a ready-to-send `payload`          | From `run_pass*.py`              |
| Logs the `payload` to `outputs/audit_log/` | Using `logger.py`                |
| Calls Claude via `claude_api.send()`       | API call happens here            |
| Logs the response to `audit_log/`          | Response `.txt` file             |
| Returns the Claude `completion`            | For further processing or saving |

- Helps reduce repeated boilerplate in pass scripts

Used by:
➡️ run_pass1_condense_policy.py
➡️ run_pass2_code_incident.py
➡️ main.py

🔹 5. run_pass1_condense_policy.py
- Script for Pass 1: policy condensation
- For each given source_id:
  - Calls build_policy_condense_prompt(source_id)
  - Sends to Claude via send_prompt()
  - Saves result to outputs/condensation/condensed_<SOURCE_ID>.txt

🔹 6. run_pass2_code_incident.py
- Script for Pass 2: incident coding
- Accepts one incident_id
- Loads:
  - incident metadata (source list)
  - static system prompt files
  - merged policy summary from: outputs/condensation/INC-001-policy-output.txt
- Calls build_incident_coding_parts(incident_id, extra_system_paths)
- Sends to Claude via send_prompt()
- Saves response to:
  - outputs/coded_text/INC-001-coded-output.txt (raw response)
  - outputs/coded_output/INC-001-coded-output.yml (validated YAML)

🔹 7. main.py
- Orchestrates full pipeline for a given incident
- Steps:
  1. Runs Pass 1 on all relevant PHIL-/POL- sources for the incident
  2. Merges individual condensed_*.txt files into one:
     outputs/condensation/INC-001-policy-output.txt
  3. Runs Pass 2 to code the incident using merged policy + incident sources


| Step | Description                      | Files                                         |
| ---- | -------------------------------- | --------------------------------------------- |
| 1    | Load sources + incident metadata | `doc_loader.py`                               |
| 2    | Build Claude input (`messages`)  | `preprocess_payload.py`                       |
| 3    | Send to Claude                   | `test_claude.py`, `claude_api.py`             |
| 4    | Log inputs/outputs               | `logger.py`                                   |
| 5    | Run via script                   | `run_pass1_*.py`, `run_pass2_*.py`, `main.py` |


| Layer            | Sends to Claude?   | Description                                             |
| ---------------- | ------------------ | ------------------------------------------------------- |
| `claude_api.py`  | ✅ Yes              | The only file that directly talks to the Claude API    |
| `test_claude.py` | ➡️ Wraps it        | Calls `claude_api.send()` and handles logging           |
| `run_pass*.py`   | ➡️ Triggers it     | Calls `test_claude.send_prompt()` with payload          |
| `main.py`        | ➡️ Triggers passes | Orchestrates both passes but doesn't call Claude itself |


📌 Summary

- run_pass*.py scripts: control the process (prepare → send → save)
- test_claude.py: executes the process (log → send → log)
- claude_api.py: actually sends the HTTP/SDK request to Claude

## public-facing profile 

Positioning anchor - 

This project pilots a domain-specific audit protocol — not a product, but a replicable methodology for detecting bias in institutional response systems. It begins with a focused case study in higher education, where incident response data offer a well-bounded testing ground for evaluating oversight processes. While the current implementation is domain-specific, the framework may inform future oversight efforts in other high-conflict civic contexts, including protest policing and civil rights enforcement.

PhD completed following an approved leave of absence and mid-program lab transition.

PhD coursework and research included robotics, SLAM, nonlinear systems, and communications-derived motion planning.



| Use                                   | Why It Works                                                                                                                 |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **LinkedIn “About”**                  | It tells people *what you’re doing* and *why it matters*, without overhyping or overpersonalizing                            |
| **Project page intro**                | It explains the work’s scope, starting point, and potential without sounding like an activist or academic insider            |
| **Fellowship Statement of Purpose**   | You can expand it slightly to lead your application narrative — it’s your “What’s the project and why now?” opening          |
| **Bios or email footers**             | Shortened, this becomes: “Building audit tools for institutional bias detection using structured, source-traceable methods.” |
| **Cold outreach / networking intros** | Use it when someone asks, “So what are you working on?”                                                                      |



Show your system	Not your story — your outputs. Diagrams, structured fields, methodology docs, incident YAML. Make your rigor visible.

You’re building a reproducible, open framework for measuring administrative bias.

It touches:

- AI trust

- Civil rights

- Transparency

- Higher ed governance

- Public accountability

## project direction

Looking at policy people on linkedIn, they're heavily credentialed, yet I'm unaware of any actual impact. Burying this project in the policy domain is not the way. 

1. Case study with interviews (narrative component for context)

The goal is to enhance the incident analysis with personalized case context. Interviews serve as narrative bridges and context. 

Task: 

- Pick 1 - 3 incidents (particularly striking)

- Interview people involved

- Use interviews to write a standalone narrative case study (2-4 pages/incident)

	- They aren't data, use the interviews to illuminate patters the data supports

	- But can't lead a subject, the questions should remain neutral but about that individual's experience

2. Journalism Component (Mainstream Advocacy/Awareness)

The goal is to use the project as a launchpad for a journalistic project that makes the problem legible and urgent to the public.

Task: 

- Identify students with contrasting experiences but that tell the same story about administrative failures

- Conduct on-record interviews that tell a comprehensive story (i.e. members from different parts of the community)

	- I personally believe professors will be useless, unless they speak anonymously 

- Collect data in various forms of descriptive media: screenshots, letters, emails, audio snippets

Publish as:

- A longform reported feature 

- A multimedia interactive timeline (data, interviews, sourced documents),

- Or serialize short vignettes via social channels 

This becomes a hybrid product: part data-driven investigative report, part human-centered journalism.

3. To start 

- Interview one person involved in an incident already coded

- Ask questions about the facts surrounding the incident or include parts they speak on that relate

4. Priorities 

- July: (preseve and package phase)

	- Interviews 

		- Choose incidents

		- Reach out to 5-7 people for interviews now

		- Draft 1-page pitch email and 3-4 open-ended questions per interview

		- Goal: 2-3 interviews by the end of July, transcribed 

			- record on Zoom

	- LinkedIn + Digital identity 

			- Reposition career path 

			- Clean up website

	- Finish the Quiet Crawler code 

	- Code 2-3 incidents 

		- Start with incidents where interviews are likely 

		- Focus on speed and completeness, not perfection. Revise later. 

- August (in-person leverage phase)

	- In-person interviews

	- 5-6 total incidents

- September (synthesis and applications phase)

	- First case-study plus story combo

		- One incident with narrative intro, quotes, and codebook-backed analysis

		- Goal: publish it

	- Draft fellowship application materials

		- Mozilla, Berkman Klein Assembly, Public Interest Technology, Ford Foundation Emerging Voices 

	- 10 incidents (or 7 + 3 WIP) by end of September 

- October (visibility and validation phase)

	- Follow-up interviews or quotes

		- Ask for permission to use names or anonymize 

		- Present early findings to contacts

	- Ask for "insider feedback"

		- 2-3 trusted allies to review pre-release material

		- Get feedback: accuracy, credibility, impact

	- Apply to fellowships with progress in hand

		- 10 coded incidents, 2-3 human stories, a coherent narrative about a project's policy and public implications 

5. Overall goal (current logistics + career)

- Form the two human-interest approaches into sequential layers

	- Can take an event, and code it as a source of "data" but give it weight using a journalistic writeup - same event, different framing, broader reach

- Start with case study + interview route to introduce myself, capture disappearing memories, and enrich my dataset. Then use the interviews and findings as the basis for journalism-facing narrative that reaches the broader public. 

	- The case study shows rigor and structure (fellowship and polcy credibiltiy) "I built a replicable incident dataset grounded in firsthand testimonies..."

	- The journalism narrative shows urgency and humanity (accessibility for general audiences and editors) and provides a publishable product to generate outsider awareness and to point to when networking. 

- Why a fellowship if not necessarily for funding: 

	- Validate my work publically 

	- Offer institutional affiliation and credibility 

	- Build a network of people working on aligned problems

	- Money 

- Why a fellowship can help my career trajectory - a fellowship is a career multiplier 

	- I want to change fields from an eng PhD to public-interest AI/policy/journalism

	- I'm building something hybrid (data + story + law or journalism + data + civil rights)

	- I have no network

	- A fellowship can open a door if I'm lacking a traditional resume, will allow me to build a name around a project, not just past roles, place me in a cohort or ecosystem where influential people can see my work 

	- A fellowship should assist with a hybrid contribution so that it doesn't get lost, doesn't get siloed, and can ppen doors to larger stages (e.g. testimony, coalition-building, public writing)

6. What I want out of this project

- A balance between narrative coherence and epistemic rigor

- But "How do I capture a multi-incident arc—where the same players reappear, clash, and evolve—without slipping into partiality, hero-making, or flattening nuance?" 

	- It is important that I stick to "incidentness," I can't paint these people's emotions or try to see their spirit. This is my strongest skill and yet it is somehow useless in this project. 

	- Can I trace arcs across incidents while PROTECTING DATA OBJECTIVITY?

	- Can I see if someone was radicalized over time? Did they lose trust in the admin over time? Were their voices being suppressed? 

	- But their theories, their desires, their mission, unless related to an incident, or an admin response to that incident, is irrelevant. 

- Early interviews asks them narrowly for their perspective one one or two incidents

- After trust is built, circle back "You saw a lot this year - can we talk about the bigger picture?" 

- But it must stay on task. I think "why didn't you engage with CAC, was it based on philosophical differences?" is okay. It's even okay to ask what that philosophy was, and perhaps what they believed CAC's philosophy was at the time, especially because this context is totally relevant. CAC is a part of USAC. 

- Macklemore's film was about these students, and how they clashed with the univeristy. My story needs to be about the incidents, and how the university clashed with the students. There was far too much creative license (imo) when it came to the macklemore film. It was dramatized for the purpose of telling the audience the pro-palestine mission. My purpose is to remove the shackles on free speech. That alone is the purpose. 