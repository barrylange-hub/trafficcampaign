"use client";
import ToolCalculator from "@/components/ToolCalculator";
const kinds=["roi","roas","ctr","cpc","cac","cpm","conversion","breakeven","budget"];
export default function Calculators(){return <div className="calc-grid">{kinds.map(k=><div key={k}><ToolCalculator kind={k} compact/></div>)}</div>}