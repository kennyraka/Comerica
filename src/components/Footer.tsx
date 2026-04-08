import React from 'react';
import { Smartphone, Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#cccccc] text-[#333333] py-8 px-10 relative font-sans text-[0.7rem] border-t border-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left Section: Mobile Banking */}
        <div className="flex items-center gap-3">
          <Smartphone size={32} strokeWidth={1.5} className="text-black" />
          <a href="#" className="font-bold leading-tight hover:underline uppercase">
            LEARN MORE ABOUT<br />MOBILE BANKING
          </a>
        </div>

        {/* Center Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-1 font-bold uppercase">
          <div className="flex flex-col gap-1">
            <a href="#" className="hover:underline">TERMS OF USE</a>
            <a href="#" className="hover:underline">PRIVACY</a>
            <a href="#" className="hover:underline">SECURITY</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#" className="hover:underline">CONSUMER COMPLAINT NOTICE</a>
            <a href="#" className="hover:underline">SECURITY PROTECTION</a>
            <a href="#" className="hover:underline">LOCATIONS</a>
          </div>
          <div className="flex flex-col gap-1">
            <a href="#" className="hover:underline">COMERICA.COM</a>
            <a href="#" className="hover:underline">HELP</a>
            <a href="#" className="hover:underline">CONTACT US</a>
          </div>
        </div>

        {/* Right Section: Copyright & FDIC */}
        <div className="text-right flex flex-col items-end gap-1">
          <p className="max-w-[300px] leading-tight">
            © 2026, Comerica Incorporated. All rights reserved. Comerica Bank. Member FDIC.
          </p>
          <div className="flex items-center gap-1 justify-end">
             <Home size={14} className="inline" />
             <span className="font-bold">Equal Housing Lender.</span>
          </div>
        </div>
      </div>

      {/* Tagline Image/Text Approximation */}
      <div className="mt-8 flex justify-end pr-10">
        <div className="relative">
          <span 
            className="text-[3.5rem] text-[#666666] opacity-60 lowercase italic tracking-tighter"
            style={{ fontFamily: 'serif', fontStyle: 'italic', fontWeight: '300' }}
          >
            raise your expectations
          </span>
          <span className="absolute -top-1 -right-4 text-[0.6rem] opacity-60">®</span>
        </div>
      </div>
    </footer>
  );
}
