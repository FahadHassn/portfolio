import { spawn } from "child_process";
import fs from "fs";
const OUT = "/Users/fahadhassan/Documents/GitHub/portfolio/public/projects";
const PORT = 9260;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ---- project definitions ----
const PLAY = "https://play.google.com/store/apps/details?id=";
const APPLE = "https://apps.apple.com";
const projects = [
  {
    slug: "boshhh", type: "app", accent: "#2E7D6E", accent2: "#1f5b50", emoji: "💳",
    cat: "Mobile App", title: "Credit Score App", sub: "Boshhh",
    tagline: "Credit-building & financial wellness — track your score, cashflow and SIM in one place.",
    badges: [{ store: "apple", href: "https://apps.apple.com/ie/app/boshhh/id6446495097" }],
    ui: { header: "Your Score", big: "721", sub2: "Good · +12 this month", rows: ["Cashflow", "SIM Manager", "Credit Tips"] },
  },
  {
    slug: "objectsai", type: "app", accent: "#7c3aed", accent2: "#5b21b6", emoji: "✦",
    cat: "Mobile App", title: "AI Photo Editor", sub: "ObjectsAI",
    tagline: "AI object & background remover. One tap to erase, cut out and upscale.",
    badges: [
      { store: "play", href: "https://play.google.com/store/apps/details?id=com.mobizion.objects.ai.eraser" },
      { store: "apple", href: "https://apps.apple.com/us/app/object-remover-and-ai-retouch/id6757428586" },
    ],
    ui: { header: "Erase Object", big: "AI", sub2: "Tap to remove", rows: ["Object Erase", "BG Remove", "AI Upscale"] },
  },
  {
    slug: "ai-life-coach", type: "app", accent: "#10b981", accent2: "#047857", emoji: "⚡",
    cat: "Mobile App", title: "Habit Tracker App", sub: "AI Life Coach",
    tagline: "Habit tracking & AI coaching. 75 Hard, streaks and daily prompts to keep you on track.",
    badges: [
      { store: "play", href: "https://play.google.com/store/apps/details?id=com.mobizion.coach" },
      { store: "apple", href: "https://apps.apple.com/cy/app/habit-tracker-ai-life-coach/id6745252758" },
    ],
    ui: { header: "Today", big: "12", sub2: "day streak 🔥", rows: ["75 Hard", "AI Coach", "Daily Prompt"] },
  },
  {
    slug: "la-bella-cucina", type: "site", accent: "#D2452F", accent2: "#a5331f", emoji: "🍝",
    cat: "Website", title: "Restaurant Website", sub: "La Bella Cucina",
    tagline: "Italian restaurant site with online menu, table reservations and a photo gallery.",
    badges: [],
    site: { brand: "La Bella Cucina", nav: ["Menu", "Reserve", "Gallery"], hero: "Authentic Italian", cta: "Book a Table" },
  },
  {
    slug: "probuild-agency", type: "site", accent: "#3b82f6", accent2: "#1d4ed8", emoji: "🏗",
    cat: "Website", title: "Construction Website", sub: "ProBuild Agency",
    tagline: "Business site for a construction & renovation company with a quote-request flow.",
    badges: [],
    site: { brand: "ProBuild", nav: ["Work", "Services", "Quote"], hero: "We Build It Right", cta: "Get a Quote" },
  },
  {
    slug: "realestate-leadgen", type: "flow", accent: "#0ea5e9", accent2: "#0369a1", emoji: "🏠",
    cat: "AI Automation", title: "Lead Scoring Pipeline", sub: "RealEstate LeadGen",
    tagline: "Facebook leads scored by OpenAI, then pushed straight into HubSpot.",
    badges: [],
    flow: [{ i: "📥", t: "FB Lead" }, { i: "🤖", t: "AI Score" }, { i: "📊", t: "HubSpot" }],
  },
  {
    slug: "gmail-autoresponder", type: "flow", accent: "#8b5cf6", accent2: "#6d28d9", emoji: "📧",
    cat: "AI Automation", title: "Email Automation", sub: "Gmail AutoResponder",
    tagline: "GPT-4 reads each email and sends a context-aware reply automatically.",
    badges: [],
    flow: [{ i: "📧", t: "Inbox" }, { i: "🤖", t: "GPT-4" }, { i: "↩️", t: "Auto Reply" }],
  },
];

// ---- badge svg ----
function badgeHtml(store, idx) {
  const play = `<svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M3 2.5v19l11-9.5-11-9.5z" fill="url(#g${idx})"/><defs><linearGradient id="g${idx}" x1="3" y1="2" x2="14" y2="21"><stop stop-color="#00E0FF"/><stop offset=".5" stop-color="#00F076"/><stop offset="1" stop-color="#FFC800"/></linearGradient></defs></svg>`;
  const apple = `<svg width="30" height="34" viewBox="0 0 24 26" fill="white"><path d="M17 13.5c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.5 1.3-.1 1.8-.8 3.3-.8s2 .8 3.3.8 2.2-1.2 3-2.5c.6-.9 1-1.8 1.3-2.8-.1 0-2.6-1-2.7-4.4zM14.5 3.8c.7-.9 1.2-2 1-3.3-1 .1-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.2z"/></svg>`;
  const top = store === "play" ? "GET IT ON" : "Download on the";
  const big = store === "play" ? "Google Play" : "App Store";
  return `<a class="badge" data-hot="1">${store === "play" ? play : apple}<span><small>${top}</small><b>${big}</b></span></a>`;
}

