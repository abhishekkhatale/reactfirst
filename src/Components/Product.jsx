'use client'

import React, { useState, useEffect } from 'react'

export default function Product() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-[#222222] flex flex-col md:flex-row-reverse w-full h-auto text-white px-4 md:px-10 justify-between overflow-hidden">
      <div 
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 md:translate-x-0 opacity-100' : 'translate-y-full md:translate-x-full opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="./src/assets/Group5.png" 
          alt="G520 Wireless Mouse" 
          className={`w-full h-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
          }`}
        />
      </div>
      <div 
        className={`px-4 md:px-10 py-10 md:py-20 flex flex-col transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 md:translate-x-0 opacity-100' : 'translate-y-full md:-translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-semibold animate-fade-in">G520 Wireless Mouse</h1>
        <p className="text-lg md:text-xl mt-2 text-[#ffffff79] animate-fade-in animation-delay-200">LIGHTSPEED Wireless Gaming Mouse</p>
        <p className="w-full md:w-[50rem] text-sm text-white mt-4 animate-fade-in animation-delay-400">
          Iconic G502 design meets pro-grade LIGHTSPEED wireless for ultra-fast, reliable connectivity. HERO 25K sensor features sub-micron tracking. POWERPLAY compatible for continuous charging both at rest and play.
        </p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-5 text-[#1A98D2] animate-fade-in animation-delay-600">USD 100</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button 
            className="font-medium text-lg py-2 px-6 bg-[#1A98D2] rounded-[4px] transition-all duration-300 hover:bg-[#1578A7] focus:outline-none focus:ring-2 focus:ring-[#1A98D2] focus:ring-opacity-50 transform hover:scale-105 animate-fade-in animation-delay-800"
            onClick={() => alert('Added to cart!')}
          >
            Add to cart
          </button>
          <button 
            className="font-medium text-lg py-2 px-6 bg-white text-[#222222] rounded-[4px] transition-all duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transform hover:scale-105 animate-fade-in animation-delay-1000"
            onClick={() => alert('Viewing details!')}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  )
}