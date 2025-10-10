---
layout: single
title: "FBI Homicide Data Compared to CDC Assault Data and Jag Award Implications for Some States"
author: Alexie Pogue
date: 2025-10-07
last_modified_at: 2025-10-08
published: True
---

### Outline

Will only include the information absolutely necessary to understanding the core data pipeline, funding purposes, funding methods, my approach and why the methodology exposes issues, and the CRO take (maybe at the beginning, maybe at the end). 

- What is UCR 
    - Who is submitting
    - What is it used for
        - Aside from state-level data management and processing which may be different (mandated vs voluntary), this is the nationwide database for crime statistics (fact check that)
    - What methodologies are there for any processing (slight processing I believe, prior to CIUS processing. They fill in data for years considered "incomplete" by some number of months) 
    - SRS and NIBRS switch (take this from CRO)
        - Hierarchy rule
        - Reporting issues continue to affect data integrity, in which years after 2021 did they continue to accept SRS? 
            - CRO says 2022 and 2023
            - JAG report says some states could not accept SRS after state-level switch (Georgia)
            - No way of knowing. It can only be assumed, given the population coverage data in the CIUS spreadsheets that they continued to accept SRS submissions where available for national and state-level totals. 
- What is JAG
    - What is it used for
    - Methods
        - Concern is for the state-level funding, further breakdowns between SAA and local agencies not considered
        - They use a sliding window containing the 3 most recent years of complete data, they have been using the 2018-2020 window since the 2022 FY (I believe) and through FY 2025 (although that report is unpublished)
        - What is CIUS
            - What constitutes a violent crime? 
            - What constitutes a homicide?
            - What processing methodologies are used? 
- Plots and analysis
    - CDC 
        - Mandatory
        - What constitutes an deadly assault?
        - What processing is used (find methodologies)
    - The line should be between the orange and green, the theoretical maximum assumes total consistency between medical coroners/ME's and police investigations, with a delta from self-defense (inclusive, excluded, respectively). 
        - Take a max, min delta between lines and put them on the plots 
    - Other variations are due to IDC-9 to IDC-10 switch, different conclusions between medical and police with respect to cause of death, or whether the cause could not be determined, which the CDC would code as "underdetermined" (and the police unknown?)
    - Regardless, empirically close alignment with the CDC is achieved in some states (or there could be more backend comms and collaboration between local agencies and coroners) 
    - What I would consider a "healthy reporting channel" versus one that's problematic (Texas vs MS)
    - In addition to the frozen 2018-2020 window (which they've used exactly how many times?) Exactly how many times did JAG use the year 2018 to calculate funding?
    - Weighted CIUS reporing population coverage statistic for each state, from 2015-2024
        - At the end of the day, it doesn't matter what underlying data is being used (SRS or NIBRS), what matters is the population coverage over the years
            - In MS the rural areas have a terrible history of reporting, that accounts for half the MS population
            - The MS metro area reached as high as 80% (2019) then it steps down in 2022 (60%) then lower in 2023+ (50%)
                - NY reporting remains high the entire time (90's)
                - Not consistent with the hex map. Regardless NY has full coverage reporting pre-2021: NY only needed to transition agencies already reporting, and they continued to accept SRS data (?)
                - I have no idea what is happening in MS, are they funding previously non-reporting agencies to begin reporting? Did the state stop accepting SRS? Did transitioning agencies stop reporting? Whatever the issue is, the numbers are not recovering. Even if it seems as though they are, because previously terrible reporting non-metro areas are now "reporting," why is the CDC delta widening? 
        - The plot should show how well states are recovering from the transition, or if reporting was always an issue, it should also show any strange reporting behavior (MS reporting dropped drastically in metro areas but jumped in other areas)
        - Compare with the BJS hex map. Many inconsistencies (FL, GA, MS, NY). 
            - FL, NY has low pop coverage on the hex map, high pop coverage in 2019, then a drop beginning in 2022 that is still higher than the hex map indicates. 
                - NY clearly has SRS data coming in, and a good enough history of data to make large modeling adjustments (2024 VC)
                - If the 2024 CDC number is even close to correct, the homicide number in MS is higher than a majority of other states that year
                    - Rank MS versus other states in absolute VC and homicide numbers using 1. UCR data and 2. CDC data (don't mix the data streams) in 2024
                        - If reporting is somewhat consistent between CDC and UCR for high reporting states, then MS should jump considerably in rank
                        - Any states with a large gap should be looked into (LA?)
                    - Compare that to their population rank 
            - GA (pure NIBRS according to JAG) has higher coverage in 2019, then coverage drops and slowly climbs as years go by to meet hex map coverage
- CRO take on the issue (this is where you talk about why there seems to be issues with the switch)
    - Why is the SRS to NIBRS data switch a problem? 
    - What are the data implications without targeted infrastructure funding
- My take on the issue
    - Why is the way the statistics are reported by the UCR/NIBRS/CIUS an issue for JAG funding?
        - A national coverage statistic treats reporting gaps as a single "batch" issue. It is unknown whether critical reporting gaps exist, and by grouping them with either low-crime gaps or gaps that can be accurately adjusted using estimation procedures, critical gaps are not being properly addressed. 
    - Has UCR met their reporting coverage sufficiency threshold in the years 2022, 2023, and 2024 under the NIBRS system? Is this the data JAG used and submitted for FY 2026? 
        - What are the implications with respect to funding and reporting if they used the NIBRS data? Or if they choose to use it in the future without targeted funding for the switch?
    - Is there backpay due? Can the funding floor be reallocated to pad the transition?
    - The JAG setup is pretty dumb, if you look at NY in 2024, they made a huge adjustment to rural areas missing less than 3% of its coverage. 
        - NY is affluent and high-capacity, they have a solid data history, huge adjustments are statistically sound measures
        - These kinds of adjustments unfairly advantage big states already getting more money based on the population half of the funding calcuations, and redundant funding channels
        - MS doesn't have a good history of reporting, any statistical adjustments are conservative when reporting gaps are critical (requiring major changes)
        - The funding structure is punative - they aren't reporting, they get less money, they can't *add agencies* and transition due to underfunding, they get proportionally less money as a result
        - To take a state's data and not condition it on the state reporting and/or crime rate, to consider total violent crime as completely separate from population, underweights the crime impact on the state, and overestimates the state's ability to address that crime. 
            - This point is especially true because the funding is *based on reporting*, the entire award is based on inaccurate data. Good faith attempts to improve reporting should be getting *more* money, not less money. 
            - Different states have different situations, and homogenizing that factor is an issue. Take MS's rank in homicides compared to many larger states, discounting rate (population). Larger states with lower absolute crime numbers are getting more money (CT vs MS). 
                - If the states are already reporting at 100%, this money is effectively a surplus to put to various criminal justice initiatives, which will only cause the policing resource and capability gap to widen further.
                - MS crime is dispersed outside of metropolitan areas, it may be harder to pool resources or allocate multiple roles to a single entity to address crime
                - The population half of the grant dilutes funding impact, essentially acting to average funding across the nation - a big state with low crime will get as much or more money than MS. 
            - All together, considering absolute numbers, it means crimes are "worth" more in large states
                - The population half essentially assumes a single, "national crime rate." Some weighting should be applied based on crime rates. The VC half should be improved by being more accurate. 
            - At the very least, scale funding by population, but only provided all reporting is equal. Until then, adjustments need to be made. 
