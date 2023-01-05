import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'

const Settings = () => {
    const [currentPassword, setCurrentPassword] = useState<string>("")
    const [NewPassword, setNewPassword] = useState<string>("")

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
                        <Link rel="noopener noreferrer" to="/" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
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

            <form className=" my-10">
                <Input
                    label='Current Password'
                    className="w-full lg:w-[1200px]  p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    divStyle='w-full block'
                    placeholder='Current Password'
                    // searchIcon
                    type="password"
                    value={currentPassword}
                    onChange={(e: Event) => setCurrentPassword((e.target as HTMLInputElement).value)}
                />
                <div className='block my-5'>

                <Input
                    label='New Password'
                    className="w-full lg:w-[1200px] p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    divStyle='w-full block'
                    placeholder='New Password'
                    // searchIcon
                    type="password"
                    value={NewPassword}
                    onChange={(e: Event) => setNewPassword((e.target as HTMLInputElement).value)}
                    />
                    </div>

                <div>

                <Button className='block' type='submit' onClick={() => null} title="Save New Password"  />
                </div>
            </form>

        </section>
    )
}

export default Settings
