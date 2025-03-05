import React from 'react'

const PolicyBanner = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-center items-center text-center md:text-left border-t border-b border-gray-300">
      <p className="text-xl sm:text-2xl text-gray-800">
        Do you want to see the full pricing policy?
      </p>
      <a
        href="#"
        className="mt-4 md:mt-0 md:ml-6 border border-gray-500 px-5 py-2 rounded-full text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300"
      >
        Pricing Policy
      </a>
    </div>
  )
}

export default PolicyBanner
