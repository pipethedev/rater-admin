import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
  const [password, setPassword] = useState<string>()
  const [email, setEmail] = useState<string>()
  return (
    <div className="bg-[url('assets/svg/loginbgdot.svg')] h-screen">
      <section className="relative h-screen">
        {/* <div className="absolute left-1/2 right-1/2 top-1/2 mx-auto w-full max-w-[23rem] md:bg-white bg-transparent">
              <div className='p-[10px]'>
                <span className='text-[#949AB1] text-sm'>Welcome Back,</span>
                <h1 className='font-bold'>Admin</h1>
              </div>

              <form className='userInput' action="" onSubmit={() => null}>
                <div className="userInput">
                  <Input className="childinput" label="Email" type="email" name="email" value={''} placeholder='Email' onChange={() => null} />
                </div>

                <div className="userInput">
                  <Input className="childinput" label="Password" type="password" name='password' value={''} placeholder='Password' onChange={() => null} />
                </div>

                <div className='mb-3 userInput'>
                  <Link to="/reset" className="text-[#FF5A5A] font-bold text-sm">Reset Passsword</Link>
                </div>

                <div className="">
                  <Button className='w-full bg-[#516CF5] -p-10' title='Submit' type='submit'>Sign In</Button>
                </div>
              </form>

            </div> */}


        <div className="flex flex-col max-w-md p-6 mx-auto my-auto rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8">
            <p className="text-sm dark:text-gray-400">Welcome Back Admin</p>
            <h1 className="my-3 text-4xl font-bold">Administrator</h1>
          </div>
          <form className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <Input type="email" name="email" label='Email Address' placeholder='Enter Email Address'
                  className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={email}
                  onChange={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Input
                  label='Password'
                  className="w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  divStyle='w-full block'
                  placeholder='Enter Password'
                  // searchIcon
                  type="password"
                  value={password}
                  onChange={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <Button className='w-full mt-20 bg-[#516CF5] -p-10' title='Submit' type='submit'>Log in to Dashboard</Button>			</div>
            </div>
          </form>
        </div>


        <div className="mx-auto flex flex-col">

          <div className="bg-red-600 flex flex-1 flex-col items-center h-56">fdkjj</div>
          <div className="bg-blue-600 flex flex-1 flex-col items-center h-[50%]">kfjjfj</div>

        </div>
      </section>
    </div>
  )
}

export default Login


