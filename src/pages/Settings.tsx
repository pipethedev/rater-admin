import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'

const Settings = () => {
    return (
        <section>
            <Header title='Settings' subtitle='feedback from admin on your songs' />

            <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-800 dark:text-gray-100">
                <ol className="space-x-2  flex items-center py-5 border-b border-t border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    {/* <div className=""> */}
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/settings" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Settings</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>

            <div className="my-5">
                <span className='text-xl'>Change Password</span>
                <div className='text-[#888888]'>feedback from admin on your songs</div>
            </div>

            <form className="flex items-center justify-between my-10">

                <SearchInput placeholder='Search through workers on the platform' />

            </form>

        </section>
    )
}

export default Settings
