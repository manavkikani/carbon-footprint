import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCarbonStore } from '../store/useCarbonStore';

const DailyTimelineChart: React.FC = () => {
  const { emissions } = useCarbonStore();
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Chart dimensions
  const width = 800;
  const height = 400;
  const paddingX = 60;
  const paddingY = 40;
  const innerWidth = width - paddingX * 2;
  const innerHeight = height - paddingY * 2;

  // Mock data representing hours on Y and emissions on X
  const mockData = [
    { hour: 0, emission: emissions * 0.1 },
    { hour: 4, emission: emissions * 0.15 },
    { hour: 8, emission: emissions * 0.4 },
    { hour: 12, emission: emissions * 0.8 },
    { hour: 16, emission: emissions * 0.6 },
    { hour: 20, emission: emissions * 0.85 },
    { hour: 24, emission: emissions }
  ];

  const maxX = Math.max(100, Math.ceil(emissions / 20) * 20);

  // Map to points (X = hour, Y = emission)
  const points = mockData.map(d => ({
    x: paddingX + (d.hour / 24) * innerWidth,
    y: paddingY + innerHeight - (d.emission / maxX) * innerHeight,
    hour: d.hour,
    emission: Math.round(d.emission)
  }));

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
  
  // Area goes from the line down to the X-axis (y = paddingY + innerHeight)
  const areaPath = points.length > 0 ? `${linePath} L ${points[points.length-1].x},${paddingY + innerHeight} L ${points[0].x},${paddingY + innerHeight} Z` : '';

  return (
    <div className="glass-panel" style={{ width: '100%', padding: '32px', position: 'relative' }}>
      <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', margin: 0 }}>Daily Timeline Graph</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, marginTop: '4px' }}>
            Hours on X-Axis, Emissions on Y-Axis
          </p>
        </div>
      </div>

      <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center' }}>
        <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--accent-red)" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glowChart" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid Lines for Emissions (Y Axis) */}
          {[0, maxX / 2, maxX].map((e) => {
            const yPos = paddingY + innerHeight - (e / maxX) * innerHeight;
            return (
              <g key={`yE-${e}`}>
                <line
                  x1={paddingX}
                  y1={yPos}
                  x2={width - paddingX}
                  y2={yPos}
                  stroke="rgba(255,255,255,0.05)"
                  strokeDasharray="4 4"
                />
                <text x={paddingX - 15} y={yPos + 4} fill="var(--text-muted)" fontSize="12" textAnchor="end">
                  {e} kg
                </text>
              </g>
            );
          })}

          {/* Grid Lines for Hours (X Axis) */}
          {[0, 6, 12, 18, 24].map((h) => {
            const xPos = paddingX + (h / 24) * innerWidth;
            return (
              <g key={`xH-${h}`}>
                <line 
                  x1={xPos} 
                  y1={paddingY} 
                  x2={xPos} 
                  y2={height - paddingY} 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeDasharray="4 4" 
                />
                <text x={xPos} y={height - paddingY + 20} fill="var(--text-muted)" fontSize="12" textAnchor="middle">
                  {h}:00
                </text>
              </g>
            );
          })}

          {/* Area */}
          <motion.path
            d={areaPath}
            fill="url(#areaGrad)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />

          {/* Path */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="var(--accent-red)"
            strokeWidth="4"
            filter="url(#glowChart)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Points */}
          {points.map((pt, i) => {
            const isHovered = hoveredPoint === i;
            return (
              <g key={i}>
                {/* Hit area */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r="20"
                  fill="transparent"
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  style={{ cursor: 'pointer' }}
                />

                <motion.circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 8 : 4}
                  fill="#111"
                  stroke={isHovered ? 'var(--accent-red)' : '#fff'}
                  strokeWidth="2"
                  filter={isHovered ? "url(#glowChart)" : ""}
                  style={{ pointerEvents: 'none' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + i * 0.1, type: "spring" }}
                />

                {/* Tooltip */}
                {isHovered && (
                  <g style={{ pointerEvents: 'none' }}>
                    <rect 
                      x={pt.x - 37} 
                      y={pt.y - 45} 
                      width="75" 
                      height="30" 
                      rx="8" 
                      fill="rgba(10,10,10,0.9)" 
                      stroke="var(--glass-border)"
                    />
                    <text 
                      x={pt.x} 
                      y={pt.y - 26} 
                      fill="#fff" 
                      fontSize="12" 
                      fontWeight="600" 
                      textAnchor="middle"
                    >
                      {pt.emission} kg
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default DailyTimelineChart;
