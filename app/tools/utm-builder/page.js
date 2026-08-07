import Link from "next/link";
import UtmBuilder from "@/components/UtmBuilder";

export const metadata={
  title:"UTM Builder — Free Campaign URL Generator & Tracking Guide",
  description:"Build clean UTM-tagged campaign URLs and learn how to use utm_source, utm_medium, utm_campaign, utm_term, and utm_content for consistent marketing attribution.",
  alternates:{canonical:"/tools/utm-builder"}
};

const faq=[
 ["What are UTM parameters?","UTM parameters are labels added to a destination URL so analytics tools can identify campaign traffic using values such as source, medium, campaign, term, and content."],
 ["Do UTM parameters affect the page someone visits?","Normally, no. The parameters travel with the URL for measurement while the visitor still reaches the same destination page."],
 ["Which UTM parameters should I use?","For most campaigns, source, medium, and campaign provide the core structure. Term and content are optional and are useful when you need to distinguish keywords, audiences, creatives, links, or other variants."],
 ["Should UTM values use spaces or capital letters?","Consistency matters more than any single convention, but lowercase values and hyphens are easy to read and help avoid fragmented reporting caused by variations such as Facebook, facebook, and fb."],
 ["Should I use UTMs on internal links?","Usually not. Adding campaign UTMs to links between pages on your own site can overwrite or confuse the original acquisition information you are trying to measure."],
 ["Can I put customer names or email addresses in UTM parameters?","Avoid putting personally identifiable or sensitive information in UTM values. Campaign URLs can be stored in analytics systems, browser history, logs, and other places where those values may be visible."]
];

