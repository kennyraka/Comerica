import React from 'react';
import { Smartphone, Home } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#dcdcdc] border-t border-gray-400 pt-6 pb-12 px-8 font-sans relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-[10px] text-gray-700 tracking-wide">
        {/* Left: Mobile App */}
        <div className="flex items-start mb-6 md:mb-0 w-full md:w-1/4">
          <Smartphone
            className="w-8 h-8 mr-3 text-gray-800"
            strokeWidth={1.5} />
          
          <div className="flex flex-col justify-center h-8">
            <a
              href="#"
              className="hover:underline uppercase font-semibold leading-tight">
              
              Learn More About
            </a>
            <a
              href="#"
              className="hover:underline uppercase font-semibold leading-tight">
              
              Mobile Banking
            </a>
          </div>
        </div>

        {/* Center: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 mb-6 md:mb-0 w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline uppercase">
              Terms of Use
            </a>
            <a href="#" className="hover:underline uppercase">
              Privacy
            </a>
            <a href="#" className="hover:underline uppercase">
              Security
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline uppercase">
              Consumer Complaint Notice
            </a>
            <a href="#" className="hover:underline uppercase">
              Security Protection
            </a>
            <a href="#" className="hover:underline uppercase">
              Locations
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline uppercase">
              Comerica.com
            </a>
            <a href="#" className="hover:underline uppercase">
              Help
            </a>
            <a href="#" className="hover:underline uppercase">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right: Copyright & Equal Housing */}
        <div className="flex flex-col items-end text-right w-full md:w-1/4">
          <p className="mb-1">
            © 2026, Comerica Incorporated. All rights
            <br />
            reserved. Comerica Bank. Member FDIC.
          </p>
          <div className="flex items-center justify-end font-semibold">
            <Home className="w-3 h-3 mr-1" />
            <span>Equal Housing Lender.</span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-4 right-8">
        <span className="font-['Great_Vibes'] text-4xl text-gray-500 opacity-80">
          raise your expectations<sup className="text-sm align-super">®</sup>
        </span>
      </div>
    </footer>);

}