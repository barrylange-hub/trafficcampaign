import CampaignBuilder from "@/components/CampaignBuilder";
import Link from "next/link";
export const metadata={
 title:"Free Marketing Campaign Builder",
 description:"Build a simple marketing campaign plan with a goal, audience, channel, budget, KPIs, and practical starting strategy.",
 alternates:{canonical:"/tools/campaign-builder"}
};
export default function Page(){return <div className="container">
 <div className="pagehead"><div className="kicker">Free campaign planning tool</div><h1>Campaign Builder</h1><p className="lead">Turn a few basic decisions into a focused campaign plan. No login, no account, no complicated software.</p></div>
 <CampaignBuilder/>
 <section className="section tool-copy"><div className="kicker">How to use it</div><h2>Start with fewer moving parts</h2><p>A campaign becomes easier to measure when it has one clear objective. Choose the result you want, describe the audience, pick the primary channel, and set a realistic budget and timeframe.</p><div className="grid3"><div className="card pad"><b className="blue">01</b><h3>Choose one goal</h3><p className="muted">Leads, sales, traffic, or awareness. Avoid trying to optimize one campaign for everything.</p></div><div className="card pad"><b className="blue">02</b><h3>Pick a primary channel</h3><p className="muted">You can expand later. A focused first channel makes testing and attribution easier.</p></div><div className="card pad"><b className="blue">03</b><h3>Measure the outcome</h3><p className="muted">Track a small KPI set tied directly to the goal instead of collecting every available metric.</p></div></div><p style={{marginTop:32}}>Need tracking links next? Use the <Link className="blue" href="/tools/utm-builder"><b>UTM Builder</b></Link>.</p></section>
 </div>}