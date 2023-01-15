import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export interface initialStateType {
    email: string
  }
  const initialState = {
    email: "",
  }

const ForgotForm = () => {

    const [formValue, setFormValue] = useState<initialStateType>(initialState)
    const { email } = formValue

    const navigate = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValue({ ...formValue, [e.target.name]: (e.target as HTMLInputElement).value })

    return (
        <div className="flex flex-col p-6 mx-auto my-auto rounded-md sm:p-10">
            <div className="mb-8">
                <h1 className="my-3 text-4xl font-semibold">Forgot Password</h1>
                <p className="text-sm">Hey there don’t fret. Kindly enter the email address used  in registering your account.</p>
            </div>
            <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
                <div className="space-y-4">
                    <div>
                        <Input
                            label='Email Address' placeholder='Enter Email Address'
                            type="email" name="email"
                            className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            value={email}
                            onChange={handleChange}
                        // onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                        />
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <Button
                                    // loading={isLoading}
                            className='w-full mt-20 bg-[#516CF5] -p-10' title='Verify Account' type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ForgotForm
