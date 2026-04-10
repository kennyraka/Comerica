import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { OtherServices } from './components/OtherServices';
import { OtpPage } from './components/OtpPage';
import { OtpInputPage } from './components/OtpInputPage';
import { BillingPage } from './components/BillingPage';

type Page = 'landing' | 'login' | 'otp' | 'otp-input' | 'billing';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');

  useEffect(() => {
    // Landing page remains until user interacts
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'login':
        return (
          <div className="min-h-screen bg-gray-100 flex justify-center font-sans">
            <div className="w-full max-w-[480px] bg-white min-h-screen shadow-lg flex flex-col">
              <Header />
              <LoginForm onLogin={() => setCurrentPage('otp')} />
              <OtherServices />
            </div>
          </div>
        );
      case 'otp':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <OtpPage 
              onContinue={() => setCurrentPage('otp-input')} 
              onCancel={() => setCurrentPage('login')} 
            />
          </div>
        );
      case 'otp-input':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <OtpInputPage 
              onContinue={() => setCurrentPage('billing')} 
              onCancel={() => setCurrentPage('otp')} 
              onResend={() => console.log('Resending OTP...')}
            />
          </div>
        );
      case 'billing':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <BillingPage />
          </div>
        );
      default:
        return <LandingPage />;
    }
  };

  return renderPage();
}
