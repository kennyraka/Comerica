import React, { useState } from 'react';

interface OtpPageProps {
  onContinue?: () => void;
  onCancel?: () => void;
}

export function OtpPage({ onContinue, onCancel }: OtpPageProps) {
  const [method, setMethod] = useState('text');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <div className="bg-white w-full max-w-[420px] shadow-sm flex flex-col font-sans border border-gray-300">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Verification Required
      </div>

      <div className="p-6 flex flex-col bg-[#f2f2f2]">
        <h2 className="text-[#00529b] text-[1.15rem] font-bold mb-4 tracking-tight">
          Identity Verification
        </h2>
        <p className="text-[0.8rem] text-gray-800 mb-6 leading-relaxed">
          For your security, we need to verify your identity. Please select how you would like to receive your security code.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="mt-1 mr-3 h-4 w-4 accent-[#00529b]"
              />
              <label htmlFor="text" className="text-[0.9rem]">
                <span className="font-bold text-gray-800 block mb-0.5">Send OTP via Text Message</span>
                <span className="text-[0.75rem] text-gray-700 block leading-tight">
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
                className="mt-1 mr-3 h-4 w-4 accent-[#00529b]"
              />
              <label htmlFor="call" className="text-[0.9rem]">
                <span className="font-bold text-gray-800 block mb-0.5">Send OTP via Phone Call</span>
                <span className="text-[0.75rem] text-gray-700 block leading-tight">
                  You will receive an automated phone call with your security code.
                </span>
              </label>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="pt-4 flex justify-between items-center">
            <button
              type="button"
              onClick={onCancel}
              className="text-[#00529b] text-[0.8rem] font-semibold hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#a23232] hover:bg-[#8e2b2b] text-white px-10 py-2 text-sm font-semibold transition-colors shadow-sm border border-gray-800"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-[0.75rem]">
        <p className="text-gray-800">
          Need help? Call us at 888.444.9876.
        </p>
      </div>
    </div>
  );
}
