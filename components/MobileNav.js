"use client";
import {useState} from "react";
import Link from "next/link";

const links=[
  ["Start Here","/start-here"],
  ["Academy","/academy"],
  ["Learn","/articles"],
  ["Tools","/tools"],
  ["Templates","/templates"],
  ["Resources","/resources"],
  ["About","/about"]
];

export default function MobileNav(){
  const[open,setOpen]=useState(false);
  return <div className="mobile-nav-wrap">
    <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>
      <span></span><span></span><span></span>
    </button>
    {open&&<div className="mobile-menu">
      <nav aria-label="Mobile navigation">
        {links.map(([label,url])=><Link href={url} key={url} onClick={()=>setOpen(false)}>{label}<span>→</span></Link>)}
      </nav>
      <Link className="btn mobile-tools-btn" href="/tools" onClick={()=>setOpen(false)}>Free tools</Link>
    </div>}
  </div>
}