import { useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './DarkArtsHero.css';

import castleImg from '../../assets/hogwarts_castle.png';

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const AMBIENT_COUNTS   = [38, 20, 12];   // layer 1 / 2 / 3 — kept low for clean look
const TRAIL_MAX        = 20;              // cursor trail particle pool
const COLORS = {
  gold:   'rgba(201, 168, 76,',
  purple: 'rgba(138, 100, 240,',
  blue:   'rgba(100, 160, 255,',
  white:  'rgba(255, 255, 255,',
  lilac:  'rgba(200, 180, 255,',
};
const COLOR_LIST = Object.values(COLORS);

// ─────────────────────────────────────────────────────────────────────────────
// PARTICLE CLASSES
// ─────────────────────────────────────────────────────────────────────────────
class AmbientParticle {
  constructor(layer, W, H) {
    this.layer = layer;
    this.W = W; this.H = H;
    this.reset(true);
  }

  reset(init = false) {
    this.x = Math.random() * this.W;
    this.y = init ? Math.random() * this.H : this.H + 20;

    if (this.layer === 1) {
      this.r           = Math.random() * 1.2 + 0.3;
      this.speedY      = -(Math.random() * 0.12 + 0.04);
      this.speedX      = (Math.random() - 0.5) * 0.12;
      this.maxOpacity  = Math.random() * 0.22 + 0.04;
      this.parallax    = 0.04;
    } else if (this.layer === 2) {
      this.r           = Math.random() * 1.8 + 1.2;
      this.speedY      = -(Math.random() * 0.22 + 0.12);
      this.speedX      = (Math.random() - 0.5) * 0.22;
      this.maxOpacity  = Math.random() * 0.42 + 0.14;
      this.parallax    = 0.14;
    } else {
      this.r           = Math.random() * 2.8 + 2.0;
      this.speedY      = -(Math.random() * 0.38 + 0.28);
      this.speedX      = (Math.random() - 0.5) * 0.38;
      this.maxOpacity  = Math.random() * 0.6 + 0.2;
      this.parallax    = 0.38;
    }

    this.opacity    = 0;
    this.fadeSpeed  = Math.random() * 0.003 + 0.001;
    this.fadingIn   = true;
    this.colorBase  = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
    // each particle gets a slight wobble offset
    this.wobbleAmp  = Math.random() * 0.3;
    this.wobbleFreq = Math.random() * 0.02 + 0.008;
    this.wobbleT    = Math.random() * Math.PI * 2;
  }

  update(mx, my) {
    this.wobbleT += this.wobbleFreq;
    this.x += this.speedX + Math.sin(this.wobbleT) * this.wobbleAmp;
    this.y += this.speedY;

    const ox = (mx - this.W / 2) * this.parallax;
    const oy = (my - this.H / 2) * this.parallax;
    this.drawX = this.x - ox;
    this.drawY = this.y - oy;

    if (this.fadingIn) {
      this.opacity += this.fadeSpeed;
      if (this.opacity >= this.maxOpacity) this.fadingIn = false;
    } else {
      this.opacity -= this.fadeSpeed;
      if (this.opacity <= 0) this.reset();
    }

    // boundary wrap
    if (this.drawX < -60)        this.x = this.W + 60 + ox;
    if (this.drawX > this.W + 60) this.x = -60 + ox;
    if (this.drawY < -60)        this.reset();
  }

  draw(ctx) {
    ctx.save();
    if (this.layer > 1) {
      ctx.shadowBlur  = this.layer === 3 ? 18 : 10;
      ctx.shadowColor = this.colorBase.includes('201') ? '#C9A84C'
                      : this.colorBase.includes('138') ? '#8864F0'
                      : '#64A0FF';
    }
    ctx.beginPath();
    ctx.arc(this.drawX, this.drawY, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `${this.colorBase} ${this.opacity})`;
    ctx.fill();
    ctx.restore();
  }
}

// ─── Trail / cursor particle ────────────────────────────────────────────────
class TrailParticle {
  constructor() { this.active = false; }

  spawn(x, y) {
    this.active  = true;
    this.x       = x + (Math.random() - 0.5) * 6;
    this.y       = y + (Math.random() - 0.5) * 6;
    this.r       = Math.random() * 2.2 + 0.8;     // smaller — less intrusive
    this.opacity = Math.random() * 0.55 + 0.2;    // more subtle
    this.speedX  = (Math.random() - 0.5) * 0.9;
    this.speedY  = (Math.random() - 0.5) * 0.9 - 0.5;
    this.decay   = Math.random() * 0.032 + 0.022;
    this.colorBase = COLOR_LIST[Math.floor(Math.random() * COLOR_LIST.length)];
  }

  update() {
    if (!this.active) return;
    this.x += this.speedX;
    this.y += this.speedY;
    this.r = Math.max(0, this.r - 0.045);
    this.opacity -= this.decay;
    if (this.opacity <= 0) this.active = false;
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.save();
    ctx.shadowBlur  = 14;
    ctx.shadowColor = this.colorBase.includes('201') ? '#C9A84C' : '#9B70FF';
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.r), 0, Math.PI * 2);
    ctx.fillStyle = `${this.colorBase} ${Math.max(0, this.opacity)})`;
    ctx.fill();
    ctx.restore();
  }
}

