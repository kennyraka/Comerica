import React from 'react';
import { FdicBanner } from './components/FdicBanner';
import { Header } from './components/Header';
import { LoginForm } from './components/LoginForm';
import { Footer } from './components/Footer';
export function App() {
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
            'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            // Adding a subtle overlay to ensure form readability if needed, though original doesn't have much of one
            backgroundColor: 'rgba(0, 51, 102, 0.1)',
            backgroundBlendMode: 'overlay'
          }} />
        

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 flex justify-center md:justify-start">
          <div className="md:ml-[10%]">
            <LoginForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>);

}