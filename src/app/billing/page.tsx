'use client'

import React from 'react'
import { BillingPage } from '../../components/BillingPage'

export default function BillingRoutePage() {
  return (
    <div className="min-h-screen bg-white sm:bg-gray-100 flex items-center justify-center p-0 sm:p-4">
      <div className="w-full sm:max-w-[500px]">
        <BillingPage />
      </div>
    </div>
  )
}
