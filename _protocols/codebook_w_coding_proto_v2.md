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

**MANDATORY VISUAL INVENTORY REQUIREMENT:**
- BEFORE coding any variables, create a complete visual inventory of ALL image sources
- List EVERY visible element, symbol, object, or visual component in each image 
- List all text that is present in the image
- Include this inventory in your output even if elements seem unrelated to the incident
- Do NOT proceed to variable coding until visual inventory is complete

**MANDATORY SYSTEMATIC SOURCE REVIEW:**
- For EACH variable, you MUST check ALL provided sources before coding the variable
- For EACH variable, you MUST REVIEW ALL VISUAL INVENTORY before coding the variable
- Do NOT code any variable until you have reviewed every source AND its VISUAL INVENTORY (if applicable)

**MANDATORY SOURCE PROCESSING:**
- Check sources systematically until sufficient evidence is found for each variable ("sufficient" is further defined below and in specific variable definitions in later sections)

- A source may be a text file OR an image file, if the source is an image file it is your job to 
	
	- YOU MUST identify ALL visual elements, symbols, or objects systematically
	- Extract quotes from text shown in the image AND/OR draw conclusions about the incident from visual cues. DO NOT simply search the image for text as evidence. 
	- You MUST cite image sources when visual content provides evidence, using descriptions of what is shown
	- Visual content is PRIMARY evidence, not secondary - treat images as EQUIVALENT to direct quotes

- "Sufficient evidence" varies by variable type:

	- For factual variables (dates, locations): One clear source is usually sufficient
	- For subjective variables (tone, positioning): YOU MUST use multiple sources to establish pattern
	- For complex variables (policy violations): YOU MUST cross-referencing multiple policy documents

- Every claim must be supported by specific quotes AND/OR image descriptions with source attribution
- Connect quotes AND/OR image descriptions to coding decision with clear reasoning
- If NO direct evidence exists for a variable, code as "insufficient evidence"

### SECTION 4: OUTPUT GUIDELINES

**MANDATORY VISUAL INVENTORY:**
- Include a complete visual_inventory section BEFORE variable coding
- Format: 
  ```yaml
  visual_inventory:
    SOURCE-ID: "Detailed description of ALL visible elements, symbols, objects, text"
  ```

**MANDATOTY CITATION REQUIREMENTS:**
- When citing a source, place the source ID(s) inline with the quote(s) and explanation(s), e.g. SOURCE [ID]: "[exact quote]", etc.

- If multiple sources support a decision, cite the source(s) with the strongest/clearest evidence

- When evidence is ambiguous or conflicting, YOU MUST acknowledge this in reasoning

- Generate a YAML file with visual_inventory FIRST, then variables (listed in later sections) coded IN ORDER, an example is provided below

