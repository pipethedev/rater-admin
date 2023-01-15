import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Input from '../components/Input'
import { useCreateWorkerMutation } from '../features/auth/authApiSplice'

const AddWoker = ({ setStateBool }: any) => {
    const [createWorker, { isSuccess, isLoading }] = useCreateWorkerMutation()

    const [phoneNumber, setPhoneNumber] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Music Upload Price Updated Successfully");
            setStateBool(false)
        }
    }, [isSuccess]);

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (firstName && lastName && email) {
                await createWorker({
                    first_name: firstName,
                    last_name: lastName,
                    phone_number: phoneNumber,
                    email
                }).unwrap()
                setEmail('')
                setFirstName('')
                setLastName('')
                setPhoneNumber('')
            }
        } catch {
            toast.error("Failed to Add Worker Please Try again")
        }

    }
    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md  dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8">
                    <h1 className="my-3 text-4xl font-semibold">Create Worker Profile</h1>
                </div>
                <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={HandleSubmit}>
                    <div className=" flex items-center justify-between gap-4">
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
                    <div className="space-y-2">
                        <div>
                            <Button loading={isLoading} disabled={isLoading} className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Send Invitaion" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWoker
