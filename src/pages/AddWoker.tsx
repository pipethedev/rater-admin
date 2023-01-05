import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const AddWoker = ({setStateBool}: any) => {
    const [email, setEmail] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8">
                    {/* <p className="text-sm dark:text-gray-400">Welcome Back Admin</p> */}
                    <h1 className="my-3 text-4xl font-bold">Create Worker Profile"</h1>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className=" flex items-center justify-between gap-4">
                        <Input type="email" name="email" label='Email Address' placeholder='Enter Email Address'
                            className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={email}
                            onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                        />

                        <Input type="email" name="email" label='Email Address' placeholder='Enter Email Address'
                            className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={email}
                            onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                        />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <Input type="email" name="email" label='Email Address' placeholder='Enter Email Address'
                                className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={email}
                                onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                            />
                        </div>

                    </div>
                    <div className="space-y-2">
                        <div>
                            <Button className='w-full mt-20 bg-[#516CF5] -p-10' title='Submit' type='submit' onClick={() => setStateBool(false)} title="Send Invitaion" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWoker
