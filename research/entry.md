---
layout: single
title: "The Pipeline"
permalink: /research/entry/
---





<!-- Pipeline component: paste into a Markdown page -->
<style>
/* namespace: rp- */
.rp{font:14px/1.5 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#1f2937}
.rp-title{text-align:center;font-weight:700;margin:0 0 16px}
.rp-wrap{display:flex;flex-direction:column;gap:12px}
.rp-stage{border:1px solid #e5e7eb;background:#f9fafb;border-radius:6px;padding:14px 16px 12px 42px;position:relative}
.rp-stage:hover{border-color:#9ca3af}
.rp-stage.active{border-color:#111827}
.rp-n{position:absolute;left:12px;top:12px;font:600 11px/1 monospace;color:#fff;background:#111827;border-radius:3px;padding:3px 6px}
.rp-h{margin:0 0 6px;font-weight:700}
.rp-d{margin:0 0 8px;color:#6b7280}
.rp-list{margin:0;padding:0;list-style:none}
.rp-list li{position:relative;padding-left:14px}
.rp-list li+li{margin-top:6px}
.rp-list li::before{content:"–";position:absolute;left:0;color:#9ca3af}
.rp-callout{margin-top:8px;padding:10px;border:1px dashed #f59e0b;background:#fff7ed;border-radius:4px}
.rp-panel{margin-top:16px;border:1px solid #e5e7eb;border-radius:6px;padding:14px;display:none}
.rp-panel.show{display:block}
.rp-panel h3{margin:0 0 8px}
.rp-panel p{margin:0 0 8px;color:#6b7280}
</style>

<div class="rp">


  <div class="rp-wrap">
    <!-- S1 -->
    <section class="rp-stage" data-stage="1">
      <span class="rp-n">S1</span>
      <h3 class="rp-h">Stage 1 — Incident Discovery</h3>
      <p class="rp-d">Neutral, rule-bound incident intake.</p>
      <ul class="rp-list">
        <li>Daily Bruin scrape (<code>inclusion_rule</code>)</li>
        <li>Defines what counts as an incident</li>
      </ul>
    </section>

    <!-- S2 -->
    <section class="rp-stage" data-stage="2">
      <span class="rp-n">S2</span>
      <h3 class="rp-h">Stage 2 — Evidence Blocks</h3>
      <p class="rp-d">Multi-source collection, tracked by Source IDs.</p>
      <ul class="rp-list">
        <li>Public Admin Comms — chancellor emails, statements</li>
        <li>Internal Comms — administrator emails, planning docs</li>
        <li>3rd Party Reports — task force, commissioned reviews</li>
        <li>Policy &amp; Legal Framework — UC policy, Title VI, First Amendment</li>
        <li>Police Reports — UCPD logs, arrests</li>
      </ul>
      <div class="rp-callout">
        <strong>First-Hand Accounts (current focus)</strong>
        <ul class="rp-list" style="margin-top:6px">
          <li>Student/faculty filings (EDI, Title VI, Dean of Students, UCPD)</li>
          <li>Acknowledgments, follow-ups, remedial offers</li>
          <li>Incident video footage, SAMS reports</li>
        </ul>
      </div>
    </section>

    <!-- S3 -->
    <section class="rp-stage" data-stage="3">
      <span class="rp-n">S3</span>
      <h3 class="rp-h">Stage 3 — Coding Layer</h3>
      <p class="rp-d">Deterministic mapping from evidence → variables.</p>
      <ul class="rp-list">
        <li>Apply structured variables</li>
        <li>Values = rule-based + evidence citations</li>
        <li>Human oversight checks</li>
      </ul>
    </section>

    <!-- S4 -->
    <section class="rp-stage" data-stage="4">
      <span class="rp-n">S4</span>
      <h3 class="rp-h">Stage 4 — Comparative Tests</h3>
      <p class="rp-d">Controlled comparisons to isolate effects.</p>
      <ul class="rp-list">
        <li>Cross-group disparity (identity vs. response)</li>
        <li>Within-group drivers (identity held constant, check severity/visibility)</li>
      </ul>
    </section>
  </div>

  <div class="rp-panel" id="rp-panel">
    <h3 id="rp-ptitle">Select a stage</h3>
    <div id="rp-pbody">
      <p>Click a stage to see short operational notes.</p>
    </div>
  </div>
</div>

<script>
(() => {
  const notes = {
    1:{t:"Stage 1 — Incident Discovery",
       b:`<p><strong>Objective:</strong> neutral intake.</p>
          <p><strong>Inputs:</strong> Daily Bruin + <code>inclusion_rule</code>.</p>
          <p><strong>Output:</strong> incident_id, date, scope.</p>`},
    2:{t:"Stage 2 — Evidence Blocks",
       b:`<p><strong>Objective:</strong> gather all relevant artifacts.</p>
          <p><strong>Inputs:</strong> admin/public/internal, policy/legal, police, <em>first-hand accounts</em>.</p>
          <p><strong>Output:</strong> source_index with IDs.</p>`},
    3:{t:"Stage 3 — Coding Layer",
       b:`<p><strong>Objective:</strong> convert evidence to variables.</p>
          <p><strong>Method:</strong> rule-based + citations; reviewer checks.</p>
          <p><strong>Output:</strong> YAML/JSON per incident.</p>`},
    4:{t:"Stage 4 — Comparative Tests",
       b:`<p><strong>Objective:</strong> test patterns under controls.</p>
          <p><strong>Tests:</strong> cross-group disparity; within-group drivers.</p>
          <p><strong>Output:</strong> tables/figures + notes.</p>`}
  };
  const panel = document.getElementById('rp-panel');
  const ptitle = document.getElementById('rp-ptitle');
  const pbody  = document.getElementById('rp-pbody');

  document.querySelectorAll('.rp-stage').forEach(s=>{
    s.addEventListener('click', ()=>{
      document.querySelectorAll('.rp-stage').forEach(x=>x.classList.remove('active'));
      s.classList.add('active');
      const k = s.dataset.stage;
      ptitle.textContent = notes[k].t;
      pbody.innerHTML = notes[k].b;
      panel.classList.add('show');
    });
  });
})();
</script>








<!-- 
**Stage 1 — Incident Discovery**  
- Daily Bruin scrape (inclusion rule)  
- Defines what counts as an incident  

**Stage 2 — Evidence Blocks**  
- Public Admin Comms — chancellor emails, statements  
- Internal Comms — administrator emails, planning docs  
- 3rd Party Reports — task force, commissioned reviews  
- Policy & Legal Framework — UC policy, Title VI, First Amendment  
- Police Reports — UCPD logs, arrests  
- **First-Hand Accounts (current focus)**  
  - Student/faculty filings (EDI, Title VI, Dean of Students, UCPD)  
  - Acknowledgments, follow-ups, remedial offers  
  - Incident video footage, SAMS reports  

**Stage 3 — Coding Layer**  
- Apply structured variables  
- Values = rule-based + evidence citations  
- Human oversight checks

**Stage 4 — Comparative Tests**  
- Cross-group disparity (identity vs. response)  
- Within-group drivers (identity held constant, check severity/visibility)  

## Methods 

This project evaluates how UCLA responded to identity-based harm and protest-related incidents and whether those responses aligned with policy and legal obligations.

### Evidence Sources
1. **Public Administrative Communication**  
   - Chancellor and administrative statements, press releases, campuswide emails.  
   - Purpose: Measure tone, framing, and timing of responses.  

2. **Internal Communication**  
   - External communications to administrators, internal administrator emails, outgoing administrator communications.  
   - Purpose: Compare what administrators knew vs. what was stated publicly. Compare how administrators planned to respond to incidents vs. what administrative actions occurred.  

3. **Independent/3rd Party Reports**  
   - Commissioned investigations, task force reviews, consultant reports.  
   - Purpose: Establish how risks and responses were externally evaluated.  

4. **Policy & Legal Framework**  
   - UC policy, First Amendment principles, Title VI obligations, USAC rules.  
   - Purpose: Benchmark UCLA’s obligations against actual practice.  

5. **Police Reports**  
   - UCPD incident reports, crime logs, arrest data.  
   - Purpose: Identify how incidents were recorded, investigated, or closed.  

6. **First-Hand Accounts (Critical Evidence Gap Filler)**  
   - Because PRA/FOIA requests can produce limited records, first-hand accounts are essential to establish what reports were filed and how UCLA responded.  
   - Scope: Not general perceptions of climate, but **factual details of process**:  
     - Who filed reports (EDI, Title VI, Dean of Students, UCPD).  
     - What acknowledgment, follow-up, or closure notices were received.  
     - What (if any) protective or remedial measures UCLA offered.  
   - Purpose: To verify whether UCLA fulfilled its Title VI duty to alleviate a hostile environment once on notice of identity-based exclusion or harassment.  

-->











