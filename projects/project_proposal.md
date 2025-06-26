---
layout: project_default
title: "Project Proposal"
published: true
hide_title: false
author: Alexie Pogue
date: 2025-3-31 6:41 PM
updated_date: 2025-4-8 2:43 PM
---

Currently just notes, under construction. 

---

### Policy index

The policy index approach isn't just about managing context windows; it's about ensuring rigorous, consistent policy interpretation.

The Core Problem:
When Claude reads through those massive policy documents in real-time, it might:

- Cherry-pick sections that seem relevant
- Miss crucial nuances or contradictions
- Apply different interpretations to similar incidents
- Take shortcuts based on pattern matching rather than careful analysis

My main concern is efficiency, thoroughness, and rigor. There's no reason to pre-process the policy docs with any kind of algorithmic, concept mapping. The API was built over a decade by experts to play a role. Why hard-code interpretations in the one area where it excels? It should be allowed to function to the fullest extent of its capabilities where appropriate. 

### Audit checkpoints

The api reads back its understanding of the task at checkpoints throughout the coding process. This provides a traceable audit log in the event an incident isn't coded according to expectations. Attempt to move the system from an end-to-end backbox to something more transparent and predictable with respect to input/output behavior. 

### Codebook 

Variable dictionary with descriptions, valid values, and coding notes for each field used in the structured analysis of pre-defined incidents using source material specific to each case. Defines the logic, categories, and thresholds needed to enable consistent cross-incident comparison of oversight responses, involved perspectives, broader community impacts, and public discourse.

Note: In this project, “oversight” refers primarily to institutional supervision and responsibility — the role of administrators, university officials, or governing bodies in monitoring, responding to, or regulating campus incidents.

However, the term carries a second meaning: a failure to notice or act, as in “an oversight led to harm.” This dual meaning is intentional. The same institutions tasked with oversight are often those whose omissions, delays, or blind spots become central to the harm experienced.

This project treats oversight as both a formal role and a potential failure mode — recognizing that what institutions see or fail to see often shapes the outcomes of campus conflict.

### Source processing

To ensure transparency and reproducibility in a single-pass AI audit workflow, this project defines how the Claude model internally processes task-relevant information without explicit content extraction. Because Claude does not store structured memory across steps, its ability to filter sources, isolate in-scope material, and apply variable coding logic relies on internal attention mechanisms. Concepts such as working context, implicit filtering, and pattern matching formalize how the model selects, retains, and reasons with relevant content during a single prompt execution. These definitions provide a functional map of the model’s interpretive behavior, enabling verifiable, quote-based justifications that remain fully bounded within the incident structure (shift the definition for technical review or policy audiences).

working context:
The active subset of information the model retains and uses during a single pass of processing. Working context is formed through the model’s attention mechanisms, not through explicit memory or data structures. It includes relevant portions of the incident description, coding protocols, and source content that match current task criteria (e.g., incident boundary). Working context allows the model to reason about specific variables without needing to reprint or store filtered content separately.

implicit filtering:
The model’s process of identifying and attending to in-scope content without extracting or outputting it explicitly. Using internal weighting and relevance scoring, the model suppresses attention to background, unrelated, or out-of-boundary information, and focuses instead on content that aligns with the incident definition. This allows variable coding to occur directly, without a separate source-tagging phase.

pattern matching:
A dynamic process by which the model compares incoming content (e.g., sentences from a source) to features defined earlier in the prompt — such as actors, locations, timeframes, and incident actions. When a source passage resembles or contains key components from the incident summary and scope, it is treated as relevant and retained in working context. This enables single-pass relevance filtering without formal rule-based parsing.

attention weighting:
The model’s internal mechanism for determining which parts of the input context are most relevant at each step of generation. All content in the prompt—definitions, instructions, sources—is visible to the model, but each word or phrase is assigned a dynamic weight based on how important it appears for the current task. Higher-weighted content receives more focus, while lower-weighted content is effectively ignored. Attention weighting allows the model to reason over large documents without memorizing or extracting content, by selectively focusing on relevant information during output.

attention refresh:
The deliberate restatement of key instructions, rules, or boundaries during multi-variable coding to ensure the model continues to apply them consistently. Because the model dynamically re-weights the input context for each task, earlier instructions may lose influence over time. Repeating guidance per variable forces the model to re-attend to relevant criteria and prevents drift in interpretation or protocol enforcement. Attention refresh is essential for structured, auditable output in long single-pass runs.

So Claude won't "lose" earlier instructions, but later content can compete for attention. Thus restating key rules is an excellent design approach.

structured memory:
A persistent, explicitly stored representation of prior knowledge, task state, or parsed content that can be re-injected into future API calls or model runs without reprocessing the original input. Structured memory is typically managed outside the model (e.g., in files or databases) and is used in multi-call workflows, agent systems, or pre-parsed pipelines where long-term consistency across separate model interactions is required.

API statelessness:
The Claude API is stateless, meaning each call is treated independently with no memory of previous inputs, outputs, or interactions. The model does not retain information across requests unless the user manually re-injects prior context. To maintain continuity, users must explicitly include all relevant definitions, prior outputs, or task state in the prompt of each API call.

API memory: 
Within the context window, Claude has perfect access: every character in the context is equally accessible, no decay: the first word is as "fresh" as the last word, exact retrieval: it can quote any passage verbatim. Caveats: it is not photographic memory, sensing patterns may be flawed, attention (or focus) may be directed at incorrect content, connections between various parts of content may be ignored or go unnoticed. But, given the API "memory" model, directions need not be given assuming memory attrition with time, i.e. <thinking>, <verification> functions in task directives can be grouped. The correct handling of the API should focus on areas where Claude may mishandle its "discretion" such as in where it may focus its attention or via critical thinking using content from several sources. 

