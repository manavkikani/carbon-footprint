import React, { useState, useEffect } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useCarbonStore } from '../store/useCarbonStore';
import { useNavigate } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const { login, user } = useAuthStore();
  const { setAnimationMode } = useCarbonStore();
  const navigate = useNavigate();

  useEffect(() => {
    setAnimationMode('loop');
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate, setAnimationMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name.trim());
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-panel" style={{ maxWidth: '400px', width: '100%', padding: '40px', textAlign: 'center', animation: 'fade-in 0.5s ease' }}>
        <Leaf size={48} color="var(--accent-green)" style={{ margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Join CarbonSense</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Track, visualize, and reduce your global impact seamlessly.</p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input 
            type="text" 
            placeholder="Enter your name to start..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '16px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--glass-border)', 
              borderRadius: '8px',
              color: 'var(--text-main)',
              fontSize: '1.1rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            className="glass-button" 
            style={{ 
              width: '100%', 
              justifyContent: 'center', 
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: name.trim() ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)',
              color: name.trim() ? '#000' : 'var(--text-muted)',
              borderColor: 'transparent'
            }}
            disabled={!name.trim()}
          >
            Access Platform <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
