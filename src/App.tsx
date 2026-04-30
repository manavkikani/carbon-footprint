
import { HashRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import TrackPage from './pages/TrackPage';
import ExplorePage from './pages/ExplorePage';
import ScannerPage from './pages/ScannerPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SimulatorPage from './pages/SimulatorPage';
import OnboardingPage from './pages/OnboardingPage';
import { useAuthStore } from './store/useAuthStore';

// Protective wrapper for authenticated routes
const ProtectedRoute = () => {
  const { user, hasCompletedOnboarding } = useAuthStore();
  const location = useLocation();

  if (!user) return <Navigate to="/login" replace />;
  
  if (!hasCompletedOnboarding && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  if (hasCompletedOnboarding && location.pathname === '/onboarding') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          
          {/* Secure Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="track" element={<TrackPage />} />
            <Route path="simulate" element={<SimulatorPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="scanner" element={<ScannerPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>

        {/* Fullscreen Secure Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/onboarding" element={<OnboardingPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