Source handling optimization:
No need for repeated verification that something was read, instead, direct attention, force connections, ask for exhaustive search, or argument synthesis. If I want focus to change depending on a step in the process, then call for a re-scan using a specific lens. What this doesn't mean, "re-read Source A, now proceed to variable related to Source A;" what this does mean, "scan Source A for evidence supporting Value A, now scan for evidence contradicting Value A."

=======================
Claude Context Metaphor
=======================

Concept                  | Metaphor                                      | Role in Claude
------------------------|-----------------------------------------------|---------------------------------------------------------------
Working context window  | Whiteboard                                    | What Claude actively sees and reasons over during the run
Tokenized input         | Writing on the whiteboard                     | Must fit within the model’s token limit and is billed at input time
Attention weighting     | Highlighting parts of the board               | Claude focuses more on relevant content when generating output
Cached content          | Rolled-up posters stored in the back room     | Backend may avoid reprocessing repeated content to save compute (not user-visible or token-saving by default)
cache_control: ephemeral| “Leave this poster in the back room for 1 hour”| Claude uses the content during the run; if reused within the expiry window, you can refer to it by handle and avoid re-sending or re-paying for those tokens

===========================
🧾 Metaphor Clarified: Processing Flow
===========================

Process                   | Metaphor                                | Behavior in Claude
--------------------------|------------------------------------------|---------------------------------------------------------
You send content          | You carry a poster into the building     | Claude receives tokenized input in the API call
Claude uses it in context | Claude pins it to the whiteboard         | It becomes part of the working context window (attention scope)
Claude focuses on parts   | Claude highlights key sections           | Attention weighting determines which parts influence output

### Prompt-engineering-to-processing strategy for Policy Docs

strategic truncation via targeted extraction (10x smaller context), same analytical power (theoretically if extraction is correct), improves accuracy (less irrelevant content to comb through) and efficiency (faster api-coding call through attention optimization)

This respects Claude's attention actually works. With 100K tokens of policy, even though it can find the relevant parts, there's cognitive overhead in filtering through all that noise. Pre-extraction means the coding phase has a much higher signal-to-noise ratio.

Not about limitations - it's about optimal design. Less noise = better signal processing.

-------------------------------------------------

I must be unbiased in this study 

### Material of interest

- lawsuits
- task force reports 
- surveys
- studies
- newsroom statements
- chancellor statements
- UCOP statements
- Daily Bruin articles 
- USAC resolutions or statements 
- Reddit
- social media posts 
	- from the administration 
	- from student organizations 

---

### Create a grounded, source-agnostic incident index 

Rather than starting with lawsuits or admin comms, I'll build my incident list from the most neutral, time-ordered source available:

Best options:

- Daily Bruin: Covers both sides, timestamps all events, and you’ve already tested it for keyword differences.

Build a master list of incidents first, based only on what happened and when, without regard to group or admin reaction. Only after that do you code for Target_Group, Response, etc.


### Define an incident inclusion rule (must stick to it)

Any campus-affiliated event between Sept 2023 and June 2024 where:

- (a) identity-based harm, exclusion, or discrimination was alleged  
- (b) a symbolic or physical protest, walkout, or occupation occurred on or near university grounds
- (c) time, place, and manner (TPM) violations or campus safety failures were documented or alleged

⚠️ Considerations:

- Must be scoped to clear incident-ness (a moment in time, impact, admin attention, or clear escalation)

Rule applies constantly. Some will involve Jewish students, some Arab students — the rule determines inclusion, not identity or severity.

### Tag, no filters by source 

I might still find incidents via lawsuits, surveys, etc., but I won't use those to determine which ones get included. 

Instead:

- If lawsuit mentions incident, admin responded → tag that later
- But even if they didn't → it still goes in

This avoids confirmation bias.

### Supplement for representation, don't balance artificially 

I don’t have to have an equal number of Jewish and Palestinian incidents — real-world bias might mean there are more of one kind of incident and fewer of another. What's important is:

- Your inclusion rule is neutral
- Your coding is consistent
- Your analysis accounts for coverage/severity gaps (e.g., via controls like Media_Coverage_Level)
	- to "account for gaps," adjust for confounding variables like Severity_Score, Media_Coverage_Level, Policy_Broken

“Do incidents involving Palestinian students receive less administrative response than those involving Jewish students even when the severity and visibility are the same?”

“Among incidents with equal media coverage and equal severity, does the administration still respond differently depending on which group is affected?”

If I find a consistent disparity after controlling for those other factors → that’s evidence of bias.

“Account for” = don’t ignore the fact that Jewish incidents might look different on paper — control for that so your findings reflect bias, not circumstance.

But,“If both the media and the administration are biased — how can I isolate administrative bias without just proving they respond to media pressure?”

If admin responses correlate with media coverage, it could mean:

- Admins are just responding to what’s visible (neutral media-following behavior), or
- Admins are biased like the media (shared worldview), or
- Admins are biased independent of the media (selective attention within similarly covered events)

You’re testing whether the pattern of behavior is systematically unequal even after accounting for neutral factors like visibility or severity.

🧱 Use Media Coverage as a Covariate, Not a Shield

You’re not saying media coverage justifies admin action. You’re testing whether media coverage explains the action — and whether it explains all of it.

