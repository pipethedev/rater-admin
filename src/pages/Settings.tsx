import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'
import PasswordMe from '../components/PasswordMe'
import { useChangePasswordMutation } from '../features/auth/authApiSplice'

const Settings = () => {
    const [oldPassword, setOldPassword] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [changePassword, { isSuccess, isLoading }] = useChangePasswordMutation({})
    const [showPassword, setShowPassword] = useState<boolean>(false);


    useEffect(() => {
        if (isSuccess) {
            toast.success("Password Changed successfully");
        }
    }, [isSuccess]);

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (password && confirmPassword) {
                await changePassword({
                    password,
                    password_confirmation: confirmPassword,
                    old_password: oldPassword
                }).unwrap()

                setPassword('')
                setConfirmPassword('')
            }
        } catch {
            toast.error("Failed Please Try again")
        }

    }

    return (
        <section>
            <Header title='Settings' subtitle='feedback from admin on your songs' />

            <nav aria-label="breadcrumb" className="w-full p-4">
                <ol className="space-x-2  flex items-center py-5 border-b border-t border-opacity-20">
                    <li className="flex items-center space-x-2">
                        <Link rel="noopener noreferrer" to="/" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current text-[#FFC94C]">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/settings" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Settings</Link>
                    </li>
                </ol>
            </nav>

            <div className="my-5">
                <span className='text-xl'>Change Password</span>
                <div className='text-[#888888]'>feedback from admin on your songs</div>
            </div>

            <form className=" my-10" onSubmit={HandleSubmit}>
                <Input
                    label='Old Password'
                    className="w-full lg:w-[1200px]  p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle='w-full block'
                    placeholder='Old Password'
                    // searchIcon
                    type="password"
                    value={oldPassword}
                    onChange={(e: Event) => setOldPassword((e.target as HTMLInputElement).value)}
                />
                <div className='block my-5'>

                    <Input
                        label='Current Password'
                        className="w-full lg:w-[1200px]  p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        divStyle='w-full block'
                        placeholder='Current Password'
                        // searchIcon
                        type="password"
                        value={password}
                        onChange={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
                    />
                </div>
                <div className='block my-5'>

                    <Input
                        label='New Password'
                        className="w-full lg:w-[1200px] p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        divStyle='w-full block'
                        placeholder='New Password'
                        // searchIcon
                        type="password"
                        value={confirmPassword}
                        onChange={(e: Event) => setConfirmPassword((e.target as HTMLInputElement).value)}
                        TrailingIcon={() => (
                            <PasswordMe
                              showPassword={showPassword}
                              setShowPassword={setShowPassword}
                            />
                          )}
                    />
                </div>

                <div>

                    <Button className='block' type='submit' loading={isLoading} onClick={() => null} title="Save New Password" />
                </div>
            </form>

        </section>
    )
}

export default Settings
