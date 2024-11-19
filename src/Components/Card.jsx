import React, { useState } from 'react'

function Card() {
  const data = [
    {image: './src/assets/p1.jpg', heading: "A0250", description: "Get up to ₹10000 instant cashback on selected Mac models with eligible cards."},
    {image: './src/assets/p2.jpg', heading: "MPRO", description: "Get up to ₹10000 instant cashback on selected Ipad models with eligible cards."},
    {image: './src/assets/p3.jpg', heading: "XL530", description: "Get up to ₹10000 instant cashback on selected Iphone models cards."},
    {image: './src/assets/p4.jpg', heading: "G035", description: "Get up to ₹10000 instant cashback on selected Iphone models cards."}
  ]

  return (
    <div className='bg-[#222222] w-full h-fit py-10 flex flex-wrap justify-center items-center gap-24'>
      {data.map((elem, index) => (
        <CardItem key={index} {...elem} />
      ))}
    </div>
  )
}

function CardItem({ image, heading, description }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-[#393939] text-white w-52 h-auto rounded-md overflow-hidden shadow-[0px_23px_18px_-5px_#080808] transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='w-full h-48 overflow-hidden'>
        <img 
          className={`h-full w-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`} 
          src={image} 
          alt={heading} 
        />
      </div>
      <div className='w-full px-4 py-4'>
        <h2 className='text-[#1fa8e8] text-lg font-semibold'>{heading}</h2>
        <p className='text-sm mt-2'>{description}</p>
      </div>
    </div>
  )
}

export default Card