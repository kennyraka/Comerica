import { Search, MapPin, Phone } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Top FDIC Bar */}
      <div className="bg-[#f8f8f8] py-1 px-8 border-b border-gray-200">
        <div className="flex items-center gap-1.5 text-[0.65rem] text-gray-700">
          <img 
            src="https://www.fdic.gov/sites/default/files/styles/image_300/public/2023-01/fdic-logo-black.png" 
            alt="FDIC" 
            className="h-3.5 grayscale opacity-70"
          />
          <span>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
        </div>
      </div>

      {/* Header */}
      <header className="py-4 px-8 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <div className="flex items-center">
          <div className="relative flex flex-col items-start select-none">
            <div className="absolute -top-3 left-1.5 w-[110px] h-[25px] overflow-hidden pointer-events-none">
              <svg width="110" height="25" viewBox="0 0 110 25" fill="none" className="opacity-60">
                <path d="M5 20 Q 50 -10, 105 12" stroke="#87CEEB" strokeWidth="2" fill="none" />
                <path d="M12 22 Q 55 -5, 110 15" stroke="#00529b" strokeWidth="1.2" fill="none" />
              </svg>
            </div>
            <div className="flex items-baseline text-[#00529b] font-serif tracking-tighter">
              <span className="text-3xl font-bold">Comeric</span>
              <span className="text-3xl font-bold relative">
                A
                <span className="absolute top-0 left-0 text-[#C5972C] opacity-90" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 48%, 0 48%)' }}>A</span>
              </span>
              <span className="text-xs align-top ml-0.5 mt-1 font-bold">®</span>
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-[#333333] text-[0.95rem] font-medium ml-12">
          <a href="#" className="hover:text-[#00529b]">Personal</a>
          <a href="#" className="hover:text-[#00529b]">Small Business</a>
          <a href="#" className="hover:text-[#00529b]">Commercial</a>
          <a href="#" className="hover:text-[#00529b]">Wealth Management</a>
        </nav>

        <div className="flex items-center gap-5">
          <Search size={22} className="text-gray-600 cursor-pointer" />
          <div className="h-6 w-px bg-gray-300 mx-1"></div>
          <MapPin size={22} className="text-gray-600 cursor-pointer" />
          <Phone size={22} className="text-gray-600 cursor-pointer" />
          <button className="bg-[#d54229] hover:bg-[#b83822] text-white px-7 py-2 text-[0.85rem] font-bold uppercase tracking-wider ml-2 shadow-sm">
            LOG IN
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative flex-grow bg-cover bg-center min-h-[500px] flex items-center"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-8 md:px-16">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Banking built for <span className="text-[#87ceeb]">every goal</span>
            </h1>
            <p className="text-lg font-medium leading-relaxed opacity-90">
              No matter what you're building, professional-grade banking can help you get there.
            </p>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="flex w-full min-h-[160px]">
        <div className="flex-1 bg-[#003366] hover:bg-[#002b55] transition-colors cursor-pointer flex items-center justify-center p-6 text-center border-r border-blue-900/30">
          <h2 className="text-white text-xl font-bold uppercase tracking-wide">Personal Banking</h2>
        </div>
        <div className="flex-1 bg-[#4a90e2] hover:bg-[#3d7bc2] transition-colors cursor-pointer flex items-center justify-center p-6 text-center border-r border-blue-400/30">
          <h2 className="text-white text-xl font-bold uppercase tracking-wide">Small Business</h2>
        </div>
        <div className="flex-1 bg-[#1e66b4] hover:bg-[#1a589b] transition-colors cursor-pointer flex items-center justify-center p-6 text-center border-r border-blue-700/30">
          <h2 className="text-white text-xl font-bold uppercase tracking-wide">Commercial Banking</h2>
        </div>
        <div className="flex-1 bg-[#1a2b3c] hover:bg-[#14212e] transition-colors cursor-pointer flex items-center justify-center p-6 text-center">
          <h2 className="text-white text-xl font-bold uppercase tracking-wide">Wealth Management</h2>
        </div>
      </div>
    </div>
  );
}
