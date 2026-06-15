
export function OtherServices() {
  return (
    <div className="w-full px-6 pb-8">
      <h3 className="text-[#00205B] font-bold text-lg mb-4">
        Log in to other Comerica services
      </h3>

      <div className="relative">
        <select
          defaultValue=""
          className="w-full bg-[#F9F9F9] border border-gray-300 rounded-sm px-4 py-3.5 text-gray-500 appearance-none focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] text-base cursor-pointer"
        >
          <option value="" disabled>
            Choose Service
          </option>
          <option value="business">Business Banking</option>
          <option value="wealth">Wealth Management</option>
          <option value="mortgage">Mortgage</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg
            className="fill-current h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
