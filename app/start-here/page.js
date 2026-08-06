import Link from "next/link";

export const metadata={
  title:"Start Here — Plan, Track & Improve Your Marketing Campaign",
  description:"Not sure what to do next with your marketing campaign? Choose a practical path for campaign planning, tracking, optimization, or learning the fundamentals.",
  alternates:{canonical:"/start-here"}
};

const paths=[
  {
    number:"01",
    title:"I need to launch a campaign",
    question:"You have an offer, idea, promotion, product, or goal—but you need to turn it into an actual campaign.",
    outcome:"By the end of this path, you should know what the campaign is trying to accomplish, who it is for, what you want them to do, where you will reach them, how much you can spend, and how success will be measured.",
    steps:[
      ["Define the campaign","Use the Campaign Builder to clarify the objective, audience, channel, budget, timeframe, and KPIs.","/tools/campaign-builder"],
      ["Pressure-test the plan","Use the Campaign Planning Framework to make sure the pieces of the campaign actually fit together.","/articles/campaign-planning-framework"],
      ["Turn it into a checklist","Use the Campaign Planning Template before launch so important details do not live only in your head.","/templates/campaign-planning"]
    ],
    cta:["Build your campaign","/tools/campaign-builder"]
  },
  {
    number:"02",
    title:"I need to track a campaign",
    question:"The campaign is planned or already running, but you need cleaner attribution and a better way to tell what is producing results.",
    outcome:"By the end of this path, your campaign should have consistent tracking links, clearly defined conversion actions, and a small set of metrics that answer useful questions.",
    steps:[
      ["Create consistent tracking URLs","Use the UTM Builder to label campaign traffic by source, medium, and campaign.","/tools/utm-builder"],
      ["Understand attribution","Learn what campaign tracking can—and cannot—tell you about where results came from.","/articles/campaign-tracking-attribution-guide"],
      ["Check the setup","Use the Campaign Tracking Checklist before traffic starts arriving.","/templates/campaign-tracking-checklist"]
    ],
    cta:["Set up campaign tracking","/tools/utm-builder"]
  },
  {
    number:"03",
    title:"I need to improve performance",
    question:"You have data, but the campaign is not performing as well as you hoped—or you are unsure which number deserves your attention.",
    outcome:"By the end of this path, you should have a clearer idea of where the campaign is leaking performance and which change is worth testing first.",
    steps:[
      ["Diagnose before changing things","Use the optimization guide to identify the biggest constraint instead of changing five things at once.","/articles/how-to-optimize-a-marketing-campaign"],
      ["Run the right numbers","Use ROI, ROAS, conversion rate, CAC, CPC, CPM, and break-even calculators when those metrics answer the question in front of you.","/tools"],
      ["Keep the KPIs straight","Use the Paid Media KPI Cheat Sheet as a quick reference when reviewing performance.","/templates/paid-media-kpi-cheat-sheet"]
    ],
    cta:["Start diagnosing performance","/articles/how-to-optimize-a-marketing-campaign"]
  },
  {
    number:"04",
    title:"I want to learn how campaigns work",
    question:"You want the fundamentals in a logical order instead of bouncing between disconnected articles, videos, and marketing terminology.",
    outcome:"By the end of this path, you should understand how campaign planning, traffic, tracking, conversion, acquisition costs, and profitability connect.",
    steps:[
      ["Start with Campaign Fundamentals","Learn the basic campaign system from objective through measurement.","/academy"],
      ["Go deeper when you need to","Use the guide library to explore individual concepts in more detail.","/articles"],
      ["Use the tools alongside the lessons","Calculators and templates make the concepts easier to apply to a real campaign.","/resources"]
    ],
    cta:["Enter the Campaign Academy","/academy"]
  }
];

