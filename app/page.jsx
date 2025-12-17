import React from 'react'
import Nav from '../components/Nav'
import Hero from './components/Hero'
import BackgroundPaths from '@/components/kokonutui/background-paths'
import About from './components/About'

const page = () => {
  return (
    <div className='relative bg-black '>
      <Nav/>
      <Hero/>
      <About/>
    </div>
  )
}

export default page
