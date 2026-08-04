import Link from "next/link";
export const metadata={title:"Free Marketing Tools & Calculators",description:"Free campaign planning tools, UTM Builder, ROI and ROAS calculators, CTR, CPC, CAC, CPM, conversion rate, break-even ROAS, and budget calculators."};
const tools=[
["Campaign Builder","/tools/campaign-builder","Build a focused campaign plan from your goal, audience, channel, budget, and KPIs."],
["UTM Builder","/tools/utm-builder","Create consistent campaign tracking URLs for analytics and attribution."],
["ROI Calculator","/tools/roi","Measure total campaign return relative to cost."],
["ROAS Calculator","/tools/roas","Measure advertising revenue for every dollar of ad spend."],
["CTR Calculator","/tools/ctr","Calculate the percentage of impressions that generate clicks."],
["CPC Calculator","/tools/cpc","Calculate average advertising cost per click."],
["CAC Calculator","/tools/cac","Estimate the cost to acquire one new customer."],
["CPM Calculator","/tools/cpm","Calculate the cost of one thousand ad impressions."],
["Conversion Rate Calculator","/tools/conversion-rate","Measure the percentage of visitors or clicks that convert."],
["Break-even ROAS Calculator","/tools/break-even-roas","Estimate the ROAS needed to cover gross margin."],
["Marketing Budget Calculator","/tools/marketing-budget","Turn a revenue target and budget percentage into a planning number."]
];
export default function Page(){return <div className="container"><div className="pagehead"><div className="kicker">Free tools</div><h1>Make faster decisions</h1><p className="lead">Simple campaign planning and marketing math. No account, no spreadsheet, no clutter.</p></div><div className="tool-directory">{tools.map(([name,url,desc])=><Link href={url} className="card pad tool-card" key={name}><h3>{name}</h3><p className="muted">{desc}</p><b className="blue">Open tool →</b></Link>)}</div></div>}