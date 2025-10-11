---
layout: single
title: "FBI Homicide Data Compared to CDC Assault Data and Jag Award Implications for Some States"
author: Alexie Pogue
date: 2025-10-07
last_modified_at: 2025-10-10
published: True
---

### Outline V2
- What is UCR 
    - Who is submitting
    - What is it used for
        - Aside from state-level data management and processing which may be different (mandated vs voluntary), this is the nationwide database for crime statistics (fact check that)
    - What methodologies are there for any processing (slight processing I believe, prior to CIUS processing. They fill in data for years considered "incomplete" by some number of months) 
    - SRS and NIBRS switch (take this from CRO)
        - Mandated by Congress?
        - Richer data, more context, hierarchy rule
        - Reporting issues continue to affect data integrity
            - CRO says they continued to accept SRS in 2022 and 2023 
            - JAG report says some states could not accept SRS after state-level switch (Georgia)
            - They aren't transparent about the data they're using but it can only be assumed, given the population coverage information in the CIUS spreadsheets (that contradict BJS hex maps) that they continued to accept SRS submissions where available for national and state-level totals through 2024. 
- What is JAG
    - What is it used for
    - Methods
        - My concern is for the state-level funding, further breakdowns between SAA and local agencies not considered
        - They use a sliding window containing the 3 most recent years of complete data, they have been using the 2018-2020 window since the 2022 FY (I believe) and through FY 2025 (although that report is unpublished)
        - The formula uses CIUS data to determine funding amounts for each state
            - What is CIUS
                - What constitutes a violent crime? 
                - What constitutes a homicide?
                - What processing methodologies are used? 
- Plots and analysis
    - CDC 
        - Mandatory
        - What constitutes an deadly assault?
        - What processing is used (find methodologies)
    - Texas is a "healthy reporting channel" vs MS that is problematic (take a max, min delta between lines and put them on the plots)
        - The line should be between the orange and green, the theoretical maximum assumes total consistency between medical coroners/ME's and police investigations 
            - There's a delta from self-defense (inclusive, excluded, respectively). 
            - Other variations are due to IDC-9 to IDC-10 switch or different conclusions between medical and police (accident, suicide, undetermined)
        - Regardless, empirically, close alignment with the CDC is achieved in some states (for whatever reason i.e. backend comms between local agencies/coroners) 
    - Weighted (?) CIUS reporing population coverage statistic for each state vs time
        - The plot should show how well states are recovering from the transition, or if reporting was always an issue
            - MS may not just be lagging in transition, MS needs to add reporters and transition reporters.
        - No idea what is happening in MS, are they funding previously non-reporting agencies to begin reporting? Did the state stop accepting SRS? Did transitioning agencies stop reporting? Whatever the issue is, the numbers are not recovering. Even if it seems as though they are, because previously terrible reporting non-metro areas are now "reporting," why is the CDC delta widening? 
    - Rank MS versus other states in absolute homicide numbers using 1. UCR data and 2. CDC data (no mixing of data streams) for years 2018-2020 and 2022-2024. Compare it with their population rank
        - If reporting is consistent between CDC and UCR for high-reporting states, MS should jump considerably in rank
    - Analysis conclusion, JAG award is based on inaccurate data. Very inaccurate if in FY 2026 they used the 2022-2024 UCR window, but even if they didn't...
        - They used the frozen 2018-2020 window X times, and the year 2018 Y times to calculate funding. 
- Implications of using bad data
    - CRO take on the issue
        - What problems are happening with the SRS to NIBRS data switch? 
        - Need targeted infrastructure funding
        - Some mention of separate reporting funding initiatives on the FBI (BJS?) website but nothing specific, nothing CRO mentioned, and nothing that has had any kind of impact
    - It's insane to use voluntary reporting 
        - A national coverage statistic treats reporting gaps as a single "batch" issue. It is unknown whether critical reporting gaps exist, and by grouping them with either low-crime gaps or gaps that can be accurately adjusted using estimation procedures, latent critical gaps are not being properly addressed. 
        - MS doesn't have a good history of reporting, any statistical adjustments are conservative. Judging from CDC, the reporting gaps are critical (requiring major changes). This can't be solved with modeling. Reporting must go up. 
            - NY 2024 rural adjustment as an example
        - The funding structure is punative - they aren't reporting, they get less money, they can't *add agencies* and transition due to underfunding, they get proportionally less money as a result
- Implications of the JAG formula 
    - The population half dilutes funding impact wrt crime, over-burdening the state in addressing that crime
        - Larger states with lower absolute crime numbers are getting more money (CT vs MS)
            - If the states are already reporting at 100%, the money is effectively a surplus to put to various criminal justice initiatives, which will only cause the policing gap to widen further  
            - The formula effectively "averages" crime across state lines, but states are not equal and cannot share resources 
                - CT won't share its "surplus" resources with MS
                - MS crime is dispersed outside of metropolitan areas, it may be harder to pool resources or allocate multiple roles to a single entity
        - Looking at crime rates for several states, the formula means crimes are "worth" more in large states
                - The population half is allotted totally independent of how much crime is actually occurring in that state
                - It makes the formula robust to VC data errors, states get "something" in cases where crime may be undercounted 
                    - But it doesn't account for VC errors' disproportionate impact: absolute error can be trivial in some states but account for a very large proportion of crime in MS, translating to the loss of a large portion of their funding
                    - Can take the 2018-2020 and swap the UCR for CDC numbers for the formula half of funding
                        - Use two bounds (assuming they are not reporting errors but coding deltas): CA or NY as the lower bound and TX as the upper bound. Calculate delta magnitude as a percent of total incidents and apply it to MS
                    - Compare 2018-2020 using 1. JAG ranking, 2. JAG ranking using homicide data 
                        - 1 vs 2 monetizes possible inaccuracies and incorporates the effect of the population on the funding rank 
                    - Then do the same using 2022-2024
                        - If homicides are not reported, this indicates a true reporting issue. I don't know how it reflects on other VC data. The analysis is not meant to quantify how many VCs are going unreported, or predict rank based on total VC's, each VC is calculated independently, that can't be known 
                        - If homicide coverage reflects a broader reporting failure, actual violent-crime counts could be proportionally higher — but quantification would require assumptions beyond available data.
                        - In the future non-reporting will have a greater impact though due to the end of the hierarchy rule
        - Crime may not always have been the funding priority, but funding has been cut by a huge amount - JAG funding was 600 million in 2005. High-crime (/low-reporting) states should absolutely be prioritized either by adjusting the formula temporarily (incorporte rate weighting) or dedicating separate funding to onboard agencies (pull universal floor allocations). 
            - As-is, population allocations and bad data effectively blinds JAG to high-crime states - it deals now critical, small funds unfairly and punishes low-reporting states 
- At the very least, reporting needs to be addressed. Once reporting meets adequate thresholds, JAG can effectively target criminal justice causes in vulnerable states.
    

