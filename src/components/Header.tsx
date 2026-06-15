import { Menu } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <div className="w-full flex flex-col">
      {/* FDIC Banner */}
      <div className="w-full bg-white py-1.5 px-2 flex items-center justify-center border-b border-gray-100">
        <span className="font-extrabold text-[#00205B] text-[11px] mr-1 tracking-tight">
          FDIC
        </span>
        <span className="italic text-gray-800 text-[10px]">
          FDIC-Insured - Backed by the full faith and credit of the U.S.
          Government
        </span>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white py-3 px-4 flex items-center justify-between">
        <button className="p-1.5 border-2 border-gray-100 rounded text-[#00205B] hover:bg-gray-50 transition-colors">
          <Menu size={28} strokeWidth={2} />
        </button>

        <div className="relative h-9 w-40">
          <Image
            src="https://cdn.magicpatterns.com/uploads/eCn3EiNW1nuHqv1WqjQfyh/image.png"
            alt="Comerica Logo"
            fill
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>

        <button className="bg-[#EAEAEA] text-[#C75B12] px-4 py-2 text-sm font-bold rounded-sm hover:bg-gray-200 transition-colors">
          CLOSE
        </button>
      </div>

      {/* Blue accent bar */}
      <div className="w-full h-3 bg-[#0066CC]"></div>
    </div>
  )
}