- If it does: the admin is reactive.
- If it doesn’t: the admin is selectively reactive — that’s bias.

🔐 Lean Into Transparency

You’ll strengthen your work by saying:

“Media coverage does influence administrative behavior — but we tested whether that explains all the disparity, and it doesn’t.”

- You’re not denying correlation.
- You’re saying correlation alone doesn’t account for the patterned disparity.
- Be clear that you’re not proving causation — you’re showing systematic disparities in treatment that can’t be explained by neutral factors alone

---

### Methodology 

#### What is this research

In research terms, you’re working in the realm of:

- Qualitative Comparative Analysis (QCA)
- Case-based bias detection
- Institutional behavior analysis
- Policy response comparison

Given your project is:

- Investigating bias using incident-level comparison
- With controlled coding of metadata
- And qualitative variables like tone, latency, and severity

Using categories like Yes/Strong for bias detection patterns is a well-established approach in policy analysis, institutional review, and legal-impact studies.

As long as:

- You define your coding scheme explicitly
- You apply it consistently
- You distinguish it from statistical inference

Structured Comparison, Not Inference

Your work involves:

- Building a complete dataset of known events, not a sample
- Coding for descriptive and categorical patterns (e.g., who admin responded to)
- Looking for systematic disparities, not estimating probabilities

You're not trying to say:

"This proves, with p < 0.05, that UCLA is biased."

You're saying:

“Across all comparable incidents documented via a neutral source, there is a consistent pattern of unequal treatment that is not explained by severity, visibility, or legality.”

That’s qualitative comparative research, not statistical inference — and that’s totally valid in policy, legal, and bias studies.

So I can't extrapolate, I can't say the university is biased. I can say the administration is biased — within the scope of the dataset and under clearly defined parameters.

✅ Here’s How You Make That Claim Rigorously

“Based on a comprehensive review of all incidents reported by The Daily Bruin between [years], and applying a consistent inclusion rule and coding scheme, UCLA’s administration demonstrated a pattern of differential response depending on the identity group affected — even when controlling for severity, visibility, and policy violations.”

This is a strong claim:

- You’re not generalizing beyond what you observed
- You’re not estimating the rate of bias in the universe of all possible incidents
- You’re identifying documented disparity within a defined corpus

📐 What You Can Say

✅ “There is clear evidence of disparate treatment within documented cases.”

✅ “Patterns of administrative response show group-based asymmetry.”

✅ “Even among incidents of similar severity and visibility, the university responded differently depending on the group affected.”

❌ What You Shouldn’t Say (without statistical inference)

❌ “UCLA is universally biased across all incidents involving these communities.”

❌ “This proves the administration is institutionally antisemitic/Islamophobic.”

❌ “X% of the time, they behave in a biased way.”

🧠 So Yes — You’re Claiming Conditional Bias

UCLA exhibited bias under the following conditions:

- Incident documented by Daily Bruin
- Within the timeframe studied
- Where severity, visibility, and legality were held constant or coded

And that’s how most serious bias studies work 

---

### Defend the methodology: DB is my sole incident source

“The Daily Bruin is the most comprehensive and continuously maintained public record of UCLA campus life from the student perspective.”

✅ 1. It’s UCLA’s Student Paper of Record

- It's the only consistent, searchable, longitudinal source of campus events, student perspectives, and protest coverage over a decade.
- Administrators and students alike rely on it to understand campus dynamics.
- Unlike external media or admin comms, DB offers event-driven reporting, not top-down messaging.

“Articles were used to identify and time-stamp relevant incidents. No editorial interpretation from the Bruin was included in bias analysis.”

✅ 2. You’re Not Using It for Interpretation — Just Event Discovery

- You are not coding bias in their language, you’re using it to identify that an incident happened on a given date, place, and with which parties involved.
- You then cross-reference the incident with admin responses, lawsuits, social media, etc.

✅ 3. You Apply a Consistent Keyword Search and Inclusion Rule

This makes your methodology replicable and objective:

- You don’t cherry-pick headlines — you define clear inclusion rules and search terms used across all years.
- If someone else repeated your method with the same archive, they’d get a similar incident list.

✅ 4. You Cross-Check Admin Response Using Admin’s Own Words

- The potential bias of DB is irrelevant to your main dependent variables — you’re testing how UCLA responded, not what DB said about it.
- That makes the Bruin a cleaner baseline than admin comms, which already encode institutional motives.

🎯 Why I'm Right to Stick with the Daily Bruin

✅ 1. Social media is not objective or complete

- Posts are ephemeral — deleted, edited, censored, or algorithmically buried.
- There’s no comprehensive archive, no formal standards for coverage, no consistency in what's documented.
- It's impossible to apply a replicable incident-selection method on social media — you'd be relying on anecdotal, unverifiable, or engagement-biased content.

✅ 2. DB gives you structure and timestamped reporting

- Searchable and chronologically structured
- Consistent over time (you won’t get a gap in 2017 because Instagram changed its algorithm)
- Credible enough that admin, students, and media all treat it as a public record
- You can cite specific articles, publication dates, and quotable content to ground your timeline

✅ 3. Methodology matters more than exhaustiveness

"This isn’t about cutting corners — it’s about minimizing noise so I can precisely measure the administration’s behavior against an externally grounded record of student life."

Trying to include every mention from social media would make your study:

- Messy (inconsistent sourcing, unverifiable dates, fragmentary incidents)
- Non-replicable (no one can run the same scrape and get your dataset)
- Vulnerable to claims of cherry-picking or selective inclusion

By contrast, sticking to DB ensures:

