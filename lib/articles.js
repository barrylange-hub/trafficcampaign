import fs from "node:fs";
import path from "node:path";
import React from "react";

const articleDir = path.join(process.cwd(), "content", "articles");
export const slugify = (s="") => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

function parseValue(value){
  value=value.trim();
  if((value.startsWith('"')&&value.endsWith('"'))||(value.startsWith("'")&&value.endsWith("'"))) return value.slice(1,-1);
  if(value.startsWith("[")&&value.endsWith("]")) return value.slice(1,-1).split(",").map(v=>v.trim()).filter(Boolean);
  if(value==="true") return true;if(value==="false") return false;
  return value;
}
function parseFrontmatter(raw){
  if(!raw.startsWith("---"))return{data:{},body:raw};
  const end=raw.indexOf("\n---",3);if(end===-1)return{data:{},body:raw};
  const block=raw.slice(4,end).trim(),body=raw.slice(end+4).trim(),data={};
  for(const line of block.split("\n")){const i=line.indexOf(":");if(i===-1)continue;data[line.slice(0,i).trim()]=parseValue(line.slice(i+1));}
  return{data,body};
}
function decorate(file){
  const slug=file.replace(/\.md$/,"");const raw=fs.readFileSync(path.join(articleDir,file),"utf8");const{data,body}=parseFrontmatter(raw);
  const words=body.replace(/[#*`>\[\]()_-]/g," ").split(/\s+/).filter(Boolean).length;
  const headings=body.split("\n").filter(x=>/^##\s+/.test(x)).map(x=>{const text=x.replace(/^##\s+/,"").trim();return{text,id:slugify(text)}});
  const faqs=[1,2,3,4].map(n=>data[`faq${n}Question`]&&data[`faq${n}Answer`]?{question:data[`faq${n}Question`],answer:data[`faq${n}Answer`]}:null).filter(Boolean);
  return{slug,...data,body,headings,faqs,readingTime:Math.max(1,Math.ceil(words/220))};
}
export function getAllArticles(){if(!fs.existsSync(articleDir))return[];return fs.readdirSync(articleDir).filter(f=>f.endsWith(".md")).map(decorate).filter(a=>a.draft!==true).sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));}
export function getArticle(slug){return getAllArticles().find(a=>a.slug===slug)||null;}
export function getCategories(){const map=new Map();for(const a of getAllArticles()){const c=a.category||"Marketing Strategy";map.set(c,(map.get(c)||0)+1)}return[...map.entries()].map(([name,count])=>({name,count,slug:slugify(name)}));}
export function getRelatedArticles(article,limit=3){const tags=new Set(article.tags||[]);return getAllArticles().filter(a=>a.slug!==article.slug).map(a=>({a,score:(a.category===article.category?3:0)+(a.tags||[]).filter(t=>tags.has(t)).length})).filter(x=>x.score>0).sort((x,y)=>y.score-x.score).slice(0,limit).map(x=>x.a);}

function inline(text){const parts=[];let rest=text;const rx=/(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`)/;let key=0;while(rest){const m=rest.match(rx);if(!m){parts.push(rest);break}if(m.index>0)parts.push(rest.slice(0,m.index));if(m[2])parts.push(<strong key={key++}>{m[2]}</strong>);else if(m[3])parts.push(<a key={key++} href={m[4]}>{m[3]}</a>);else if(m[5])parts.push(<code key={key++}>{m[5]}</code>);rest=rest.slice(m.index+m[0].length)}return parts;}
export function renderMarkdown(md){const lines=md.split("\n"),out=[];let list=[],ordered=false;const flush=()=>{if(list.length){const Tag=ordered?"ol":"ul";out.push(<Tag key={`list-${out.length}`}>{list.map((x,i)=><li key={i}>{inline(x)}</li>)}</Tag>);list=[]}};for(let i=0;i<lines.length;i++){const line=lines[i].trim();if(!line){flush();continue}if(line.startsWith("- ")){if(ordered)flush();ordered=false;list.push(line.slice(2));continue}if(/^\d+\.\s/.test(line)){if(!ordered&&list.length)flush();ordered=true;list.push(line.replace(/^\d+\.\s/,""));continue}flush();if(line.startsWith("### ")){const t=line.slice(4);out.push(<h3 id={slugify(t)} key={i}>{inline(t)}</h3>)}else if(line.startsWith("## ")){const t=line.slice(3);out.push(<h2 id={slugify(t)} key={i}>{inline(t)}</h2>)}else if(line.startsWith("# "))out.push(<h1 key={i}>{inline(line.slice(2))}</h1>);else if(line.startsWith("> "))out.push(<blockquote key={i}>{inline(line.slice(2))}</blockquote>);else out.push(<p key={i}>{inline(line)}</p>)}flush();return out;}
