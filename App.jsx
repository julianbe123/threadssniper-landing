import { useState } from "react";

export default function ThreadsSniperLanding() {
  const [activeShot, setActiveShot] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleWaitlist = () => {
    if (!name.trim() || !email.includes("@")) return;
    setSubmitting(true);
    // Submit to Google Form via no-cors fetch
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdHx5kf3-OR-JKapnP14xWKzN9n3CLOsx22VkSuPGk1ydlAxA/formResponse";
    const formData = new URLSearchParams();
    formData.append("entry.2005620554", name);
    formData.append("entry.1045781291", email);
    fetch(formUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }).catch(() => {});
    // Show success after short delay (no-cors won't return a readable response)
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1000);
  };

  const screenshots = [
    { label: "Live dashboard", desc: "Real-time Threads scanning with AI-scored leads" },
    { label: "Smart filters", desc: "Filter by niche, location, budget, contact type" },
    { label: "Quick apply", desc: "One-click outreach with pre-written templates" },
  ];

  const avatarColors = ["#0066FF","#e24b4a","#1D9E75","#D85A30","#D4537E","#534AB7","#639922","#BA7517"];

  return (
    <div style={{ fontFamily:"'Outfit', sans-serif", background:"#08080d", color:"#eaeaea", minHeight:"100vh", overflow:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(0,102,255,0.15)} 50%{box-shadow:0 0 40px rgba(0,102,255,0.3)} }
        @keyframes countUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        * { box-sizing:border-box; margin:0; padding:0; }
        ::selection { background:rgba(0,102,255,0.3); }
        .landing-btn:hover { transform:translateY(-1px); box-shadow:0 8px 30px rgba(0,102,255,0.35) !important; }
        .val-card:hover { border-color:rgba(0,102,255,0.25) !important; transform:translateY(-2px); }
        .val-card { transition: all 0.25s ease; }
        .test-card:hover { border-color:rgba(0,102,255,0.2) !important; }
        input:focus { outline:none; border-color:#0066FF !important; }
      `}</style>

      {/* ─── NAV ─── */}
      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 32px", maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, display:"flex", alignItems:"center", justifyContent:"center", borderRadius:10, background:"rgba(0,102,255,0.1)" }}>
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" stroke="#0066FF" strokeWidth="2"/><circle cx="14" cy="14" r="4" fill="#0066FF"/><line x1="14" y1="1" x2="14" y2="8" stroke="#0066FF" strokeWidth="1.5"/><line x1="14" y1="20" x2="14" y2="27" stroke="#0066FF" strokeWidth="1.5"/><line x1="1" y1="14" x2="8" y2="14" stroke="#0066FF" strokeWidth="1.5"/><line x1="20" y1="14" x2="27" y2="14" stroke="#0066FF" strokeWidth="1.5"/></svg>
          </div>
          <span style={{ fontSize:18, fontWeight:700, letterSpacing:"-0.3px" }}>Threads<span style={{ color:"#0066FF" }}>Sniper</span><span style={{ color:"#555", fontSize:12, fontWeight:400 }}>.io</span></span>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ width:8, height:8, borderRadius:"50%", background:"#0066FF", animation:"pulse 2s infinite" }}/>
          <span style={{ fontSize:12, color:"#666", fontFamily:"'JetBrains Mono', monospace" }}>Coming soon</span>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"60px 32px 40px", textAlign:"center", animation:"fadeUp 0.8s ease both" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(0,102,255,0.08)", border:"1px solid rgba(0,102,255,0.2)", borderRadius:30, padding:"6px 18px", marginBottom:28 }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#0066FF" }}/>
          <span style={{ fontSize:12, fontWeight:500, color:"#0066FF", fontFamily:"'JetBrains Mono', monospace" }}>For UGC creators, models & KOLs in SEA</span>
        </div>

        {/* HEADLINE */}
        <h1 style={{ fontSize:"clamp(36px, 6vw, 64px)", fontWeight:900, lineHeight:1.05, letterSpacing:"-2px", maxWidth:820, margin:"0 auto 20px" }}>
          Stop wasting 5+ hours scrolling.<br/>
          <span style={{ color:"#0066FF" }}>Land gigs in seconds.</span>
        </h1>

        {/* SUBHEAD — fear-focused */}
        <p style={{ fontSize:"clamp(16px, 2.5vw, 20px)", color:"#888", lineHeight:1.6, maxWidth:620, margin:"0 auto 16px" }}>
          While you're scrolling, <span style={{ color:"#ff4757", fontWeight:600 }}>47 other creators already applied</span>. ThreadsSniper.io scans Threads posts in real time so you never miss a gig again.
        </p>

        {/* WAITLIST FORM */}
        {!submitted ? (
          <div style={{ maxWidth:440, margin:"0 auto" }}>
            <div style={{ display:"flex", gap:10, marginBottom:10 }}>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                onKeyDown={e => e.key === "Enter" && handleWaitlist()}
                style={{ flex:1, padding:"14px 18px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#eaeaea", fontSize:15, fontFamily:"'Outfit', sans-serif", transition:"border-color 0.2s" }} />
            </div>
            <div style={{ display:"flex", gap:10 }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                onKeyDown={e => e.key === "Enter" && handleWaitlist()}
                style={{ flex:"1 1 240px", padding:"14px 18px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#eaeaea", fontSize:15, fontFamily:"'Outfit', sans-serif", transition:"border-color 0.2s" }} />
              <button onClick={handleWaitlist} disabled={submitting} className="landing-btn" style={{
                padding:"14px 28px", background:"#0066FF", color:"#fff", border:"none", borderRadius:10,
                fontSize:15, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit', sans-serif",
                transition:"all 0.2s", whiteSpace:"nowrap", animation:"glow 3s infinite",
                opacity: submitting ? 0.7 : 1,
              }}>{submitting ? "Joining..." : "Get Early Access"}</button>
            </div>
          </div>
        ) : (
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(0,102,255,0.1)", border:"1px solid rgba(0,102,255,0.25)", borderRadius:12, padding:"16px 28px" }}>
            <span style={{ fontSize:20 }}>✓</span>
            <span style={{ fontSize:15, fontWeight:500 }}>You're on the list, {name || "creator"}! We'll notify you at launch.</span>
          </div>
        )}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginTop:14 }}>
          <div style={{ display:"flex", gap:2 }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#ffd000" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span style={{ fontSize:12, color:"#888" }}>
            <span style={{ fontWeight:600, color:"#ccc" }}>200+</span> creators on the waitlist
          </span>
        </div>
        <p style={{ fontSize:11, color:"#444", marginTop:8, fontFamily:"'JetBrains Mono', monospace" }}>Free during beta · No credit card required</p>
      </div>

      {/* ─── DASHBOARD PREVIEW ─── */}
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"20px 32px 60px" }}>
        <div style={{ display:"flex", gap:8, justifyContent:"center", marginBottom:20 }}>
          {screenshots.map((s, i) => (
            <button key={i} onClick={() => setActiveShot(i)} style={{
              padding:"8px 18px", borderRadius:20, fontSize:12, fontWeight:600, cursor:"pointer",
              fontFamily:"'Outfit', sans-serif", border:"1px solid", transition:"all 0.2s",
              background: activeShot===i ? "rgba(0,102,255,0.1)" : "transparent",
              borderColor: activeShot===i ? "rgba(0,102,255,0.3)" : "rgba(255,255,255,0.06)",
              color: activeShot===i ? "#0066FF" : "#666",
            }}>{s.label}</button>
          ))}
        </div>

        <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:16, padding:3, boxShadow:"0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,102,255,0.05)" }}>
          <div style={{ background:"#0c0c14", borderRadius:14, padding:"16px 20px", minHeight:400 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:16, paddingBottom:12, borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display:"flex", gap:5 }}>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f57" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ffbd2e" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#28c840" }}/>
              </div>
              <div style={{ flex:1, display:"flex", justifyContent:"center" }}>
                <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:6, padding:"4px 16px", fontSize:11, color:"#555", fontFamily:"'JetBrains Mono', monospace" }}>app.threadssniper.io</div>
              </div>
            </div>

            {activeShot === 0 && (
              <div style={{ animation:"fadeUp 0.3s ease both" }}>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:"rgba(0,102,255,0.1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="16" height="16" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" stroke="#0066FF" strokeWidth="2"/><circle cx="14" cy="14" r="4" fill="#0066FF"/></svg>
                  </div>
                  <span style={{ fontSize:16, fontWeight:700 }}>Threads<span style={{ color:"#0066FF" }}>Sniper</span></span>
                  <div style={{ marginLeft:"auto", display:"flex", gap:6 }}>
                    <span style={{ padding:"4px 12px", borderRadius:20, fontSize:10, background:"rgba(0,102,255,0.08)", color:"#0066FF", border:"1px solid rgba(0,102,255,0.15)" }}>3 scans</span>
                    <span style={{ padding:"4px 12px", borderRadius:20, fontSize:10, background:"rgba(255,224,51,0.08)", color:"#ffe033", border:"1px solid rgba(255,224,51,0.15)" }}>18 leads</span>
                  </div>
                </div>
                <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:10, padding:"10px 14px", marginBottom:12, display:"flex", gap:10 }}>
                  <span style={{ color:"#555" }}>⌕</span>
                  <span style={{ color:"#666", fontSize:13 }}>UGC creator skincare</span>
                  <div style={{ marginLeft:"auto", padding:"4px 16px", background:"#0066FF", borderRadius:6, color:"#fff", fontSize:11, fontWeight:600 }}>🎯 Snipe</div>
                </div>
                {[
                  { score:99, author:"@grabfood.my", post:"GrabFood looking for 20 micro-creators...", budget:"RM500/reel", tag:"HOT", tagC:"#ff8c42" },
                  { score:98, author:"@sheinmy.official", post:"SHEIN Malaysia looking for 10 fashion creators...", budget:"RM1,300", tag:"HOT", tagC:"#ff8c42" },
                  { score:96, author:"@glowlabs.sg", post:"Urgent: Need a male model for tomorrow's...", budget:"RM800", tag:"URGENT", tagC:"#ff4757" },
                  { score:96, author:"@wanderlust.my", post:"Travel KOLs wanted! 4D3N press trip to Sabah...", budget:"RM2,500", tag:"CLOSING", tagC:"#ffd000" },
                  { score:93, author:"@techreviews.sg", post:"Need a UGC creator for Samsung Galaxy review...", budget:"RM650", tag:"HOT", tagC:"#ff8c42" },
                ].map((r, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", borderRadius:8, background: i%2===0 ? "rgba(255,255,255,0.015)" : "transparent", marginBottom:2 }}>
                    <div style={{ width:32, height:32, borderRadius:6, background:"rgba(0,102,255,0.12)", color:"#0066FF", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, fontFamily:"'JetBrains Mono', monospace", flexShrink:0 }}>{r.score}</div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                        <span style={{ fontSize:12, fontWeight:600 }}>{r.author}</span>
                        <span style={{ padding:"1px 6px", borderRadius:3, fontSize:8, fontWeight:700, background:`${r.tagC}20`, color:r.tagC, border:`1px solid ${r.tagC}40` }}>{r.tag}</span>
                      </div>
                      <div style={{ fontSize:11, color:"#666", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{r.post}</div>
                    </div>
                    <span style={{ fontSize:12, fontWeight:700, color:"#00ff87", fontFamily:"'JetBrains Mono', monospace", flexShrink:0 }}>{r.budget}</span>
                  </div>
                ))}
              </div>
            )}
            {activeShot === 1 && (
              <div style={{ animation:"fadeUp 0.3s ease both" }}>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap", marginBottom:20 }}>
                  {["Timeframe: 24h","Niche: UGC","AI Score: 75+","Location: 🇲🇾 MY","Contact: Email","Sort: Relevance"].map((f,i) => (
                    <div key={i} style={{ padding:"8px 14px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, fontSize:11, color:"#999" }}>{f}</div>
                  ))}
                </div>
                <div style={{ display:"flex", gap:8, marginBottom:16 }}>
                  <span style={{ padding:"6px 14px", borderRadius:8, fontSize:11, background:"rgba(0,102,255,0.1)", color:"#0066FF", border:"1px solid rgba(0,102,255,0.2)" }}>💾 Save Search</span>
                  <span style={{ padding:"6px 14px", borderRadius:8, fontSize:11, color:"#666", border:"1px solid rgba(255,255,255,0.06)" }}>📥 Export CSV</span>
                  <span style={{ padding:"6px 14px", borderRadius:8, fontSize:11, color:"#666", border:"1px solid rgba(255,255,255,0.06)" }}>★ Saved (3)</span>
                </div>
                <div style={{ padding:20, background:"rgba(0,102,255,0.04)", borderRadius:10, border:"1px solid rgba(0,102,255,0.1)", textAlign:"center" }}>
                  <div style={{ fontSize:36, fontWeight:800, color:"#0066FF" }}>18</div>
                  <div style={{ fontSize:12, color:"#666" }}>leads match your filters</div>
                </div>
              </div>
            )}
            {activeShot === 2 && (
              <div style={{ animation:"fadeUp 0.3s ease both" }}>
                <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:12, padding:20, border:"1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                    <div>
                      <div style={{ fontSize:14, fontWeight:600 }}>Quick Apply</div>
                      <div style={{ fontSize:11, color:"#555", marginTop:2 }}>✉ collabs@brandhaus.co · 💬 @brandhaus.co</div>
                    </div>
                    <span style={{ color:"#555" }}>✕</span>
                  </div>
                  <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:8, padding:14, fontSize:12, color:"#888", lineHeight:1.7, border:"1px solid rgba(255,255,255,0.06)" }}>
                    Hi @brandhaus.co! I came across your post about looking for a UGC creator and I'd love to be considered.<br/><br/>
                    I have experience creating skincare & reels content and would be a great fit. Happy to share my portfolio if you're interested.<br/><br/>
                    Looking forward to connecting!
                  </div>
                  <div style={{ display:"flex", gap:8, marginTop:14, justifyContent:"flex-end" }}>
                    <span style={{ padding:"8px 16px", borderRadius:8, fontSize:12, color:"#666", border:"1px solid rgba(255,255,255,0.06)" }}>Cancel</span>
                    <span style={{ padding:"8px 16px", borderRadius:8, fontSize:12, fontWeight:600, background:"#0066FF", color:"#fff" }}>Copy Message</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <p style={{ textAlign:"center", fontSize:12, color:"#444", marginTop:12, fontFamily:"'JetBrains Mono', monospace" }}>{screenshots[activeShot].desc}</p>
      </div>

      {/* ─── VALUE PROPS ─── */}
      <div style={{ maxWidth:900, margin:"0 auto", padding:"40px 32px 60px" }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <h2 style={{ fontSize:28, fontWeight:700, marginBottom:8 }}>Everything you need to <span style={{ color:"#0066FF" }}>land gigs faster</span></h2>
          <p style={{ fontSize:15, color:"#666" }}>Built by creators, for creators.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))", gap:14 }}>
          {[
            { icon:"🎯", title:"Find gigs before they blow up", desc:"ThreadsSniper scans hundreds of Threads posts and surfaces paid opportunities in MY & SG before everyone else finds them." },
            { icon:"📇", title:"Every contact. One click.", desc:"Emails, phone numbers, and DM handles extracted automatically from every post. No more screenshot-and-squint." },
            { icon:"💰", title:"Know the pay before you apply", desc:"Budgets and rates detected instantly — RM or USD. Filter and sort by pay so you never waste time on lowball gigs." },
            { icon:"⚡", title:"First to apply. First to get hired.", desc:"Pre-written outreach templates auto-filled per gig. Copy, paste, send. You're reaching out while others are still scrolling." },
            { icon:"🤖", title:"AI tells you which gigs are worth it", desc:"Our AI scores every gig based on your niche, rate, and location. Stop guessing — focus on leads that actually fit you.", pro:true },
            { icon:"📥", title:"Your pipeline. Organized.", desc:"Export leads to CSV. Track status from New → Applied. Bookmark your favourites. Never lose a lead again." },
          ].map((v, i) => (
            <div key={i} className="val-card" style={{
              padding:24, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:14, position:"relative", overflow:"hidden",
            }}>
              {v.pro && <div style={{ position:"absolute", top:12, right:12, padding:"2px 8px", borderRadius:4, fontSize:9, fontWeight:700, background:"rgba(167,139,250,0.12)", color:"#a78bfa", border:"1px solid rgba(167,139,250,0.25)" }}>PRO</div>}
              <div style={{ fontSize:28, marginBottom:12 }}>{v.icon}</div>
              <h3 style={{ fontSize:15, fontWeight:700, marginBottom:6 }}>{v.title}</h3>
              <p style={{ fontSize:13, color:"#777", lineHeight:1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <div style={{ maxWidth:900, margin:"0 auto", padding:"40px 32px 60px", borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ textAlign:"center", marginBottom:32 }}>
          <h2 style={{ fontSize:28, fontWeight:700, marginBottom:8 }}>Creators are <span style={{ color:"#0066FF" }}>already loving it</span></h2>
          <p style={{ fontSize:15, color:"#666" }}>Early beta feedback from our first users</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:14 }}>
          {[
            {
              name: "Aina R.", role: "UGC Creator · KL", initial: "A", grad:["#f093fb","#f5576c"],
              stars: 5,
              text: "I used to spend 3-4 hours a day scrolling Threads looking for gig posts. With ThreadsSniper I found 6 leads in my first scan. Already booked 2 of them. This is a game changer.",
            },
            {
              name: "Darren T.", role: "Freelance Model · SG", initial: "D", grad:["#0066FF","#00b4d8"],
              stars: 5,
              text: "The urgency badges are clutch. I saw an URGENT casting call, applied within 5 minutes, and got the job. The other models didn't even see the post yet. Worth every sen.",
            },
            {
              name: "Priya M.", role: "Content Creator · Penang", initial: "P", grad:["#667eea","#764ba2"],
              stars: 5,
              text: "The contact extraction alone saves me so much time. No more zooming into screenshots to find email addresses. One click copy and I'm sending my pitch. Love this tool.",
            },
            {
              name: "Wei Lin C.", role: "KOL · KL", initial: "W", grad:["#4facfe","#00f2fe"],
              stars: 4,
              text: "Finally something built for creators in SEA. The location filter is perfect — I only see KL and SG gigs. Budget sorting is brilliant too. Can't wait for the AI Score feature.",
            },
            {
              name: "Farah Z.", role: "UGC Creator · JB", initial: "F", grad:["#fa709a","#fee140"],
              stars: 5,
              text: "I went from applying to maybe 2-3 gigs a week to 10+ in my first day using ThreadsSniper. The Quick Apply templates save so much time. My response rate has gone up too.",
            },
            {
              name: "Marcus L.", role: "Fitness Model · SG", initial: "M", grad:["#f5af19","#f12711"],
              stars: 5,
              text: "Got the SHEIN casting call notification, applied immediately, and landed a RM1,300 campaign. This tool literally paid for itself on the first use. Insane.",
            },
          ].map((t, i) => (
            <div key={i} className="test-card" style={{
              padding:22, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)",
              borderRadius:14, transition:"border-color 0.2s",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <svg width="40" height="40" style={{ flexShrink:0, borderRadius:"50%" }}>
                  <defs><linearGradient id={`tag${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={t.grad[0]}/><stop offset="100%" stopColor={t.grad[1]}/></linearGradient></defs>
                  <circle cx="20" cy="20" r="20" fill={`url(#tag${i})`}/>
                  <text x="20" y="20" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="16" fontWeight="700" fontFamily="'Outfit', sans-serif">{t.initial}</text>
                </svg>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:13, fontWeight:600 }}>{t.name}</div>
                  <div style={{ fontSize:11, color:"#666" }}>{t.role}</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:2, marginBottom:10 }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill={s<=t.stars?"#ffd000":"#333"} stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize:13, color:"#999", lineHeight:1.65, fontStyle:"italic" }}>"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <div style={{ textAlign:"center", padding:"50px 32px 60px", borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <h2 style={{ fontSize:"clamp(24px, 4vw, 36px)", fontWeight:800, marginBottom:8, letterSpacing:"-0.5px" }}>
          Every minute you wait,<br/><span style={{ color:"#0066FF" }}>someone else gets the gig.</span>
        </h2>
        <p style={{ fontSize:15, color:"#666", marginBottom:28 }}>Join the waitlist. Be first when ThreadsSniper.io launches.</p>

        {/* Avatar stack + stars repeated */}
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginBottom:24 }}>
          <div style={{ display:"flex", position:"relative", height:32 }}>
            {[
              {i:"A",g:["#667eea","#764ba2"]}, {i:"D",g:["#0066FF","#00b4d8"]},
            ].map((a,i) => (
              <svg key={i} width="30" height="30" style={{ marginLeft:i===0?0:-8, position:"relative", zIndex:5-i, borderRadius:"50%", border:"2px solid #08080d" }}>
                <defs><linearGradient id={`bag${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={a.g[0]}/><stop offset="100%" stopColor={a.g[1]}/></linearGradient></defs>
                <circle cx="15" cy="15" r="14" fill={`url(#bag${i})`}/>
                <text x="15" y="15" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="11" fontWeight="700" fontFamily="'Outfit', sans-serif">{a.i}</text>
              </svg>
            ))}
          </div>
          <div style={{ display:"flex", gap:2 }}>
            {[1,2,3,4,5].map(i => <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#ffd000" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
          </div>
          <span style={{ fontSize:12, color:"#888" }}>Rated 4.9/5 by early users</span>
        </div>

        {!submitted ? (
          <div style={{ maxWidth:420, margin:"0 auto" }}>
            <div style={{ display:"flex", gap:10, marginBottom:10, justifyContent:"center" }}>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                onKeyDown={e => e.key === "Enter" && handleWaitlist()}
                style={{ flex:"1 1 180px", padding:"13px 16px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#eaeaea", fontSize:14, fontFamily:"'Outfit', sans-serif" }} />
            </div>
            <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com"
                onKeyDown={e => e.key === "Enter" && handleWaitlist()}
                style={{ flex:"1 1 200px", padding:"13px 16px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:10, color:"#eaeaea", fontSize:14, fontFamily:"'Outfit', sans-serif" }} />
              <button onClick={handleWaitlist} disabled={submitting} className="landing-btn" style={{ padding:"13px 26px", background:"#0066FF", color:"#fff", border:"none", borderRadius:10, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"'Outfit', sans-serif", transition:"all 0.2s", animation:"glow 3s infinite" }}>
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
          </div>
        ) : (
          <p style={{ color:"#0066FF", fontWeight:500, fontSize:15 }}>✓ You're on the list!</p>
        )}
        <p style={{ fontSize:11, color:"#444", marginTop:12, fontFamily:"'JetBrains Mono', monospace" }}>Free during beta · No credit card required</p>
      </div>

      {/* ─── FOOTER ─── */}
      <footer style={{ textAlign:"center", padding:"20px 32px", borderTop:"1px solid rgba(255,255,255,0.04)", fontSize:11, color:"#333", fontFamily:"'JetBrains Mono', monospace" }}>
        ThreadsSniper.io © 2026 · Built for creators in SEA
      </footer>
    </div>
  );
}