- Clarity and transparency
- You can say: “Every incident in this study was selected based on a consistent archival method from a single longitudinal source.”

--- 

### Defend the methodology: My choices for the dependent variables sources 

✅ 1. Define a fixed set of DV source types up front

For structure and transparency 

Examples 

- Admin emails and public statements
- Task force or working group reports
- UCOP or Chancellor-level communications
- Lawsuit filings (only if they contain direct admin quotes or responses)

✅ Stick to these consistently — no ad hoc additions later unless logged as a scope expansion.

✅ 2. Apply all relevant DV source types to every incident

Don’t pick and choose based on which sources are available or interesting.

Instead:

- Create a source check template per incident
- Ask: Did this incident produce any content from each DV source type?

If yes → log and code it

If no → mark as “none observed” or “no public response”

This way you’re not selecting responses — you're checking whether they exist, from a consistent list.

✅ 3. Make your coding definitions as replicable as your inclusion rule

Field: Admin_Response

Definition:

- Yes = A public statement, policy action, or formal email that references the incident
- No = No identifiable public communication or response referencing the incident

🎯 **Dependent Variables (DVs) Examples**

These measure administrative behavior — the outcomes you're testing for bias.

- **All of these should be structured (rule-based)**
- You want them clear, consistent, and comparable

Examples (Structured):

- Admin_Response (Yes/No)
- Tone_of_Response (Neutral, Punitive, Conciliatory...)
- Latency (in days)
- Follow_Up_Action (Yes/No)

---
### Defend the methodology: My choices for 🧩 Independent / Control Variable Sources

✅ 1. Define a fixed set of orgs up front

But don’t aim for perfect symmetry — aim for methodological neutrality.

Choose orgs based on:

- Their visibility in DB-covered incidents (mention frequency)
- Whether they are consistently involved as actors, targets, or organizers
- Not on identity balancing (i.e., you’re not required to have equal numbers of “each side”)

🧠 So yes — your approach might look like:

Included student orgs (based on incident involvement and visibility):

- SJP (Students for Justice in Palestine)
- JVP (Jewish Voice for Peace)
- Hillel at UCLA/Dan Brown (were formally tied to incidents)
- Chabad at UCLA
- Bruins for Israel
- CAC

Other relevant docs
- Student government statements 
- Lawsuit filings
- OCR investigations 

You can say:
“These orgs were selected based on their repeated appearance in Daily Bruin coverage of relevant incidents between [dates].”

✅ This makes your selection criteria **visibility-based, not identity-based.**

✅ 2. What if the visibility is lopsided?

That’s okay — and in fact, it’s data. If certain orgs are more active, more covered, or more responded to, that’s part of the story.

The key is:

- You didn't exclude others arbitrarily
- You defined your selection criteria before DV coding
- You didn’t cherry-pick based on tone or outcome

🧱 Final structure:

Define a fixed list of org accounts you'll monitor

- Use them only for student tone, visibility, and framing
- Log all findings or absences per incident
- Document your org selection method clearly

That’s how you avoid both cherry-picking and artificial balancing — you’re just tracking who actually showed up.

So you're not treating student org posts as DVs — you're using them to code:

- Protest_Intensity
- Student_Tone
- Visibility_Level

These are for capturing nuance. You want student_tone to be separate from incident_severity and media_coverage_level because it doesn't necessarily correlate with those things. 

They become independent or control variables to isolate bias in admin behavior.

For the Kaplan example:

- SJP is mentioned → you check SJP’s channels for protest framing, intent, student tone

- Hillel responds publicly → log that response as:

	- Visibility signal (it adds coverage)
	- Possibly affecting admin response (indirectly — e.g., framing it as antisemitic)
	- Contextual framing (e.g., competing narratives)

You’re not “including Hillel” as a party to the incident unless they were directly involved.

You’re just logging that they responded — and that may factor into things like:

- Media_Coverage_Level
- Narrative_Pressure
- Admin_Response_Justification

Media_Coverage_Level:
- Low = Daily Bruin only, minimal social media traction
- Moderate = DB + student org posts or local blog mention (e.g., LAist)
- High = Coverage by external mainstream media (e.g., LA Times, CNN), or wide viral spread


#### 🧩 Independent / Control Variables Examples

These help you explain or isolate what might influence the DVs.

They can be either:

- **Structured** (quantifiable, categorical)
- **Qualitative** (interpretive, rubric-based)

**Examples (Structured):**

- `Severity_Score` (Low / Moderate / High)
- `Target_Group`
- `Media_Coverage_Level`
- `Student_Action_Type` (e.g., protest, statement, disruption)

**Examples (Qualitative):**

- `Student_Tone` (based on org posts or chants) --- not sure about this, should be consistent with DVs
- `Narrative_Framing` (e.g., "security risk" vs. "civil rights")
- `Competing_Claims` (whether multiple orgs weighed in publicly)


🧠 Why this matters:

You're capturing **the ecosystem around the incident** — who was involved, who amplified, and who shaped **admin perception.**
But your unit of analysis stays the same: the incident, not the org.

---
### List organization

#### What is a Master Incident List?
Your main dataset — one row per incident.

Includes:

- Incident_ID
- Structured fields (date, severity, target group, etc.)
- Qualitative fields (tone, latency)
- Source_IDs → links to entries in the Source Appendix

#### 📋 Sample Master Incident List