export default function Page(){return <div className="container">
  <div className="pagehead start-head">
    <div className="kicker">Start here</div>
    <h1>What does your campaign need next?</h1>
    <p className="lead">Marketing advice gets overwhelming when every answer leads to ten more things you are supposedly doing wrong. TrafficCampaign takes a different approach: identify the problem in front of you, follow the shortest useful path, and make the next decision.</p>
  </div>

  <section className="start-orientation">
    <div className="card pad">
      <div className="kicker">The basic idea</div>
      <h2>Every campaign has the same three jobs.</h2>
      <div className="start-three">
        <div><b className="blue">01 — Launch</b><p>Decide what you are trying to accomplish, who you need to reach, what you want them to do, and how you will reach them.</p></div>
        <div><b className="blue">02 — Track</b><p>Make the campaign measurable so you can separate useful signals from assumptions and vanity metrics.</p></div>
        <div><b className="blue">03 — Optimize</b><p>Use what you learn to improve the next decision instead of reacting to every number that moves.</p></div>
      </div>
    </div>
  </section>

  <section className="section start-chooser">
    <div className="kicker">Choose your path</div>
    <h2>Start with the situation that sounds most like yours</h2>
    <p className="lead">You do not need to complete everything on TrafficCampaign. Pick one path, solve that problem, then come back when the campaign needs something else.</p>
    <div className="start-jump-grid">
      {paths.map(p=><a className="card pad tool-card" href={`#path-${p.number}`} key={p.number}><span className="badge">Path {p.number}</span><h3>{p.title}</h3><p className="muted">{p.question}</p><b className="blue">Go to this path ↓</b></a>)}
    </div>
  </section>

  <div className="start-paths">
    {paths.map(p=><section className="section start-path" id={`path-${p.number}`} key={p.number}>
      <div className="start-path-heading">
        <span className="badge">Path {p.number}</span>
        <h2>{p.title}</h2>
        <p className="lead">{p.question}</p>
      </div>

      <div className="callout start-outcome"><b>What you should get from this path</b><p>{p.outcome}</p></div>

      <div className="start-step-list">
        {p.steps.map(([title,desc,url],i)=><Link href={url} className="card pad start-step" key={title}>
          <span className="start-step-number">{i+1}</span>
          <div><div className="kicker">Step {i+1}</div><h3>{title}</h3><p className="muted">{desc}</p><b className="blue">Open resource →</b></div>
        </Link>)}
      </div>
      <div className="actions"><Link className="btn" href={p.cta[1]}>{p.cta[0]}</Link><a className="btn2" href="#top" aria-label="Back to top">Back to top ↑</a></div>
    </section>)}
  </div>

  <section className="section">
    <div className="card pad start-rules">
      <div className="kicker">Before you go</div>
      <h2>Five rules that make almost every campaign easier to manage</h2>
      <div className="start-rules-grid">
        <div><b>1. Give the campaign one primary job.</b><p className="muted">Awareness, leads, trials, purchases, and retention are different objectives. Decide which result matters most.</p></div>
        <div><b>2. Decide how you will measure success before launch.</b><p className="muted">If nobody agrees on the KPI until after results arrive, it becomes very easy to redefine success.</p></div>
        <div><b>3. Track consistently.</b><p className="muted">Clean naming and UTMs are boring until you need to explain where a customer came from.</p></div>
        <div><b>4. Diagnose before optimizing.</b><p className="muted">A weak CTR, expensive traffic, poor conversion rate, and bad unit economics require different fixes.</p></div>
        <div><b>5. Change one meaningful thing at a time when possible.</b><p className="muted">If you change the audience, creative, offer, landing page, and budget together, you may improve results without learning why.</p></div>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="newsletter start-final">
      <div><div className="kicker" style={{color:"#67e8f9"}}>Still not sure?</div><h2 style={{margin:"8px 0",fontSize:38}}>Start with Campaign Fundamentals.</h2><p>If you are not sure whether your problem is planning, tracking, or optimization, the fundamentals path gives you the context to figure it out.</p></div>
      <Link className="btn" href="/academy">Start learning</Link>
    </div>
  </section>
</div>}