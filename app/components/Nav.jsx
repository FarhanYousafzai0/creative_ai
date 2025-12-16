import React from 'react'
import { navLinks } from '../lib/Data'

const Nav = () => {
  return (
    <nav className="
    fixed top-0 w-full z-50
    bg-black/40 backdrop-blur-2xl backdrop-saturate-150
    border-b border-white/10
    shadow-lg shadow-black/30
    py-5 px-8
  ">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-5 h-5"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <span className="text-white text-xl font-medium">Nubien</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-12">
      <div className="flex gap-6">
  {navLinks.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`transition-colors ${
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
      <button className="px-8 py-3 bg-linear-to-tl shadow-sm border-neutral-50/50 border-[0.2px] shadow-purple-500 from-purple-500 to-purple-900  text-white rounded-xl font-medium cursor-pointer ">
        Get In Touch
      </button>
    </div>
  </nav>
  )
}

export default Nav
