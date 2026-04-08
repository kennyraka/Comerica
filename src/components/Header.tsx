import React from 'react';

export function Header() {
  return (
    <header className="bg-white py-4 px-8 flex items-center">
      {/* Logo Container */}
      <div className="relative flex flex-col items-start select-none">
        {/* Simplified Swoosh - similar to image */}
        <div className="absolute -top-4 left-1.5 w-[140px] h-[30px] overflow-hidden pointer-events-none">
           <svg
            width="140"
            height="30"
            viewBox="0 0 140 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M5 25 Q 60 -10, 135 15"
              stroke="#87CEEB"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M15 28 Q 70 -5, 140 18"
              stroke="#00529b"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Brand Text */}
        <div className="flex items-baseline text-[#00529b] font-serif tracking-tight pt-1">
          <span className="text-[2.6rem] font-bold leading-none">Comeric</span>
          <span className="text-[2.6rem] font-bold leading-none relative">
            A
            <span
              className="absolute top-0 left-0 text-[#C5972C] opacity-90"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 48%, 0 48%)'
              }}
            >
              A
            </span>
          </span>
          <span className="text-[1.8rem] ml-1.5 font-semibold leading-none">Bank</span>
          <span className="text-[0.6rem] align-top ml-0.5 mt-1">®</span>
        </div>
      </div>
    </header>
  );
}