function phone(p, cls = "") {
  const rows = (p.ui.rows || []).map(r => `<div class="row"><span class="dot"></span>${r}</div>`).join("");
  return `<div class="phone ${cls}">
    <div class="screen">
      <div class="pstat"><span></span><span></span></div>
      <div class="phead">${p.ui.header}</div>
      <div class="pcard" style="background:${p.accent}14">
        <div class="plogo" style="background:${p.accent}22">${p.ui.big}</div>
        <div class="pmeta"><b>${p.sub}</b><small>${p.ui.sub2}</small></div>
      </div>
      ${rows}
    </div>
  </div>`;
}

function mockup(p) {
  if (p.type === "app") {
    return `${phone(p, "back")}${phone(p, "front")}`;
  }
  if (p.type === "site") {
    const nav = p.site.nav.map(n => `<span>${n}</span>`).join("");
    return `<div class="stage"><div class="browser">
      <div class="bbar"><i></i><i></i><i></i><div class="url">${p.site.brand.toLowerCase().replace(/ /g,"")}.com</div></div>
      <div class="bbody">
        <div class="bnav"><b>${p.site.brand}</b><div class="bnavlinks">${nav}</div></div>
        <div class="bhero" style="background:linear-gradient(135deg,${p.accent},${p.accent2})">
          <div class="bhtxt">${p.site.hero}</div><div class="bcta">${p.site.cta}</div>
        </div>
        <div class="bgrid"><div></div><div></div><div></div></div>
      </div>
    </div></div>`;
  }
  // flow
  const nodes = p.flow.map((n, i) => `<div class="node"><div class="nicon">${n.i}</div><div class="nlabel">${n.t}</div></div>${i < p.flow.length - 1 ? '<div class="arrow"><svg width="60" height="20" viewBox="0 0 60 20"><path d="M0 10h50M44 4l8 6-8 6" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>' : ""}`).join("");
  return `<div class="stage flowstage">${nodes}</div>`;
}

