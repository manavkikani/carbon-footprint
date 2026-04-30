import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarbonStore } from '../store/useCarbonStore';
import { X, Send, Bot, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  actionType?: 'transport' | 'food' | 'general';
}

const CarbonCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const { habits, emissions, logs } = useCarbonStore();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'ai',
          text: `Hi! I'm your AI Carbon Coach. I've analyzed your current footprint (${emissions.toFixed(1)} kg) and habits. How can I help you reduce it today?`
        }
      ]);
    }
  }, [isOpen]);

  const generateAIResponse = async (userText: string) => {
    setIsTyping(true);
    
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
              content: `You are an AI Carbon Coach helping the user reduce their carbon footprint.
Their current emissions score: ${emissions.toFixed(1)}%.
Habits breakdown: Transport = ${habits.transport}%, Food = ${habits.food}%, Shopping = ${habits.shopping}%.
Recent activity log: ${logs.map(l => l.action).join(', ') || 'None yet'}.
Provide a short, specific, encouraging, actionable tip (1-2 sentences).
Return a JSON object with: 
- "text": string (your advice), 
- "actionType": "transport" | "food" | "general",
- "transportReduction": integer 0-100 (suggested % reduction if applicable, else 0)
- "foodReduction": integer 0-100 (suggested % reduction if applicable, else 0)
- "shoppingReduction": integer 0-100 (suggested % reduction if applicable, else 0)`
            },
            { role: 'user', content: userText }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) throw new Error("API call failed");

      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'ai',
        text: result.text,
        actionType: (['transport', 'food'].includes(result.actionType) ? result.actionType : 'general')
      }]);

      if (['transport', 'food'].includes(result.actionType) && 
          (result.transportReduction > 0 || result.foodReduction > 0 || result.shoppingReduction > 0)) {
        useCarbonStore.getState().setPendingSimulation({
          transportReduction: result.transportReduction || 0,
          foodReduction: result.foodReduction || 0,
          shoppingReduction: result.shoppingReduction || 0
        });
      }
    } catch (error) {
      console.error(error);
      // Fallback
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'ai',
        text: "I'm having trouble connecting to my brain right now, but looking at your stats, finding sustainable alternatives in your highest category makes a huge difference."
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue
    }]);
    
    generateAIResponse(inputValue);
    setInputValue('');
  };

  const quickAction = (action: string) => {
    setInputValue(action);
    handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '64px',
          height: '64px',
          borderRadius: '32px',
          background: 'var(--accent-green)',
          color: '#000',
          border: 'none',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.4)',
          display: isOpen ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          zIndex: 100
        }}
      >
        <Bot size={32} />
      </motion.button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } }}
            style={{
              position: 'fixed',
              bottom: '32px',
              right: '32px',
              width: '380px',
              height: '600px',
              maxHeight: '80vh',
              background: 'rgba(20, 20, 20, 0.85)',
              backdropFilter: 'var(--glass-blur)',
              border: '1px solid var(--glass-border)',
              borderRadius: '24px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: 'var(--accent-green)', color: '#000', padding: '8px', borderRadius: '50%' }}>
                  <Bot size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0 }}>AI Coach</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)' }}>● Online</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {messages.map(msg => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}
                >
                  <div style={{ 
                    maxWidth: '80%', 
                    padding: '12px 16px', 
                    borderRadius: '16px', 
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '16px',
                    background: msg.sender === 'user' ? 'var(--accent-green)' : 'rgba(255,255,255,0.05)',
                    color: msg.sender === 'user' ? '#000' : 'var(--text-main)',
                    fontSize: '0.95rem',
                    lineHeight: 1.5
                  }}>
                    {msg.text}
                  </div>
                  
                  {msg.sender === 'ai' && msg.actionType && (
                    <button 
                      onClick={() => { setIsOpen(false); navigate('/simulate'); }}
                      style={{ 
                        marginTop: '8px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', 
                        border: '1px solid rgba(16, 185, 129, 0.2)', padding: '6px 12px', borderRadius: '100px', 
                        fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' 
                      }}
                    >
                      <Zap size={14} /> Open Simulator <ArrowRight size={14} />
                    </button>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', borderBottomLeftRadius: '4px', alignSelf: 'flex-start' }}>
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: 6, height: 6, background: 'var(--text-muted)', borderRadius: '50%' }} />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: 6, height: 6, background: 'var(--text-muted)', borderRadius: '50%' }} />
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: 6, height: 6, background: 'var(--text-muted)', borderRadius: '50%' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div style={{ padding: '0 20px 12px', display: 'flex', gap: '8px', overflowX: 'auto' }}>
              <button onClick={() => quickAction("Reduce transport")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer' }}>Reduce transport</button>
              <button onClick={() => quickAction("Improve diet")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer' }}>Improve diet</button>
              <button onClick={() => quickAction("What's worst?")} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.8rem', whiteSpace: 'nowrap', cursor: 'pointer' }}>What's worst?</button>
            </div>

            {/* Input */}
            <div style={{ padding: '16px', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)', display: 'flex', gap: '12px' }}>
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask for advice..."
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', padding: '12px 16px', borderRadius: '12px', outline: 'none' }}
              />
              <button 
                onClick={() => { quickAction(inputValue); setInputValue('') }}
                disabled={!inputValue.trim()}
                style={{ background: inputValue.trim() ? 'var(--accent-green)' : 'rgba(255,255,255,0.05)', color: inputValue.trim() ? '#000' : 'var(--text-muted)', border: 'none', width: '48px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: inputValue.trim() ? 'pointer' : 'default', transition: 'all 0.2s' }}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CarbonCoach;
