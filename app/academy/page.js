import Link from "next/link";
import {getAllArticles} from "@/lib/articles";

export const metadata={
  title:"Campaign Academy — Learn Marketing Campaigns Step by Step",
  description:"Free structured learning paths for campaign planning, tracking, paid media measurement, conversion, optimization, and marketing economics.",
  alternates:{canonical:"/academy"}
};

const paths=[
 {
  id:"fundamentals",number:"01",title:"Campaign Fundamentals",
  best:"Start here if you want to understand the complete campaign process.",
  outcome:"You will move from a campaign idea to a measurable plan, then learn how tracking and return fit into the process.",
  lessons:[
   ["Plan the campaign","Campaign Planning Framework","Define the objective, audience, offer, action, channel, budget, timeframe, and measurement plan.","/articles/campaign-planning-framework","Guide"],
   ["Build the plan","Campaign Builder","Turn those decisions into a focused campaign brief you can copy and use.","/tools/campaign-builder","Tool"],
   ["Make it measurable","Tracking & Attribution Guide","Understand what tracking can tell you, what attribution means, and where the limitations begin.","/articles/campaign-tracking-attribution-guide","Guide"],
   ["Label campaign traffic","UTM Builder","Create consistent campaign URLs before links are distributed.","/tools/utm-builder","Tool"],
   ["Evaluate the return","ROI Calculator","Compare the campaign's return with the total investment once results arrive.","/tools/roi","Tool"]
  ]
 },
 {
  id:"paid-media",number:"02",title:"Paid Media Measurement",
  best:"Choose this if you run ads and the alphabet soup of CTR, CPC, CPM, ROAS, and CPA needs to become useful.",
  outcome:"You will understand which advertising metrics describe delivery, which describe efficiency, and which connect advertising to business results.",
  lessons:[
   ["Choose useful KPIs","Campaign KPIs That Matter","Separate outcome metrics from diagnostic metrics so reporting answers a business question.","/articles/campaign-kpis-that-matter","Guide"],
   ["Understand return","ROAS vs. ROI","Learn why advertising return and total investment return answer different questions.","/articles/roas-vs-roi","Guide"],
   ["Measure response","CTR Calculator","See what percentage of impressions turned into clicks.","/tools/ctr","Tool"],
   ["Measure traffic cost","CPC Calculator","Calculate the average advertising cost of each click.","/tools/cpc","Tool"],
   ["Know the threshold","Break-even ROAS","Estimate the advertising return needed to cover gross margin before other costs.","/tools/break-even-roas","Tool"]
  ]
 },
 {
  id:"optimization",number:"03",title:"Conversion & Optimization",
  best:"Choose this if a campaign is already producing data and you need to decide what to improve.",
  outcome:"You will learn to diagnose the bottleneck before changing tactics and connect conversion performance to acquisition cost and budget decisions.",
  lessons:[
   ["Diagnose first","Campaign Optimization Guide","Find the constraint before changing the audience, ad, offer, landing page, and budget all at once.","/articles/how-to-optimize-a-marketing-campaign","Guide"],
   ["Measure conversion","Conversion Rate Calculator","Calculate how efficiently visits or clicks become the action you care about.","/tools/conversion-rate","Tool"],
   ["Measure acquisition cost","CAC Calculator","Connect marketing and sales spend with the number of new customers acquired.","/tools/cac","Tool"],
   ["Review the destination","Landing Page Checklist","Check clarity, message match, trust, friction, and the conversion path.","/templates/landing-page-review-checklist","Checklist"],
   ["Connect goals to budget","Marketing Budget Calculator","Turn a revenue target and budget percentage into a practical planning number.","/tools/marketing-budget","Tool"]
  ]
 }
];

const principles=[
 ["Start with the business question","A metric is useful when it helps answer a question. Collecting more numbers is not the same as understanding performance."],
 ["Separate outcomes from diagnostics","Revenue, qualified leads, and customers describe outcomes. CTR, CPC, CPM, and conversion rate often help explain why those outcomes moved."],
 ["Make tracking part of planning","Do not wait until reporting day to decide what should have been measured."],
 ["Diagnose before optimizing","Find the biggest constraint first. Random changes can improve a campaign while teaching you almost nothing."],
 ["Keep economics in the conversation","Traffic and conversions matter, but sustainable campaigns eventually have to make sense financially."]
];

