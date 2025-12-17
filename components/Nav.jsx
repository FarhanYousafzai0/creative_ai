import React from 'react'
import { navLinks } from '../app/lib/Data'
import { CheckIcon } from "@heroicons/react/20/solid";
import Button from '../app/components/Button';
import Switch from '../app/components/Switch';
import { Button_Neon } from '../app/components/Button_Neon';
import { ArrowRight, Fingerprint } from 'lucide-react';
const Nav = () => {
  return (
    <nav className="
    fixed top-0 w-full z-50
bg-black
    border-b border-white/5
    
    shadow-lg shadow-black/30
    py-5 px-8
  ">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      {/* Logo */}
      

<div className="flex items-center gap-2">
  <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
    <div className="w-1/2 h-1/2 bg-white rounded-full flex items-center justify-center">
      <CheckIcon className="w-3 h-3 text-black " />
    </div>
  </div>
  <span className="text-white text-xl font-medium">Nubien</span>
</div>


      {/* Navigation Links */}
      <div className="md:flex items-center gap-12 hidden ">
      <div className="flex gap-6">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`transition-colors font-dm ${
        link.active
          ? "text-white "
          : "text-gray-400 hover:text-white text-normal duration-200 transition-all"
      }`}
    >
      {link.name}
    </a>
  ))}
</div>

      </div>

      {/* Get In Touch Button */}
   <div className='hidden md:flex'>
   </div>
   <Button_Neon
      icon={<ArrowRight className="h-5 w-5 text-white cursor-pointer" />}
      text="Let's Start"
      className={'cursor-pointer'}
      
    /> 
    </div>
  </nav>
  )
}

export default Nav
