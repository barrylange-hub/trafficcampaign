import Link from "next/link";
import UtmBuilder from "@/components/UtmBuilder";
export const metadata={title:"UTM Builder",description:"Build UTM-tagged campaign URLs for Google Analytics and marketing attribution.",alternates:{canonical:"/tools/utm-builder"}};
export default function Page(){return <div className="container">
<div className="pagehead"><div className="kicker">Free campaign tracking tool</div><h1>UTM Builder</h1><p className="lead">Create clean, consistent campaign URLs so you can see where traffic and conversions actually came from.</p></div>
<div className="tool-detail"><UtmBuilder/><div className="tool-explain">
<h2>What UTM parameters do</h2><p>UTM parameters are small labels added to a URL. Analytics platforms can read those labels and group traffic by source, medium, and campaign.</p>
<h3>Source</h3><p>Use <b>utm_source</b> for the platform or traffic source, such as google, facebook, linkedin, newsletter, or partner-name.</p>
<h3>Medium</h3><p>Use <b>utm_medium</b> for the channel type, such as cpc, paid-social, email, referral, or organic-social.</p>
<h3>Campaign</h3><p>Use <b>utm_campaign</b> for the specific initiative, promotion, launch, or reporting bucket.</p>
<h3>Example</h3><div className="formula">https://example.com/?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=summer-sale</div>
<h3>Naming best practices</h3><ul><li>Keep names lowercase.</li><li>Use hyphens instead of spaces.</li><li>Choose one naming convention and stick to it.</li><li>Avoid mixing broad channel names with specific platform names.</li><li>Do not put sensitive or personally identifiable information in UTM values.</li></ul>
<h3>Common mistakes</h3><p>The biggest problem is inconsistency. Using <b>facebook</b>, <b>Facebook</b>, and <b>fb</b> creates separate reporting buckets even though they describe the same source.</p>
</div></div>
<section className="section"><div className="kicker">Keep planning</div><h2>Related campaign tools</h2><div className="grid3">
<Link className="card pad tool-card" href="/tools/campaign-builder"><b className="blue">Campaign Builder</b><p className="muted">Define the campaign before you create tracking links.</p></Link>
<Link className="card pad tool-card" href="/tools/roi"><b className="blue">ROI Calculator</b><p className="muted">Measure the return after the campaign starts producing results.</p></Link>
<Link className="card pad tool-card" href="/academy"><b className="blue">Campaign Academy</b><p className="muted">Learn how tracking fits into a complete campaign process.</p></Link>
</div></section></div>}