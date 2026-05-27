import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoFrogstand from "./forgstand_logo.png";

gsap.registerPlugin(ScrollTrigger);

// Components
const Navbar = ({ JUPITER_BUY }) => {
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, background: "rgba(2,6,4,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(57,255,20,0.2)" }}>
      <div className="container" style={{ height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>🐸</span>
          <span className="neon-text" style={{ fontFamily: "Orbitron", fontWeight: 900, fontSize: "1.1rem" }}>FROGSTAND</span>
        </div>
        <div className="nav-links" style={{ display: "flex", gap: 35 }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#tokenomics" className="nav-link">Tokenomics</a>
          <a href="#roadmap" className="nav-link">Roadmap</a>
          <a href={JUPITER_BUY} target="_blank" rel="noreferrer" className="cta-btn" style={{ padding: "8px 20px", fontSize: "0.65rem" }}>BUY</a>
        </div>
      </div>
    </nav>
  );
};

const TickerBand = () => {
  return (
    <div style={{ marginTop: 70, background: "rgba(57,255,20,0.08)", padding: "12px 0", borderBottom: "1px solid rgba(57,255,20,0.2)", overflow: "hidden" }}>
      <div className="ticker-track">
        {["$FROG", "SOLANA", "1B SUPPLY", "100% NO DEV ALLOCATION", "BURNED LP", "PURE STRENGTH", "JOIN THE STAND"].map((item, i) => (
          <span key={i} style={{ fontFamily: "Share Tech Mono", padding: "0 35px", color: i % 2 === 0 ? "var(--neon-green)" : "#888", letterSpacing: "1px" }}>◆ {item}</span>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ BUY_LINK, TELEGRAM_LINK, TWITTER_LINK, MINT_ADDRESS }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const logoRef = useRef(null);
  const caBoxRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.8"
    )
    .fromTo(statsRef.current?.children || [],
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.6"
    )
    .fromTo(buttonsRef.current?.children || [],
      { opacity: 0, y: 30, rotateX: -10 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.15, ease: "power2.out" }, "-=0.5"
    )
    .fromTo(logoRef.current,
      { opacity: 0, scale: 0.8, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.3, ease: "elastic.out(1, 0.5)" }, "-=1"
    )
    .fromTo(caBoxRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3"
    );
    
    return () => tl.kill();
  }, []);
  
  return (
    <section ref={heroRef} className="grid-bg" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
      <div className="container hero-flex" style={{ display: "flex", alignItems: "center", gap: 60 }}>
        <div className="hero-text" style={{ flex: 1 }}>
          <div style={{ color: "var(--neon-blue)", fontFamily: "Share Tech Mono", fontSize: "0.8rem", marginBottom: 20 }}>[ MINT: LIVE ON PUMP.FUN ]</div>
          <h1 ref={titleRef} style={{ fontFamily: "Orbitron", fontSize: "clamp(45px, 9vw, 100px)", lineHeight: 1, fontWeight: 900 }}>
            <div className="glitch-wrap neon-text" data-text="FROG">FROG</div><br />
            <span style={{ color: "#fff", fontWeight: 400, letterSpacing: "0.1em" }}>STAND</span>
          </h1>
          <p ref={subtitleRef} style={{ fontSize: "1.2rem", color: "#b0d0bb", margin: "30px 0 35px", maxWidth: 550, lineHeight: 1.6 }}>
            The memecoin that <span style={{ color: "var(--neon-green)", fontWeight: 700 }}>uplifts your portfolio</span>. 100% Community, 0% Dev greed. Hold the stand.
          </p>
          
          <div ref={statsRef} className="stats-row" style={{ display: "flex", gap: 40, marginBottom: 40 }}>
            <div><div className="neon-text" style={{ fontSize: "1.8rem", fontWeight: 900 }}>1B</div><div style={{ fontSize: "0.6rem", color: "#557760", letterSpacing: "2px" }}>TOTAL SUPPLY</div></div>
            <div><div className="neon-text" style={{ fontSize: "1.8rem", fontWeight: 900 }}>0%</div><div style={{ fontSize: "0.6rem", color: "#557760", letterSpacing: "2px" }}>DEV ALLOC.</div></div>
          </div>

          <div ref={buttonsRef} style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a href={BUY_LINK} target="_blank" rel="noreferrer" className="cta-btn">BUY $FROG</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noreferrer" className="cta-btn cta-btn-blue">TELEGRAM</a>
            <a href={TWITTER_LINK} target="_blank" rel="noreferrer" className="cta-btn cta-btn-blue">X / TWITTER</a>
          </div>

          <div ref={caBoxRef} className="ca-box">
            <div style={{ fontSize: "0.65rem", marginBottom: 8, color: "var(--text-dim)", letterSpacing: "1px" }}>CONTRACT ADDRESS (SOLANA)</div>
            {MINT_ADDRESS}
          </div>
        </div>
        
        <div style={{ flex: "0 0 auto" }}>
          <img ref={logoRef} src={logoFrogstand} className="img-mobile" alt="Frogstand Logo" style={{ width: 380, filter: "drop-shadow(0 0 20px var(--neon-green))" }} />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(aboutRef.current?.children || [],
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  
  return (
    <section id="about" style={{ background: "var(--bg-panel)" }}>
      <div ref={aboutRef} className="container about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div className="corner-cut" style={{ background: "var(--bg-card)", padding: 40, border: "1px solid rgba(57,255,20,0.2)", boxShadow: "0 0 20px rgba(57,255,20,0.05)" }}>
          <div style={{ fontFamily: "Share Tech Mono", color: "var(--neon-blue)", marginBottom: 20 }}>$ cat manifest.txt</div>
          <p style={{ fontFamily: "Share Tech Mono", fontSize: "0.9rem", lineHeight: 1.8, color: "#c8e0d0" }}>
            <span style={{ color: "var(--neon-green)" }}>&gt;</span> Frogstand is a tactical move against low-effort tokens.<br /><br />
            <span style={{ color: "var(--neon-green)" }}>&gt;</span> No VCs. No Presale. 1B Supply launched strictly for the community.<br /><br />
            <span style={{ color: "var(--neon-green)" }}>&gt;</span> Pushing limits on Solana. Perfect balance, zero dev allocation.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {["FAIR LAUNCH", "BURNED LP", "100% UNLOCKED", "ZERO TAX"].map(title => (
            <div key={title} className="corner-cut" style={{ padding: 25, background: "rgba(57,255,20,0.03)", border: "1px solid rgba(57,255,20,0.1)", textAlign: "center", boxShadow: "inset 0 0 10px rgba(57,255,20,0.05)" }}>
              <div style={{ color: "var(--neon-green)", fontFamily: "Orbitron", fontSize: "0.65rem", letterSpacing: "1px" }}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tokenomics = () => {
  const tokenomicsRef = useRef(null);
  const cardsRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(cardsRef.current?.children || [],
      { opacity: 0, y: 50, rotateY: 15 },
      { 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
        duration: 1.2, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: tokenomicsRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  
  return (
    <section ref={tokenomicsRef} id="tokenomics" className="grid-bg">
      <div className="container">
        <h2 style={{ fontFamily: "Orbitron", fontSize: "2.5rem", marginBottom: 60 }}>TOKENOMICS<span className="neon-text">_</span></h2>
        <div ref={cardsRef} className="tokenomics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 25 }}>
          {[
            { label: "Launch", value: "PUMP.FUN", desc: "Fair launch infrastructure deployed via Pump.fun protocols." },
            { label: "Liquidity", value: "LOCKED", desc: "Automatic liquidity migration and security enforcement." },
            { label: "Supply", value: "1B", desc: "Fixed scale supply. One Billion tokens total." },
            { label: "Dev Alloc.", value: "0%", desc: "Zero team tokens. Clean distribution from block 1." },
          ].map((t, i) => (
            <div key={i} className="corner-cut" style={{ background: "var(--bg-card)", padding: 35, border: "1px solid rgba(57,255,20,0.2)", boxShadow: "0 0 15px rgba(57,255,20,0.08), inset 0 0 20px rgba(57,255,20,0.03)" }}>
              <div style={{ color: "var(--neon-green)", fontSize: "2.2rem", fontWeight: 900, fontFamily: "Orbitron" }}>{t.value}</div>
              <div style={{ color: "var(--neon-blue)", fontFamily: "Share Tech Mono", margin: "15px 0", fontSize: "0.8rem", textTransform: "uppercase" }}>{t.label}</div>
              <p style={{ fontSize: "0.9rem", color: "#8aa090", lineHeight: 1.5 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const roadmapRef = useRef(null);
  const phasesRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(phasesRef.current?.children || [],
      { opacity: 0, x: -30 },
      { 
        opacity: 1, 
        x: 0,
        duration: 1, 
        stagger: 0.25, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: roadmapRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  
  return (
    <section ref={roadmapRef} id="roadmap" style={{ background: "var(--bg-panel)" }}>
      <div className="container">
        <h2 style={{ fontFamily: "Orbitron", fontSize: "2.5rem", marginBottom: 60 }}>ROADMAP<span className="neon-text">_</span></h2>
        <div ref={phasesRef} style={{ borderLeft: "2px solid var(--neon-green)", paddingLeft: 40, marginLeft: 10 }}>
          {[
            { p: "PHASE 01", t: "GETTING IN POSITION", s: "DONE", items: ["1B Token Launch", "Stealth Protocol Init", "Core Holder Base"] },
            { p: "PHASE 02", t: "HOLDING THE STAND", s: "ACTIVE", items: ["X Campaign Push", "CoinGecko & Tracking", "Community Metrics Check"] },
            { p: "PHASE 03", t: "MAXIMUM ELEVATION", s: "SOON", items: ["Tier Exchanges", "Frogstand DAO", "Ecosystem Integration"] }
          ].map((phase, i) => (
            <div key={i} style={{ marginBottom: 60, position: "relative" }}>
              <div style={{ position: "absolute", left: "-49px", top: 5, width: 18, height: 18, background: phase.s === "DONE" ? "var(--neon-blue)" : "var(--neon-green)", borderRadius: "50%", boxShadow: "0 0 15px currentColor" }} />
              <div style={{ fontFamily: "Share Tech Mono", color: "var(--neon-green)", fontSize: "0.8rem", letterSpacing: "2px" }}>{phase.p} · {phase.s}</div>
              <h3 style={{ fontFamily: "Orbitron", fontSize: "1.5rem", margin: "10px 0 20px" }}>{phase.t}</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {phase.items.map((item, idx) => (
                  <span key={idx} style={{ padding: "6px 15px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", fontSize: "0.75rem", color: "#a0b5a8", fontFamily: "Share Tech Mono" }}>
                    {phase.s === "DONE" ? "✓" : "○"} {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ time }) => {
  return (
    <footer style={{ padding: "80px 0", borderTop: "1px solid rgba(57,255,20,0.2)", background: "var(--bg-panel)", textAlign: "center" }}>
      <div className="container">
        <div style={{ fontSize: "2.5rem", marginBottom: 20 }}>🐸</div>
        <div style={{ fontFamily: "Orbitron", fontWeight: 900, color: "var(--neon-green)", letterSpacing: "6px", fontSize: "1.5rem", marginBottom: 15 }}>FROGSTAND</div>
        <div style={{ fontFamily: "Share Tech Mono", color: "#44604c", fontSize: "0.75rem", marginTop: 20 }}>
          © 2026 · {time} · 1,000,000,000 SUPPLY · NO DEV ALLOCATION
        </div>
      </div>
    </footer>
  );
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;500;700&display=swap');

  :root {
    --neon-green: #39ff14;
    --neon-green-dim: #20c20c;
    --neon-blue: #00e5ff;
    --neon-yellow: #ffe600;
    --bg-deep: #020604;
    --bg-card: #06140c;
    --bg-panel: #040c08;
    --grid-color: rgba(57, 255, 20, 0.06);
    --border-glow: rgba(57, 255, 20, 0.4);
    --text-dim: #88aa94;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: var(--bg-deep); color: #e0f0e5; font-family: 'Rajdhani', sans-serif; overflow-x: hidden; }

  /* ---- LAYOUT UTILS ---- */
  .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  
  /* ---- RESPONSIVE ---- */
  @media (max-width: 768px) {
    .nav-links { display: none !important; }
    .hero-flex { flex-direction: column-reverse !important; text-align: center; padding-top: 40px !important; }
    .hero-text { display: flex; flex-direction: column; align-items: center; }
    .stats-row { justify-content: center; gap: 20px !important; }
    .about-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
    .tokenomics-grid { grid-template-columns: 1fr !important; }
    .img-mobile { width: 260px !important; }
  }

  /* ---- DECO & EFFECTS ---- */
  .scanlines::after {
    content: ''; position: fixed; inset: 0; pointer-events: none; z-index: 9999;
    background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px);
  }
  .grid-bg {
    background-image: linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  @keyframes glitch-1 {
    0%,100% { clip-path: inset(0 0 95% 0); transform: translate(-3px, 0); }
    20% { clip-path: inset(20% 0 60% 0); transform: translate(3px, 0); }
  }
  .glitch-wrap { position: relative; display: inline-block; }
  .glitch-wrap::before { content: attr(data-text); position: absolute; inset: 0; color: var(--neon-green); animation: glitch-1 3.5s infinite; opacity: 0.8; }
  
  .neon-text { animation: neon-pulse 2.5s ease-in-out infinite; color: var(--neon-green); }
  @keyframes neon-pulse {
    0%,100% { text-shadow: 0 0 6px var(--neon-green), 0 0 18px var(--neon-green); }
    50% { text-shadow: 0 0 12px var(--neon-green), 0 0 30px var(--neon-green); }
  }

  .ticker-track { animation: ticker-scroll 22s linear infinite; white-space: nowrap; display: inline-flex; }
  @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ---- BUTTONS & CARDS ---- */
  .cta-btn {
    padding: 14px 32px; background: transparent; border: 2px solid var(--neon-green);
    color: #fff; font-family: 'Orbitron', sans-serif; font-weight: 700;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
    text-decoration: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 0 10px rgba(57,255,20,0.3);
    position: relative; overflow: hidden;
  }
  .cta-btn::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }
  .cta-btn:hover::before { left: 100%; }
  .cta-btn:hover { 
    background: var(--neon-green); color: #000; 
    box-shadow: 0 0 25px var(--neon-green), inset 0 0 20px rgba(0,0,0,0.2);
    transform: translateY(-2px);
  }
  .cta-btn-blue { border-color: var(--neon-blue); box-shadow: 0 0 10px rgba(0,229,255,0.2); }
  .cta-btn-blue:hover { background: var(--neon-blue); color: #000; box-shadow: 0 0 25px var(--neon-blue); }

  .nav-link { font-family: 'Orbitron', sans-serif; font-size: 0.7rem; color: var(--text-dim); text-decoration: none; text-transform: uppercase; letter-spacing: 2px; transition: 0.2s; }
  .nav-link:hover { color: var(--neon-green); }

  .corner-cut { 
    clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
    transition: all 0.3s ease;
  }
  .corner-cut:hover {
    box-shadow: 0 0 20px rgba(57,255,20,0.15), inset 0 0 25px rgba(57,255,20,0.05) !important;
    border-color: rgba(57,255,20,0.4) !important;
  }
  
  section { padding: 100px 0; scroll-margin-top: 80px; }
  
  .ca-box {
    background: rgba(57,255,20,0.05);
    border: 1px dashed var(--neon-green);
    padding: 15px;
    font-family: 'Share Tech Mono', monospace;
    color: var(--neon-green);
    word-break: break-all;
    text-align: center;
    margin-top: 30px;
    font-size: 0.8rem;
    max-width: 500px;
  }
`;

export default function App() {
  const [time, setTime] = useState("");
  
  // --- CONFIGURATION (À remplacer par tes infos de lancement) ---
  const MINT_ADDRESS = "bmmknUrZ6YmWq2U59kVDuFFX25tmjnUwTjPdoKWpump"; // Mets ici ta nouvelle adresse de mint Solana
  const BUY_LINK = `https://pump.fun/coin/${MINT_ADDRESS}`;
  const TELEGRAM_LINK = "https://t.me/frogstandPEPE"; 
  const TWITTER_LINK = "https://x.com/FrogstandPEPE";
  const JUPITER_BUY = `https://jup.ag/?buy=${MINT_ADDRESS}`;
  // -------------------------------------------------------------

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().replace("T", " ").slice(0, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="scanlines">
        <Navbar JUPITER_BUY={JUPITER_BUY} />
        <TickerBand />
        <Hero 
          BUY_LINK={BUY_LINK}
          TELEGRAM_LINK={TELEGRAM_LINK}
          TWITTER_LINK={TWITTER_LINK}
          MINT_ADDRESS={MINT_ADDRESS}
        />
        <About />
        <Tokenomics />
        <Roadmap />
        <Footer time={time} />
      </div>
    </>
  );
}