| Incident_ID | Date       | Target_Group | Severity_Score | Admin_Response | Tone_of_Response | Media_Coverage_Level | Source_IDs                 |
|-------------|------------|--------------|----------------|----------------|------------------|-----------------------|----------------------------|
| INC-001     | 2024-04-30 | Palestinian  | High           | Yes            | Punitive         | High                  | DB-045, ADM-014, HIL-003   |
| INC-002     | 2024-05-03 | Jewish       | Moderate       | Yes            | Conciliatory     | Moderate              | DB-047, ADM-017            |
| INC-003     | 2024-05-05 | Palestinian  | Low            | No             | —                | Low                   | DB-048                     |
| INC-004     | 2024-05-10 | Jewish       | High           | Yes            | Neutral          | High                  | DB-050, ADM-020, HIL-004   |


#### What is the Source Appendix?

It’s a master list of all individual sources, regardless of incident.
Each row = one source, with a unique Source_ID.

So yes — a source (e.g., ADM-014) can be related to multiple incidents if relevant to each.

📎 **Sample Source Appendix Structure**

| Source_ID | Type         | Title                            | Date       | Use (Incidents)     |
|-----------|--------------|----------------------------------|------------|---------------------|
| DB-045    | DB Article   | “Police Remove Protesters…”      | 2024-05-01 | INC-004, INC-006     |
| ADM-014   | Admin Email  | Chancellor's Campus Update       | 2024-05-02 | INC-004              |
| HIL-003   | Hillel IG    | “We are alarmed by recent…”      | 2024-05-02 | INC-004              |



#### 📚 What is a Source Library / Repository?

This is your folder of saved source materials.

It’s not a table — it’s where you store the actual documents or links (PDFs, screenshots, archived web pages).

Each file or link should be named by its Source_ID, so DB-045.pdf or ADM-014.txt matches the entries in your Source Appendix.

--- 

### Possible outcome of study

That possibility is exactly what makes your research credible.

If you go through this process honestly and rigorously, and come out with:

- No consistent disparity in administrative response
- No bias when severity and visibility are held constant
- No group-based patterns in tone, latency, or follow-up

…then you can confidently say:

“This study found no evidence of systematic administrative bias in UCLA’s public response to documented incidents, based on a consistent, neutral inclusion rule.”

That is still a valid and valuable outcome.

🧭 But Here’s the Reality:

Given what you’ve already seen — lawsuits, student testimony, visibility patterns, unequal framing — it’s unlikely you’ll come out with nothing.

You might find:

- Bias by omission (e.g., silence on Muslim students’ complaints)
- Bias by framing (e.g., invoking “Jewish fear” to justify crackdowns)
- Inconsistent policy enforcement depending on group affiliation

Even if the pattern isn’t across the board, you’ll likely find:

- Localized or temporal bias
- Moments where severity/visibility didn’t predict response, but group identity did

And that’s enough to make a powerful and specific claim.

🎓 Research Isn’t About Proving a Point — It’s About Testing One

You’re not “trying to show bias” — you’re trying to find out whether bias exists under defined, observable conditions.

If you do that transparently, then whether your conclusion is yes or no, your work is:

- Credible
- Useful
- Replicable

And that makes it powerful.

### Example 

Apply all code definitions in good faith, and the conclusions emerge as a pattern in the analysis phase, not as a coded variable. 

Your coding job is to:

- Apply clear, surface-level criteria (e.g., “acknowledges harm,” “offers services”)
- Stay rule-based and replicable
- Avoid judging motives in the data layer

Then, in analysis:

You can write:

"Across 12 incidents affecting Palestinian students, administrative responses consistently used language coded as conciliatory, but avoided naming harm or offering specific recourse — suggesting a pattern of rhetorical response that deflects institutional responsibility, aligning more with reputational safeguarding than material recourse.""

---

### 🧩 Table 1: Incident Evaluation Pipeline

**Inclusion Rule**  
*Defines what counts as an incident*  
→ Neutral, identity-agnostic

**Keyword Search**  
*Retrieves a superset of candidate articles*  
→ Designed to surface events likely to match rule

**Screening by Rule**  
*Filters keyword results using defined criteria in the inclusion rule*  
→ Apply consistently — group/outcome blind

**Logging**  
*Track both included and excluded articles with reasons for transparency*  
→ Maintain transparency and repeatability

**Structured Coding**  
*Assign rule-based fields (e.g., group, severity, policy, response)*  
→ Enables categorical comparison across incidents

**Qualitative Coding**  
*Apply interpretive rubrics to capture tone, framing, or narrative position*  
→ Adds context and nuance beyond numeric fields

**Consistency Checks**  
*Test and refine coding for replicability across all incidents*  
→ Apply to both structured and qualitative variables

**Controlled Comparison**  
*Analyze disparities while holding severity, visibility, and legality constant*  
→ Reveals potential group-based bias in admin behavior

### 🧬 Table 2: Variable Types

| Type                   | Description                                               | Examples                                                              |
|------------------------|-----------------------------------------------------------|-----------------------------------------------------------------------|
| **Structured Attributes** | Rule-based, consistent, and quantifiable. These variables are coded using explicit criteria, allowing categorical comparison. | `Target_Group`, `Severity_Score`, `Policy_Broken`, `Media_Coverage_Level`, `Admin_Response` |
| **Qualitative Variables** | Interpretive but systematic. These capture nuance (e.g., tone or framing) using defined rubrics with consistent categories. | `Tone_of_Response`, `Framing_Language`, `Narrative_Positioning`, `Latency_Tone`, `Follow_Up_Action` |

### ⏱️ Table 3: Temporal Analysis Integration

