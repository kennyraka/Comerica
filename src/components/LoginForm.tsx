import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="bg-white w-full max-w-[420px] shadow-lg flex flex-col font-sans">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Log In
      </div>

      <div className="p-6 flex flex-col bg-[#f4f4f4]">
        <h2 className="text-[#003366] text-lg font-bold mb-1">
          Welcome to Comerica Web Banking<sup className="text-xs">®</sup>
        </h2>
        <p className="text-xs text-gray-700 mb-6">
          Fields marked with an <span className="text-[#CC0000]">*</span> are
          required.
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {/* User ID */}
          <div className="flex flex-col">
            <label
              className="text-sm font-bold text-gray-800 mb-1"
              htmlFor="userId">
              
              User ID:
            </label>
            <div className="flex items-center">
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="border border-gray-400 px-2 py-1 flex-grow focus:outline-none focus:border-[#003366]" />
              
              <span className="text-[#CC0000] ml-1">*</span>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" id="saveUserId" className="mr-2" />
              <label htmlFor="saveUserId" className="text-xs text-gray-700">
                Save User ID
              </label>
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              className="text-sm font-bold text-gray-800 mb-1"
              htmlFor="password">
              
              Password:
            </label>
            <div className="flex items-center">
              <div className="relative flex-grow flex items-center">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-400 px-2 py-1 w-full pr-8 focus:outline-none focus:border-[#003366]" />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 text-gray-600 hover:text-gray-800">
                  
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <span className="text-[#CC0000] mx-1">*</span>
              <a
                href="#"
                className="text-[#0066CC] text-xs hover:underline whitespace-nowrap">
                
                Forgot Your Password?
              </a>
            </div>
          </div>

          {/* Log In Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#666666] hover:bg-[#555555] text-white px-6 py-1.5 text-sm font-semibold transition-colors">
              
              Log In
            </button>
          </div>

          {/* Destination */}
          <div className="pt-4 border-t border-gray-300 mt-4">
            <div className="flex items-center mb-2">
              <label
                className="text-xs text-gray-700 mr-2"
                htmlFor="destination">
                
                Go to:
              </label>
              <select
                id="destination"
                className="border border-gray-400 text-xs py-1 px-2 bg-white focus:outline-none">
                
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
                className="text-xs text-gray-700">
                
                Make this page my default destination
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-xs">
        <a href="#" className="text-[#0066CC] hover:underline block mb-1">
          Set Up Web Banking
        </a>
        <p className="text-gray-700">
          Questions? Check our{' '}
          <a href="#" className="text-[#0066CC] hover:underline">
            FAQ
          </a>
          ,{' '}
          <a href="#" className="text-[#0066CC] hover:underline">
            Contact
          </a>{' '}
          us, or call 888.444.9876.
        </p>
      </div>
    </div>);

}