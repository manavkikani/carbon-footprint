import React, { useEffect, useState } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { ArrowRight, Leaf, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const { setAnimationMode, emissions } = useCarbonStore();
  const [subtextIndex, setSubtextIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const subtexts = [
    "Discover your personal impact zone.",
    "Small choices echo in the atmosphere.",
    "Empowering sustainable decisions daily."
  ];

  useEffect(() => {
    setAnimationMode('scroll');
    return () => setAnimationMode('loop');
  }, [setAnimationMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtextIndex((prev) => (prev + 1) % subtexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [subtexts.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const getGlowColor = () => {
    if (emissions < 30) return 'rgba(16, 185, 129, 0.5)';
    if (emissions > 70) return 'rgba(239, 68, 68, 0.5)';
    return 'rgba(245, 177, 11, 0.5)';
  };

  return (
    <div style={{ width: '100%', color: 'var(--text-main)', position: 'relative' }} onMouseMove={handleMouseMove}>
      
      {/* Readability Gradient */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'radial-gradient(circle at center, transparent 30%, rgba(5,5,5,0.8) 100%)',
        zIndex: -1, pointerEvents: 'none'
      }}></div>

      {/* Section 1: Hero */}
      <section style={{ 
        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        alignItems: 'center', textAlign: 'center', padding: '0 20px',
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '100px', marginBottom: '24px', backdropFilter: 'blur(10px)' }}>
          <Activity size={16} color={emissions > 70 ? 'var(--accent-red)' : 'var(--accent-green)'} />
          <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Live Global Carbon Level: {emissions} PPM</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', background: 'linear-gradient(135deg, #fff 0%, #888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', maxWidth: '900px', lineHeight: 1.2, padding: '0 20px' }}>
          Visualize Your Impact on Earth
        </h1>
        
        <div style={{ minHeight: '60px', marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '0 20px' }}>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--text-muted)', maxWidth: '600px', margin: 0,
            animation: 'fade-in 0.5s ease' 
          }} key={subtextIndex}>
            {subtexts[subtextIndex]}
          </p>
        </div>

        <Link to="/dashboard" className="glass-button" 
          style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem',
            boxShadow: `0 0 20px ${getGlowColor()}`,
          }}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 40px ${getGlowColor()}`}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${getGlowColor()}`}
        >
          Explore Your Impact <ArrowRight size={18} />
        </Link>
        <div style={{ position: 'absolute', bottom: '40px', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', animation: 'bounce 2s infinite' }}>
          Scroll to discover
        </div>
      </section>

      {/* Section 2: Dispersion begins */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
        <div className="glass-panel" style={{ padding: '40px', maxWidth: '650px' }}>
          <Leaf size={32} color="var(--accent-green)" style={{ marginBottom: '16px' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>The Unseen Reality</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            What starts as a solid foundation quickly disperses into the atmosphere. The footprint of our daily choices spreads far wider than we imagine, forming a chaotic cloud of emissions. Often, the decisions that seem minor have the most profound environmental ripple effects.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Transportation (28% of total)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Daily commutes, flights, and shipping infrastructure form the backbone of this growing cloud.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--accent-yellow)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Food Systems (26% of total)</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>What we consume dictats agricultural emissions, with certain diets generating drastically higher footprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Fragmented */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0 10%' }}>
        <div className="glass-panel" style={{ padding: '40px', maxWidth: '650px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--accent-red)', textAlign: 'right' }}>A Fragmented Ecosystem</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '24px', textAlign: 'right' }}>
            As emissions peak, our environmental stability shatters. The visualization you see isn't just art—it's a reflection of unchecked carbon accumulation based on live data and compounding degradation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '16px', borderRadius: '8px', borderRight: '4px solid var(--accent-red)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', textAlign: 'right' }}>The Compounding Effect</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'right' }}>When individual footprints overlap globally, they actively destabilize localized climate systems and weather patterns.</p>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '16px', borderRadius: '8px', borderRight: '4px solid var(--accent-red)' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', textAlign: 'right' }}>Biodiversity Threat</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'right' }}>At current trajectories, this fragmentation leads to irreversible habitat loss, threatening over one million species globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Informative Stats */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>The Global Challenge</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Understanding your footprint starts with understanding the scale of the global ecosystem. Action is impossible without awareness.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-red)', marginBottom: '8px' }}>36.8<span style={{ fontSize: '1.5rem' }}>Gt</span></h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Global CO₂ Emissions</h4>
            <p style={{ color: 'var(--text-muted)' }}>The total carbon dioxide emissions in 2023 hit a record high, driven primarily by fossil fuels.</p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-yellow)', marginBottom: '8px' }}>4.5<span style={{ fontSize: '1.5rem' }}>Tons</span></h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Average Individual</h4>
            <p style={{ color: 'var(--text-muted)' }}>The average global citizen generates 4.5 tons of CO₂ annually through transport, diet, and housing.</p>
          </div>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '3rem', color: 'var(--accent-green)', marginBottom: '8px' }}>-45<span style={{ fontSize: '1.5rem' }}>%</span></h3>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Target Reduction</h4>
            <p style={{ color: 'var(--text-muted)' }}>Global emissions need to fall by 45% by 2030 to limit warming to 1.5 degrees Celsius.</p>
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 10%' }}>
        <div className="glass-panel" style={{ padding: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <Leaf size={48} color="var(--accent-green)" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>How CarbonSense Works</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>1. Track & Log</h4>
                <p style={{ color: 'var(--text-muted)' }}>Log your daily activities ranging from commuting methods to dietary choices. Our app maps these entirely into continuous data.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>2. Live Visualization</h4>
                <p style={{ color: 'var(--text-muted)' }}>Watch the background footprint dynamically react to your overall state. Poor habits disperse the ecosystem—good habits stabilize it.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>3. Reduce & Connect</h4>
                <p style={{ color: 'var(--text-muted)' }}>Compare metrics with the community and engage in actionable paths toward bringing your environmental footprint into the green zone.</p>
              </li>
            </ul>
          </div>
          <Link to="/profile" style={{ height: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', transition: 'all 0.3s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-main)' }}>Your Timeline <ArrowRight size={20} style={{ display: 'inline', verticalAlign: 'middle' }} /></h3>
              <p style={{ color: 'var(--text-muted)' }}>Unlock detailed analytics and trends as you build out your profile over weeks and months of usage.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Section 4: Resolution */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>But It's Not Set in Stone.</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '40px' }}>
          Through conscious tracking and reduction, the particles can reform. Join the community to restore balance.
        </p>
        <Link to="/dashboard" className="glass-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.2rem', padding: '16px 32px' }}>
          Start Reducing <ArrowRight size={20} />
        </Link>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}} />
    </div>
  );
};

export default LandingPage;
