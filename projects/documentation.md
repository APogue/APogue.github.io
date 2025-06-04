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

	- field_definitions.yml was updated to variable_data.yml and moved to quiet-crawler (maintain there) ✔️

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
