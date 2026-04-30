import React, { useEffect, useState } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { motion } from 'framer-motion';

const Gauge: React.FC = () => {
  const { emissions } = useCarbonStore();
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    // Smoothly animate the value
    const timer = setTimeout(() => setAnimatedValue(emissions), 50);
    return () => clearTimeout(timer);
  }, [emissions]);

  const getStatusColor = (value: number) => {
    if (value < 40) return 'var(--accent-green)'; // Green
    if (value < 70) return 'var(--accent-yellow)'; // Yellow
    return 'var(--accent-red)'; // Red
  };

  const getStatusText = (value: number) => {
    if (value < 40) return 'Healthy';
    if (value < 70) return 'Moderate';
    return 'Critical';
  };

  const color = getStatusColor(emissions);
  
  // SVG gauge calculations
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="glass-panel" style={{
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      height: '100%'
    }}>
      <h2 style={{ fontSize: '1.5rem', margin: 0, alignSelf: 'flex-start' }}>Emissions Level</h2>
      
      <div style={{ position: 'relative', width: '240px', height: '240px' }}>
        {/* Background Circle */}
        <svg width="240" height="240" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="120"
            cy="120"
            r={radius}
            stroke="var(--glass-border)"
            strokeWidth="16"
            fill="none"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="120"
            cy="120"
            r={radius}
            stroke={color}
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset, stroke: color }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>

        {/* Center Text */}
        <div style={{
          position: 'absolute',
          top: '0', left: '0', right: '0', bottom: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={animatedValue}
            style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}
          >
            {Math.round(animatedValue)}
          </motion.div>
          <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '4px' }}>kg CO₂</div>
          
          <motion.div 
            animate={{ backgroundColor: `${color}20`, color }}
            style={{ 
              marginTop: '12px',
              padding: '4px 12px', 
              borderRadius: '20px', 
              fontSize: '0.85rem',
              fontWeight: 600,
              border: `1px solid ${color}40`,
              color
            }}
          >
            {getStatusText(emissions)}
          </motion.div>
        </div>
      </div>
      
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
        Keep your emissions below 40 kg to maintain a healthy level.
      </p>
    </div>
  );
};

export default Gauge;
