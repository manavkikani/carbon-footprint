import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarbonStore } from '../store/useCarbonStore';
import { Car, Utensils, ShoppingBag, CheckCircle, Info, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const CustomSlider = ({ value, onChange, color, icon: Icon, title }: any) => {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '10px', background: `${color}15`, borderRadius: '12px', color: color }}>
            <Icon size={20} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{title}</h3>
        </div>
        <div style={{ background: `${color}20`, color: color, padding: '4px 12px', borderRadius: '100px', fontWeight: 700 }}>
          -{value}%
        </div>
      </div>
      
      <div style={{ position: 'relative', height: '32px', display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <input 
          type="range" min="0" max="100" value={value} 
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ 
            width: '100%', 
            WebkitAppearance: 'none', 
            background: 'rgba(255,255,255,0.1)', 
            height: '8px', 
            borderRadius: '4px',
            outline: 'none',
            zIndex: 2,
            position: 'absolute'
          }}
        />
        <motion.div 
          style={{
            position: 'absolute',
            left: 0,
            height: '8px',
            background: color,
            borderRadius: '4px',
            width: `${value}%`,
            zIndex: 1,
            pointerEvents: 'none'
          }}
          layout
        />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>Current Sector Impact</span>
        <span>Goal: -{value}%</span>
      </div>
    </div>
  );
};

