import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className="px-6 py-3 rounded-xl font-dm bg-linear-to-tl shadow-sm border-gray-50/55 border-[0.5px] shadow-purple-500  from-violet-800 to-violet-900  text-white   cursor-pointer ">
   {children}
  </button>
  )
}

export default Button
