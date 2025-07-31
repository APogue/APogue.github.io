# ===========================================================
# Pig Effigy Displayed at UC Regents Protest – March 20-21 2024
# ===========================================================

incident_id: INC-001
date: 2024-03-20

source_ids: [ADM-001, DB-001, MED-001, SOC-001, SOC-002, SOC-003, SOC-004, SOC-006-2, SOC-007, SOC-008]

keywords: [pig effigy, antisemitism, divestment, uc regents, protest]

org_affiliated_actor:
  value: true
  justification: |
    SOURCE SOC-006-2: “During March 19-21, **UC Divest** carried out a 3-day sit-in … propping up Tent City, students camping out … making our presence inescapable to the Regents.”  
    The Instagram caption names UC Divest (a multi-campus student coalition) as organizer/amplifier of the display, satisfying the explicit org-affiliation rule.

actor_student:
  value: true
  justification: |
    SOURCE DB-001: “The regents’ meeting attracted **protesters** … placed in the **designated free-speech area** next to the meeting.”  
    No source asserts the effigy builders were non-students; per protocol, absence of a contrary claim defaults to `true`.

admin_response_type:
  value: incident_specific
  justification: |
    SOURCE ADM-001: “We are appalled … by the **ugly antisemitic caricature** that was displayed as part of a protest targeting a UC Board of Regents meeting on our campus in mid-March.”  
    The statement names the display directly and was published 8 days after the incident (within the 14-day window).

accountability_follow_up:
  value: none
  justification: |
    ADM-001 condemns the effigy but mentions **no investigation, discipline, or policy process**. Hence `none`.

admin_support_offered:
  value: multiple
  justification: |
    • SOURCE ADM-001: “It is absolutely critical that Jewish members of our community … are treated with respect and dignity.” → *positive_inclusion*  
    • SOURCE ADM-001: “We remain committed to doing all we can to **support the safety and protect the rights** of everyone on our campus.” → *general_commitment*  
    • SOURCE MED-001: “UC campuses will be partnering with the **Hillel Campus Initiative** … to better address campus antisemitism.” → *campus_climate_initiative*  
    Presence of ≥ 2 support types ⇒ `multiple`.

administrative_tone:
  value: condemnation
  justification: |
    SOURCE ADM-001: “We are **appalled, offended and deeply frustrated** by the ugly antisemitic caricature…”  
    Strong moral denunciation matches `condemnation`.

administrative_positioning:
  value: civil_rights
  justification: |
    SOURCE ADM-001: “Hateful and racist depictions like this are a complete affront to UCLA’s **Principles of Community** …”  
    Frames duty to ensure equal dignity and nondiscrimination – a *civil_rights* narrative.

target_group:
  value: Jewish
  justification: |
    SOURCE ADM-001: “It is absolutely critical that **Jewish** members of our community … are treated with respect and dignity.”  
    SOURCE SOC-002 (ADL): “display of **Jew hatred** on a University of California campus…”  
    Both identify Jews as the harmed group.

actor_group:
  value: Palestinian
  justification: |
    SOURCE SOC-006-2: caption describes participants as “students and community … to demand the UC Regents **divest from war and the genocide of Palestinians**.”  
    The actor identity is framed in pro-Palestinian solidarity terms.

media_coverage_level:
  value: moderate
  justification: |
    Following the media-coverage protocol:  
    1. SOC-001 (Israel War Room tweet) – general-public reach (10 k+ views).  
    2. SOC-002 (ADL California tweet) – general-public reach (40 k+ views).  
    3. MED-001 (Jewish Journal article) – general-public outlet.  
    4. SOC-003 (SJP UCLA Instagram story) – ecosystem-specific.  
    5. SOC-004 (Reddit r/Jewish post, 1.6 k up-votes) – ecosystem-specific.  
    6–7. SOC-007 & SOC-008 (Reddit comment threads) – same ecosystem.  
    → 7 qualifying sources across multiple ecosystems, with ≥ 2 general-public outlets ⇒ `moderate`.

media_positioning:
  value: group_targeting
  justification: |
    SOURCE MED-001 headline: “UCLA Condemns ‘Ugly **Antisemitic** Pig Display’.”  
    SOURCE SOC-001: “depicting Jews as pigs … Remember, it’s ‘Anti-Zionism’ only, definitely **not Antisemitism**.”  
    Media uniformly frame incident as antisemitic harassment of Jews → *group_targeting*.

actor_tone:
  value: combination
  justification: |
    **Tone reference count** (total = 3):  
    – *mobilizing/escalatory* (2): SOC-006-2 (“carried out a 3-day sit-in … making our presence inescapable”); SOC-003 overlay encourages continued activism.  
    – *defiant* (1): SOC-003 comment: “I hate Zionists but have no issues with Jews.”  
    No tone ≥ 60 %; therefore `combination` (mobilizing/escalatory + defiant).

target_tone:
  value: accusatory
  justification: |
    **Tone reference count** (total = 6):  
    – *accusatory* (4): SOC-002 (“Their silence on this issue is **complicity**”); SOC-001 tweet; multiple Reddit comments calling display “blatant antisemitism.”  
    – *fear/distress* (2): SOC-004 (“This is why **I’m scared** of going to campus as an Israeli Jew.”); Reddit user cool_username_: “really **disheartening** to see my fellow students defending that.”  
    4 / 6 = 67 % accusatory ≥ 60 % ⇒ predominant tone = `accusatory`.

actor_positioning:
  value: rights-based
  justification: |
    SOURCE SOC-006-2: “demand the UC Regents **divest** … highlighting the disparate conditions Palestinian refugees face.”  
    Frames protest as moral/rights claim for Palestinians → *rights-based*.

target_positioning:
  value: rights-based
  justification: |
    SOURCE SOC-002: “We ask the Regents to **denounce** this antisemitic display … there is **no tolerance** for antisemitism on University campuses.”  
    Argues for protection of Jewish students’ civil rights.

location:
  value: on-campus
  justification: |
    SOURCE DB-001: “statue placed near the **Meyer and Renee Luskin Conference Center**, where the UC Board of Regents was meeting.”  
    The center is on UCLA property.

policy_status:
  value: compliant
  justification: |
    SOURCE DB-001: “placed in the **designated free-speech area** next to the regents’ meeting.”  
    No policy breach alleged by administration → `compliant`.

policy_violation_type:
  value: none
  justification: |
    Because `policy_status` = compliant and no admin cites a rule breach, `policy_violation_type` = none.

norm_violation_type:
  value: bias/discrimination
  justification: |
    SOURCE ADM-001 labels the display “**hateful**” and “antisemitic caricature.”  
    SOURCE DB-001 details classic antisemitic tropes.  
    Violates institutional norm against identity-based bigotry.

severity_score:
  value: low
  justification: |
    Based on the verification checklist, this incident shows *no physical harm, threat, police action, or operational disruption*.  
    The effigy was offensive but stationary; protest remained peaceful → `low`.

police_involvement:
  value: none
  justification: |
    No source mentions police presence or action related to the effigy.

latency_days:
  value: 2
  justification: |
    SOURCE DB-001 sets earliest incident date as **Mar 20 2024** (statue appeared “March 20-21”).  
    SOURCE MED-001 records earliest admin response in the *Jewish Journal* on **Friday Mar 22 2024** (“In a Friday statement … the university said”).  
    22 Mar – 20 Mar = **2 days**.

notes: |
  On Mar 20-21 2024, protesters outside the UC Board of Regents meeting at UCLA displayed a pig effigy holding a money bag and a birdcage with a keffiyeh; a bucket marked with a Star of David sat at its base. Jewish commentators, the ADL, and UCLA administration condemned the image as antisemitic. The statue stood in UCLA’s designated free-speech zone, and no policy violation or police action was recorded. Administrative response included a public condemnation and reference to new antisemitism-prevention initiatives but no disciplinary measures.
