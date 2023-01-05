import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
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


<div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-400">Sign in to access your account</p>
	</div>
	<form className="space-y-12 ng-untouched ng-pristine ng-valid">
		<div className="space-y-4">
			<div>
				<label for="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label for="password" className="text-sm">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
      <Button className='w-full bg-[#516CF5] -p-10' title='Submit' type='submit'>Sign In</Button>			</div>
			<p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
				<a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Sign up</a>.
			</p>
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


