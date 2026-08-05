import Link from "next/link";
export const metadata={title:"Marketing Templates",description:"Practical, on-page campaign planning templates and checklists you can use immediately.",alternates:{canonical:"/templates"}};
const items=[
 ["Campaign Planning Template","Goal, audience, offer, channel, budget, KPIs, tracking, and decision rules.","/templates/campaign-planning"],
 ["Campaign Tracking Checklist","A pre-launch checklist for conversions, UTMs, analytics, and reporting.","/templates/campaign-tracking-checklist"],
 ["Paid Media KPI Cheat Sheet","A practical map from CPM and CTR through CAC, ROAS, and ROI.","/templates/paid-media-kpi-cheat-sheet"],
 ["Landing Page Review Checklist","Review message match, clarity, proof, friction, mobile UX, speed, and measurement.","/templates/landing-page-review-checklist"],
 ["Marketing Budget Worksheet","Pressure-test revenue targets, margin, CAC, channel allocation, and testing budget.","/templates/marketing-budget-worksheet"]
];
export default function Page(){return <div className="container"><div className="pagehead"><div className="kicker">Templates</div><h1>Start with a better framework</h1><p className="lead">No downloads required. Open a template, work through the checklist, and use the matching tool when you need it.</p></div><div className="template-grid">{items.map(([name,desc,url],i)=><Link className="card pad template-card tool-card" href={url} key={name}><span className="badge">Template 0{i+1}</span><h2>{name}</h2><p className="muted">{desc}</p><b className="blue">Use template →</b></Link>)}</div></div>}