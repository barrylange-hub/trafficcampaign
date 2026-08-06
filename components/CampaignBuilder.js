"use client";
import {useMemo,useState} from "react";

const channelAdvice={
  "Search Ads":"Capture existing demand with tightly themed keywords and a landing page that closely matches search intent.",
  "Paid Social":"Lead with a strong creative hook, test a small number of audience and message angles, and optimize toward the campaign goal.",
  "SEO / Content":"Build a focused topic cluster around useful search intent and connect content to a measurable next action.",
  "Email":"Segment the audience, keep one primary call to action, and track clicks plus the conversion that happens after the click.",
  "Local Marketing":"Prioritize local search visibility, reviews, location-specific pages, and offers that can be tracked back to the campaign."
};
const kpis={
  "Leads":"Qualified leads, cost per lead, landing-page conversion rate",
  "Sales":"Revenue, ROAS, conversion rate, cost per acquisition",
  "Traffic":"Qualified sessions, engaged visits, click-through rate",
  "Awareness":"Reach, impressions, CPM, branded search or direct-traffic lift"
};
const goalAdvice={
  "Leads":"Define what counts as a qualified lead before launch. Form fills alone can make a weak campaign look healthier than it is.",
  "Sales":"Track revenue and acquisition cost together. More sales are not automatically better if the economics deteriorate.",
  "Traffic":"Decide what a useful visit looks like. Cheap clicks with no engagement or next action are usually not the goal.",
  "Awareness":"Use reach and impressions as delivery metrics, then look for a downstream signal such as branded search, direct traffic, or assisted conversions."
};

export default function CampaignBuilder(){
 const[name,setName]=useState("Summer Growth Campaign");
 const[goal,setGoal]=useState("Leads");
 const[audience,setAudience]=useState("Small business decision-makers");
 const[action,setAction]=useState("Request a consultation");
 const[channel,setChannel]=useState("Search Ads");
 const[budget,setBudget]=useState(1500);
 const[days,setDays]=useState(30);
 const[copied,setCopied]=useState(false);

 const plan=useMemo(()=>({
   daily:budget>0&&days>0?budget/days:0,
   kpi:kpis[goal],
   advice:channelAdvice[channel],
   goalAdvice:goalAdvice[goal]
 }),[goal,channel,budget,days]);

 const copyText=`Campaign: ${name}
Primary goal: ${goal}
Audience: ${audience}
Desired action: ${action}
Primary channel: ${channel}
Total budget: $${Number(budget||0).toFixed(2)}
Campaign length: ${days} days
Daily budget: $${Number.isFinite(plan.daily)?plan.daily.toFixed(2):"0.00"}
KPIs: ${plan.kpi}
Starting strategy: ${plan.advice}
Measurement note: ${plan.goalAdvice}`;

 async function copyPlan(){
   try{
     await navigator.clipboard.writeText(copyText);
     setCopied(true);
     setTimeout(()=>setCopied(false),1400);
   }catch{}
 }

 return <div className="builder-layout">
  <div className="card calc builder-form">
   <div className="kicker">Campaign inputs</div>
   <h2 style={{fontSize:28,marginTop:8}}>Build a focused starting plan</h2>
   <p className="muted">You are not trying to predict the entire campaign here. You are defining the decisions that should be clear before launch.</p>

   <div className="field"><label>Campaign name</label><input value={name} onChange={e=>setName(e.target.value)}/></div>
   <div className="field"><label>Primary goal</label><select value={goal} onChange={e=>setGoal(e.target.value)}>{Object.keys(kpis).map(x=><option key={x}>{x}</option>)}</select></div>
   <div className="field"><label>Audience</label><input value={audience} onChange={e=>setAudience(e.target.value)}/></div>
   <div className="field"><label>What do you want the audience to do?</label><input value={action} onChange={e=>setAction(e.target.value)} placeholder="Buy, book, subscribe, request a quote..."/></div>
   <div className="field"><label>Primary channel</label><select value={channel} onChange={e=>setChannel(e.target.value)}>{Object.keys(channelAdvice).map(x=><option key={x}>{x}</option>)}</select></div>
   <div className="builder-row">
     <div className="field"><label>Total budget ($)</label><input type="number" min="0" value={budget} onChange={e=>setBudget(Number(e.target.value))}/></div>
     <div className="field"><label>Campaign length (days)</label><input type="number" min="1" value={days} onChange={e=>setDays(Number(e.target.value))}/></div>
   </div>
  </div>

  <div className="card campaign-plan">
   <div className="kicker">Your starting plan</div>
   <h2>{name||`${goal} campaign`}</h2>
   <div className="plan-stat"><span>Primary goal</span><b>{goal}</b></div>
   <div className="plan-stat"><span>Audience</span><b>{audience||"Define your audience"}</b></div>
   <div className="plan-stat"><span>Desired action</span><b>{action||"Define the action"}</b></div>
   <div className="plan-stat"><span>Primary channel</span><b>{channel}</b></div>
   <div className="plan-stat"><span>Total budget</span><b>${Number(budget||0).toLocaleString()}</b></div>
   <div className="plan-stat"><span>Daily budget</span><b>${Number.isFinite(plan.daily)?plan.daily.toFixed(2):"0.00"}</b></div>
   <div className="plan-block"><span>Track these KPIs</span><p>{plan.kpi}</p></div>
   <div className="plan-block"><span>Starting strategy</span><p>{plan.advice}</p></div>
   <div className="plan-block"><span>Measurement note</span><p>{plan.goalAdvice}</p></div>
   <div className="notice">Keep version one simple: one primary goal, one audience, one main action, one primary channel, and a short KPI list.</div>
   <button className="btn builder-copy" type="button" onClick={copyPlan}>{copied?"Plan copied!":"Copy campaign plan"}</button>
  </div>
 </div>
}