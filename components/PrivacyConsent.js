"use client";
import {useEffect,useState} from "react";
import Link from "next/link";

const KEY="tc_privacy_v1";

function readChoice(){
  try{return localStorage.getItem(KEY)}catch{return null}
}
function saveChoice(value){
  try{localStorage.setItem(KEY,value)}catch{}
}

export default function PrivacyConsent(){
  const[choice,setChoice]=useState(null);
  const[open,setOpen]=useState(false);

  useEffect(()=>{
    const saved=readChoice();
    setChoice(saved);
    const handler=()=>setOpen(true);
    window.addEventListener("tc-open-privacy",handler);
    return()=>window.removeEventListener("tc-open-privacy",handler);
  },[]);

  function choose(value){
    saveChoice(value);
    setChoice(value);
    setOpen(false);
    window.dispatchEvent(new CustomEvent("tc-consent-changed",{detail:{analytics:value==="analytics"}}));
  }

  const banner=choice===null;
  if(!banner&&!open)return null;

  return <div className="privacy-layer" role="region" aria-label="Privacy choices">
    {banner&&<div className="privacy-banner">
      <div className="privacy-copy">
        <b>Your privacy comes first.</b>
        <p>TrafficCampaign currently uses only essential site functionality. Optional analytics will remain off unless you choose to allow it.</p>
        <Link href="/privacy">Read our Privacy Policy</Link>
      </div>
      <div className="privacy-actions">
        <button className="btn2" type="button" onClick={()=>choose("essential")}>Decline analytics</button>
        <button className="btn" type="button" onClick={()=>choose("analytics")}>Allow analytics</button>
      </div>
    </div>}

    {open&&<div className="privacy-modal-backdrop" role="presentation" onClick={()=>setOpen(false)}>
      <div className="privacy-modal card" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onClick={e=>e.stopPropagation()}>
        <button className="privacy-close" type="button" aria-label="Close privacy settings" onClick={()=>setOpen(false)}>×</button>
        <div className="kicker">Privacy settings</div>
        <h2 id="privacy-title">Choose what TrafficCampaign may use.</h2>
        <div className="privacy-setting">
          <div><b>Essential functionality</b><p>Required for the site to work and to remember your privacy choice.</p></div>
          <span className="privacy-required">Always on</span>
        </div>
        <div className="privacy-setting">
          <div><b>Analytics</b><p>Optional measurement tools that may be added later. They will not load unless you allow them.</p></div>
          <span className={choice==="analytics"?"privacy-status on":"privacy-status"}>{choice==="analytics"?"Allowed":"Off"}</span>
        </div>
        <div className="privacy-actions modal-actions">
          <button className="btn2" type="button" onClick={()=>choose("essential")}>Use essential only</button>
          <button className="btn" type="button" onClick={()=>choose("analytics")}>Allow analytics</button>
        </div>
        <p className="privacy-small">You can change this choice anytime from the Privacy Settings link in the footer.</p>
      </div>
    </div>}
  </div>
}