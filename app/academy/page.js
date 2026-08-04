import Link from "next/link";
import {getAllArticles} from "@/lib/articles";

export const metadata={
  title:"Campaign Academy",
  description:"Structured learning paths for planning, tracking, and optimizing digital marketing campaigns.",
  alternates:{canonical:"/academy"}
};

const paths=[
  {
    title:"Campaign Fundamentals",
    desc:"Build a measurable campaign from goal to reporting.",
    steps:[
      ["How to Build a Traffic Campaign","/articles/how-to-build-a-traffic-campaign-that-you-can-actually-measure"],
      ["Campaign Builder","/tools/campaign-builder"],
      ["UTM Tracking","/tools/utm-builder"],
      ["ROI Calculator","/tools/roi"]
    ]
  },
  {
    title:"Paid Media Measurement",
    desc:"Understand the numbers behind efficient advertising.",
    steps:[
      ["ROAS Calculator","/tools/roas"],
      ["CTR Calculator","/tools/ctr"],
      ["CPC Calculator","/tools/cpc"],
      ["Break-even ROAS","/tools/break-even-roas"]
    ]
  },
  {
    title:"Conversion & Growth",
    desc:"Turn traffic into measurable business outcomes.",
    steps:[
      ["Conversion Rate Calculator","/tools/conversion-rate"],
      ["CAC Calculator","/tools/cac"],
      ["Marketing Budget Calculator","/tools/marketing-budget"],
      ["All Marketing Guides","/articles"]
    ]
  }
];

export default function Page(){
  const latest=getAllArticles().slice(0,3);
  return <div className="container">
    <div className="pagehead">
      <div className="kicker">Campaign Academy</div>
      <h1>Learn in a useful order</h1>
      <p className="lead">Short learning paths that connect practical guides with the tools you need to apply them.</p>
    </div>

    <div className="academy-grid">
      {paths.map((p,i)=><section className="card academy-card" key={p.title}>
        <span className="badge">Path 0{i+1}</span>
        <h2>{p.title}</h2>
        <p className="muted">{p.desc}</p>
        <ol className="academy-steps">
          {p.steps.map(([label,url])=><li key={label}><Link href={url}>{label}<span>→</span></Link></li>)}
        </ol>
      </section>)}
    </div>

    <section className="section">
      <div className="topline"><div><div className="kicker">Latest lessons</div><h2>Continue learning</h2></div><Link className="blue" href="/articles"><b>Browse all guides →</b></Link></div>
      <div className="article-grid">{latest.map(a=><Link key={a.slug} href={`/articles/${a.slug}`} className="card article-card"><span className="badge">{a.category}</span><h3>{a.title}</h3><p className="muted">{a.description}</p><b className="blue">Read lesson →</b></Link>)}</div>
    </section>
  </div>
}