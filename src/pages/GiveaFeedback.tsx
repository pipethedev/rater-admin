import React from 'react'
import Button from '../components/Button'

const GiveaFeedback = ({ setStateBool }: any) => {
    return (
        <>
            <div>
                <div className="flex flex-col max-w-md mx-auto my-auto rounded-md  dark:bg-gray-900 dark:text-gray-100">
                    <div className="mb-8">
                        <h1 className="my-3 text-4xl font-semibold">Give a Feedback on the Music</h1>
                    </div>
                    <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
                        {/* <div className=" flex items-center justify-between gap-4">
                            <Input type="text" name="firstname" label='Firstname' placeholder='Enter Firstname'
                                className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={firstName}
                                onChange={(e: Event) => setFirstName((e.target as HTMLInputElement).value)}
                            />

                            <Input type="text" name="lastname" label='Lastname' placeholder='Enter Lastname'
                                className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={lastName}
                                onChange={(e: Event) => setLastName((e.target as HTMLInputElement).value)}
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
                            <div>
                                <Input type="number" name="phoneNumber" label='Phone Numbe' placeholder='Enter Phone Number'
                                    className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={phoneNumber}
                                    onChange={(e: Event) => setPhoneNumber((e.target as HTMLInputElement).value)}
                                />
                            </div>

                        </div>
                            */}
                        <div className="space-y-2">
                            <div>
                                <Button
                                    // loading={isLoading}
                                    className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Send Feedback" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default GiveaFeedback
