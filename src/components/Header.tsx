import React from 'react';
export function Header() {
  return (
    <header className="bg-white py-4 px-8 flex items-center">
      {/* Logo Approximation */}
      <div className="relative flex flex-col items-start">
        {/* Swoosh approximation */}
        <svg
          width="120"
          height="20"
          viewBox="0 0 120 20"
          className="absolute -top-3 left-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <path
            d="M0 15 Q 40 -5, 100 10"
            stroke="#87CEEB"
            strokeWidth="2"
            fill="none" />
          
          <path
            d="M10 18 Q 50 0, 110 12"
            stroke="#4682B4"
            strokeWidth="1.5"
            fill="none" />
          
        </svg>
        <div className="flex items-baseline text-[#003366] font-serif tracking-tight">
          <span className="text-3xl font-bold">Comeric</span>
          <span className="text-3xl font-bold relative">
            A
            <span
              className="absolute top-0 left-0 text-[#C5972C] opacity-80"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
              }}>
              
              A
            </span>
          </span>
          <span className="text-xl ml-2 font-semibold">Bank</span>
          <span className="text-xs align-top ml-0.5">®</span>
        </div>
      </div>
    </header>);

}