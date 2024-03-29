import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Input from '../components/Input'
import PasswordMe from '../components/PasswordMe'
import { useLoginMutation } from '../features/auth/authApiSplice'
import { setUser } from '../features/auth/authSlice'
import { useAppDispatch } from '../hocks/hocks'

export interface initialStateType {
  first_name?: string,
  last_name?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
}
const initialState: initialStateType = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const LoginForm = () => {
  // const [password, setPassword] = useState<string>()
  // const [email, setEmail] = useState<string>()
  const [showPassword, setShowPassword] = useState<boolean>(false);


  const [formValue, setFormValue] = useState<initialStateType>(initialState)
  const { email, password, } = formValue

  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      isLoading,
    }] = useLoginMutation()

  const handleChange = (e: any) => setFormValue({ ...formValue, [e.target.name]: e.target.value })

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    try {
      if (email && password) {
        // await loginUser({ email, password })
        // console.log(await loginUser({ email, password })).unwrap();

        // call login trigger from rtk query
        await loginUser({ email, password }).unwrap();

        // const { admin, token }: any = await loginData
        const { token }: any = await loginData
        console.log(token, 'token')
        // set user data and token in redux store
        // dispatch(setUser({ user: admin.firstName, token }))
        // dispatch(setUser({ user: admin, token }))
        dispatch(setUser({ token }))
        // dispatch(setUser({ user: admin, token }))
        if (isLoginSuccess) {
          navigate('/dashboard', { replace: true })
          toast.success("Login successful");
        }
        setFormValue({ email: '', password: '' })
        // tokenForUser && navigate('/', { replace: true })
      } else {
        toast.error("Please fill all Input field")
      }
    } catch (err: any) {
      console.log(err, 'errerr')
      if (!err?.data?.message) {
        toast.error(!err?.data?.message);
        setErrMsg("No Server Response")
      } else if (err?.status === 400) {
        toast.error(err?.status);
        setErrMsg("Missing Email or Password")
      } else if (err?.status === 401) {
        toast.error(err?.data?.message);
        setErrMsg("Unauthorized")
      } else {
        setErrMsg("Login Failed")
      }
      // errRef.current.focus()
    }
  }


  useEffect(() => {
    if (isLoginSuccess) {
      const { token, admin }: any = loginData
      // dispatch(setUser({ user: admin, token }))
      dispatch(setUser({ token }))
      navigate('/dashboard', { replace: true })
      toast.success("User Login Successfully")
    }
  }, [isLoginSuccess, navigate, dispatch, loginData])


  return (
    <div className="flex flex-col p-6 mx-auto my-auto rounded-md sm:p-10">
      <div className="mb-8">
        <p className="text-sm">Welcome Back Admin</p>
        <h1 className="my-3 text-4xl font-semibold">Administrator</h1>
      </div>
      <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={handleLogin}>
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
          <div>
            <Input
              label='Password'
              className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              divStyle='w-full block'
              placeholder='Enter Password'
              // searchIcon
              // type="password"
              type={showPassword ? "text" : "password"}
              name='password'
              value={password}
              onChange={handleChange}
              TrailingIcon={() => (
                <PasswordMe
                  {...{ showPassword }}
                  {...{ setShowPassword }}
                />
              )}
            // onChange={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <Button disabled={isLoading} loading={isLoading} className='w-full mt-20 bg-[#516CF5] -p-10' title='Log in to Dashboard' type='submit' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
