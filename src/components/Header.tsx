import React from 'react'
interface HeaderProps {
    title: string
    subtitle?: string
}
const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <div className='mt-10'>
            <div className='text-3xl font-extrabold text-black'>
                {title}
            </div>

            <div className='mt-3 text-base text-[#888888]'>{subtitle}</div>
        </div>
    )
}

export default Header
