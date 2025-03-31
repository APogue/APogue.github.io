---
layout: outline
title: "Statistical analysis by incident"
published: true
author: Alexie Pogue
date: 2025-3-31 5:40 PM
---

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

- social media posts 

	- from the administration 

	- from student organizations 

### Create a grounded, source-agnostic incident index 

I need to build the incident list from the most neutral, time-ordered sources available

Rather than starting with lawsuits or admin comms, I'll build my incident list from the most neutral, time-ordered source available:

Best options:

- Daily Bruin: Covers both sides, timestamps all events, and you’ve already tested it for keyword differences.

Build a master list of incidents first, based only on what happened and when, without regard to group or admin reaction. Only after that do you code for Target_Group, Response, etc.


### Define an incident inclusion rule (must stick to it)

To avoid subjective filtering, create a rule for what counts as an incident 

For example:

“Any campus-affiliated event between Sept 2023 and June 2024 where:
(a) identity-based harassment, exclusion, or violence was alleged;
(b) symbolic or physical protest occurred on university grounds; or
(c) TPM violations or safety breakdowns were documented.”

Apply that rule consistently. Some will involve Jewish students, some Muslim/Pali — the rule determines inclusion, not identity or severity.

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

#### Defend the methodology: DB is my sole incident source

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
