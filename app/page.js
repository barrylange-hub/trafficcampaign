import Link from "next/link";
import {getAllArticles} from "@/lib/articles";

export const metadata={
  title:"TrafficCampaign — Plan, Track & Optimize Marketing Campaigns",
  description:"Free marketing tools, practical guides, templates, and learning paths for planning measurable campaigns, tracking the right metrics, and improving performance.",
  alternates:{canonical:"/"}
};

const tools=[
  ["Campaign Builder","/tools/campaign-builder","Turn a goal, audience, channel, budget, and timeframe into a focused starting plan."],
  ["UTM Builder","/tools/utm-builder","Create consistent tracking URLs so campaign traffic is easier to identify in analytics."],
  ["ROI Calculator","/tools/roi","Measure campaign return relative to the total cost of the investment."],
  ["ROAS Calculator","/tools/roas","See how much advertising revenue you generated for each dollar of ad spend."],
  ["Conversion Rate Calculator","/tools/conversion-rate","Calculate the percentage of visitors or clicks that completed your desired action."],
  ["Break-even ROAS","/tools/break-even-roas","Estimate the ROAS your advertising needs to cover gross margin before other costs."]
];

export default function Home(){
  const articles=getAllArticles().slice(0,3);
  return <>
    <section className="hero"><div className="container hero-grid">
      <div>
        <div className="kicker">Practical marketing. Measurable results.</div>
        <h1>Launch.<br/>Track.<br/><span className="blue">Optimize.</span></h1>
        <p className="lead">TrafficCampaign helps you plan better marketing campaigns, track the numbers that actually matter, and use performance data to decide what to do next.</p>
        <div className="actions"><Link className="btn" href="/start-here">Start here</Link><Link className="btn2" href="/tools">Explore free tools</Link></div>
        <p className="hero-note">No account required. No bloated dashboards. Just practical tools and guidance.</p>
      </div>
      <div className="card dash">
        <div className="topline"><div><div className="muted"><b>Example campaign</b></div><div style={{fontSize:26,margin:"4px 0",fontWeight:800,lineHeight:1.2}}>Summer Growth Push</div></div><span className="badge">REPORT</span></div>
        <p className="muted">A useful report should help you answer: Is the campaign working, what is driving the result, and what should change next?</p>
        <div className="metrics"><div className="metric"><small>ROAS</small><b>4.8×</b></div><div className="metric"><small>CTR</small><b>3.9%</b></div><div className="metric"><small>CPA</small><b>$28</b></div></div>
        {[["Search",78],["Social",57],["Email",42]].map(([n,w])=><div key={n} style={{marginTop:22}}><div style={{display:"flex",justifyContent:"space-between"}}><span>{n}</span><b>{w}%</b></div><div className="bar" style={{width:`${w}%`}}/></div>)}
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="kicker">Why TrafficCampaign exists</div>
      <h2>Marketing gets complicated fast. It doesn’t have to.</h2>
      <div className="home-intro">
        <p>Campaigns often start with a simple objective and quickly turn into a pile of channels, metrics, dashboards, tracking links, spreadsheets, and opinions. The hard part isn’t getting more data. It’s knowing what matters.</p>
        <p>TrafficCampaign is built around a simpler approach: define what you want the campaign to accomplish, make it measurable, then use the results to improve the next decision.</p>
      </div>
      <div className="grid3">
        <Link href="/tools/campaign-builder" className="card pad tool-card"><b className="blue">01</b><h3 style={{fontSize:26}}>Launch</h3><p className="muted">Clarify the goal, audience, offer, channel, budget, and KPIs before money and time start disappearing.</p><b className="blue">Build a campaign →</b></Link>
        <Link href="/tools/utm-builder" className="card pad tool-card"><b className="blue">02</b><h3 style={{fontSize:26}}>Track</h3><p className="muted">Use consistent tracking and a small set of meaningful metrics to understand where results came from.</p><b className="blue">Set up tracking →</b></Link>
        <Link href="/academy" className="card pad tool-card"><b className="blue">03</b><h3 style={{fontSize:26}}>Optimize</h3><p className="muted">Look beyond vanity metrics and turn performance data into practical decisions about what to change next.</p><b className="blue">Learn the process →</b></Link>
      </div>
    </div></section>

    <section className="section soft"><div className="container">
      <div className="topline"><div><div className="kicker">Free marketing tools</div><h2>Get an answer without another spreadsheet</h2><p className="lead">The tools are intentionally simple. Enter the numbers you know, see the calculation, understand what it means, and move on to the next decision.</p></div><Link className="blue" href="/tools"><b>View every tool →</b></Link></div>
      <div className="grid3">{tools.map(([t,url,d],i)=><Link href={url} className="card pad tool-card" key={t}><span className="badge">0{i+1}</span><h3 style={{fontSize:22}}>{t}</h3><p className="muted">{d}</p><b className="blue">Open tool →</b></Link>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <div className="topline"><div><div className="kicker">Not sure where to begin?</div><h2>Choose the problem you’re trying to solve</h2></div><Link className="blue" href="/start-here"><b>Visit Start Here →</b></Link></div>
      <div className="grid2">
        <Link className="card pad tool-card" href="/start-here"><h3>“I need to launch a campaign.”</h3><p className="muted">Start with the objective, audience, offer, channel, budget, and measurement plan.</p><b className="blue">Follow the launch path →</b></Link>
        <Link className="card pad tool-card" href="/start-here"><h3>“I need to track a campaign.”</h3><p className="muted">Set up consistent campaign URLs and decide which metrics will tell you whether it worked.</p><b className="blue">Follow the tracking path →</b></Link>
        <Link className="card pad tool-card" href="/start-here"><h3>“I need to improve performance.”</h3><p className="muted">Use ROI, ROAS, acquisition cost, conversion rate, and other signals to find the next useful change.</p><b className="blue">Follow the optimization path →</b></Link>
        <Link className="card pad tool-card" href="/academy"><h3>“I want to understand this better.”</h3><p className="muted">Work through structured learning paths that connect the concepts to calculators, templates, and practical guides.</p><b className="blue">Enter the Academy →</b></Link>
      </div>
    </div></section>

    <section className="section soft"><div className="container">
      <div className="topline"><div><div className="kicker">Campaign Academy</div><h2>Learn in a useful order</h2><p className="lead">You don’t need to learn all of digital marketing. Start with the part that helps you make the next campaign decision.</p></div><Link className="blue" href="/academy"><b>Explore learning paths →</b></Link></div>
      <div className="grid3">{[
        ["Campaign Fundamentals","Plan and measure a campaign from objective and audience through tracking and ROI."],
        ["Paid Media Measurement","Understand ROAS, CTR, CPC, CPM, acquisition cost, and break-even performance."],
        ["Conversion & Growth","Connect traffic, conversion rate, customer acquisition cost, margins, and budget decisions."]
      ].map(([t,d])=><Link href="/academy" className="card pad tool-card" key={t}><h3 style={{fontSize:24}}>{t}</h3><p className="muted">{d}</p><b className="blue">Start path →</b></Link>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <div className="topline"><div><div className="kicker">Practical guides</div><h2>Understand the thinking behind the numbers</h2><p className="lead">Tools give you the calculation. Guides explain what the number means, when it matters, and what you can do with it.</p></div><Link className="blue" href="/articles"><b>Browse all guides →</b></Link></div>
      <div className="article-grid">{articles.map(a=><Link key={a.slug} href={`/articles/${a.slug}`} className="card article-card"><span className="badge">{a.category}</span><h3 style={{fontSize:24}}>{a.title}</h3><p className="muted">{a.description}</p><b className="blue">Read guide →</b></Link>)}</div>
    </div></section>

    <section className="section soft"><div className="container">
      <div className="home-principle card pad"><div><div className="kicker">The TrafficCampaign principle</div><h2 style={{marginBottom:12}}>More marketing isn’t always the answer.</h2><p className="lead">Sometimes the better move is a clearer offer, cleaner tracking, a stronger landing page, a smaller audience, or simply stopping a campaign that isn’t working.</p></div><Link className="btn" href="/about">How we approach marketing</Link></div>
    </div></section>

    <section className="container"><div className="newsletter"><div><div className="kicker" style={{color:"#67e8f9"}}>Keep learning</div><h2 style={{margin:"8px 0",fontSize:38}}>Build campaigns you can actually understand.</h2><p>Start with the fundamentals, use the tools when you need them, and improve one decision at a time.</p></div><Link href="/start-here" className="btn">Start here</Link></div></section>
  </>
}