---
title: Documentation
layout: single
toc: true
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

- "are you a Zionist?" was an incident, but is the take on the word "Zionist" relevant? Unclear, honestly. We're getting into an "opportunity for students to explain themselves" here, and that is not the direction I want to go. "Do you believe different students define Zionist in different ways?" "Do you believe it contributes to x,y,z divide or x,y,z incident?" "What are your thoughts on the UC criticism of Israel policy?"

7. Interview and larger piece goals

- I was concerned in the past that I couldn't connect incidents, or you couldn't find "intent." Well I can't, but I can paint a picture that shows that deliberate indifference, or negligence, created an environment that exploded prior to April of 2025. 

- I have the coding now, this is about incidents, admin response, how it affected students, and how it may or may not have lead to later incidents. 

	- The missing connector may be the student experiences, and any details they may have regarding facts around incidents 

	- I need to find out what I need to know, to fill some holes, or to put things in some kind of chronological order

- Coded incidents reveal who acted, how the admin responded, and whether there was bias. The drama - differences around meaning, identity, and belonging - is why people acted at all. 

- Bridge between warring insiders and a curious, wary public

- This is also america-first, which means no one here is at fault for anything happening elsewhere in the world (no student)

- I am coming in fresh, I have no predisposition wrt to jargon, etc. Many readers might be like me. I want it to be educational, not morally righteous one way or another. 

	- Positionality excerpts: mini-sections 

		What Does “Zionist” Mean Here?
		We asked 4 people from different sides of the conflict. Here’s how they responded:

			•	A Jewish student involved in Hillel
			•	A Muslim student organizer
			•	A non-affiliated observer
			•	A faculty member or admin

		This treats “drama” as a legitimate epistemological ambiguity—not gossip.

- Be transparent about the dual goal: documenting facts and understanding how this year unfolded in human terms

## LinkedIn about

Looking to position myself as a serious researcher/technologist rather than an activist, emphasize the reproducible/scalable nature of my work, and clearly signal my career pivot while leveraging my technical credentials. The tone is professional but accessible, avoiding both hype and excessive humility.

## Website overhaul 

Clear, professional and functional---some parts may be placeholders---so I can confidently share it when reaching out for interviews and collaboration. 

✅ Home Page (already live, likely index.html)

Title:

- Building AI Audit Tools for Institutional Accountability

Summary block (adapted from LinkedIn):

- I design source-traceable AI systems that detect patterns of inequity in how institutions respond to critical incidents.

	My current project pilots a reproducible audit framework combining AI-assisted analysis, structured coding, and open-source tooling — with a case study focused on higher education.

CTA:

🔗 Project Overview • 📄 CV • ✉️ Contact me to collaborate or share your experience

---------------------------------------------------------------------------------------------------------------------------

🗂 Projects Page (create as projects/index.md or projects.md)

This is the main hub for audit tool work.

Sections:

1. Project Overview

	- Summary from LinkedIn ("I'm engineering measurement systems..." etc.)

	- List bullets:

		- Source-traceable audit system

		- Claude API + structured protocols

		- Tested on real incidents at UCLA

		- Reproducible YAML outputs + policy trace

		- Forthcoming: cross-sector demo

2. Methodology (link out to codebook)

	- One-paragraph summary

	- Button: 📖 Read the Codebook
	→ /projects/codebook_w_coding_proto_v2/

3. System Architecture

	- Include diagram or markdown bullet sketch:

		- Incident ➝ Source Trace ➝ Claude API ➝ Coded YAML ➝ Analysis

4. Early Results (or placeholder)

	- Coming soon: initial visualizations of disparity patterns across incidents coded from 2023–24.

5. Pilot Dataset

	- Could embed a cleaned incident_data.yml preview with 1–2 records.

	- Optional: table or YAML viewer plugin

6. Demo (placeholder)

	- A walkthrough demo is in progress. Email me if you’d like early access or wish to participate in testing.

	- Publish my project as a public dashboard or interactive report → credibility boost

	- A multimedia interactive timeline (data, interviews, sourced documents)

---------------------------------------------------------------------------------------------------------------------------

🗂 Projects Page (extras)

Overview

- This project develops source-traceable audit systems to measure institutional response equity — using AI-assisted analysis, structured incident coding, and reproducible outputs.

Approach

- The framework uses a rigorously defined variable schema and coding logic to classify institutional responses across dimensions like policy enforcement, tone, and support. All classifications are evidence-based and traceable to original sources.

	While full protocols are internal, a redacted methodology is available upon request for collaborators, funders, or ethics reviewers.

