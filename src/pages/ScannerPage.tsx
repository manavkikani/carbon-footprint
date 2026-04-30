import React, { useEffect, useState, useRef } from 'react';
import { useCarbonStore } from '../store/useCarbonStore';
import { Search, Upload, Camera, Loader2, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScannerPage: React.FC = () => {
  const { setAnimationMode, setEmissions, triggerBurst, addLog } = useCarbonStore();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scanResult, setScanResult] = useState<{ action: string; value: number; type: 'add' | 'reduce'; reasoning: string; ecoScore?: number; alternatives?: {name: string, impact: number}[] } | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAnimationMode('loop');
  }, [setAnimationMode]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image is too large. Please select an image under 5MB.");
      return;
    }

    setScanResult(null);
    setIsSaved(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const uploadAndAnalyze = async () => {
    if (!imagePreview) return;
    setIsAnalyzing(true);
    setScanResult(null);
    setIsSaved(false);

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
              content: `You are a strict, analytical ecological impact analyzer. Evaluate the object or activity shown in the image and return a JSON object with:
- "productName": A short 2-4 word description of what the user scanned (e.g. "Plastic Water Bottle", "Apple").
- "impactValue": a number (float or integer, e.g., 0.5, 12.4) representing the estimated actual footprint in kilograms (kg) of CO2 to produce or consume this item. Be scientifically accurate. E.g., a plastic bottle is ~0.1 to 0.5, while a steak is ~15. Use 0 if negligible.
- "type": "add" (generally creating footprint) or "reduce" (eco products like solar panels, recycling).
- "reasoning": a concise 1-sentence explanation of the calculation.
- "ecoScore": an integer from 0 to 100 where 100 is most eco-friendly and 0 is extremely high impact.
- "alternatives": an array of 2-3 objects, each with "name" (string) and "impact" (number, lower than scanned item), suggesting better sustainable alternatives.`
            },
            {
              role: 'user',
              content: [
                { type: 'text', text: "What is the carbon footprint of this primary item?" },
                {
                  type: 'image_url',
                  image_url: {
                    url: imagePreview
                  }
                }
              ]
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

      setScanResult({
        action: `Scanned: ${result.productName}`,
        value: Number(result.impactValue),
        type: result.type || 'add',
        reasoning: result.reasoning,
        ecoScore: result.ecoScore,
        alternatives: result.alternatives || []
      });

    } catch (error: any) {
      console.error("AI Analysis failed:", error);
      alert(`Analysis failed: ${error.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleKeep = () => {
    if (!scanResult) return;
    setEmissions((prev: number) => Math.max(0, scanResult.type === 'add' ? prev + Number(scanResult.value) : prev - Number(scanResult.value)));
    triggerBurst();
    addLog({ id: Date.now(), action: scanResult.action, value: Number(scanResult.value), type: scanResult.type, aiReasoning: scanResult.reasoning });
    setIsSaved(true);
  };

  const handleDiscard = () => {
    setImagePreview(null);
    setScanResult(null);
    setIsSaved(false);
  };

  return (
    <div style={{ animation: 'fade-in 0.5s ease', paddingBottom: '100px' }}>
      <header style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>AI Product Scanner</h1>
        <p style={{ color: 'var(--text-muted)' }}>Capture a product or activity to instantly identify its environmental impact.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
        <div className="glass-panel" style={{ gridColumn: 'span 6', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', position: 'relative' }}>
          
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            ref={fileInputRef} 
            onChange={handleImageChange} 
            style={{ display: 'none' }} 
          />

          {!imagePreview ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--glass-border)' }}>
                <Camera size={48} style={{ color: 'var(--text-muted)' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem' }}>Upload or Take a Photo</h3>
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '80%' }}>For best results, make sure the item is clearly visible in the center of the frame.</p>
              
              <button 
                className="glass-button" 
                onClick={triggerFileInput} 
                style={{ background: 'var(--accent-green)', color: '#000', border: 'none', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <Upload size={20} /> Choose Image
              </button>
            </div>
          ) : (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                <img src={imagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {isAnalyzing && (
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', gap: '16px' }}>
                    <motion.div 
                      animate={{ top: ['0%', '100%', '0%'] }} 
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                      style={{ position: 'absolute', left: 0, width: '100%', height: '3px', background: 'var(--accent-green)', boxShadow: '0 0 15px var(--accent-green)', zIndex: 0 }} 
                    />
                    <Loader2 size={48} className="animate-spin" style={{ zIndex: 1 }} />
                    <span style={{ fontWeight: 600, letterSpacing: '1px', zIndex: 1 }}>ANALYZING...</span>
                  </div>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                <button 
                  className="glass-button" 
                  onClick={() => { setImagePreview(null); setScanResult(null); }} 
                  disabled={isAnalyzing}
                  style={{ flex: 1, padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  <ImageIcon size={20} /> Retake
                </button>
                <button 
                  className="glass-button" 
                  onClick={uploadAndAnalyze} 
                  disabled={isAnalyzing || scanResult !== null}
                  style={{ flex: 2, background: (isAnalyzing || scanResult) ? 'rgba(255,255,255,0.05)' : 'var(--accent-green)', color: (isAnalyzing || scanResult) ? 'var(--text-muted)' : '#000', border: 'none', padding: '16px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                >
                  {isAnalyzing ? "Processing AI..." : scanResult ? "Already Scanned" : "Analyze Impact"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="glass-panel" style={{ gridColumn: 'span 6', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
          {!scanResult ? (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', color: 'var(--text-muted)' }}>
               <Search size={48} style={{ opacity: 0.5 }} />
               <p>Provide an image to see the intelligence assessment here.</p>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '4px', textTransform: 'capitalize' }}>
                      {scanResult.action.replace('Scanned: ', '')}
                    </h2>
                    <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                      Impact: {Number(scanResult.value).toFixed(2)} kg CO₂
                    </span>
                  </div>

                  {scanResult.ecoScore !== undefined && (
                    <div style={{ 
                      width: '80px', height: '80px', borderRadius: '50%', 
                      background: scanResult.ecoScore > 70 ? 'rgba(16, 185, 129, 0.1)' : scanResult.ecoScore > 40 ? 'rgba(250, 204, 21, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                      color: scanResult.ecoScore > 70 ? 'var(--accent-green)' : scanResult.ecoScore > 40 ? 'var(--accent-yellow)' : 'var(--accent-red)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      border: `3px solid ${scanResult.ecoScore > 70 ? 'var(--accent-green)' : scanResult.ecoScore > 40 ? 'var(--accent-yellow)' : 'var(--accent-red)'}`
                    }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1 }}>{scanResult.ecoScore}</span>
                      <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '1px' }}>SCORE</span>
                    </div>
                  )}
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)', width: '100%', textAlign: 'left', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>AI Logic Breakdown</span>
                  <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                    {scanResult.reasoning}
                  </p>
                </div>

                {scanResult.alternatives && scanResult.alternatives.length > 0 && (
                  <div style={{ width: '100%', textAlign: 'left' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>Suggested Alternatives</span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {scanResult.alternatives.map((alt, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '8px' }}>
                          <span style={{ fontWeight: 500 }}>{alt.name}</span>
                          <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>{alt.impact.toFixed(2)} kg CO₂</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ width: '100%', marginTop: '24px', display: 'flex', gap: '16px' }}>
                  {!isSaved ? (
                    <>
                      <button 
                        className="glass-button"
                        onClick={handleDiscard}
                        style={{ flex: 1, padding: '16px', background: 'rgba(239, 68, 68, 0.1)', color: 'var(--accent-red)', border: '1px solid rgba(239, 68, 68, 0.2)', fontWeight: 600, borderRadius: '12px', cursor: 'pointer' }}
                      >
                        Discard
                      </button>
                      <button 
                        className="glass-button"
                        onClick={handleKeep}
                        style={{ flex: 2, padding: '16px', background: 'var(--accent-green)', color: '#000', border: 'none', fontWeight: 600, borderRadius: '12px', cursor: 'pointer' }}
                      >
                        Keep It
                      </button>
                    </>
                  ) : (
                    <div style={{ width: '100%', padding: '16px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', border: '1px solid rgba(16, 185, 129, 0.2)', fontWeight: 600, borderRadius: '12px', textAlign: 'center' }}>
                      Added to your footprint!
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScannerPage;
