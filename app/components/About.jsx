import React from 'react'
import { Button_Neon } from './Button_Neon'
import { Fingerprint } from 'lucide-react';
const About = () => {
  return (
    <section className=" max-w-7xl mx-auto relative flex justify-center py-8 px-8">
    <Button_Neon
      icon={<Fingerprint className="h-5 w-5 text-white" />}
      text="About Us"
    />


    
  </section>
  
  )
}

export default About