export default function Page(){
 const latest=getAllArticles().slice(0,3);
 return <div className="container">
  <div className="pagehead academy-head">
   <div className="kicker">TrafficCampaign Academy</div>
   <h1>Learn marketing campaigns in a useful order.</h1>
   <p className="lead">Campaign Academy connects the concepts, tools, and next decisions. Pick the path that matches the problem in front of you instead of trying to learn all of digital marketing at once.</p>
   <div className="actions"><a className="btn" href="#paths">Choose a learning path</a><Link className="btn2" href="/start-here">Not sure where to start?</Link></div>
  </div>

  <section className="academy-how card pad">
   <div><div className="kicker">How the Academy works</div><h2>Learn it. Use it. Understand the result.</h2></div>
   <div className="academy-how-grid">
    <div><span>01</span><b>Learn the idea</b><p>Start with enough context to understand why the concept matters.</p></div>
    <div><span>02</span><b>Use the tool</b><p>Apply the concept to a real campaign with a calculator, builder, or checklist.</p></div>
    <div><span>03</span><b>Make a decision</b><p>Interpret the result and decide what the campaign needs next.</p></div>
   </div>
  </section>

  <section id="paths" className="section academy-choose">
   <div className="kicker">Choose your path</div>
   <h2>What are you trying to understand?</h2>
   <div className="academy-path-picker">
    {paths.map(p=><a href={`#${p.id}`} className="card pad tool-card" key={p.id}><span className="badge">Path {p.number}</span><h3>{p.title}</h3><p className="muted">{p.best}</p><b className="blue">View path ↓</b></a>)}
   </div>
  </section>

  {paths.map(p=><section id={p.id} className="section academy-expanded-path" key={p.id}>
   <div className="academy-path-head"><span className="badge">Learning Path {p.number}</span><h2>{p.title}</h2><p className="lead">{p.best}</p></div>
   <div className="callout academy-outcome"><b>What you should understand by the end</b><p>{p.outcome}</p></div>
   <div className="academy-lesson-list">
    {p.lessons.map(([eyebrow,title,desc,url,type],i)=><Link href={url} className="card academy-lesson" key={title}>
      <div className="academy-lesson-num">{String(i+1).padStart(2,"0")}</div>
      <div className="academy-lesson-body"><div className="academy-lesson-meta"><span>{eyebrow}</span><em>{type}</em></div><h3>{title}</h3><p>{desc}</p><b className="blue">Open {type.toLowerCase()} →</b></div>
    </Link>)}
   </div>
   <div className="academy-complete"><b>Path complete?</b><span>{p.number==="01"?"You now have the foundation. Continue into paid media measurement or optimization when the campaign requires it.":p.number==="02"?"Use these metrics together rather than optimizing one number in isolation.":"Take what you learned back to the campaign and change the highest-leverage constraint first."}</span></div>
  </section>)}

  <section className="section soft-section-full">
   <div className="kicker">The mental model</div>
   <h2>Five principles to carry into every campaign</h2>
   <p className="lead">Tools and platforms change. These ideas are much more durable.</p>
   <div className="academy-principles">{principles.map(([title,desc],i)=><div key={title}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{title}</h3><p className="muted">{desc}</p></div></div>)}</div>
  </section>

  <section className="section">
   <div className="topline"><div><div className="kicker">Continue learning</div><h2>Latest practical guides</h2><p className="lead">Use the library when you need to go deeper on a specific campaign question.</p></div><Link className="blue" href="/articles"><b>Browse all guides →</b></Link></div>
   <div className="article-grid">{latest.map(a=><Link key={a.slug} href={`/articles/${a.slug}`} className="card article-card"><span className="badge">{a.category}</span><h3>{a.title}</h3><p className="muted">{a.description}</p><b className="blue">Read guide →</b></Link>)}</div>
  </section>

  <section className="section"><div className="newsletter academy-final"><div><div className="kicker" style={{color:"#67e8f9"}}>One useful next step</div><h2 style={{margin:"8px 0",fontSize:38}}>You do not need to finish the Academy before launching.</h2><p>Learn enough to make the next decision well, use it on a real campaign, then come back when the next question appears.</p></div><Link className="btn" href="/tools/campaign-builder">Build a campaign</Link></div></section>
 </div>
}