System Architecture

- Incident ➝ Source Trace ➝ Claude API ➝ Structured YAML ➝ Analysis Layer

Pilot Results

Keep placeholder or include high-level findings:

- Early findings suggest disparity patterns in how institutions enforce policies based on the perceived identity of protest actors.

Dataset

- Preview incident_data.yml with sensitive fields redacted. Only show:


- id: INC-001
  date: 2024-04-01
  summary: Student protest met with administrative silence after alleged discriminatory targeting.
  visibility: high
  coded_fields: redacted

Demo

No code exposure — just a note:

- A guided demo is available for trusted collaborators or partners under NDA.

---------------------------------------------------------------------------------------------------------------------------

🧪 Code / Tools Page

List your GitHubs:

- quiet-crawler
→ with a one-liner like:

	Claude-integrated audit pipeline for bias detection in institutional responses
	🔗 View GitHub

- Personal Website

	Jekyll-powered, clean-structured public-facing research site
	🔗 View GitHub

---------------------------------------------------------------------------------------------------------------------------

🗣 Interviews Page 

Plan for:

- Share Your Story
	
	I'm currently gathering first-hand accounts from students, faculty, and administrators about how their institutions responded to critical incidents. These interviews help provide human context to the coded data.

	💬 Reach out securely

---------------------------------------------------------------------------------------------------------------------------

📎 Footer Elements

- CV link (PDF or Notion if you want version control)

- Email or contact form

- GitHub + LinkedIn icons

- Disclaimer if needed (esp. if you’re doing sensitive work)

---------------------------------------------------------------------------------------------------------------------------

✅ Actionable Today

Minimum viable launch checklist:

- Add a projects.md or projects/index.md with:

	- Overview

	- Method summary

	- Codebook link (not ready to share this)

		- Codebook is the IP. It encodes the operational logic, enforcement thresholds, and evidence standards — basically the engine of my audit method. This will stay private. I can open source it when it is complete and fully functioning. 

	- Placeholder for results/demo

- Link your GitHub

- Link your CV

- Link your LinkedIn

- Set up basic homepage text + call to action

---------------------------------------------------------------------------------------------------------------------------

I will keep code and methodology closed while I finish it, especially under these conditions:

- Self-funded

- The work involves complex enforcement logic

- Building a system where premature use or misunderstanding could undermine its credibility

- I have long-term open-source intent

✅ This is aligned with best practices in:

- Open science / open-source philosophy → Open when it’s ready, not before.

- Responsible AI auditing → You don’t release logic until it’s validated and safe to use.

- Academic integrity → Peer reviewers get internal access under review agreements; general release happens once it's stable.

- Software development norms → Many respected tools (e.g. PyTorch, HuggingFace, Signal) began as closed/internal before public launch.

## Open-Source Commitment

This project is being developed with a strong commitment to open-source principles.

The audit framework, once finalized and validated, will be released publicly under a permissive license to support adaptation across civil rights, journalism, and institutional oversight communities.

### ⏳ Why Not Yet?

The core logic and enforcement protocols are still evolving. Premature release could lead to misuse, misinterpretation, or dilution of accountability thresholds.

Until then, vetted collaborators may request access to specific modules (e.g., output formats, redacted examples, data schemas) under informal or formal review agreements.

**🛠 Open release is planned for:** *upon completion of the UCLA case study + audit validation layer.*

If you’re interested in contributing to testing or ethics review, [get in touch](mailto:your@email).

### Blurb

Long-form (for proposals or application narratives):

I intend to release this audit framework as an open-source tool once its methodology is finalized and validated. At this stage, the core logic remains under development and is not yet ready for public release — both to preserve the integrity of enforcement thresholds and to prevent premature or inconsistent reuse. I'm funding this work independently and balancing rigor with sustainability, but I remain committed to transparency and eventual open access. I welcome collaboration, ethics review, and feedback under limited access agreements in the meantime.

## Overall theme

Systematic analysis of the systemic effects of institutions that use power-based methods to achieve their ends. I.e. how can activity that is "lawful" in effect draw our constitutional democracy away from a liberal democracy and towards things like oligarchy? (that can be the general interest without sounding like an activist). Basically how do de-facto power systems exploit our constitutional democracy so that it loses its effective purpose? (to be a liberal democracy). 

e.g. defunding the DOE could lead to the privatization of civil rights enforcement 

A practical policy pipeline shouldn't be so abstract and it shouldn't be so theoretical: 

- gather data - systematic analysis - raise awareness - determine consensus - fix the issue 

## Research Page Structure

## 1. Lead with Impact (30-second pitch)

> Start with a concise statement that immediately communicates what you're building and why it matters:

> "Building transparent audit tools to detect bias in institutional oversight systems. This pilot framework uses structured incident analysis and AI-assisted coding to reveal patterns in how universities respond to campus conflicts based on group identity."

> The framework uses a rigorously defined variable schema and coding logic to classify institutional responses across dimensions like policy enforcement, tone, and support. All classifications are evidence-based and traceable to original sources.

## 2. The Problem (accessible context)

Frame it in terms anyone can understand:

- When protests happen on campus, who gets protected and who gets punished?
- How do we know if institutional responses are fair?
- Current oversight relies on anecdotal evidence or legal complaints filed years later

## 3. The Approach (your innovation)

Highlight what makes your methodology unique:

- **Structured Evidence Collection**: Every incident coded using 20+ variables
- **Source-Traceable Analysis**: All claims linked to specific documents
- **AI-Assisted Consistency**: Using Claude API to scale rigorous coding protocols
- **Open Methodology**: Replicable framework others can adapt

## 4. Current Focus: UCLA Case Study

Present this as a proof-of-concept:

- Analyzing 60+ incidents from 2023-2024
- Comparing administrative responses across different affected groups
- **Testing whether severity, visibility, or group identity best predicts institutional action**

## 5. Technical Implementation (for policy/tech audience)

Brief overview with links to:

- Codebook (your structured variable system)
- Sample coded incident (show the rigor)
- GitHub repo (if public)
- Break up the would-be peer reviewed paper into individual sections: 
	- Technical blog post on Claude API implementation
	- Policy blog post on the current art wrt structured, qualitative coding (like a background/literature review)

## 6. Broader Applications

Show you're thinking beyond one campus:

- Protest policing accountability
- Civil rights enforcement monitoring  
- Corporate DEI audit frameworks
- Any context where institutional bias needs systematic measurement

## 7. Get Involved

Clear calls-to-action:

- "Interview participants: Share your UCLA experience"
- "Researchers: Adapt this framework for your institution"
- "Funders: Support scaling to multi-campus analysis"
- Contact form or calendly link

---

## Key Messaging Points

### For LinkedIn/Networking:
- Position as "building infrastructure for accountability" not "exposing UCLA"
- Emphasize the reproducible methodology over specific findings
- Frame as public interest technology, not activism

### For Interview Subjects:
- Include a simple FAQ: "How will my story be used?"
- Show sample incident analysis (anonymized)
- Explain the difference between narrative context and coded data

### For Both:
- Use visuals: workflow diagram, sample coded incident, timeline
- Keep technical jargon in expandable sections or separate pages
- Lead with "why this matters" not "how it works"

## Alternative Page Names:
- **"Research"** - Most professional, academic-leaning
- **"Current Work"** - Implies ongoing, active project
- **"Accountability Lab"** - Positions you as building something bigger
- **"The Audit Framework"** - Product-focused naming

Given your goals, I'd lean toward **"Research"** with a tagline like "Building tools for institutional accountability" to immediately signal both rigor and purpose.


# Research Page Architecture

## Main Research Page Structure

### Hero Section
- **Title**: "Research" or "Building Tools for Institutional Accountability"
- **One-line description**: The 30-second pitch
- **Visual**: Workflow diagram or sample incident analysis screenshot
- **Primary CTA button**: "View Sample Analysis" or "Explore the Framework"

### Main Content (Single Page)
All core content lives on this main page, organized in expandable/collapsible sections:

1. **The Problem** [Always visible]
2. **The Approach** [Always visible]
3. **Current Focus: UCLA Case Study** [Always visible]
4. **Technical Implementation** [Expandable section]
5. **Get Involved** [Always visible with clear CTAs]

### Linked Sub-Pages (via navigation or cards)

#### Essential Sub-Pages:

**1. `/research/methodology`**
- Full codebook with variable definitions
- Coding protocols
- Data collection procedures
- For researchers wanting to replicate

**2. `/research/sample-analysis`**
- One fully coded incident (anonymized)
- Shows all variables with justifications
- Interactive or well-formatted YAML/JSON viewer
- "This is what rigorous coding looks like"

**3. `/research/for-participants`**
- FAQ for interview subjects
- Consent information
- How data will be used
- Contact form specifically for participants

**4. `/research/technical`**
- Claude API implementation details
- GitHub repo link
- Technical blog posts
- For developers/technical audience

#### Optional Sub-Pages:

**5. `/research/findings`** (when ready)
- Key patterns discovered
- Visualizations
- Policy implications

**6. `/research/framework`**
- Downloadable templates
- Implementation guide
- For organizations wanting to adapt

### Navigation Structure Example:
```
Research [main page]
├── Methodology
├── Sample Analysis
├── For Participants
├── Technical Details
└── [Future: Findings]
```

### In-Page vs. Linked Content Decision Tree:

**Keep IN-PAGE if:**
- Essential for understanding the project (Problem, Approach)
- Needed by multiple audiences (Current Focus)
- Call-to-action (Get Involved)
- Under 200 words per section

**Link to SUB-PAGE if:**
- Detailed technical content (full codebook, protocols)
- Audience-specific (participant FAQ, developer docs)
- Living documents that update frequently
- Requires different formatting (code, tables, interactive elements)

### Visual Layout Suggestion:
```
┌─────────────────────────────────────┐
│          HERO SECTION               │
│   Title + Tagline + Visual + CTA    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         THE PROBLEM                 │
│   3-4 bullet points, accessible     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        THE APPROACH                 │
│   4 key innovations with icons      │
└─────────────────────────────────────┘
┌──────────────┬──────────────────────┐
│   CURRENT    │                      │
│   FOCUS      │   Quick Stats Box    │
│              │   • 60+ incidents    │
│              │   • 20+ variables    │
└──────────────┴──────────────────────┘
┌─────────────────────────────────────┐
│    EXPLORE THE FRAMEWORK            │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ View │ │ Read │ │ Get  │         │
│  │Sample│ │ Docs │ │ Code │         │
│  └──────┘ └──────┘ └──────┘         │
│   [Cards linking to sub-pages]      │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         GET INVOLVED                │
│   • For Participants [button]       │
│   • For Researchers [button]        │
│   • For Funders [button]            │
└─────────────────────────────────────┘
```

### Implementation Tips:

1. **Progressive Disclosure**: Start simple, let people dig deeper if interested
2. **Multiple Entry Points**: Different CTAs for different audiences
3. **Scannable**: Headers, bullets, and visual breaks
4. **Mobile-First**: Collapsible sections work well on phones
5. **Analytics**: Track which sub-pages get visited to understand audience

This structure serves both audiences—keeps it accessible for interviewees while showing rigor for professional networking.

## Notes

- Reddit and certain student coding gauges could act as an ice-breaker in student interviews 

- Really the three analysis lenses should be media visibiltiy, severity, and student identity 

- Reddit and other social media-style anecdotal evidence should be grouped in with interviews or simply "good-to-have" data for context and to enrich the story, give it some edge and a human element. 

### Explaining "coding"

In this project, “coded” is closest to the social sciences definition:

Assigning structured values to qualitative evidence using predefined rules.

I'm not writing software, tagging medical records, or running NLP pipelines — I'm applying a structured classification system to human, institutional, and contextual data drawn from sources like statements, reports, and media coverage.

⸻

✅ Recommended Explanation (for Clarity)

Wherever I say “coded,” consider linking or footnoting it once like this:

Every incident is coded using 20+ structured variables based on evidence from source documents.
(In this context, “coding” refers to systematically categorizing qualitative data using predefined rules — a method adapted from social science research.)

📘 Optional Sidebar Definition:

What does “coded” mean in this project?

In social science research, “coding” means categorizing qualitative information using a structured set of rules.

Here, every campus incident is reviewed and assigned values across 20+ variables (e.g. administrative response type, tone, policy enforcement) based on evidence from public records, statements, and media reports.

This ensures the analysis is reproducible, evidence-bound, and not based on personal interpretation.

Plainspoken definition — “qualitative evidence” can sound abstract or academic, especially to technical or engineering audiences. 

⸻

🧾 Definition: Qualitative Evidence

Qualitative evidence refers to non-numerical information — things like written statements, protest photos, administrative emails, news articles, or social media posts.

It’s data that captures what people say, do, or experience, rather than numbers or metrics. In this project, qualitative evidence includes:

- Student and faculty statements

- Official university communications
	
- Media coverage of incidents
	
- Policy text and enforcement language
	
- Screenshots or photos of protests

📌 Comparison (a contrast box)

Term | Description | Example
Qualitative | Words, statements, context | “The university condemned the protest.”
Quantitative | Numbers, measurements | 35 students were arrested


## The value proposition of the technical work

- See the Claude API Coding Project conversation (OpenAI) called value prop (don't delete)