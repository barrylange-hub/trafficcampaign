"use client";
import {useMemo,useState} from "react";

const clean=v=>v.trim().toLowerCase().replace(/\s+/g,"-");

export default function UtmBuilder(){
 const[url,setUrl]=useState("https://example.com/landing-page");
 const[source,setSource]=useState("google");
 const[medium,setMedium]=useState("cpc");
 const[campaign,setCampaign]=useState("summer-sale");
 const[term,setTerm]=useState("");
 const[content,setContent]=useState("");
 const[copied,setCopied]=useState(false);

 const output=useMemo(()=>{
   try{
     const u=new URL(url);
     if(source)u.searchParams.set("utm_source",clean(source));
     if(medium)u.searchParams.set("utm_medium",clean(medium));
     if(campaign)u.searchParams.set("utm_campaign",clean(campaign));
     if(term)u.searchParams.set("utm_term",clean(term));
     if(content)u.searchParams.set("utm_content",clean(content));
     return u.toString();
   }catch{return "Enter a complete URL beginning with http:// or https://."}
 },[url,source,medium,campaign,term,content]);

 async function copy(){
   if(!output.startsWith("http"))return;
   try{await navigator.clipboard.writeText(output);setCopied(true);setTimeout(()=>setCopied(false),1400)}catch{}
 }
 function reset(){
   setUrl("https://example.com/landing-page");setSource("google");setMedium("cpc");setCampaign("summer-sale");setTerm("");setContent("");setCopied(false);
 }

 return <div className="card calc utm-tool">
   <div className="kicker">Campaign URL builder</div>
   <h2 style={{fontSize:28,margin:"7px 0"}}>Build a trackable URL</h2>
   <p className="muted">Enter the destination page and campaign labels. Values are normalized to lowercase with hyphens for cleaner reporting.</p>

   <div className="field"><label>Destination URL</label><input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://example.com/landing-page"/></div>
   <div className="utm-fields">
     <div className="field"><label>Campaign source <span className="field-required">Required</span></label><input value={source} onChange={e=>setSource(e.target.value)} placeholder="google"/></div>
     <div className="field"><label>Campaign medium <span className="field-required">Required</span></label><input value={medium} onChange={e=>setMedium(e.target.value)} placeholder="cpc"/></div>
   </div>
   <div className="field"><label>Campaign name <span className="field-required">Required</span></label><input value={campaign} onChange={e=>setCampaign(e.target.value)} placeholder="summer-sale"/></div>
   <div className="utm-fields">
     <div className="field"><label>Campaign term <span className="field-optional">Optional</span></label><input value={term} onChange={e=>setTerm(e.target.value)} placeholder="running-shoes"/></div>
     <div className="field"><label>Campaign content <span className="field-optional">Optional</span></label><input value={content} onChange={e=>setContent(e.target.value)} placeholder="blue-button"/></div>
   </div>

   <div className="result utm-result"><span className="muted">Campaign URL</span><div>{output}</div></div>
   <div className="utm-actions"><button className="btn" type="button" onClick={copy}>{copied?"Copied!":"Copy campaign URL"}</button><button className="btn2" type="button" onClick={reset}>Reset example</button></div>
   <p className="tool-note">Nothing is submitted to an account. Build the URL, copy it, and use it in the campaign link you control.</p>
 </div>
}