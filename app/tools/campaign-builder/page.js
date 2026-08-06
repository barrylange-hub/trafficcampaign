import CampaignBuilder from "@/components/CampaignBuilder";
import Link from "next/link";

export const metadata={
 title:"Marketing Campaign Builder — Free Campaign Planning Tool",
 description:"Build a focused marketing campaign plan with a goal, audience, desired action, channel, budget, KPIs, and practical measurement strategy.",
 alternates:{canonical:"/tools/campaign-builder"}
};

const faq=[
 ["What is a marketing campaign plan?","A marketing campaign plan is a focused document that defines the outcome you want, the audience you need to reach, the action you want them to take, the channel you will use, the budget and timeframe, and the metrics that will show whether the campaign worked."],
 ["How many goals should a campaign have?","A campaign can influence several business outcomes, but it should usually have one primary goal. A single primary goal makes the message, call to action, optimization decisions, and reporting much clearer."],
 ["How do I choose a marketing channel?","Start with where the audience already expresses intent or spends attention, then consider your offer, budget, creative resources, timeframe, and ability to measure results. The best channel is not always the one with the most reach."],
 ["What KPIs should I track?","Track the smallest set of metrics that can tell you whether the campaign is delivering the intended outcome and where performance is breaking down. The right KPI set depends on whether the goal is awareness, traffic, leads, or sales."],
 ["Does the Campaign Builder save my information?","No account is required. The current Campaign Builder works in your browser and is designed as a simple planning aid. You can copy the finished plan and save it wherever you normally manage campaign notes."]
];

export default function Page(){
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))};

 return <div className="container">
  <div className="pagehead campaign-builder-head">
    <div className="kicker">Free campaign planning tool</div>
    <h1>Marketing Campaign Builder</h1>
    <p className="lead">Turn a marketing idea into a focused starting plan: one goal, one audience, one desired action, one primary channel, a realistic budget, and a measurement plan.</p>
    <div className="quick-nav" aria-label="Page contents">
      <a href="#builder">Build your campaign</a>
      <a href="#framework">Planning framework</a>
      <a href="#example">Example</a>
      <a href="#mistakes">Common mistakes</a>
      <a href="#faq">FAQ</a>
    </div>
  </div>

  <section id="builder" className="tool-anchor">
    <CampaignBuilder/>
    <p className="tool-note">This is a planning tool, not a forecast. The goal is to make the campaign easier to execute and measure—not to pretend we know the result before traffic arrives.</p>
  </section>

  <section className="section campaign-guide-intro">
    <div className="kicker">The point of a campaign plan</div>
    <h2>A good campaign plan removes ambiguity before the campaign starts.</h2>
    <div className="guide-two-col">
      <p>Most campaigns do not fail because somebody forgot to choose a marketing tactic. They get messy because the team never made the important decisions explicit. One person thinks the goal is awareness. Another expects leads. The ad talks about one benefit, the landing page talks about another, and reporting becomes a debate about which number looks best.</p>
      <p>A useful campaign plan is much simpler. It establishes what the campaign is trying to accomplish, who needs to respond, what action matters, where the campaign will run, what you are willing to spend, and which metrics will help you decide whether to continue, change, or stop.</p>
    </div>
    <div className="callout"><b>TrafficCampaign rule:</b><p style={{marginBottom:0}}>If you cannot explain what the campaign is supposed to accomplish in one sentence, the campaign probably needs more planning—not more channels.</p></div>
  </section>

  <section id="framework" className="section campaign-framework">
    <div className="kicker">Campaign planning framework</div>
    <h2>The seven decisions to make before launch</h2>
    <p className="lead">You can make a campaign much more complicated than this. Most of the time, you should not.</p>

    <div className="framework-list">
      <div className="card pad framework-item"><span>01</span><div><h3>Define the primary goal</h3><p>What business outcome should this campaign influence? Awareness, qualified traffic, leads, trials, appointments, purchases, or something else?</p><p className="muted"><b>Useful test:</b> If the campaign works, what should be measurably different?</p></div></div>

      <div className="card pad framework-item"><span>02</span><div><h3>Identify the audience</h3><p>A useful audience definition describes the people most likely to care about the offer and the situation that makes the message relevant now.</p><p className="muted">“Everyone who might buy” is not an audience strategy.</p></div></div>

      <div className="card pad framework-item"><span>03</span><div><h3>Choose the desired action</h3><p>What should someone do after seeing the campaign? Click, request a quote, book a call, start a trial, buy, subscribe, download, visit, or remember the brand?</p><p className="muted">The action should match the stage of the customer journey and the level of commitment your offer reasonably asks for.</p></div></div>

      <div className="card pad framework-item"><span>04</span><div><h3>Choose a primary channel</h3><p>Start where the combination of audience, intent, message format, cost, and measurability gives the campaign a reasonable chance to work.</p><p className="muted">Additional channels can help, but they also add creative work, tracking complexity, budget fragmentation, and attribution questions.</p></div></div>

      <div className="card pad framework-item"><span>05</span><div><h3>Set a budget and timeframe</h3><p>A budget without a timeframe is incomplete. A $3,000 budget spent over three days behaves very differently from the same budget spent over three months.</p><p className="muted">Your budget needs enough time and volume to generate useful information without risking more than the business can reasonably afford to learn.</p></div></div>

      <div className="card pad framework-item"><span>06</span><div><h3>Choose the KPI set</h3><p>Start with the outcome metric, then add only the diagnostic metrics that help explain why that outcome moved.</p><p className="muted">For a sales campaign, revenue and acquisition cost may matter more than impressions. CTR can still be useful—but it is supporting evidence, not the business result.</p></div></div>

      <div className="card pad framework-item"><span>07</span><div><h3>Decide what happens after launch</h3><p>Before spending money, decide when you will review the campaign and what kinds of evidence would justify increasing budget, changing something, or stopping.</p><p className="muted">Optimization works better when the rules are not invented after seeing the numbers.</p></div></div>
    </div>
  </section>

  <section className="section soft-section-full">
    <div className="kicker">Goals and metrics</div>
    <h2>Match the KPI to the job of the campaign</h2>
    <div className="campaign-goal-grid">
      <div className="card pad"><span className="badge">Awareness</span><h3>Make the right people aware</h3><p className="muted">Useful signals may include reach, frequency, CPM, branded search, direct traffic, or later assisted conversions.</p></div>
      <div className="card pad"><span className="badge">Traffic</span><h3>Generate useful visits</h3><p className="muted">Look beyond sessions. CTR, CPC, engagement, landing-page behavior, and downstream actions can reveal whether the traffic is actually valuable.</p></div>
      <div className="card pad"><span className="badge">Leads</span><h3>Create qualified opportunities</h3><p className="muted">Lead volume matters, but qualified leads, conversion rate, cost per lead, and sales acceptance often tell the more useful story.</p></div>
      <div className="card pad"><span className="badge">Sales</span><h3>Generate profitable revenue</h3><p className="muted">Revenue, ROAS, conversion rate, CAC/CPA, gross margin, and repeat behavior can matter more than click metrics alone.</p></div>
    </div>
  </section>

  <section id="example" className="section">
    <div className="kicker">Worked example</div>
    <h2>What a simple campaign plan might look like</h2>
    <div className="card pad campaign-example">
      <div className="example-row"><span>Campaign</span><b>Spring Consultation Campaign</b></div>
      <div className="example-row"><span>Goal</span><b>Generate qualified leads</b></div>
      <div className="example-row"><span>Audience</span><b>Local homeowners planning a major landscaping project</b></div>
      <div className="example-row"><span>Desired action</span><b>Request an on-site consultation</b></div>
      <div className="example-row"><span>Primary channel</span><b>Google Search Ads</b></div>
      <div className="example-row"><span>Budget</span><b>$3,000 over 30 days ($100/day)</b></div>
      <div className="example-row"><span>Primary KPI</span><b>Qualified consultation requests</b></div>
      <div className="example-row"><span>Diagnostic metrics</span><b>Cost per lead, landing-page conversion rate, CTR</b></div>
      <div className="example-row"><span>Review plan</span><b>Check tracking immediately; review search terms and lead quality weekly</b></div>
    </div>
    <p className="tool-note">Notice what is missing: a 47-slide strategy deck. The plan contains enough information to launch, measure, and have an intelligent conversation about what happens next.</p>
  </section>

  <section id="mistakes" className="section">
    <div className="kicker">Common campaign planning mistakes</div>
    <h2>What usually makes a campaign harder than it needs to be</h2>
    <div className="grid2">
      <div className="card pad"><h3>Too many objectives</h3><p className="muted">Trying to optimize for awareness, clicks, leads, sales, and retention in the same campaign makes prioritization difficult.</p></div>
      <div className="card pad"><h3>Starting with the channel</h3><p className="muted">“We should run Facebook ads” is a tactic. The campaign still needs a reason, audience, offer, action, budget, and measurement plan.</p></div>
      <div className="card pad"><h3>Tracking vanity metrics</h3><p className="muted">Impressions and clicks can explain delivery, but they do not automatically tell you whether the campaign created business value.</p></div>
      <div className="card pad"><h3>Changing everything at once</h3><p className="muted">If you simultaneously change the audience, creative, offer, landing page, and budget, you may get better results without learning what caused them.</p></div>
      <div className="card pad"><h3>Ignoring the landing experience</h3><p className="muted">A great ad cannot rescue a confusing destination forever. Message match, clarity, trust, friction, and load speed are part of campaign performance.</p></div>
      <div className="card pad"><h3>Judging results without economics</h3><p className="muted">A campaign can produce revenue and still be unattractive after product cost, fulfillment, fees, overhead, refunds, and acquisition cost.</p></div>
    </div>
  </section>

  <section className="section">
    <div className="kicker">After you build the plan</div>
    <h2>Turn the plan into something measurable</h2>
    <div className="grid3">
      <Link className="card pad tool-card" href="/tools/utm-builder"><span className="badge">Next</span><h3>Build your tracking URLs</h3><p className="muted">Create consistent source, medium, and campaign labels before links are distributed.</p><b className="blue">Open UTM Builder →</b></Link>
      <Link className="card pad tool-card" href="/templates/campaign-tracking-checklist"><span className="badge">Check</span><h3>Verify tracking</h3><p className="muted">Use the campaign tracking checklist before traffic starts arriving.</p><b className="blue">Open checklist →</b></Link>
      <Link className="card pad tool-card" href="/articles/campaign-planning-framework"><span className="badge">Learn</span><h3>Go deeper on planning</h3><p className="muted">Read the campaign planning framework when you need more context around each decision.</p><b className="blue">Read guide →</b></Link>
    </div>
  </section>

  <section id="faq" className="section campaign-faq">
    <div className="kicker">Frequently asked questions</div>
    <h2>Campaign planning questions</h2>
    {faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
  </section>

  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
 </div>
}