// ─── Click burst particle ────────────────────────────────────────────────────
class SparkParticle {
  constructor() { this.active = false; }

  spawn(x, y) {
    this.active  = true;
    this.x       = x;
    this.y       = y;
    const angle  = Math.random() * Math.PI * 2;
    const speed  = Math.random() * 4.5 + 1.5;
    this.vx      = Math.cos(angle) * speed;
    this.vy      = Math.sin(angle) * speed;
    this.r       = Math.random() * 4 + 2;
    this.opacity = 1;
    this.decay   = Math.random() * 0.032 + 0.022;
    this.colorBase = [COLORS.gold, COLORS.purple, COLORS.blue, COLORS.white][
      Math.floor(Math.random() * 4)
    ];
  }

  update() {
    if (!this.active) return;
    this.vx  *= 0.93;
    this.vy  *= 0.93;
    this.vy  += 0.06; // slight gravity
    this.x   += this.vx;
    this.y   += this.vy;
    this.r    = Math.max(0, this.r - 0.06);
    this.opacity -= this.decay;
    if (this.opacity <= 0) this.active = false;
  }

  draw(ctx) {
    if (!this.active) return;
    ctx.save();
    ctx.shadowBlur  = 20;
    ctx.shadowColor = this.colorBase.includes('201') ? '#FFD700' : '#BF80FF';
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.r), 0, Math.PI * 2);
    ctx.fillStyle = `${this.colorBase} ${Math.max(0, this.opacity)})`;
    ctx.fill();
    ctx.restore();
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const DarkArtsHero = () => {
  const canvasRef        = useRef(null);
  const mousePos         = useRef({ x: 0, y: 0 });
  const introOverlayRef  = useRef(null);
  const introGlowRef     = useRef(null);
  const contentRef       = useRef(null);
  const trailTimerRef    = useRef(null);

  // ── spawn cursor trail particles ─────────────────────────────────────────
  const spawnTrail = useCallback((x, y, trailPool) => {
    const p = trailPool.find(tp => !tp.active);
    if (p) p.spawn(x, y);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // pools
    let ambient = [];
    let trailPool = Array.from({ length: TRAIL_MAX }, () => new TrailParticle());
    let sparks = Array.from({ length: 60 }, () => new SparkParticle());

    let W, H, animId;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      // re-init ambient particles on resize
      ambient = [];
      AMBIENT_COUNTS.forEach((count, idx) => {
        const layer = idx + 1;
        for (let i = 0; i < count; i++) {
          const p = new AmbientParticle(layer, W, H);
          p.reset(true);
          ambient.push(p);
        }
      });
    };

    // ── main render loop ──────────────────────────────────────────────────
    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // ambient magical dust
      ambient.forEach(p => { p.update(mousePos.current.x, mousePos.current.y); p.draw(ctx); });

      // cursor trail
      trailPool.forEach(p => { p.update(); p.draw(ctx); });

      // click sparks
      sparks.forEach(p => { p.update(); p.draw(ctx); });

      animId = requestAnimationFrame(render);
    };

    // ── event handlers ────────────────────────────────────────────────────
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // throttle trail spawning to ~60fps max
      if (trailTimerRef.current) return;
      trailTimerRef.current = setTimeout(() => {
        spawnTrail(e.clientX, e.clientY, trailPool);
        // spawn 1-2 extras slightly offset for density
        if (Math.random() > 0.5) spawnTrail(e.clientX, e.clientY, trailPool);
        trailTimerRef.current = null;
      }, 16);
    };

    const onClick = (e) => {
      // burst 20–28 sparks at click origin
      const count = Math.floor(Math.random() * 8 + 20);
      let spawned = 0;
      sparks.forEach(sp => {
        if (!sp.active && spawned < count) { sp.spawn(e.clientX, e.clientY); spawned++; }
      });

      // ripple glow burst via gsap
      gsap.to(introGlowRef.current, {
        opacity: 0.35, scale: 1.1, duration: 0.25, ease: 'power2.out',
        onComplete: () => {
          gsap.to(introGlowRef.current, { opacity: 0, scale: 1, duration: 0.55, ease: 'power2.in' });
        }
      });
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    resize();
    render();

    // ── GSAP intro sequence ───────────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.to(introGlowRef.current, { opacity: 0.65, scale: 1.4, duration: 1.0, delay: 0.1 })
      .to(introGlowRef.current, { opacity: 0,    scale: 1.8, duration: 0.8 })
      .to(introOverlayRef.current, {
        opacity: 0, duration: 0.3,
        onComplete: () => { if (introOverlayRef.current) introOverlayRef.current.style.display = 'none'; }
      });

    // ── content entrance ──────────────────────────────────────────────────
    if (contentRef.current) {
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.3, ease: 'power3.out' }
      );
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(animId);
      clearTimeout(trailTimerRef.current);
      tl.kill();
    };
  }, [spawnTrail]);

  return (
    <div className="dark-hero-container" data-theme="dark">
      {/* 🔮 MAGICAL GLOW OVERLAY */}
      <div className="hero-intro-overlay" ref={introOverlayRef}>
        <div className="magical-glow-source" ref={introGlowRef} />
      </div>

      {/* 🏰 Castle Background */}
      <div className="castle-bg" style={{ backgroundImage: `url(${castleImg})` }} />

      {/* 🌫️ Atmospheric Fog Layers */}
      <div className="fog-layer fog-1" />
      <div className="fog-layer fog-2" />
      <div className="fog-layer fog-3" />

      {/* 🌘 Vignette */}
      <div className="vignette-overlay" />

      {/* 🌌 Multi-Layer Particle Canvas */}
      <canvas ref={canvasRef} className="particles-canvas" />

      {/* ✨ Ambient Glow Blobs */}
      <div className="ambient-blob blob-purple" />
      <div className="ambient-blob blob-blue" />
      <div className="ambient-blob blob-gold" />

      {/* 🧱 Hero Content */}
      <div className="hero-content" ref={contentRef}>
        <p className="hero-eyebrow">
          <span className="eyebrow-line" />
          WELCOME TO HOGWARTZ DIGITAL
          <span className="eyebrow-line" />
        </p>

        <div className="heading-wrapper">
          <h1 className="hero-heading">
            Where Creativity <br /><span className="gradient-text">Meets Growth</span>
          </h1>
          <div className="heading-glow-halo" />
        </div>

        <p className="hero-subheading">
          We help businesses grow through strategic marketing, modern technology, and creative digital experiences. From websites to branding and performance marketing, we transform ideas into measurable growth.
        </p>

        <div className="hero-cta-wrapper">
          <NavLink to="/contact" className="hero-cta-btn group">
            <span className="btn-shimmer" />
            <span className="btn-label">Start Your Journey</span>
            <ArrowRight className="btn-icon group-hover:translate-x-1 transition-transform" />
          </NavLink>

          <NavLink to="/projects" className="hero-ghost-btn">
            See Our Work
          </NavLink>
        </div>

        {/* Decorative stats band */}
        <div className="hero-stats">
          {[
            { value: '2025', label: 'Founded In' },
            { value: '4+', label: 'Clients Served' },
            { value: '4', label: 'Industries Served' },
          ].map(s => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-dot" />
        <span>Scroll to explore</span>
      </div>
    </div>
  );
};

export default DarkArtsHero;