- Each source ID and quote AND/OR source ID and image description MUST BE present, the exact construction of the variable justification is left to your discretion 

	```yaml
	incident_id: INC-001
	date: YYYY-MM-DD
	source_ids: [list of actually provided source files]
    keywords: [keyword1, keyword2, ...]

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

## VARIABLE-SPECIFIC DEFINITIONS AND PROTOCOLS

### METADATA & UTILITY FIELDS

#### `incident_id` 
**Definition:** Globally unique identifier for each incident (e.g., `INC-001`)

#### `date`
**Definition:** Date the incident occurred (`YYYY-MM-DD`)

#### `source_ids` 
**Definition:** List of internal source references used for incident documentation  
→ Format: `[DB-001, ADM-014]`

#### `keywords`
**Definition:** Internal-use incident tags for filtering and scrape  
→ Format: `[task-force, encampment]`

### BINARY/BOOLEAN VARIABLES

#### `org_affiliated_actor`
**Definition:** Was the actor affiliated with either a UCLA student org or USAC?  
→ `true`, `false`  

#### MANDATORY VERIFICATION SEQUENCE 

#### STEP 1: Evidence Collection
- List ALL organizational actions found in sources
- Read VISUAL INVENTORY for source information
- Do not proceed to next variable until ALL 6 steps in verification sequence have been completed 

#### STEP 2: Incident Specificity Check
- Does the evidence reference THE SPECIFIC INCIDENT described in the incident summary? YES/NO
- Does the evidence reference only the general event/protest/context? YES/NO

#### STEP 3: FALSE Condition Check
- Does evidence show incident occurred AT org event but no separate org support for THE SPECIFIC INCIDENT? YES/NO
- Does evidence show org supported general event but not THE SPECIFIC INCIDENT? YES/NO

#### STEP 4: TRUE Condition Check
For each piece of evidence, check against TRUE conditions:
- **Condition A:** "Org member quoted/claimed responsibility/hosted/sponsored THE SPECIFIC INCIDENT" - YES/NO
- **Condition B:** "Org publicly endorsed/amplified THE SPECIFIC INCIDENT" - YES/NO  
- **Condition C:** "Org social media post depicts/shows/references THE SPECIFIC INCIDENT" - YES/NO
- **Condition D:** "Org claimed responsibility for THE SPECIFIC INCIDENT after the fact" - YES/NO
- **Condition E:** "Org made statements supporting THE SPECIFIC INCIDENT specifically" - YES/NO

#### STEP 5: Final Decision
- If NO TRUE conditions = YES, then code FALSE
- If ANY TRUE condition = YES, then code TRUE

#### STEP 6: Justification Verification
- Does my justification actually support my coding decision? YES/NO
- If NO, I must change either the code or justification

#### Coding Protocol
- Mark `true` if at least ONE of the following conditions showing organizational SEPARATE AND DIRECT SUPPORT of the incident is explicitly documented. Remember: evidence of SUPPORT of the incident requires a SEPARATE organizational action beyond the incident itself. The following conditions PROVE separate and direct organizational action. IF any conditions are met, YOU MUST assume `true` and STATE in the justification WHICH CONDITION(s) was/were met:
	- **Condition A:** "Org member quoted/claimed responsibility/hosted/sponsored THE SPECIFIC INCIDENT" 
	- **Condition B:** "Org publicly endorsed/amplified THE SPECIFIC INCIDENT" 
	- **Condition C:** "Org social media post depicts/shows/references THE SPECIFIC INCIDENT" 
	- **Condition D:** "Org claimed responsibility for THE SPECIFIC INCIDENT after the fact" 
	- **Condition E:** "Org made statements supporting THE SPECIFIC INCIDENT specifically" 

- Mark `false` IF there is evidence that the incident merely occurred AT an org-associated event/protest, but no separate action exists showing the above DIRECT SUPPORT for the SPECIFIC INCIDENT

- Mark `false` even IF an organization showed DIRECT SUPPORT FOR an org-associated event/protest, but the INCIDENT ITSELF is not DIRECTLY SUPPORTED by the above `true` conditions

- **REMEMBER:** physical presence at an org event does NOT equal organizational endorsement of specific actions/items that occurred there UNLESS there is evidence of the above DIRECT and SEPARATE support

#### `actor_student`
**Definition:** Was the actor a student at UCLA?     
→ `true`, `false`  

#### MANDATORY VERIFICATION SEQUENCE 

#### STEP 1: Source Checking
- You MUST check ALL uploaded sources before coding this variable
- Do NOT code this variable until you have reviewed EVERY source

#### STEP 2: Source Verification
- DO NOT CODE THE VARIABLE until you have printed a verification to the chat window that all uploaded sources have been checked

#### **Coding Protocol:**
- Mark `true` if:
  * There is no assertion of non-affiliation by any uploaded source
- Mark `false` ONLY if:
  * A source explicitly identifies the actor as non-student (e.g., "outside agitator," "non-affiliate")
- It is NOT necessary to find explicit evidence of student status if there's no assertion of non-affiliation
- If status is ambiguous but no assertion of non-affiliation exists, default to `true`