const SimulatorPage: React.FC = () => {
  const { habits, applySimulation, pendingSimulation, setPendingSimulation } = useCarbonStore();
  
  const [transportReduction, setTransportReduction] = useState(0);
  const [foodReduction, setFoodReduction] = useState(0);
  const [shoppingReduction, setShoppingReduction] = useState(0);
  const [applied, setApplied] = useState(false);
  
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiInsight, setAiInsight] = useState('');

  const currentTotal = habits.transport + habits.food + habits.shopping; // Should be 100
  const simulatedTransport = habits.transport * (1 - transportReduction / 100);
  const simulatedFood = habits.food * (1 - foodReduction / 100);
  const simulatedShopping = habits.shopping * (1 - shoppingReduction / 100);
  
  const simulatedTotal = simulatedTransport + simulatedFood + simulatedShopping;
  const reductionDifference = currentTotal - simulatedTotal; // Difference in percentage points
  const percentageReduction = currentTotal > 0 ? (reductionDifference / currentTotal) * 100 : 0;

  // Watch for manual changes to remove applied state
  useEffect(() => {
    setApplied(false);
  }, [transportReduction, foodReduction, shoppingReduction]);

  // Sync from AI Carbon Coach if a scenario was suggested
  useEffect(() => {
    if (pendingSimulation) {
      gsap.to({ t: transportReduction }, {
        t: pendingSimulation.transportReduction,
        duration: 1.5,
        onUpdate: function() { setTransportReduction(Math.round(this._targets[0].t)) }
      });
      gsap.to({ f: foodReduction }, {
        f: pendingSimulation.foodReduction,
        duration: 1.5,
        onUpdate: function() { setFoodReduction(Math.round(this._targets[0].f)) }
      });
      gsap.to({ s: shoppingReduction }, {
        s: pendingSimulation.shoppingReduction,
        duration: 1.5,
        onUpdate: function() { setShoppingReduction(Math.round(this._targets[0].s)) }
      });
      
      setAiInsight('Coach Recommendation Synchronized!');
      setPendingSimulation(null);
    }
  }, [pendingSimulation, setPendingSimulation]);

  const handleApply = () => {
    applySimulation(reductionDifference, `Simulated lifestyle changes applied`);
    setApplied(true);
    
    gsap.fromTo('.impact-card', 
      { scale: 0.95, opacity: 0.8 }, 
      { scale: 1, opacity: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' }
    );
  };

  const generateScenario = async () => {
    setIsAiLoading(true);
    setAiInsight('');
    
    try {
      const response = await fetch('https://models.inference.ai.azure.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are an AI Carbon Consultant. The user has a current breakdown footprint of: Transport (${habits.transport}%), Food (${habits.food}%), and Shopping (${habits.shopping}%).
Return a JSON object suggesting a realistic but highly impactful monthly lifestyle change scenario. Include:
- "title": A catchy title (e.g., "The Commuter's Diet").
- "transportReduction": Integer 0-100 (percentage to reduce).
- "foodReduction": Integer 0-100 (percentage to reduce).
- "shoppingReduction": Integer 0-100 (percentage to reduce).
- "reasoning": A 2-sentence encouraging explanation of why this specific blend is perfect for them.`
            }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) throw new Error("API call failed");

      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);

      // Animate sliders to new positions
      gsap.to({ t: transportReduction }, {
        t: result.transportReduction,
        duration: 1.5,
        onUpdate: function() { setTransportReduction(Math.round(this._targets[0].t)) }
      });
      gsap.to({ f: foodReduction }, {
        f: result.foodReduction,
        duration: 1.5,
        onUpdate: function() { setFoodReduction(Math.round(this._targets[0].f)) }
      });
      gsap.to({ s: shoppingReduction }, {
        s: result.shoppingReduction,
        duration: 1.5,
        onUpdate: function() { setShoppingReduction(Math.round(this._targets[0].s)) }
      });

      setAiInsight(`${result.title}: ${result.reasoning}`);

    } catch (error) {
      console.error(error);
      // Fallback if API fails
      setTransportReduction(40);
      setFoodReduction(20);
      setAiInsight("API Unavailable. Applied the 'Balanced Shift' scenario automatically.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div style={{ animation: 'fade-in 0.5s ease', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>What-If Simulator</h1>
          <p style={{ color: 'var(--text-muted)' }}>Drag the sliders to see how small lifestyle changes impact your footprint.</p>
        </div>
        <button 
          onClick={generateScenario}
          disabled={isAiLoading}
          style={{ 
            background: 'var(--accent-green)', 
            color: '#000', 
            border: 'none', 
            padding: '12px 24px', 
            borderRadius: '100px', 
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: isAiLoading ? 'default' : 'pointer',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)'
          }}
        >
          {isAiLoading ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
          AI Auto-Optimize
        </button>
      </header>

      <AnimatePresence>
        {aiInsight && (
          <motion.div 
            initial={{ opacity: 0, height: 0, scale: 0.9 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            style={{ marginBottom: '32px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '24px', borderRadius: '20px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
          >
            <Sparkles size={28} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '4px' }} />
            <div>
              <h4 style={{ color: 'var(--accent-green)', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 700 }}>AI Recommended Scenario</h4>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6 }}>{aiInsight}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
        {/* Left Side: Sliders */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <CustomSlider 
            title="Transport Emissions" 
            icon={Car} 
            color="#eab308" 
            value={transportReduction} 
            onChange={setTransportReduction} 
            currentVal={habits.transport} 
          />
          
          <CustomSlider 
            title="Food & Diet" 
            icon={Utensils} 
            color="#ef4444" 
            value={foodReduction} 
            onChange={setFoodReduction} 
            currentVal={habits.food} 
          />
          
          <CustomSlider 
            title="Shopping Habits" 
            icon={ShoppingBag} 
            color="#3b82f6" 
            value={shoppingReduction} 
            onChange={setShoppingReduction} 
            currentVal={habits.shopping} 
          />

        </div>

        {/* Right Side: Impact Visualization */}
        <div style={{ gridColumn: 'span 5' }}>
          <div className="glass-panel impact-card" style={{ 
            padding: '40px', 
            background: 'linear-gradient(145deg, rgba(30,30,30,0.6) 0%, rgba(10,10,10,0.9) 100%)', 
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'sticky',
            top: '120px'
          }}>
            
            <h2 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '2px' }}>Total Projected Savings</h2>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '40px', marginBottom: '32px', flexWrap: 'wrap' }}>
              <motion.span 
                key={percentageReduction}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '5rem', fontWeight: 800, lineHeight: 1, fontFamily: 'Outfit', color: 'var(--accent-green)' }}
              >
                -{percentageReduction.toFixed(1)}%
              </motion.span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600, letterSpacing: '1px', fontSize: '1.2rem' }}>FOOTPRINT</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>({reductionDifference.toFixed(1)} percentage points lower)</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>Current Baseline</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>100% <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>scale</span></div>
                </div>
                <ArrowRight size={24} color="var(--text-muted)" opacity={0.5} />
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '4px' }}>New Projected</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{(100 - percentageReduction).toFixed(1)}% <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>scale</span></div>
                </div>
              </div>

              <div style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '16px', border: '1px dashed rgba(16, 185, 129, 0.3)', display: 'flex', gap: '16px' }}>
                <Info size={24} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  That's a <strong style={{ color: 'var(--accent-green)', fontSize: '1.1rem' }}>{percentageReduction.toFixed(1)}% reduction</strong> in your footprint. 
                  This is equivalent to planting <strong>{Math.max(1, Math.round(reductionDifference / 2))} mature trees</strong> every single month!
                </span>
              </div>
            </div>

            <button 
              onClick={handleApply}
              disabled={reductionDifference === 0 || applied}
              style={{
                marginTop: '40px',
                width: '100%',
                padding: '20px',
                borderRadius: '16px',
                background: applied ? 'rgba(255,255,255,0.05)' : (reductionDifference > 0 ? 'var(--accent-green)' : 'rgba(255,255,255,0.05)'),
                color: applied ? 'var(--accent-green)' : (reductionDifference > 0 ? '#000' : 'var(--text-muted)'),
                border: applied ? '1px solid var(--accent-green)' : '1px solid transparent',
                fontSize: '1.2rem',
                fontWeight: 700,
                cursor: (reductionDifference === 0 || applied) ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: (reductionDifference > 0 && !applied) ? 'scale(1)' : 'scale(0.98)',
              }}
            >
               {applied ? <><CheckCircle size={24} /> Changes Active Globally</> : 'Lock In These Changes'}
            </button>
            
          </div>
        </div>
      </div>
      
      {/* Slider CSS fixes specifically for the custom slider layout */}
      <style dangerouslySetInnerHTML={{__html: `
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: 2px solid rgba(0,0,0,0.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.1s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
      `}} />
    </div>
  );
};

export default SimulatorPage;
