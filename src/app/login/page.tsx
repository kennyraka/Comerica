'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/Header'
import { LoginForm } from '../../components/LoginForm'
import { OtherServices } from '../../components/OtherServices'

export default function LoginPage() {
  const router = useRouter()

  const handleLoginSuccess = () => {
    router.push('/otp')
  }

  return (
    <div className="min-h-screen bg-white sm:bg-gray-100 flex justify-center font-sans">
      <div className="w-full sm:max-w-[480px] bg-white min-h-screen sm:min-h-0 sm:my-8 sm:shadow-lg flex flex-col">
        <Header />
        <LoginForm onLogin={handleLoginSuccess} />
        <OtherServices />
      </div>
    </div>
  )
}
