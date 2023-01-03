import React from 'react'

interface ButtonProps {
    title: string
}
const Button = ({title}: ButtonProps) => {
  return (
      <button className="bg-[#3B71F7] shadow-md py-4 md:py-6 px-8 md:px-12 rounded-full font-bold text-white">{title}</button>
  )
}

export default Button