| Tool                          | Use                                                         |
|-------------------------------|--------------------------------------------------------------|
| `Date_of_Incident`, `Date_of_Response` | Calculate latency, map timelines                             |
| `Academic_Term`, `Policy_Epoch`       | Compare behavior pre-/post-major events (design choice, maybe)                     |
| Time-windowed analysis                | Detect episodic or event-specific bias                       |
| Visual tools                          | Reveal clusters, escalation patterns, or administrative silences |

### 🗂️ Table 4: Data Organization Structure

**✅ Master Incident List**  
*One row per incident*  
→ Includes date, location, structured and qualitative fields  
→ References source(s) used via `Source_IDs`  
→ Chronologically ordered and searchable  

**✅ Source Appendix**  
*One row per unique source*  
→ Includes `Source_ID`, title, date, type (e.g., Daily Bruin, admin email)  
→ Describes how the source was used  
→ Linked to incidents via shared IDs  

**Why This Works:**  
- **Full auditability** — Every data point is traceable to source  
- **Traceable logic** — Clear chain from event → coding → source  
- **Separation of concerns** — Incidents are cleanly separated from interpretations

### Getting started 
#### ✅ Core Fields to Code From the Start
These are foundational — you need them early to build structured comparisons:

Format tables that separate DVs from other variables, and group structured and qualitative 

- `Incident_ID`
- `Date_of_Incident`
- `Target_Group`
- `Severity_Score`
- `Admin_Response` (Y/N)
- `Media_Coverage_Level`
- `Source_ID(s)`

#### 🆔 Incident ID (Incident_ID) format

- Unique identifier for each incident
- One row per incident in the **Master Incident List**
- Format: INC-001, INC-002, etc.

#### 📎 Source ID (Source_ID) format 

- Unique identifier for each source document (article, email, post, etc.)
- One row per source in the **Source Appendix**
- Format: DB-001 (Daily Bruin), ADM-003 (Admin comm), SOC-005 (Social media)

#### ✅ Add-On Fields You Can Layer In Later

You don’t need to lock these in up front — just keep them in mind:

