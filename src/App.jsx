import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Footer  from './Components/Foot'

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Product></Product>
      <h1 className='bg-[#222222] text-center text-white pb-6 text-base sm:text-sm md:text-3xl lg:text-4xl'>Which type of pruduct are you looking for ?</h1>
      <Card></Card>
      <Footer></Footer>
      
    </div>
  )
}

export default App