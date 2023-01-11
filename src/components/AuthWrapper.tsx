import React, { ReactNode } from 'react'
import MicAuth from '../assets/svg/micauth.svg'
interface Props {
  children: ReactNode
}
const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="bg-[url('assets/svg/loginbgdot.svg')] h-screen">

      <div className="min-h-screen w-screen relative bg-fixed dot-bg bg-repeat bg-center bg-left flex justify-center items-center ">
        <section className="shadow-2xl relative z-10 rounded-2xl bg-white my-20 w-[90%] sm:w-1/2 max-w-[500px] min-h-[70%] mx-auto">
          {children}
        </section>
        <div className="bg-[url('assets/svg/loginbgdot.svg')">
          <div className=" bg-[url('assets/svg/authbg.svg')]  half-bg bg-[#02123B] fixed top-[40%] bottom-0 left-0 right-0 w-full bg-repeat-x bg-cover bg-no-repeat mix-blend-multiply">
            <div className="text-center my-auto mx-auto">
              <p>FAQs</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
            <div className="flex justify-center items-center">

            <img src={MicAuth} alt="" className='fixed bottom-0 items-center' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthWrapper
