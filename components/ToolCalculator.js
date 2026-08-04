"use client";
import {useMemo,useState} from "react";

export const TOOL_SPECS={
 roi:{name:"ROI Calculator",fields:[["Revenue ($)","revenue",5000],["Total cost ($)","cost",2000]],format:"percent",formula:"(Revenue − Cost) ÷ Cost × 100",calc:v=>v.cost?((v.revenue-v.cost)/v.cost)*100:0},
 roas:{name:"ROAS Calculator",fields:[["Revenue ($)","revenue",5000],["Ad spend ($)","spend",1000]],format:"ratio",formula:"Revenue ÷ Ad Spend",calc:v=>v.spend?v.revenue/v.spend:0},
 ctr:{name:"CTR Calculator",fields:[["Clicks","clicks",350],["Impressions","impressions",10000]],format:"percent",formula:"Clicks ÷ Impressions × 100",calc:v=>v.impressions?(v.clicks/v.impressions)*100:0},
 cpc:{name:"CPC Calculator",fields:[["Ad spend ($)","spend",1000],["Clicks","clicks",500]],format:"currency",formula:"Ad Spend ÷ Clicks",calc:v=>v.clicks?v.spend/v.clicks:0},
 cac:{name:"CAC Calculator",fields:[["Sales & marketing cost ($)","cost",10000],["New customers","customers",100]],format:"currency",formula:"Sales & Marketing Cost ÷ New Customers",calc:v=>v.customers?v.cost/v.customers:0},
 cpm:{name:"CPM Calculator",fields:[["Ad spend ($)","spend",1000],["Impressions","impressions",250000]],format:"currency",formula:"Ad Spend ÷ Impressions × 1,000",calc:v=>v.impressions?(v.spend/v.impressions)*1000:0},
 conversion:{name:"Conversion Rate Calculator",fields:[["Conversions","conversions",120],["Visitors or clicks","visitors",4000]],format:"percent",formula:"Conversions ÷ Visitors × 100",calc:v=>v.visitors?(v.conversions/v.visitors)*100:0},
 breakeven:{name:"Break-even ROAS Calculator",fields:[["Gross margin (%)","margin",40]],format:"ratio",formula:"1 ÷ Gross Margin (as a decimal)",calc:v=>v.margin>0?1/(v.margin/100):0},
 budget:{name:"Marketing Budget Calculator",fields:[["Revenue target ($)","revenue",100000],["Marketing budget (%)","percent",10]],format:"currency",formula:"Revenue Target × Marketing Budget %",calc:v=>v.revenue*(v.percent/100)}
};

function formatValue(kind,n){
 if(!Number.isFinite(n)) n=0;
 if(kind==="percent") return `${n.toFixed(2)}%`;
 if(kind==="ratio") return `${n.toFixed(2)}×`;
 if(kind==="currency") return `$${n.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})}`;
 return n.toFixed(2);
}

export default function ToolCalculator({kind,compact=false}){
 const spec=TOOL_SPECS[kind];
 const initial=Object.fromEntries(spec.fields.map(([,key,val])=>[key,val]));
 const[values,setValues]=useState(initial);
 const[copied,setCopied]=useState(false);
 const result=useMemo(()=>spec.calc(values),[values,spec]);
 const output=formatValue(spec.format,result);
 async function copy(){
   try{await navigator.clipboard.writeText(`${spec.name}: ${output}`);setCopied(true);setTimeout(()=>setCopied(false),1400)}catch{}
 }
 return <div className="card calc">
   {!compact&&<><div className="kicker">Free calculator</div><h2 style={{fontSize:28,margin:"8px 0 16px"}}>{spec.name}</h2></>}
   {spec.fields.map(([label,key])=><div className="field" key={key}><label>{label}</label><input type="number" value={values[key]} onChange={e=>setValues({...values,[key]:Number(e.target.value)})}/></div>)}
   <div className="result"><span className="muted">Result</span><strong>{output}</strong><button className="copybtn" type="button" onClick={copy}>{copied?"Copied!":"Copy result"}</button></div>
 </div>
}