function html(p) {
  const badges = p.badges.length ? `<div class="badges">${p.badges.map((b, i) => badgeHtml(b.store, i)).join("")}</div>` : "";
  return `<!doctype html><html><head><meta charset="utf8"><style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:'Poppins','Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;}
  html,body{width:1180px;height:1000px;overflow:hidden;}
  .card{position:relative;width:1180px;height:1000px;overflow:hidden;
    background:radial-gradient(120% 120% at 15% 0%, ${p.accent} 0%, ${p.accent2} 100%);}
  .tex{position:absolute;inset:0;opacity:.10;background-image:radial-gradient(rgba(255,255,255,.9) 2px,transparent 2px);background-size:34px 34px;}
  .content{position:absolute;inset:0;padding:70px 72px;color:#fff;}
  .eyebrow{font-size:19px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;opacity:.82;}
  .title{font-size:70px;font-weight:800;line-height:1.03;margin-top:14px;max-width:560px;letter-spacing:-.5px;}
  .sub{font-size:26px;font-weight:600;opacity:.82;margin-top:10px;}
  .tag{font-size:25px;line-height:1.42;opacity:.9;margin-top:26px;max-width:430px;font-weight:400;}
  .badges{display:flex;gap:16px;margin-top:40px;}
  .badge{display:inline-flex;align-items:center;gap:12px;background:#0b0b0d;color:#fff;border-radius:14px;padding:12px 20px;text-decoration:none;}
  .badge span{display:flex;flex-direction:column;line-height:1.05;}
  .badge small{font-size:13px;opacity:.85;letter-spacing:.02em;}
  .badge b{font-size:24px;font-weight:600;margin-top:1px;}
  /* mockup stage */
  .stage{position:absolute;right:-30px;bottom:-40px;width:640px;height:760px;}
  /* phone */
  .phone{position:absolute;width:300px;height:620px;background:#0e0e12;border-radius:46px;padding:12px;box-shadow:0 40px 80px rgba(0,0,0,.35);}
  .phone.back{right:250px;bottom:78px;transform:rotate(-7deg);}
  .phone.front{right:22px;bottom:24px;transform:rotate(5deg);z-index:2;}
  .screen{width:100%;height:100%;background:#fbfbfd;border-radius:36px;overflow:hidden;padding:26px 20px;color:#111;}
  .pstat{display:flex;justify-content:space-between;margin-bottom:20px;}
  .pstat span{width:60px;height:8px;border-radius:8px;background:#e4e4ea;}
  .pstat span:last-child{width:34px;}
  .phead{font-size:30px;font-weight:800;margin-bottom:18px;}
  .pcard{display:flex;align-items:center;gap:16px;border-radius:22px;padding:18px;margin-bottom:20px;}
  .plogo{width:70px;height:70px;border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#111;}
  .pmeta{display:flex;flex-direction:column;}
  .pmeta b{font-size:22px;font-weight:700;}
  .pmeta small{font-size:16px;color:#666;margin-top:2px;}
  .row{display:flex;align-items:center;gap:14px;font-size:20px;font-weight:600;color:#333;padding:16px 6px;border-bottom:1px solid #eee;}
  .row .dot{width:16px;height:16px;border-radius:6px;background:${p.accent}55;}
  /* browser */
  .browser{position:absolute;right:20px;bottom:70px;width:600px;height:520px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,.35);}
  .bbar{height:52px;background:#f2f2f5;display:flex;align-items:center;gap:10px;padding:0 20px;}
  .bbar i{width:14px;height:14px;border-radius:50%;background:#d5d5dc;}
  .bbar .url{margin-left:16px;background:#fff;border-radius:10px;height:30px;flex:1;display:flex;align-items:center;padding:0 16px;font-size:16px;color:#888;}
  .bbody{padding:0;}
  .bnav{display:flex;align-items:center;justify-content:space-between;padding:22px 28px;}
  .bnav b{font-size:26px;font-weight:800;color:#222;}
  .bnavlinks{display:flex;gap:22px;font-size:18px;color:#555;font-weight:600;}
  .bhero{margin:0 28px;border-radius:18px;height:220px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;gap:18px;}
  .bhtxt{font-size:40px;font-weight:800;}
  .bcta{background:#fff;color:#111;font-weight:700;font-size:18px;padding:12px 26px;border-radius:12px;}
  .bgrid{display:flex;gap:18px;padding:24px 28px;}
  .bgrid div{flex:1;height:90px;border-radius:14px;background:#eef0f4;}
  /* flow */
  .flowstage{right:6px;bottom:110px;width:600px;height:560px;display:flex;flex-direction:column;gap:8px;align-items:flex-start;justify-content:center;}
  .node{display:flex;align-items:center;gap:22px;background:rgba(255,255,255,.16);backdrop-filter:blur(4px);border:1.5px solid rgba(255,255,255,.35);border-radius:24px;padding:26px 40px;width:400px;}
  .node:nth-child(3){margin-left:120px;}
  .node:nth-child(5){margin-left:240px;}
  .nicon{width:76px;height:76px;border-radius:20px;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;font-size:38px;}
  .nlabel{font-size:30px;font-weight:800;color:#fff;}
  .arrow{margin:2px 0 2px 90px;}
  </style></head><body>
  <div class="card"><div class="tex"></div>
    <div class="content">
      <div class="eyebrow">${p.cat}</div>
      <div class="title">${p.title}</div>
      <div class="sub">${p.sub}</div>
      <div class="tag">${p.tagline}</div>
      ${badges}
    </div>
    ${mockup(p)}
  </div></body></html>`;
}

// ---- render ----
const chrome = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${PORT}`, "--hide-scrollbars", "--force-color-profile=srgb", "about:blank"], { stdio: "ignore" });
await sleep(1600);
const t = await (await fetch(`http://localhost:${PORT}/json/new?about:blank`, { method: "PUT" })).json();
const WebSocket = (await import("ws")).default;
const ws = new WebSocket(t.webSocketDebuggerUrl);
let idc = 1; const pend = new Map();
const send = (m, p = {}) => new Promise(res => { const id = idc++; pend.set(id, res); ws.send(JSON.stringify({ id, method: m, params: p })); });
await new Promise(r => ws.on("open", r));
ws.on("message", d => { const m = JSON.parse(d); if (m.id && pend.has(m.id)) { pend.get(m.id)(m.result); pend.delete(m.id); } });
await send("Page.enable"); await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", { width: 1180, height: 1000, deviceScaleFactor: 2, mobile: false });

const outHot = {};
for (const p of projects) {
  const dataUrl = "data:text/html;charset=utf-8," + encodeURIComponent(html(p));
  await send("Page.navigate", { url: dataUrl });
  await sleep(700);
  // capture badge hotspots (as % of 1180x1000)
  const r = await send("Runtime.evaluate", {
    expression: `JSON.stringify([...document.querySelectorAll('.badge')].map(a=>{const b=a.getBoundingClientRect();return {left:(b.left/1180*100),top:(b.top/1000*100),width:(b.width/1180*100),height:(b.height/1000*100)};}))`,
    returnByValue: true,
  });
  outHot[p.slug] = JSON.parse(r.result.value);
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 86, clip: { x: 0, y: 0, width: 1180, height: 1000, scale: 1 } });
  fs.writeFileSync(`${OUT}/${p.slug}.jpg`, Buffer.from(shot.data, "base64"));
  console.log("rendered", p.slug);
}
fs.writeFileSync("/private/tmp/claude-502/-Users-fahadhassan-Documents-GitHub-portfolio/b8a830b2-a0bc-4e8b-8f01-de48fc0fa875/scratchpad/hotspots.json", JSON.stringify(outHot, null, 2));
console.log("HOTSPOTS", JSON.stringify(outHot));
chrome.kill(); process.exit(0);
