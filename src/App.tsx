import React, { useState } from 'react';
import { User, Film, Play, Star, Clock, Calendar, Search, Menu, X, Eye, Award } from 'lucide-react';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function AppContent() {
  const { user } = useAuth();
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  return (
    <div className="min-h-screen bg-gray-900">
      {!user ? (
        <>
          <LandingPage onOpenAuth={setAuthModal} />
          {authModal && (
            <AuthModal
              mode={authModal}
              onClose={() => setAuthModal(null)}
              onSwitchMode={(mode) => setAuthModal(mode)}
            />
          )}
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;