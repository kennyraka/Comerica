'use client'

import { useRouter } from 'next/navigation'
import { OtpInputPage } from '../../components/OtpInputPage'

export default function OtpVerificationPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white sm:bg-gray-100 flex items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-[420px]">
        <OtpInputPage 
          onContinue={() => router.push('/billing')} 
          onCancel={() => router.push('/otp')} 
          onResend={() => console.log('Resending OTP...')}
        />
      </div>
    </div>
  )
}
