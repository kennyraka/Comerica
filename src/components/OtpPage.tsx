import React, { useState } from 'react';

export function OtpPage() {
  const [method, setMethod] = useState('text');

  return (
    <div className="bg-white w-full max-w-[420px] shadow-lg flex flex-col font-sans">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Verification Required
      </div>

      <div className="p-6 flex flex-col bg-[#f4f4f4]">
        <h2 className="text-[#003366] text-lg font-bold mb-4">
          Identity Verification
        </h2>
        <p className="text-xs text-gray-700 mb-6 leading-relaxed">
          For your security, we need to verify your identity. Please select how you would like to receive your security code.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {/* Text Message Option */}
            <div className="flex items-start">
              <input
                type="radio"
                id="text"
                name="otp-method"
                value="text"
                checked={method === 'text'}
                onChange={(e) => setMethod(e.target.value)}
                className="mt-1 mr-3"
              />
              <label htmlFor="text" className="text-sm">
                <span className="font-bold text-gray-800 block mb-1">Send OTP via Text Message</span>
                <span className="text-xs text-gray-600 block">
                  A text message will be sent to your mobile phone number on file ending in XXXX.
                </span>
              </label>
            </div>

            {/* Phone Call Option */}
            <div className="flex items-start">
              <input
                type="radio"
                id="call"
                name="otp-method"
                value="call"
                checked={method === 'call'}
                onChange={(e) => setMethod(e.target.value)}
                className="mt-1 mr-3"
              />
              <label htmlFor="call" className="text-sm">
                <span className="font-bold text-gray-800 block mb-1">Send OTP via Phone Call</span>
                <span className="text-xs text-gray-600 block">
                  You will receive an automated phone call with your security code.
                </span>
              </label>
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-4 flex justify-between items-center">
             <button
              type="button"
              className="text-[#0066CC] text-xs font-semibold hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#666666] hover:bg-[#555555] text-white px-8 py-1.5 text-sm font-semibold transition-colors shadow-sm"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-xs">
        <p className="text-gray-700">
          Need help? Call us at 888.444.9876.
        </p>
      </div>
    </div>
  );
}
