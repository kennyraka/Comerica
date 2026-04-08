import React, { useState } from 'react';
import { FdicBanner } from './components/FdicBanner';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { OtpPage } from './components/OtpPage';
import { Footer } from './components/Footer';

export function App() {
  const [view, setView] = useState<'login' | 'otp'>('login');

  const handleLogin = () => {
    setView('otp');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FdicBanner />
      <Header />

      {/* Hero Section with Background Image */}
      <main className="flex-grow relative flex items-center justify-center md:justify-start">
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
            {view === 'login' ? (
              <LoginForm onLogin={handleLogin} />
            ) : (
              <OtpPage />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
