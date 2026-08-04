import Link from "next/link";
export const metadata={title:"Marketing Templates",description:"Practical campaign planning templates and checklists for more consistent marketing execution.",alternates:{canonical:"/templates"}};
const items=[
 ["Campaign Planning Template","Goal, audience, offer, channel, budget, KPIs, and launch checklist.","/tools/campaign-builder","Build your campaign"],
 ["Campaign Tracking Checklist","A simple checklist for naming, UTMs, conversions, KPIs, and reporting.","/tools#utm-builder","Create tracking links"],
 ["Paid Media KPI Cheat Sheet","The core metrics to watch across reach, clicks, conversions, and acquisition.","/tools","Open calculators"],
 ["Landing Page Review Checklist","A practical framework for message match, clarity, friction, trust, and conversion.","/articles","Explore conversion guides"],
 ["Marketing Budget Worksheet","Turn revenue targets into a starting budget and pressure-test the numbers.","/tools/marketing-budget","Calculate your budget"]
];
export default function Page(){return <div className="container"><div className="pagehead"><div className="kicker">Templates</div><h1>Start with a better framework</h1><p className="lead">Practical frameworks you can use immediately without downloading another bloated workbook.</p></div><div className="template-grid">{items.map(([name,desc,url,cta],i)=><div className="card pad template-card" key={name}><span className="badge">Template 0{i+1}</span><h2>{name}</h2><p className="muted">{desc}</p><Link className="blue" href={url}><b>{cta} →</b></Link></div>)}</div></div>}