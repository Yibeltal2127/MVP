import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import VerificationStatusPage from './pages/VerificationStatusPage';
import ProfileCompletionPage from './pages/ProfileCompletionPage';
import { AuthProvider } from './context/AuthContext';
import Header from './components/navigation/Header';
import MobileBottomNav from './components/navigation/MobileBottomNav';

function App() {
  // Simplified routing for the demo
  const path = window.location.pathname;
  
  const renderPage = () => {
    switch (path) {
      case '/login':
        return <LoginPage />;
      case '/register':
        return <RegistrationPage />;
      case '/forgot-password':
        return <ForgotPasswordPage />;
      case '/verification-status':
        return <VerificationStatusPage />;
      case '/profile-completion':
        return <ProfileCompletionPage />;
      default:
        return <LandingPage />;
    }
  };
  
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mt-16">
          {renderPage()}
        </main>
        <MobileBottomNav />
      </div>
    </AuthProvider>
  );
}

export default App;