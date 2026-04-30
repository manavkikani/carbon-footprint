import React, { useEffect, useState } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { Plane, Zap, TreePine, Sparkles, Send, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TrackPage: React.FC = () => {
  const { setAnimationMode, setEmissions, triggerBurst, logs, addLog } = useCarbonStore();
  
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  const handleAction = (action: string, value: number, type: 'add' | 'reduce', aiReasoning?: string) => {
    setEmissions((prev: number) => {
      let next = type === 'add' ? prev + value : prev - value;
      return Math.max(0, next);
    });
    triggerBurst();
    addLog({ id: Date.now(), action, value, type, aiReasoning });
  };

  const analyzeActivityWithAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    const text = inputText.toLowerCase();
    
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
              content: `You are a strict, analytical ecological impact analyzer. Evaluate the user's activity and return a JSON object with:
- "impactValue": a number (float or integer, e.g., 0.5, 12.4) representing the estimated actual footprint in kilograms (kg) of CO2 emitted or saved by this specific activity. Be scientifically accurate based on real-world averages (e.g., an average car emits ~0.4 kg CO2 per mile).
- "type": either "add" (for emissive actions like driving, meat, flights) or "reduce" (for positive actions like planting trees, biking instead of driving).
- "reasoning": a concise 1-sentence explanation of your mathematical logic and calculation.`
            },
            {
              role: 'user',
              content: text
            }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);

      handleAction(text, result.impactValue, result.type, result.reasoning);
    } catch (error: any) {
      console.error("AI Analysis failed:", error);
      handleAction(text, 5, 'add', `Fallback: Analysis failed. ${error.message || 'Standard footprint applied.'}`);
    } finally {
      setInputText('');
      setIsAnalyzing(false);
    }
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Log Your Activity</h1>
        <p style={{ color: 'var(--text-muted)' }}>Describe what you did today, and our AI will calculate the specific ecological impact.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
        
        {/* AI Analyzer Area */}
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-green)' }}>
              <BrainCircuit size={28} />
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>AI Context Analyzer</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Type freely. E.g., "I drove 20 miles to work" or "I ate a vegan lunch".</p>
            
            <form onSubmit={analyzeActivityWithAI} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What did you do..."
                disabled={isAnalyzing}
                style={{
                  width: '100%',
                  height: '120px',
                  padding: '16px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '12px',
                  color: 'var(--text-main)',
                  fontSize: '1.1rem',
                  resize: 'none',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
              <button 
                type="submit" 
                className="glass-button" 
                disabled={!inputText.trim() || isAnalyzing}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  background: inputText.trim() && !isAnalyzing ? 'var(--accent-green)' : 'rgba(255,255,255,0.05)',
                  color: inputText.trim() && !isAnalyzing ? '#000' : 'var(--text-muted)',
                  border: 'none',
                  padding: '16px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {isAnalyzing ? (
                  <><Sparkles className="animate-spin" size={20} /> Analyzing Context...</>
                ) : (
                  <><Send size={20} /> Evaluate Impact</>
                )}
              </button>
            </form>

            {isAnalyzing && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', color: 'var(--accent-green)' }}>
                  <BrainCircuit size={40} className="pulse" style={{ animation: 'bounce 1s infinite' }} />
                  <span style={{ fontWeight: 600, letterSpacing: '1px' }}>AI IS THINKING...</span>
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
             <div className="glass-panel" style={{ padding: '24px', background: 'rgba(239, 68, 68, 0.05)' }}>
               <h4 style={{ color: 'var(--accent-red)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><Plane size={16} /> Avoid</h4>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Flights, driving, heavy meat consumption.</p>
             </div>
             <div className="glass-panel" style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.05)' }}>
               <h4 style={{ color: 'var(--accent-green)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><TreePine size={16} /> Encourage</h4>
               <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Biking, planting trees, vegan diets, recycling.</p>
             </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="glass-panel" style={{ gridColumn: 'span 4', padding: '32px', height: '100%', minHeight: '500px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={20} color="var(--accent-yellow)" /> Recent Activity
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AnimatePresence>
              {logs.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0' }}>
                  No contextual records evaluated today.
                </motion.div>
              )}
              {logs.map(log => (
                <motion.div 
                  key={log.id}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  style={{ 
                    padding: '16px', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    borderRadius: '8px',
                    borderLeft: `4px solid ${log.type === 'add' ? (log.value > 10 ? 'var(--accent-red)' : 'var(--accent-yellow)') : 'var(--accent-green)'}`
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 500, fontSize: '0.95rem', fontStyle: 'italic', maxWidth: '80%' }}>"{log.action}"</span>
                    <span style={{ 
                      fontWeight: 700, 
                      color: log.type === 'add' ? (log.value > 10 ? 'var(--accent-red)' : 'var(--accent-yellow)') : 'var(--accent-green)'
                    }}>
                      {log.type === 'add' ? '+' : '-'}{Number(log.value).toFixed(2)}
                    </span>
                  </div>
                  {log.aiReasoning && (
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', paddingTop: '8px', borderTop: '1px dotted rgba(255,255,255,0.1)' }}>
                      <span style={{ color: 'var(--text-main)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginRight: '4px' }}>AI Logic:</span>
                      {log.aiReasoning}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrackPage;
