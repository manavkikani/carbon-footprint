import React, { useState } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedGarden: React.FC<{ emissions: number }> = ({ emissions }) => {
  const pollutionRatio = Math.min(1, Math.max(0, emissions / 100));
  const skyL = Math.round(50 - pollutionRatio * 30);
  const skyS = Math.round(70 - pollutionRatio * 60);
  const skyH = Math.round(210 - pollutionRatio * 150);
  const skyColor = `hsl(${skyH}, ${skyS}%, ${skyL}%)`;

  const grassH = Math.round(130 - pollutionRatio * 100);
  const grassS = Math.round(70 - pollutionRatio * 55);
  const grassL = Math.round(35 - pollutionRatio * 20);
  const grassColor = `hsl(${grassH}, ${grassS}%, ${grassL}%)`;

  const leafH = Math.round(130 - pollutionRatio * 100);
  const leafS = Math.round(65 - pollutionRatio * 50);
  const leafL = Math.round(30 - pollutionRatio * 15);
  const leafColor = `hsl(${leafH}, ${leafS}%, ${leafL}%)`;

  const smogOpacity = pollutionRatio * 0.75;

  return (
    <div style={{
      width: '140px',
      height: '140px',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
      flexShrink: 0,
      backgroundColor: skyColor,
      transition: 'background-color 3s ease',
      border: `2px solid ${emissions > 70 ? 'rgba(239,68,68,0.5)' : emissions < 30 ? 'rgba(16,185,129,0.5)' : 'rgba(245,177,11,0.4)'}`,
      boxShadow: `0 0 20px ${emissions > 70 ? 'rgba(239,68,68,0.3)' : emissions < 30 ? 'rgba(16,185,129,0.3)' : 'rgba(245,177,11,0.2)'}`,
    }}>
      {/* Sun */}
      <motion.div
        animate={{ opacity: emissions > 70 ? 0.15 : 1, scale: emissions > 70 ? 0.5 : 1 }}
        transition={{ duration: 2.5 }}
        style={{
          position: 'absolute', top: 10, right: 12,
          width: 22, height: 22, borderRadius: '50%',
          background: emissions > 70 ? '#777' : '#FFD700',
          boxShadow: emissions > 70 ? 'none' : '0 0 16px #FFD70090',
        }}
      />

      {/* Smog */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '55%',
        background: `rgba(70, 50, 40, ${smogOpacity})`,
        transition: 'background 3s ease',
        pointerEvents: 'none',
      }} />

      {/* Clouds */}
      <motion.div
        animate={{ x: [0, 10, 0], opacity: emissions > 70 ? 0.2 : 0.95 }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 16, left: 6, display: 'flex', gap: 3 }}
      >
        {[14, 22, 14].map((w, i) => (
          <div key={i} style={{ width: w, height: 10, borderRadius: '50%', background: emissions > 70 ? 'rgba(90,80,70,0.5)' : 'white' }} />
        ))}
      </motion.div>

      {/* Ground */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '44%',
        background: grassColor,
        transition: 'background 3s ease',
        borderRadius: '0 0 18px 18px',
      }} />

      {/* 3 Trees */}
      {[12, 50, 90].map((left, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', bottom: '43%', left, transformOrigin: 'bottom center' }}
          animate={{ scaleY: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 + i * 0.7, ease: 'easeInOut' }}
        >
          <div style={{ width: 5, height: 20, background: emissions > 70 ? '#4a3020' : '#6B4226', margin: '0 auto', transition: 'background 3s ease' }} />
          <div style={{ width: 24, height: 26, borderRadius: '50% 50% 40% 40%', background: leafColor, transition: 'background 3s ease', marginLeft: -10, marginTop: -4 }} />
        </motion.div>
      ))}

      {/* Smoke particles (high emission) */}
      {emissions > 50 && [8, 40, 72, 24, 58].map((left, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -55], opacity: [0.8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 + i * 0.35, delay: i * 0.25, ease: 'easeOut' }}
          style={{ position: 'absolute', bottom: '43%', left, width: 5, height: 5, borderRadius: '50%', background: 'rgba(110, 70, 50, 0.9)' }}
        />
      ))}

      {/* Green sparkles (low emission) */}
      {emissions < 40 && [14, 50, 90, 30, 70].map((left, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -22, 0], opacity: [0, 1, 0], scale: [0.4, 1.4, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.2 + i * 0.3, delay: i * 0.45 }}
          style={{ position: 'absolute', bottom: '48%', left, width: 5, height: 5, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }}
        />
      ))}
    </div>
  );
};

const CarbonTwin: React.FC = () => {
  const { emissions } = useCarbonStore();
  const [sliderVal, setSliderVal] = useState(50);

  const getEmissionsColor = () => {
    if (emissions < 30) return 'var(--accent-green)';
    if (emissions > 70) return 'var(--accent-red)';
    return 'var(--accent-yellow)';
  };

  const getTwinState = () => {
    if (emissions > 70) return 'Critical Mode';
    if (emissions < 30) return 'Harmonious';
    return 'Neutral State';
  };

  const getTwinMessage = () => {
    if (emissions > 70) return 'Your environment is highly polluted. The garden is withering. Take action to clear the fog.';
    if (emissions < 30) return 'Your twin is thriving! The garden is lush, clean, and stable.';
    return "Your twin's environment is moderately balanced, but the garden could be greener.";
  };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        border: `1px solid ${getEmissionsColor()}40`,
        boxShadow: `0 8px 32px ${getEmissionsColor()}15`,
        background: 'linear-gradient(145deg, rgba(30,30,30,0.1) 0%, rgba(10,10,10,0.4) 100%)',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2rem', margin: '0 0 10px 0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            Carbon Twin
            <span style={{
              fontSize: '1rem', padding: '5px 14px',
              background: `${getEmissionsColor()}20`,
              color: getEmissionsColor(),
              borderRadius: '100px',
              border: `1px solid ${getEmissionsColor()}50`,
            }}>
              {getTwinState()}
            </span>
          </h2>
          <motion.p
            key={getTwinState()}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7 }}
          >
            {getTwinMessage()}
          </motion.p>
        </div>

        {/* Garden */}
        <AnimatedGarden emissions={emissions} />
      </div>

      {/* Timeline Slider */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
          <span>📜 Past Footprint</span>
          <span style={{ color: sliderVal === 50 ? getEmissionsColor() : 'inherit' }}>⚡ Live Now</span>
          <span>🔮 Projected Future</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderVal}
          onChange={(e) => setSliderVal(parseInt(e.target.value))}
          style={{ width: '100%', accentColor: getEmissionsColor(), cursor: 'pointer', height: '6px' }}
        />
        <AnimatePresence>
          {sliderVal !== 50 && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              style={{
                margin: 0, fontSize: '0.82rem', textAlign: 'center',
                color: 'var(--text-muted)',
                background: 'rgba(0,0,0,0.4)',
                padding: '6px 12px', borderRadius: '8px',
                border: '1px solid var(--glass-border)',
              }}
            >
              {sliderVal < 50
                ? '⏪ Time-travel active: Viewing historical footprint state...'
                : '🤖 Predictive AI: Projecting future state based on current habits...'}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarbonTwin;
