import React from 'react'

const Hero = () => {
  return (
    <section  className='h-screen mt-20  flex items-center p-10 justify-center'>
      <div className='w-full h-full flex flex-col gap-10 items-center  '>

    <div className='p-2 rounded-full bg-[#111111] border-[#1d1c1c] shadow-xl flex items-end  gap-2 '>
    <span className='bg-linear-to-tl shadow-sm border-transparent p-1 rounded-full font-semibold text-xs shadow-purple-500  from-violet-800 to-violet-500'> 2025</span>
    <span>Next-Gen AI Studio

</span>
    </div>
      
      <h1 className='lg:text-8xl text-4xl tracking-tight text-center   text-white font-dm'>
      AI-Driven Success <br />
      Redefining the Future.
      </h1>

      <p className='w-sm text-center text-gray-400 text-normal leading-tighter'>Creating latest solutions that redefine innovation. 
      Stay ahead with AI-powered technology for the future.</p>
      </div>
    </section >
  )
}

export default Hero
