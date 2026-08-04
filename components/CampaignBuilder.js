"use client";
import {useMemo,useState} from "react";

const channelAdvice={
  "Search Ads":"Capture existing demand with tightly themed keywords and a landing page that matches search intent.",
  "Paid Social":"Lead with a strong creative hook, test a few audience angles, and optimize toward the campaign goal.",
  "SEO / Content":"Build one focused topic cluster around high-intent questions and connect every article to a measurable conversion.",
  "Email":"Segment the audience, keep one primary CTA, and track clicks plus downstream conversions.",
  "Local Marketing":"Prioritize local search visibility, reviews, location-specific landing pages, and trackable offers."
};
const kpis={
  "Leads":"Cost per lead, conversion rate, qualified leads",
  "Sales":"Revenue, ROAS, conversion rate, cost per acquisition",
  "Traffic":"Sessions, engaged visits, CTR",
  "Awareness":"Reach, impressions, CPM, branded search lift"
};

export default function CampaignBuilder(){
 const[goal,setGoal]=useState("Leads");
 const[audience,setAudience]=useState("Small business decision-makers");
 const[channel,setChannel]=useState("Search Ads");
 const[budget,setBudget]=useState(1500);
 const[days,setDays]=useState(30);
 const plan=useMemo(()=>({
   daily: budget>0&&days>0?budget/days:0,
   kpi:kpis[goal],
   advice:channelAdvice[channel]
 }),[goal,channel,budget,days]);
 return <div className="builder-layout">
  <div className="card calc">
   <div className="kicker">Campaign inputs</div>
   <h2 style={{fontSize:28,marginTop:8}}>Build a focused starting plan</h2>
   <div className="field"><label>Primary goal</label><select value={goal} onChange={e=>setGoal(e.target.value)}>{Object.keys(kpis).map(x=><option key={x}>{x}</option>)}</select></div>
   <div className="field"><label>Audience</label><input value={audience} onChange={e=>setAudience(e.target.value)}/></div>
   <div className="field"><label>Primary channel</label><select value={channel} onChange={e=>setChannel(e.target.value)}>{Object.keys(channelAdvice).map(x=><option key={x}>{x}</option>)}</select></div>
   <div className="builder-row"><div className="field"><label>Total budget ($)</label><input type="number" min="0" value={budget} onChange={e=>setBudget(Number(e.target.value))}/></div><div className="field"><label>Campaign length (days)</label><input type="number" min="1" value={days} onChange={e=>setDays(Number(e.target.value))}/></div></div>
  </div>
  <div className="card campaign-plan">
   <div className="kicker">Your starting plan</div>
   <h2>{goal} campaign</h2>
   <div className="plan-stat"><span>Audience</span><b>{audience||"Define your audience"}</b></div>
   <div className="plan-stat"><span>Primary channel</span><b>{channel}</b></div>
   <div className="plan-stat"><span>Daily budget</span><b>${Number.isFinite(plan.daily)?plan.daily.toFixed(2):"0.00"}</b></div>
   <div className="plan-block"><span>Track these KPIs</span><p>{plan.kpi}</p></div>
   <div className="plan-block"><span>Starting strategy</span><p>{plan.advice}</p></div>
   <div className="notice">Keep version one simple: one goal, one primary audience, one primary channel, and a short KPI list.</div>
  </div>
 </div>
}