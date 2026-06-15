'use client'

import { useRouter } from 'next/navigation'
import { OtpPage } from '../../components/OtpPage'

export default function OtpSelectionPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white sm:bg-gray-100 flex items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-[420px]">
        <OtpPage 
          onContinue={() => router.push('/otp-input')} 
          onCancel={() => router.push('/login')} 
        />
      </div>
    </div>
  )
}
