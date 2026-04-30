import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { useCarbonStore } from '../store/useCarbonStore';
import { Loader2, ArrowRight, ArrowLeft } from 'lucide-react';

const categories = [
  {
    id: 'transport',
    title: 'Transport',
    questions: [
      { id: 'transport_mode', query: 'Primary transport mode?', options: ['Car (Gasoline)', 'Car (Electric)', 'Public Transit', 'Walk/Bike'] },
      { id: 'travel_distance', query: 'Daily travel distance?', options: ['Under 10 miles', '10 - 30 miles', 'Over 30 miles'] },
      { id: 'car_frequency', query: 'Car usage frequency?', options: ['Daily', 'Few times a week', 'Rarely/Never'] },
      { id: 'flight_frequency', query: 'Flight frequency?', options: ['Multiple per year', 'Once a year', 'Rarely/Never'] }
    ]
  },
  {
    id: 'food',
    title: 'Food',
    questions: [
      { id: 'diet_type', query: 'What best describes your diet?', options: ['Meat-heavy', 'Average Meat', 'Vegetarian', 'Vegan'] },
      { id: 'meat_frequency', query: 'Meat consumption frequency?', options: ['Every meal', 'Most days', 'Rarely', 'Never'] },
      { id: 'food_delivery', query: 'Food delivery frequency?', options: ['Daily', 'Weekly', 'Rarely/Never'] }
    ]
  },
  {
    id: 'shopping',
    title: 'Shopping',
    questions: [
      { id: 'shopping_frequency', query: 'Shopping frequency (new clothes/gadgets)?', options: ['Frequently', 'Occasionally', 'Rarely'] },
      { id: 'product_preference', query: 'Product preference?', options: ['Mostly Imported', 'Mix', 'Mostly Local/Sustainable'] }
    ]
  },
  {
    id: 'energy',
    title: 'Energy',
    questions: [
      { id: 'ac_usage', query: 'AC/Heating usage hours?', options: ['Most of the day', 'Only when necessary', 'Rarely used'] },
      { id: 'household_size', query: 'Household size?', options: ['Lives alone', '2-3 people', '4+ people'] }
    ]
  },
  {
    id: 'digital',
    title: 'Digital',
    questions: [
      { id: 'screen_time', query: 'Average screen time outside work?', options: ['6+ hours', '3-5 hours', 'Under 2 hours'] },
      { id: 'streaming_frequency', query: 'Streaming/Gaming frequency?', options: ['Daily (Heavy)', 'Moderate', 'Light/None'] }
    ]
  },
  {
    id: 'awareness',
    title: 'Awareness',
    questions: [
      { id: 'effort', query: 'Effort toward reducing footprint?', options: ['Always trying', 'Sometimes', 'Not really'] }
    ]
  },
  {
    id: 'demographics',
    title: 'Profile Basics',
    questions: [
      { id: 'starting_age', query: 'At what age are you starting to monitor your footprint?', options: [], type: 'number_input' }
    ]
  }
];

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const navigate = useNavigate();
  const { setOnboardingCompleted, setStartingAge } = useAuthStore();
  const { setEmissions, setInitialEmission } = useCarbonStore();

  const handleSelect = (questionId: string, option: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleNext = async () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      await calculateFootprint();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const finishFlow = () => {
    setOnboardingCompleted(true);
    navigate('/dashboard');
  };

  const skipFlow = () => {
    setEmissions(15);
    finishFlow();
  };

  const calculateFootprint = async () => {
    setIsCalculating(true);
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
              content: `You are an expert environmental data analyzer. Given the user's detailed habits across 6 categories, calculate their estimated average daily carbon footprint in kilograms of CO2 (kg CO2). Respond with ONLY a JSON object containing {"score": <number_value>}, and nothing else. The global average is around 10-15 kg CO2 per day.`
            },
            {
              role: 'user',
              content: JSON.stringify(answers)
            }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) throw new Error("API failed");
      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);
      
      const score = Number(result.score) || 15;
      setEmissions(score);
      setInitialEmission(score);
      
      const parsedAge = parseInt(answers['starting_age'], 10);
      setStartingAge(isNaN(parsedAge) ? 25 : parsedAge);

      setFinalScore(score);

    } catch (err) {
      console.error(err);
      setEmissions(15);
      setInitialEmission(15);
      setStartingAge(25);
      setFinalScore(15);
    } finally {
      setIsCalculating(false);
    }
  };

  if (isCalculating) {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle at 50% 50%, #1a362a 0%, #050505 80%)', color: 'var(--text-main)' }}>
        <motion.div
           animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], rotate: [0, 90, 180] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           style={{ marginBottom: '32px' }}
        >
          <Loader2 size={80} color="var(--accent-green)" />
        </motion.div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '2px' }}>Calculating Flow...</h2>
        <p style={{ color: 'var(--accent-green)', marginTop: '12px', fontSize: '1.1rem', opacity: 0.8 }}>Using deep learning to index your lifestyle.</p>
      </div>
    );
  }

  if (finalScore !== null) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.2), rgba(5,5,5,1) 80%)', color: 'var(--text-main)', padding: '24px', textAlign: 'center' }}>
        <motion.div
           key="result-circle"
           initial={{ scale: 0, opacity: 0, rotate: 0 }}
           animate={{ scale: 1, opacity: 1, rotate: 0 }}
           transition={{ type: 'spring', duration: 1 }}
           style={{ background: 'rgba(16, 185, 129, 0.1)', border: '2px solid var(--accent-green)', borderRadius: '50%', width: '160px', height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 0 40px rgba(16,185,129,0.4)' }}
        >
          <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--accent-green)', lineHeight: 1 }}>{finalScore}</span>
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px' }}>kg CO₂/day</span>
        </motion.div>
        
        <h2 style={{ fontSize: '3rem', fontWeight: 300, marginBottom: '16px' }}>Your Daily Baseline</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', lineHeight: 1.6, marginBottom: '40px' }}>
          Based on your choices, we estimate your starting target footprint to be <strong style={{ color: 'var(--text-main)' }}>{finalScore} kg CO₂</strong> per day. Now it's time to reduce it!
        </p>

        <button 
          onClick={finishFlow}
          style={{ background: 'var(--accent-green)', color: '#000', border: 'none', padding: '16px 40px', borderRadius: '100px', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Start Tracking
        </button>
      </div>
    );
  }

  const progress = ((currentStep + 1) / categories.length) * 100;
  const currentCategory = categories[currentStep];
  
  // Verify all questions in this category are answered
  const isCategoryComplete = currentCategory.questions.every(q => answers[q.id]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      background: 'radial-gradient(ellipse at 50% 0%, rgba(16, 185, 129, 0.15), rgba(5,5,5,1) 70%)', 
      color: 'var(--text-main)', 
      padding: '24px',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      {/* Dynamic ambient mesh overlays */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: 0, left: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} 
      />

      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ width: '70%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', overflow: 'hidden', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.5)' }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)', boxShadow: '0 0 10px rgba(16,185,129,0.5)' }}
            />
          </div>
          <button 
            onClick={skipFlow}
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem', padding: '8px 16px', borderRadius: '100px', transition: 'all 0.2s', backdropFilter: 'blur(10px)' }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Skip for now
          </button>
        </div>

        {/* Content area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', maxWidth: '700px', margin: '0 auto', width: '100%' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%', paddingBottom: '100px' }}
            >
              <span style={{ color: 'var(--accent-green)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
                Step {currentStep + 1} of {categories.length}
              </span>
              <h1 style={{ fontSize: '3rem', margin: '0 0 40px', lineHeight: 1.1, fontWeight: 300 }}>{currentCategory.title}</h1>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {currentCategory.questions.map((q) => (
                  <div key={q.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', fontWeight: 500, color: '#e5e5e5' }}>{q.query}</h3>
                    {(q as any).type === 'number_input' ? (
                      <input 
                        type="number"
                        placeholder="e.g. 25"
                        value={answers[q.id] || ''}
                        onChange={(e) => handleSelect(q.id, e.target.value)}
                        style={{
                          width: '100%',
                          padding: '16px',
                          background: 'rgba(0,0,0,0.3)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '16px',
                          color: '#fff',
                          fontSize: '1.2rem',
                          outline: 'none',
                          boxShadow: answers[q.id] ? '0 0 15px rgba(16,185,129,0.2)' : 'none',
                          borderColor: answers[q.id] ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)'
                        }}
                      />
                    ) : (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                        {q.options.map(option => {
                          const isSelected = answers[q.id] === option;
                          return (
                            <button
                              key={option}
                              onClick={() => handleSelect(q.id, option)}
                              style={{
                                padding: '12px 24px',
                                background: isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0,0,0,0.3)',
                                border: `1px solid ${isSelected ? 'var(--accent-green)' : 'rgba(255, 255, 255, 0.1)'}`,
                                borderRadius: '100px',
                                color: isSelected ? '#fff' : 'var(--text-muted)',
                                fontSize: '1rem',
                                fontWeight: isSelected ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: isSelected ? '0 4px 20px rgba(16,185,129,0.2)' : 'none'
                              }}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar Fixed Container */}
        <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '32px 0 24px', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '700px', margin: '0 auto', width: '100%', padding: '0 24px' }}>
            <button 
              onClick={handleBack}
              disabled={currentStep === 0}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: currentStep === 0 ? 'rgba(255,255,255,0.2)' : 'var(--text-main)', cursor: currentStep === 0 ? 'default' : 'pointer', fontSize: '1.05rem', padding: '12px 24px', borderRadius: '100px', backdropFilter: 'blur(10px)', transition: 'all 0.2s' }}
            >
              <ArrowLeft size={20} /> Back
            </button>
            
            <button 
              onClick={handleNext}
              disabled={!isCategoryComplete}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: !isCategoryComplete ? 'rgba(255,255,255,0.05)' : 'var(--accent-green)', color: !isCategoryComplete ? 'rgba(255,255,255,0.3)' : '#000', border: !isCategoryComplete ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--accent-green)', padding: '12px 32px', borderRadius: '100px', cursor: !isCategoryComplete ? 'default' : 'pointer', fontSize: '1.05rem', fontWeight: 600, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: isCategoryComplete ? '0 0 20px rgba(16,185,129,0.4)' : 'none' }}
            >
              {currentStep === categories.length - 1 ? 'Calculate' : 'Next'} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