- `Tone_of_Response` (once you've collected admin statements)
- `Latency` (once you have both date fields)
- `Policy_Epoch` or `Proximity_to_Event` (if needed after early patterns emerge)
- `Follow_Up_Action`, `Framing_Language` (after you see enough variation)

---

### 🧱 Staying Grounded: Avoiding Outside Inference and Project Creep

#### ✅ What “no outside inference required” means:
- Stick to **what your sources say**, not assumptions or extrapolations.
- Use only your **pre-defined source set** (e.g., Daily Bruin, admin statements, lawsuits).
- Apply your **inclusion rule and coding rubrics** strictly — no subjective reinterpretation.


#### ⚠️ Project Creep Risks:
- Letting in **new or inconsistent source types** mid-way (e.g., random social media or niche blogs).
- Expanding beyond your **defined time frame, incident criteria, or coding structure**.
- Rewriting your rubrics to fit difficult edge cases instead of flagging them.
- Gradually shifting from **testing a hypothesis** to **arguing a conclusion**.

#### 🛡️ Guardrails to Prevent Drift

- Maintain a **locked source list** — document any additions as exceptions.
- If new source types are introduced for coding (e.g., admin Slack messages), **log them** in the Source Appendix and **flag as non-primary**.
- If you admit a new source type, **apply it retroactively to all relevant incidents**, not just one.
- Record any scope expansion as an **explicit methodological note** — never as a silent change.


### 🧾 Source vs. Source Type

**🧾 Source = A specific document or artifact**  
An individual item you cite or use to code an incident.  
**Examples:**
- A single Daily Bruin article  
- A specific admin email sent on Oct 10  
- One Instagram post by SJP  
- A particular lawsuit filing


**🗂️ Source Type = A category of source**  
A class of materials that you allow into your dataset.  
**Examples:**
- Daily Bruin article  
- Admin public statement  
- Lawsuit filing  
- Social media post by student orgs  
- UCOP systemwide memos


### ✅ Why This Matters for Your Methodology

- You can admit **new sources** all the time (e.g., new DB articles).
- But admitting a **new source type** (e.g., Reddit threads, leaked Slack messages) is a **methodological shift**:
  - → It expands the range of what you allow into your coding process.
  - → So it requires **scope control**: logging, flagging as non-primary, and applying retroactively to all relevant incidents.

---

### 🧭 Choosing Your Next Step

The best next step depends on your immediate goal: refining your process vs. scaling your dataset.

### ✅ Option 1: Start with a Few Candidate Incidents
*Best if your goal is to test and refine your pipeline*

Walk 2–3 candidate incidents through the **entire evaluation pipeline**:

- Helps you get familiar with:
  - File and folder structure
  - `Incident_ID` and `Source_ID` formatting
  - Field-by-field coding (structured + qualitative)
  - Logging excluded sources or edge cases
- Reveals ambiguities in:
  - Your inclusion rule
  - Severity or tone coding
  - Source tagging conventions

🔁 This approach reduces rework later and ensures your system holds up under real examples.



### ✅ Option 2: Design Your Inclusion Rule and Scrape Keywords
*Best if your goal is to begin scaling up the dataset*

- Finalize your **inclusion criteria** in plain language
- Design your **keyword search** to reliably surface relevant incidents from the Daily Bruin
- Begin your **master incident list** using this structured discovery process

🧱 This sets the foundation for consistent data gathering and prevents selection bias.



### 🧠 Suggested Hybrid Approach

Do **one full test incident** first, end-to-end (cherry-picked is fine):
- Apply your draft **inclusion rule**
- Apply initial **structured coding rules** and **qualitative rubrics**
- Link and log all relevant sources
- Use this to test:
  - File and folder structure
  - ID formatting (`Incident_ID`, `Source_ID`)
  - Whether field definitions and coding logic are practical

 Example---Field: Severity_Score

- Possible values and definitions:

	- Low: Verbal exchange, minimal disruption, no formal complaint
	- Moderate: Property damage, threats, formal report, but no injuries
	- High: Physical altercation, hospitalization, police involvement, or major disruption to campus operations



Then, run your **inclusion rule** and draft **keyword search** on a small batch (5–10 real Daily Bruin articles):

- Refine your **inclusion rule**, **structured coding rules**, and **qualitative rubrics** as needed
- Adjust keyword logic based on what’s over- or under-included
- Apply the same rules/rubrics across all incidents in the batch



### ✅ When to Consider Your System Finalized

You can consider your:
- `Inclusion rule`
- `Structured coding rules`
- `Qualitative rubrics`

**Finalized** when they all hold steady across the batch — meaning:
- You no longer need to revise definitions mid-way
- You’re applying labels consistently and confidently
- Edge cases are being handled smoothly within your existing framework

At that point, your system is **stable**, and you’re ready to scale up full incident discovery and coding with confidence.

---

## A full breakdown of field types you'll use in structured research, with examples and how they relate to each other:

Some of the notes above are hazy on field types and need to be corrected. For clarity for now: 

🟢 1. Binary / Boolean

- Values: Yes / No, True / False, 0 / 1

- Structured: ✅ Always (as long as definitions are clear)

- Example:

	- `Admin_Response`: Yes / No

	- `Follow_Up_Action`: Yes / No

🔵 2. Nominal Categorical

- Values: Categories with no inherent order

- Structured: ✅ If categories are defined and exhaustive

- Example:

	- `Target_Group`: Jewish / Muslim / Palestinian / Other

	- `Media_Coverage_Level`: None / Campus / Regional / National

🟡 3. Ordinal Categorical

- Values: Categories with a clear order, but no fixed interval

- Structured: ✅ If order is defined and criteria are consistent

- Example:

	- `Severity_Score`: Low / Moderate / High

	- `Tone_of_Response`: Conciliatory < Neutral < Punitive

🔴 4. Quantitative (Discrete or Continuous)

- Values: Numeric, measurable, fixed intervals

- Structured: ✅ As long as units are consistent

- Example:

	- `Latency`: Number of days

	- `Number_of_Protesters`: Integer

	- `Injury_Count`: Integer

🟠 5. Structured Qualitative

- Values: Subjective content coded into categories

- Structured: ✅ Only after you define a codebook

	- Example:

	- `Student_Tone`: Supportive / Angry / Defiant / Defeated

	- `Narrative_Framing`: Civil rights / Safety threat / Neutral

	- `Statement_Contains_Apology`: Yes / No

⚫️ 6. Unstructured Qualitative

- Values: Free text, open-ended, not yet coded

- Structured: ❌ (unless you code it later)

	- Example:

	- `Admin_Statement_Text`: Full quote

	- `Chants_Heard`: Raw transcript

	- `Social_Media_Posts`: Screenshots, raw logs


### Field Type Reference

| **Type**                 | **Ordered** | **Numeric** | **Needs Coding Rules?**     | **Structured** | **Examples**                                      |
|--------------------------|-------------|-------------|------------------------------|----------------|---------------------------------------------------|
| **Binary / Boolean**     | No          | No          | No                           | ✅ Yes         | Admin_Response, Follow_Up_Action                  |
| **Nominal Categorical**  | No          | No          | ✅ Yes (defined set)         | ✅ Yes         | Target_Group, Media_Coverage_Level               |
| **Ordinal Categorical**  | ✅ Yes       | No          | ✅ Yes (codebook)                      | ✅ Yes         | Severity_Score, Tone_of_Response                  |
| **Quantitative**         | ✅ Yes       | ✅ Yes       | No                           | ✅ Yes         | Latency (days), Injury_Count                      |
| **Structured Qualitative** | Maybe     | No          | ✅ Yes (codebook)            | ✅ Yes         | Narrative_Framing, Student_Tone                   |
| **Unstructured Qualitative** | No      | No          | —                            | ❌ No          | Admin_Statement_Text, Raw Chants                  |


### Ordinal Categorical v. Structured Qualitative

✅ Both Need a Codebook or Rubric

Yes, both require:

- Definitions for each category

- Examples or decision rules for how to assign them

- Consistency across coders

But the type of structure differs:

🟡 Ordinal Categorical

- Values are ordered (e.g., Low < Medium < High)

- Usually mutually exclusive

- Codebook defines thresholds or cutoffs

- Often easier to apply because the set is small and ordered

Example rubric for Severity_Score:

**Value,	Definition**

Low,	No injuries, no arrests, no building closures

Moderate,	1–2 arrests OR building disruptions

High,	Injuries OR multiple arrests OR widespread closures

🟠 Structured Qualitative

Values may be non-ordered

- May not be mutually exclusive (e.g., a statement can be both deflective and punitive)

- Codebook defines interpretive categories — what a framing or tone looks like

- **Often subjective without strong examples or coder training**

Example rubric for Narrative_Framing:

**Category,	Description,	Example Phrase**

Civil Rights,	Emphasizes student rights, equality	"Free expression is essential"

Security Threat,	Emphasizes danger, policing, disruption	"We must restore order"

Procedural,	Uses neutral, bureaucratic language	"We are reviewing the matter"

---

## 👩‍🏫 Coder Training = Ensuring consistency in how fields are applied

It’s about making sure that:

- Different coders assign the same value to the same input

- The same coder makes consistent decisions over time

- Everyone follows the same definitions and rules from your codebook

🔁 Why It Matters:

- Prevents bias, drift, or random variation in coded data

- Enables reproducibility and inter-coder reliability

- Especially critical for structured qualitative or interpretive ordinal fields (like `Tone`, `Framing`, `Severity_Score`)

🛠️ Coder Training Often Includes:

- Walking through examples together

- Explaining edge cases ("what if it's both civil rights and safety?")

- Double-coding a sample and comparing

- Resolving disagreements with reference to the codebook

✅ Coder Training Checklist

1. Codebook Prep

- All categories defined

- Include clear examples and edge cases

2. Training Set

- Select 5–10 diverse, representative cases

- Include borderline examples

3. Practice Coding

- Have each coder code the same cases independently

4. Compare Results

- Highlight mismatches and discuss reasoning

5. Refine Rules

- Update codebook for clarity

6. Retest if Needed

- Repeat until agreement is high

📊 Measuring Inter-Coder Reliability

🧮 Cohen’s Kappa (for 2 coders)

- Measures agreement adjusted for chance

- Ranges from –1 to 1:

	- < 0.60: Poor

	- 0.60–0.80: Acceptable

	- > 0.80: Strong

Use tools like Excel, Python (sklearn.metrics.cohen_kappa_score), or R to calculate.

🧮 Krippendorff’s Alpha (if >2 coders or mixed data types)

- More flexible, handles missing data

- Same benchmarks as Kappa


👤👤 Yes — you can absolutely be both coders.

Solo Coding for Consistency:

When you're the only coder:

- Double-code a subset of incidents at different times (e.g., wait a day or more)

- Blind yourself to your earlier decisions when possible (e.g., hide previous values)

- Compare your own coding to test intra-coder reliability

This still lets you:

- Check for drift over time

- Identify unclear definitions

- Strengthen your codebook

🛠️ Tip:

Use a spreadsheet with hidden columns or versioned YAML files to store your first pass, then code again and compare.

---

## For situations where impactful factors only apply to a few cases

- Mention it narratively in your analysis (e.g., in qualitative comparisons or case highlights)
- Use it as supporting evidence for explaining why a response may have been stronger, faster, or more defensive
- Avoid coding it into a formal variable unless you can do so consistently

You can say something like:

In several high-profile cases, such as [INC-012], internal records released by the university revealed a significant volume of public feedback (e.g., hundreds of emails and community letters), suggesting a level of visibility and pressure not captured by external media metrics alone. While this internal engagement was not available across all incidents, its presence in select cases may have amplified administrative responsiveness or public framing.

This maintains scientific transparency and causal discipline without overcoding or biasing your results. You're flagging a potential unmeasured covariate — totally legit (check this across coders, i.e. Claude, etc.)

And in the case where administrative posts go viral: 

Suggested narrative framing (formal tone):
In a subset of cases, administrative posts themselves became focal points of public engagement. For example, in [INC-014], a university statement posted to social media received over 25,000 views and was widely circulated by students and external media. While such amplification is not present across all incidents, its presence in these select cases likely heightened public awareness and influenced both perception and institutional pressure.

This lets you:

- Flag it as real and meaningful
- Avoid systematic coding bias if it's rare
- Still connect it to variation in admin response or incident salience

You're treating it as a qualitative explanatory factor, not a coded metric — which is the right move if it’s only in a few incidents.


---

## Source Categories 

🔹 Dependent Variable (DV) Sources

- Used to measure administrative behavior, the core outcome of the study.

| Prefix | Source Type               | Function in Dataset                                                              |
|--------|---------------------------|-----------------------------------------------------------------------------------|
| `ADM`-   | Administrative communications | Used to code administrative response, tone, latency, and stated recourse.        |

---

🔸 Incident-Triggering Source (Primary IVs)

- Used to define and timestamp incidents — the study’s core independent variables.

| Prefix | Source Type         | Function in Dataset                                                                 |
|--------|---------------------|--------------------------------------------------------------------------------------|
| `DB`-    | Daily Bruin articles | Defines incident inclusion. Used for timing, location, participants, and anchoring events. |

---

🟨 Explanatory / Control Variable Sources

- Used to contextualize or explain administrative response — never to define incidents.

| Prefix | Source Type                         | Function in Dataset   |
|--------|---------------------------------------------------------------------------------------------------------|
| `MED`-   | Third-party news media              | Visibility, amplification, and narrative framing (e.g., LA Times, Jewish Journal). |
| `SOC`-   | Social media posts                  | Public-facing visibility and grassroots traction (e.g., X, Instagram).             |
| `ORG`-   | Student org materials               | Protest tone, framing, and actor intent.                                           |
| `LEG`-   | Legal documents                     | Legal escalation, OCR complaints, lawsuits, external review.                       |
| `RPT`-   | Reports, investigations, or audits  | Institutional context, third-party evaluations, policy framing.   

---

## Reddit limitations (source biases)

- There is the possibility of moderation bias (i.e. Reddit’s auto-moderation or subreddit rules) affecting data completeness.

- A [removed] comment might have context missing from my dataset, impacting tone or positioning coding.

	- I have a 10-5-5 model now, and the script bypasses removed and deleted comments

- Skewed Discussions: Because the scraper captures only the top-level or high-score comments (depending on my criteria filters), it might miss smaller but significant perspectives or voices.