import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useCarbonStore } from '../store/useCarbonStore';
import { useAuthStore } from '../store/useAuthStore';
import { Award, TrendingDown, Leaf, Zap, Trees, Route, ShieldCheck, Star } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { setAnimationMode, emissions, initialEmission, logs } = useCarbonStore();
  const { user, startingAge } = useAuthStore();
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const chartWidth = 800;
  const chartHeight = 250;
  const chartPaddingX = 60;
  const chartPaddingY = 40;
  const innerWidth = chartWidth - chartPaddingX * 2;
  const innerHeight = chartHeight - chartPaddingY * 2;

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  const startAge = startingAge || 25;
  const initVal = initialEmission ?? Math.min(95, emissions + 20); // fallback if missing
  
  // Create 6 data points from starting age to current
  const dataPointsCount = 6;
  const historicalData = Array.from({ length: dataPointsCount }).map((_, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === dataPointsCount - 1;
    const progress = idx / (dataPointsCount - 1);
    const simulatedVal = initVal - (initVal - emissions) * progress;
    
    // Add some random noise to intermediate points for realism, unless it's first or last
    const noise = (!isFirst && !isLast) ? (Math.random() * 4 - 2) : 0;
    
    return {
      label: isFirst ? `Age ${startAge}` : isLast ? 'Current' : `Age ${startAge + idx}`,
      val: isLast ? emissions : Math.round(Math.max(0, simulatedVal + noise))
    };
  });

  const maxDataVal = Math.max(...historicalData.map(d => d.val));
  const chartMax = Math.max(100, Math.ceil(maxDataVal / 50) * 50);

  const points = historicalData.map((data, i) => {
    return {
      x: chartPaddingX + (i * innerWidth) / (Math.max(1, historicalData.length - 1)),
      y: chartPaddingY + innerHeight - (data.val / chartMax) * innerHeight,
      val: data.val,
      label: data.label
    };
  });

  const makePath = (pts: any[]) => {
    if (pts.length === 0) return '';
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const xMid = (p1.x + p2.x) / 2;
        d += ` C ${xMid},${p1.y} ${xMid},${p2.y} ${p2.x},${p2.y}`;
    }
    return d;
  };

  const linePath = makePath(points);
  const areaPath = points.length > 0 ? `${linePath} L ${points[points.length-1].x},${chartHeight - chartPaddingY + 30} L ${points[0].x},${chartHeight - chartPaddingY + 30} Z` : '';

  const badges = [
    { id: 1, title: 'First Steps', icon: Route, color: '#3b82f6', desc: 'Logged your first eco-action' },
    { id: 2, title: 'Eco Warrior', icon: ShieldCheck, color: '#10b981', desc: 'Maintained a 7-day green streak' },
    { id: 3, title: 'Meatless Week', icon: Leaf, color: '#f59e0b', desc: 'Reduced food emissions by 50%' },
    { id: 4, title: 'Zero Commute', icon: Zap, color: '#8b5cf6', desc: 'Worked remotely for 5 days' },
  ];

  const getRank = () => {
    if (emissions <= 30) return 'Climate Champion';
    if (emissions <= 60) return 'Eco Conscious';
    return 'Journey Beginner';
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      style={{ paddingBottom: '100px' }}
    >
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Your Eco-Profile</h1>
          <p style={{ color: 'var(--text-muted)' }}>Track your progress and showcase your environmental achievements.</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
        
        {/* User Stats Overview */}
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', alignItems: 'center', gap: '24px', background: 'linear-gradient(145deg, rgba(30,30,30,0.4) 0%, rgba(10,10,10,0.8) 100%)' }}>
            <div style={{ position: 'relative' }}>
              <img src={user?.avatar || 'https://via.placeholder.com/80'} alt="Avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '2px solid var(--accent-green)' }} />
              <div style={{ position: 'absolute', bottom: -5, right: -5, background: 'var(--accent-green)', borderRadius: '50%', padding: '4px', color: '#000' }}>
                <Star size={16} fill="currentColor" />
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>{user?.name || 'Explorer'}</h2>
              <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>{getRank()}</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: 'var(--accent-green)' }}>
                <Trees size={24} />
              </div>
              <span style={{ color: 'var(--text-muted)' }}>Equivalent Trees Planted</span>
            </div>
            <h3 style={{ fontSize: '2.5rem', margin: 0 }}>{Math.max(0, Math.round((100 - emissions) / 2))}</h3>
          </div>

          <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: '#3b82f6' }}>
                <TrendingDown size={24} />
              </div>
              <span style={{ color: 'var(--text-muted)' }}>Total Actions Logged</span>
            </div>
            <h3 style={{ fontSize: '2.5rem', margin: 0 }}>{logs.length}</h3>
          </div>

        </motion.div>

        {/* Dynamic Chart - Redesigned */}
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 8' }} className="glass-panel">
          <div style={{ padding: '32px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', margin: 0 }}>Lifetime Emissions Level</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, marginTop: '4px' }}>Journey since Age {startAge}</p>
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-green)', background: 'rgba(16, 185, 129, 0.1)', padding: '6px 16px', borderRadius: '100px', fontWeight: 600, border: '1px solid rgba(16, 185, 129, 0.2)' }}>On Track</span>
          </div>
          
          <div style={{ padding: '24px 0', position: 'relative', width: '100%', height: '350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0.0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Grid Lines */}
              {[0, 0.5, 1].map((ratio) => {
                const y = chartPaddingY + innerHeight * ratio;
                const value = Math.round(chartMax - (chartMax * ratio));
                return (
                  <g key={ratio}>
                    <line 
                      x1={chartPaddingX} 
                      y1={y} 
                      x2={chartWidth - chartPaddingX + 20} 
                      y2={y} 
                      stroke="rgba(255,255,255,0.05)" 
                      strokeDasharray="4 4" 
                    />
                    <text x={chartPaddingX - 15} y={y + 4} fill="var(--text-muted)" fontSize="13" textAnchor="end">
                      {value}
                    </text>
                  </g>
                );
              })}

              {/* Area */}
              <motion.path
                d={areaPath}
                fill="url(#areaGradient)"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              />

              {/* Line */}
              <motion.path
                d={linePath}
                fill="none"
                stroke="var(--accent-green)"
                strokeWidth="4"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Points */}
              {points.map((pt, i) => {
                const isHovered = hoveredPoint === i;
                return (
                  <g key={i}>
                    {/* Label */}
                    <text 
                      x={pt.x} 
                      y={chartHeight - chartPaddingY + 30} 
                      fill={pt.label === 'Current' ? '#fff' : 'var(--text-muted)'} 
                      fontSize="14" 
                      fontWeight={pt.label === 'Current' ? 600 : 400}
                      textAnchor="middle"
                    >
                      {pt.label}
                    </text>

                    {/* Interactive Point (invisible, for larger hit area) */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="20"
                      fill="transparent"
                      onMouseEnter={() => setHoveredPoint(i)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      style={{ cursor: 'pointer' }}
                    />

                    {/* Visible Point */}
                    <motion.circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 8 : pt.label === 'Current' ? 6 : 4}
                      fill="#111"
                      stroke={pt.label === 'Current' ? 'var(--accent-green)' : '#fff'}
                      strokeWidth={isHovered ? 4 : 2}
                      filter={isHovered || pt.label === 'Current' ? "url(#glow)" : ""}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + i * 0.1, type: "spring" }}
                      style={{ pointerEvents: 'none' }}
                    />
                    
                    {/* Tooltip */}
                    {isHovered && (
                      <g style={{ pointerEvents: 'none' }}>
                        <rect 
                          x={pt.x - 35} 
                          y={pt.y - 50} 
                          width="70" 
                          height="32" 
                          rx="8" 
                          fill="rgba(10,10,10,0.9)" 
                          stroke="var(--glass-border)"
                        />
                        <text 
                          x={pt.x} 
                          y={pt.y - 29} 
                          fill="#fff" 
                          fontSize="14" 
                          fontWeight="700" 
                          textAnchor="middle"
                        >
                          {pt.val}%
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants} style={{ gridColumn: 'span 4' }} className="glass-panel">
          <div style={{ padding: '32px', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award color="var(--accent-green)" />
            <h3 style={{ fontSize: '1.4rem' }}>Badges</h3>
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '350px', overflowY: 'auto' }}>
            {badges.map((badge, idx) => {
              return (
                <motion.div 
                  key={badge.id}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  style={{ 
                    padding: '16px', 
                    borderRadius: '16px', 
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ padding: '12px', background: `${badge.color}15`, borderRadius: '12px', color: badge.color }}>
                    <badge.icon size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>{badge.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{badge.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ProfilePage;

