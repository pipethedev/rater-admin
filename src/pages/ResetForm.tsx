import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Input from '../components/Input'
import PasswordMe from '../components/PasswordMe'
import { useResetMutation } from '../features/auth/authApiSplice'
import { useAppDispatch } from '../hocks/hocks'

export interface initialStateType {
    password?: string,
    confirmPassword?: string
}
const initialState = {
    password: "",
    confirmPassword: "",
}

const ResetForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormValue({ ...formValue, [e.target.name]: (e.target as HTMLInputElement).value })

    const [formValue, setFormValue] = useState<initialStateType>(initialState)
    const { password, confirmPassword } = formValue



    //   const token = useAppSelector(selectCurrentToken)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const [reset, {
        data: resetData,
        isSuccess,
        // isError,
        // error,
        isLoading,
    }] = useResetMutation()


    const onSubmit = async () => {

        try {
            if (password !== confirmPassword) {
                return toast.error("Password doesn't match")
            }
            if (password && confirmPassword) {

                // const res = await reset({
                await reset({
                    password,
                    confirmPassword,
                    // token
                }).unwrap();

                // show toast
                toast.success("success");

                setFormValue({ password: '', confirmPassword: '' })
                navigate("/login");
            } else {
                toast.error("Please fill all Input field")
            }
        } catch (err: any) {
            console.warn(err);
            if (err.status === "FETCH_ERROR") {
                toast.error("Something went wrong, please try again...");
            } else {
                toast.error(err);
            }
        }
    };


    useEffect(() => {
        if (isSuccess) {
            const { token, admin }: any = resetData
            // dispatch(setUser({ user: admin, token}))
            navigate('/login', { replace: true })
            toast.success("User Login Successfully")
        }
    }, [isSuccess, navigate, resetData])



    return (
        <div className="flex flex-col p-6 mx-auto my-auto rounded-md sm:p-10">
            <div className="mb-8">
                <h1 className="my-3 text-4xl font-semibold">Reset Password</h1>
                <p className="text-sm">Hey there don’t fret. Kindly enter the email address used in registering your account.</p>
            </div>
            <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={onSubmit}>
                <div className="space-y-4">
                    <div>
                        <Input
                            label='New Password' placeholder='New Password'
                            type="password" name="password"
                            className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            value={password}
                            onChange={handleChange}
                            TrailingIcon={() => (
                                <PasswordMe
                                  {...{ showPassword }}
                                  {...{ setShowPassword }}
                                />
                              )}
                        // onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                        />
                    </div>
                    <div>
                        <Input
                            label='Confirm Password' placeholder='Confirm Password'
                            type="password"
                            name='confirmPassword'
                            className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            value={confirmPassword}
                            onChange={handleChange}
                            // TrailingIcon={() => (
                            //     <PasswordMe
                            //       {...{ showPassword }}
                            //       {...{ setShowPassword }}
                            //     />
                            //   )}
                        // onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                        />
                    </div>

                </div>
                <div className="space-y-2">
                    <div>
                        <Button
                            // oading={isLoading}
                            className='w-full mt-20 bg-[#516CF5] -p-10' title='Reset Password' type='submit' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResetForm
