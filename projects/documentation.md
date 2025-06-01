---
title: Documentation
layout: project_default
permalink: /projects/documentation/
---

## Automated

- DB scrape by keyword

- The subset of reddit posts to be used as sources from human-selected batch 

	- Automated check if urls in reddit batch already exist in source_master.yml
	- If source already exists, automated add of incident id to the source 

- Claude API will code each incident

	- Questionable whether we will have to code together or not. Can I get claude working well enough to code independently? How much time will that take? 

## Human in the loop 

- Incident selection via applying incident selection criteria to DB

	- Not easy, multiple incidents per DB article and multiple articles may reference a single incident

	- Too keep it manageable, total incident count should be approximately 60 

- Sources 

	- Admin statements

	- Using keywords isn't a great way to select reddit posts, I will select the batch of reddit posts per incident

	- X posts

	- IG posts

	- Local, beat, and mainstream media articles 

- I will code each incident (?)

## Notes

- Claude UI was just not working

	- Helpfulness shortcuts, speculation, and nondeterminism made it impossible to design inputs that could get repeatable outputs. There was no way to compensate for the range of responses I was getting. Moving to API. 

- At some point need to consolidate files, no duplicates in separate git repo's, choose the appropriate place and manage one file only (e.g. source_master.ysl, sources folder)

	- field_definitions.yml needs to be updated and moved to quiet-crawler

- Project definitions (needs a better name, merge with this file), needs to be updated and maintained, eliminate a lot of the useless info

- `_protocols` needs maintenance, "Incident Coding Protocols" can likely be deleted, keep "Codebook with Incident Coding Protocols" both versions to prompt Claude API 

- Each time an incident is defined, create a summary (to prompt Claude) and add it to a master incident list, other metadata can be added as well (e.g. "incidentness", date, sources)

	- There's an Incident Index on the projects page of the website, move or merge or whatever

		- Each index entry links to a markdown. This is obsolete, eliminate it. Doesn't need the coding output there. Only one evidence file (INC-001.yml) with coding output and justifications will be maintained.  

	- Add this to the quiet-crawler README directory tree

- For every change made, update the website README, eliminate the duplicate. Just maintain a single README. 
