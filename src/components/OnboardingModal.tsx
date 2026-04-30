import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCarbonStore } from '../store/useCarbonStore';
import { Car, Utensils, ShoppingBag } from 'lucide-react';

const OnboardingModal: React.FC = () => {
  const { isInitialized, setIsInitialized, setHabits, setEmissions } = useCarbonStore();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    transport: 0,
    food: 0,
    shopping: 0,
  });

  const handleNext = (category: 'transport' | 'food' | 'shopping', value: number) => {
    setAnswers(prev => ({ ...prev, [category]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      finishOnboarding({ ...answers, [category]: value });
    }
  };

  const finishOnboarding = (finalAnswers: typeof answers) => {
    // Normalize to a 100% total baseline based on lifestyle
    // Let's say worst possible is 100%. 
    const totalScore = finalAnswers.transport + finalAnswers.food + finalAnswers.shopping;
    const maxScore = 40 + 40 + 20; // 100
    
    // We can define habits as the relative percentage of their total footprint
    const transportPercent = Math.round((finalAnswers.transport / totalScore) * 100);
    const foodPercent = Math.round((finalAnswers.food / totalScore) * 100);
    const shoppingPercent = 100 - transportPercent - foodPercent;

    setHabits({ transport: transportPercent, food: foodPercent, shopping: shoppingPercent });
    
    // Emissions is a 0-100 scale overall
    const overallEmissions = Math.round((totalScore / maxScore) * 100);
    setEmissions(overallEmissions);
    
    setIsInitialized(true);
  };

  if (isInitialized) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
      display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        style={{
          background: 'rgba(20,20,20,0.95)', border: '1px solid rgba(255,255,255,0.1)',
          padding: '40px', borderRadius: '24px', maxWidth: '500px', width: '90%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)', textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Let's Customize Your Experience</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>We need a few details to calculate your initial footprint.</p>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '50%', marginBottom: '16px' }}>
                <Car size={32} color="#eab308" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>How do you usually commute?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="glass-button" onClick={() => handleNext('transport', 40)}>Mostly drive alone (Car)</button>
                <button className="glass-button" onClick={() => handleNext('transport', 20)}>Public Transit / Rideshare</button>
                <button className="glass-button" onClick={() => handleNext('transport', 5)}>Walk / Bike / Remote Work</button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', marginBottom: '16px' }}>
                <Utensils size={32} color="#ef4444" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>What best describes your diet?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="glass-button" onClick={() => handleNext('food', 40)}>Meat with most meals</button>
                <button className="glass-button" onClick={() => handleNext('food', 25)}>Meat occasionally / Pescetarian</button>
                <button className="glass-button" onClick={() => handleNext('food', 10)}>Vegetarian / Vegan</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '16px' }}>
                <ShoppingBag size={32} color="#3b82f6" />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '24px' }}>What are your shopping habits?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button className="glass-button" onClick={() => handleNext('shopping', 20)}>Frequent fast fashion & new electronics</button>
                <button className="glass-button" onClick={() => handleNext('shopping', 10)}>Occasional treats</button>
                <button className="glass-button" onClick={() => handleNext('shopping', 5)}>Mostly second-hand / essential only</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === step ? 'var(--accent-green)' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingModal;