export default function Page(){
 const schema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))};

 return <div className="container">
   <div className="pagehead utm-head">
     <div className="kicker">Free campaign tracking tool</div>
     <h1>UTM Builder</h1>
     <p className="lead">Create consistent campaign URLs so you can tell where traffic came from, keep reporting cleaner, and avoid guessing which link, channel, or promotion produced the visit.</p>
     <div className="quick-nav" aria-label="Page contents">
       <a href="#builder">Build a URL</a><a href="#parameters">UTM parameters</a><a href="#naming">Naming convention</a><a href="#examples">Examples</a><a href="#mistakes">Mistakes</a><a href="#faq">FAQ</a>
     </div>
   </div>

   <section id="builder" className="tool-anchor utm-builder-wrap">
     <UtmBuilder/>
   </section>

   <section className="section utm-intro">
     <div className="kicker">UTM tracking in plain English</div>
     <h2>A UTM tells your analytics platform how you labeled the click.</h2>
     <div className="guide-two-col">
       <p>Imagine you link to the same landing page from a Google ad, a Facebook post, an email newsletter, and a partner website. The destination page is identical, but the marketing context is not. UTM parameters let you attach consistent labels to those links so the resulting visits can be grouped and compared.</p>
       <p>The important word is <b>labels</b>. UTMs do not magically prove that one channel deserves credit for a sale. They give your analytics system useful campaign information that can make attribution and reporting much easier to interpret.</p>
     </div>
     <div className="callout"><b>TrafficCampaign rule:</b><p style={{marginBottom:0}}>Create the naming convention before you create dozens of links. Clean tracking starts with consistency, not with a more complicated analytics dashboard.</p></div>
   </section>

   <section id="parameters" className="section">
     <div className="kicker">The five UTM parameters</div>
     <h2>What each parameter is supposed to describe</h2>
     <p className="lead">You will use the first three most often. The last two are optional ways to add another useful layer of detail.</p>
     <div className="utm-param-list">
       <div className="card pad utm-param"><code>utm_source</code><div><h3>Where did the traffic come from?</h3><p>Source identifies the platform, publisher, partner, list, or specific origin of the click.</p><p className="muted"><b>Examples:</b> google, facebook, linkedin, newsletter, partner-name</p></div></div>
       <div className="card pad utm-param"><code>utm_medium</code><div><h3>What type of marketing channel was it?</h3><p>Medium describes the broader method used to deliver the link.</p><p className="muted"><b>Examples:</b> cpc, paid-social, email, organic-social, referral</p></div></div>
       <div className="card pad utm-param"><code>utm_campaign</code><div><h3>Which campaign or initiative was this?</h3><p>Campaign groups links that belong to the same promotion, launch, event, offer, or reporting initiative.</p><p className="muted"><b>Examples:</b> summer-sale, product-launch, q4-lead-gen</p></div></div>
       <div className="card pad utm-param"><code>utm_term</code><div><h3>Which keyword, audience, or targeting detail?</h3><p>Term was historically associated with paid-search keywords, but it can be used consistently for another targeting dimension when that is useful to your reporting.</p><p className="muted"><b>Examples:</b> running-shoes, homeowners, remarketing</p></div></div>
       <div className="card pad utm-param"><code>utm_content</code><div><h3>Which creative, link, or variation?</h3><p>Content helps distinguish multiple links or creative variants that otherwise share the same source, medium, and campaign.</p><p className="muted"><b>Examples:</b> blue-button, hero-image, text-link-a</p></div></div>
     </div>
   </section>

   <section id="naming" className="section soft-section-full">
     <div className="kicker">UTM naming convention</div>
     <h2>The best convention is the one your team will use consistently.</h2>
     <p className="lead">A simple naming policy prevents one channel from appearing under several different labels and makes historical reporting much easier to understand.</p>
     <div className="grid2 utm-rules">
       <div className="card pad"><h3>Use lowercase</h3><p className="muted">Choose <b>facebook</b>, not a mixture of facebook, Facebook, FB, and fb.</p></div>
       <div className="card pad"><h3>Use hyphens instead of spaces</h3><p className="muted">A value such as <b>summer-sale</b> stays readable in the URL and is easy to reuse consistently.</p></div>
       <div className="card pad"><h3>Define source and medium separately</h3><p className="muted">Think of source as <i>where</i> and medium as <i>how</i>. Example: source=facebook and medium=paid-social.</p></div>
       <div className="card pad"><h3>Make campaign names recognizable later</h3><p className="muted">A name like <b>q4-lead-gen</b> will usually age better than something vague like <b>new-campaign-2</b>.</p></div>
       <div className="card pad"><h3>Document the convention</h3><p className="muted">A tiny shared naming sheet is more valuable than expecting everyone to remember how last month's links were labeled.</p></div>
       <div className="card pad"><h3>Do not include sensitive information</h3><p className="muted">Keep names, email addresses, customer IDs, and other personally identifiable or sensitive data out of UTM values.</p></div>
     </div>
   </section>

   <section id="examples" className="section">
     <div className="kicker">UTM examples</div>
     <h2>How the same landing page can be labeled across channels</h2>
     <div className="utm-example-table">
       <div className="utm-example-row utm-example-header"><span>Use case</span><span>Source</span><span>Medium</span><span>Campaign</span></div>
       <div className="utm-example-row"><b>Google search ad</b><code>google</code><code>cpc</code><code>summer-sale</code></div>
       <div className="utm-example-row"><b>Facebook paid ad</b><code>facebook</code><code>paid-social</code><code>summer-sale</code></div>
       <div className="utm-example-row"><b>Email newsletter</b><code>newsletter</code><code>email</code><code>summer-sale</code></div>
       <div className="utm-example-row"><b>LinkedIn organic post</b><code>linkedin</code><code>organic-social</code><code>summer-sale</code></div>
       <div className="utm-example-row"><b>Partner link</b><code>partner-name</code><code>referral</code><code>summer-sale</code></div>
     </div>
     <h3 className="utm-example-title">Finished Google Ads example</h3>
     <div className="formula utm-long-example">https://example.com/landing-page?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=summer-sale</div>
     <p className="tool-note">If you use content or term, add them only when the extra detail will actually help you answer a reporting question.</p>
   </section>

   <section className="section">
     <div className="kicker">A simple workflow</div>
     <h2>Build tracking before the campaign goes live</h2>
     <div className="framework-list">
       <div className="card pad framework-item"><span>01</span><div><h3>Choose the destination page</h3><p>Use the final page you actually want the visitor to reach. Test that the page loads correctly before adding campaign parameters.</p></div></div>
       <div className="card pad framework-item"><span>02</span><div><h3>Apply your naming convention</h3><p>Decide the source, medium, and campaign labels. Add term or content only when you need the extra reporting dimension.</p></div></div>
       <div className="card pad framework-item"><span>03</span><div><h3>Generate and test the URL</h3><p>Open the finished link yourself. Confirm it reaches the correct page and that the parameters remain in the URL.</p></div></div>
       <div className="card pad framework-item"><span>04</span><div><h3>Use the tagged URL in the campaign</h3><p>Place the final URL in the ad, email, social post, QR destination, partner link, or other external campaign placement.</p></div></div>
       <div className="card pad framework-item"><span>05</span><div><h3>Verify the data</h3><p>After traffic begins, confirm that your analytics reporting is receiving the campaign labels as expected before relying on the data for decisions.</p></div></div>
     </div>
   </section>

   <section id="mistakes" className="section">
     <div className="kicker">Common UTM mistakes</div>
     <h2>Small inconsistencies can create surprisingly messy reports</h2>
     <div className="grid2">
       <div className="card pad"><h3>Changing capitalization</h3><p className="muted">facebook, Facebook, and FACEBOOK may end up behaving like separate values in reporting.</p></div>
       <div className="card pad"><h3>Using multiple names for the same source</h3><p className="muted">facebook, fb, meta, and facebook.com may all describe the same platform but fragment your reporting.</p></div>
       <div className="card pad"><h3>Confusing source and medium</h3><p className="muted">A useful convention keeps the platform in source and the channel type in medium instead of mixing the two unpredictably.</p></div>
       <div className="card pad"><h3>Tagging internal website links</h3><p className="muted">Campaign UTMs are generally for inbound campaign links. Using them on your own internal navigation can interfere with acquisition context.</p></div>
       <div className="card pad"><h3>Creating detail nobody will use</h3><p className="muted">More parameters do not automatically mean better measurement. Add term and content when they answer a real question.</p></div>
       <div className="card pad"><h3>Skipping the test click</h3><p className="muted">A beautifully named UTM is useless if the underlying destination URL is wrong or the parameters disappear during a redirect.</p></div>
     </div>
   </section>

   <section className="section">
     <div className="kicker">Keep going</div>
     <h2>Tracking is useful only when it leads to a decision</h2>
     <div className="grid3">
       <Link className="card pad tool-card" href="/templates/campaign-tracking-checklist"><span className="badge">Check</span><h3>Campaign Tracking Checklist</h3><p className="muted">Verify the measurement setup before campaign traffic starts arriving.</p><b className="blue">Open checklist →</b></Link>
       <Link className="card pad tool-card" href="/articles/campaign-tracking-attribution-guide"><span className="badge">Learn</span><h3>Tracking & Attribution Guide</h3><p className="muted">Understand what campaign tracking can tell you—and where attribution becomes more complicated.</p><b className="blue">Read guide →</b></Link>
       <Link className="card pad tool-card" href="/tools/roi"><span className="badge">Measure</span><h3>ROI Calculator</h3><p className="muted">Once results arrive, compare the return generated with the total campaign investment.</p><b className="blue">Calculate ROI →</b></Link>
     </div>
   </section>

   <section id="faq" className="section campaign-faq">
     <div className="kicker">Frequently asked questions</div>
     <h2>UTM tracking questions</h2>
     {faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
   </section>

   <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
 </div>
}