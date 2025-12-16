import React from 'react'

const Button = ({children,className}) => {
  return (
    <button className="px-8 py-3 font-dm bg-linear-to-tl shadow-sm border-neutral-50/55 border-[0.2px] shadow-purple-500  from-violet-800 to-violet-500  text-white rounded-xl font-medium cursor-pointer ">
   {children}
  </button>
  )
}

export default Button
