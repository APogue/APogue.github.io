---
title: Codebook with Integrated Protocols V2
layout: project_default
permalink: /projects/codebook_w_coding_proto_v2/
---


### V2 Goals

Claude is doing a fine job in some areas and ignoring instructions in others. Previous iterations of the document sought to add more text to emphasize where instructions needed to be followed. This doesn't work. Either Claude needs to be instructed in different ways, or certain areas must remain discretionary because no set of instructions will obtain the exact desired behavior. Places where this is the case should be documented. 

1. Identify which behaviors are actually controllable through instructions vs. which are judgment calls

2. Streamline protocols to focus only on trackable, auditable requirements

3. Make citation/source-checking requirements the primary enforcement mechanism

4. Remove redundant verification checklists that don't actually change behavior

5. Document where discretion is inevitable rather than pretending it can be eliminated

I want it to mimic the Citations function in the Claude API. I want transparent, trackable, auditable decisions based on direct quotes from sources. (Really I want to use the API, it might even be cheaper for me, but it would be complex and make the project unusable in general for others if that's an option I want to leave open).

1. Granular citation linking - Each claim should be directly tied to specific source content

2. Transparent sourcing - Show exactly where each piece of evidence comes from

3. Minimal but sufficient evidence - Check enough sources to support the decision, but don't over-analyze

4. Auditable methodology - Make it clear how I arrived at each conclusion

The point is to streamline the codebook_with_coding_protocol - to focus on citation requirements and evidence standards rather than trying to control subjective judgment calls through excessive rules.

### CORE METHODOLOGY SECTIONS

### SECTION 1: INCIDENT BOUNDARY IDENTIFICATION

- Begin with the OFFICIAL INCIDENT SUMMARY provided for each incident
- The incident is defined ONLY by the specific event, actors, location, and timeframe in the summary
- For each source, identify ONLY content that directly describes this specific incident
- INCLUDE: Content explicitly referencing the specific actions, symbols, or events named in the incident summary
- INCLUDE: Direct reactions to or impacts of this specific incident
- EXCLUDE: General campus climate, similar incidents, or broader contextual information unless explicitly tied to THIS incident
- If uncertain whether content refers to THIS specific incident, DO NOT USE IT

### SECTION 2: SOURCE IDENTIFICATION AND CITATION

- Reference sources by exact filename/ID provided (e.g., "ADM-001", "DB-001", "SOC-006")
- Do NOT reference sources from the source_master.yml unless they were also provided as actual file content
- ONLY reference sources that were actually provided as files, using their exact IDs
- Prioritize sources most likely to contain relevant information (e.g., SOC-sources for actor or target tone, ADM-sources for admin response)

### SECTION 3: EVIDENCE STANDARDS

- Check sources systematically until sufficient evidence is found for each variable ("sufficient" is further defined below and in specific variable definitions in later sections)

- A source may be a text file OR an image file, if the source is an image file it is your job to 
	
	- Read text that appears in images directly
	- Identify visual elements, symbols, or objects
	- Understand layout and context
	- Extract quotes from text shown in the image AND/OR draw conclusions about the incident from visual cues. DO NOT simply search the image for text as evidence. 
	- You may cite an image source and justify it as evidence using your own words WITHOUT extracting a quote, IF the source is useful, but there is NO significant text in the image to reference

- "Sufficient evidence" varies by variable type:

	- For factual variables (dates, locations): One clear source is usually sufficient
	- For subjective variables (tone, positioning): May need multiple sources to establish pattern
	- For complex variables (policy violations): May require cross-referencing multiple policy documents

- Every claim must be supported by specific quotes AND/OR image descriptions with source attribution
- Connect quotes AND/OR image descriptions to coding decision with clear reasoning
- If no direct evidence exists for a variable, code as "insufficient evidence"

### SECTION 4: OUTPUT GUIDELINES

- When citing a source, place the source ID(s) inline with the quote(s) and explanation(s), e.g. SOURCE [ID]: "[exact quote]", etc.

- If multiple sources support a decision, cite the source(s) with the strongest/clearest evidence

- When evidence is ambiguous or conflicting, YOU MUST acknowledge this in reasoning

- Generate a YAML file with variables (listed in later sections) coded IN ORDER, an example is provided below

- Each source ID and quote AND/OR source ID and image description MUST BE present, the exact construction of the variable justification is left to your discretion 

	```yaml
	incident_id: INC-001
	date: YYYY-MM-DD
	source_ids: [list of actually provided source files]

	simple_variable:
	  value: coded_value
	  justification: "SOURCE-ID: 'exact quote.' [Brief explanation of how quote supports coding decision.]"
	  sources: [SOURCE-ID, etc.]

	# For variables requiring multiple sources/evidence types
	complex_variable:
	  value: coded_value
	  justification: "SOURCE-ID1: 'quote supporting aspect 1.' SOURCE-ID2: image description 2.' [Explanation of combined evidence.], etc."
	  sources: [SOURCE-ID1, SOURCE-ID2, etc.]

	# For insufficient evidence cases
	insufficient_variable:
	  value: "insufficient evidence"
	  justification: "No direct evidence found in provided sources regarding [specific aspect]."
	  sources: []

	```