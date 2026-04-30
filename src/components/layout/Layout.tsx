import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, LayoutDashboard, Activity, Search, ScanLine, Users, User, LogOut, LogIn, GitCommitVertical } from 'lucide-react';
import FootprintCanvas from '../FootprintCanvas';
import CarbonCoach from '../CarbonCoach';
import OnboardingModal from '../OnboardingModal';
import { useAuthStore } from '../../store/useAuthStore';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Background Canvas */}
      <FootprintCanvas blurMap={!isLanding} />
      
      {/* Global Onboarding Modal */}
      {user && !isLanding && <OnboardingModal />}
      
      {/* Navigation */}
      <nav className={`nav-container ${isLanding ? '' : 'glass-nav'}`}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.25rem' }}>
          <Leaf className="text-emerald-500" color="var(--accent-green)" />
          CarbonSense
        </Link>
        
        {user && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link to="/dashboard" className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              <LayoutDashboard className="nav-link-icon" size={16}/> Overview
            </Link>
            <Link to="/track" className={`nav-link ${location.pathname === '/track' ? 'active' : ''}`}>
              <Activity className="nav-link-icon" size={16}/> Daily Log
            </Link>
            <Link to="/simulate" className={`nav-link ${location.pathname === '/simulate' ? 'active' : ''}`}>
              <GitCommitVertical className="nav-link-icon" size={16}/> AI Forecast
            </Link>
            <Link to="/explore" className={`nav-link ${location.pathname === '/explore' ? 'active' : ''}`}>
              <Search className="nav-link-icon" size={16}/> Insights
            </Link>
            <Link to="/scanner" className={`nav-link ${location.pathname === '/scanner' ? 'active' : ''}`}>
              <ScanLine className="nav-link-icon" size={16}/> Scan
            </Link>
            <Link to="/community" className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}>
              <Users className="nav-link-icon" size={16}/> Network
            </Link>
            <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
              <User className="nav-link-icon" size={16}/> Personal
            </Link>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '6px 12px', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>
              <img src={user.avatar} alt="avatar" style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{user.name}</span>
              <button 
                onClick={handleLogout} 
                style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '8px' }}
                title="Log Out"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-main)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="glass-button" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', fontSize: '0.9rem' }}>
              <LogIn size={16} /> Log In
            </Link>
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ 
        position: 'relative', 
        zIndex: 10,
        paddingTop: isLanding ? '0' : 'calc(var(--nav-height) + 40px)',
        minHeight: '100vh',
        maxWidth: isLanding ? '100%' : '1200px',
        margin: '0 auto',
        padding: isLanding ? '0' : 'calc(var(--nav-height) + 40px) 40px 40px 40px',
      }}>
        <Outlet />
      </main>

      {/* Global AI Coach Component */}
      {!isLanding && user && <CarbonCoach />}
    </>
  );
};

export default Layout;
