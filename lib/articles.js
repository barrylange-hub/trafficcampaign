import fs from "node:fs";
import path from "node:path";

const articleDir = path.join(process.cwd(), "content", "articles");

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };
  const block = raw.slice(4, end).trim();
  const body = raw.slice(end + 4).trim();
  const data = {};
  for (const line of block.split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (value.startsWith("[") && value.endsWith("]")) value = value.slice(1, -1).split(",").map(v => v.trim()).filter(Boolean);
    data[key] = value;
  }
  return { data, body };
}

export function getAllArticles() {
  if (!fs.existsSync(articleDir)) return [];
  return fs.readdirSync(articleDir)
    .filter(f => f.endsWith(".md"))
    .map(file => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(articleDir, file), "utf8");
      const { data, body } = parseFrontmatter(raw);
      const words = body.replace(/[#*`>\[\]()_-]/g, " ").split(/\s+/).filter(Boolean).length;
      return { slug, ...data, body, readingTime: Math.max(1, Math.ceil(words / 220)) };
    })
    .filter(a => String(a.draft || "false") !== "true")
    .sort((a,b) => String(b.date || "").localeCompare(String(a.date || "")));
}

export function getArticle(slug) { return getAllArticles().find(a => a.slug === slug) || null; }
export function getCategories() {
  const map = new Map();
  for (const a of getAllArticles()) {
    const c = a.category || "Marketing Strategy";
    map.set(c, (map.get(c) || 0) + 1);
  }
  return [...map.entries()].map(([name,count]) => ({name,count,slug:name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}));
}

function inline(text) {
  const parts = [];
  let rest = text;
  const rx = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`)/;
  let key = 0;
  while (rest) {
    const m = rest.match(rx);
    if (!m) { parts.push(rest); break; }
    if (m.index > 0) parts.push(rest.slice(0,m.index));
    if (m[2]) parts.push(<strong key={key++}>{m[2]}</strong>);
    else if (m[3]) parts.push(<a key={key++} href={m[4]}>{m[3]}</a>);
    else if (m[5]) parts.push(<code key={key++}>{m[5]}</code>);
    rest = rest.slice(m.index + m[0].length);
  }
  return parts;
}

export function renderMarkdown(md) {
  const lines = md.split("\n");
  const out = [];
  let list = [];
  const flushList = () => { if (list.length) { out.push(<ul key={`ul-${out.length}`}>{list.map((x,i)=><li key={i}>{inline(x)}</li>)}</ul>); list=[]; } };
  for (let i=0;i<lines.length;i++) {
    const line = lines[i].trim();
    if (!line) { flushList(); continue; }
    if (line.startsWith("- ")) { list.push(line.slice(2)); continue; }
    flushList();
    if (line.startsWith("### ")) out.push(<h3 key={i}>{inline(line.slice(4))}</h3>);
    else if (line.startsWith("## ")) out.push(<h2 key={i}>{inline(line.slice(3))}</h2>);
    else if (line.startsWith("# ")) out.push(<h1 key={i}>{inline(line.slice(2))}</h1>);
    else if (line.startsWith("> ")) out.push(<blockquote key={i}>{inline(line.slice(2))}</blockquote>);
    else out.push(<p key={i}>{inline(line)}</p>);
  }
  flushList();
  return out;
}
