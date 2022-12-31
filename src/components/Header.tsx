import React from 'react'
interface HeaderProps {
    title: string
}
const Header = ({title}: HeaderProps) => {
  return (
    <div className=' font-semibold'>{title}</div>
  )
}

export default Header
