import React from 'react'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserMic from '../assets/svg/UserMic'
import UserRaterIcon from '../assets/svg/UserRater.Icon'

const FullUserDetails = ({data}: any) => {
  return (
    <>
      <div>
        <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
          <div className="mb-8">
            {/* <h1 className="my-3 text-2xl font-semibold text-[#02123B] rounded-2xl border-dotted ">Give a Feedback on the Music</h1> */}

            <div className='bg-[#EBF1FE] rounded-xl border-dotted border-2 p-4 relative h-36'>
              {/* <p>Feedbacks must contain what is liked about the song, what is disliked and how it can be improved</p> */}
              <div className="absolute top-16 left-0 right-0 text-center flex justify-center">
                <UserMic />
              </div>
            </div>

          </div>

          <div className="my-10 text-center">
            <p className='text-3xl font-semibold'>{data ? `${data?.user?.first_name } ${data?.user?.last_name}` : '--- ---'}</p>
            <p className='text-base'>{data ? data?.user?.email : '--- --- ---'}</p>
          </div>
          <div className="space-y-12 flex items-center w-full rounded-xl border border-[#E7EDFE] px-4 py-2 ">
            <div className="flex items-center gap-2">

              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="8" fill="#F0F4FE" />
                <path d="M30.3909 21.0002C31.5305 21.2225 32.5777 21.7798 33.3987 22.6008C34.2196 23.4217 34.777 24.469 34.9993 25.6085M30.3909 16.3335C32.7584 16.5965 34.9661 17.6567 36.6516 19.34C38.337 21.0233 39.4 23.2297 39.6659 25.5968M25.9308 30.1737C24.5289 28.7719 23.422 27.1868 22.61 25.4956C22.5402 25.3501 22.5052 25.2774 22.4784 25.1853C22.3831 24.8583 22.4515 24.4566 22.6499 24.1796C22.7057 24.1017 22.7724 24.035 22.9057 23.9016C23.3136 23.4938 23.5176 23.2898 23.6509 23.0848C24.1537 22.3114 24.1537 21.3144 23.6509 20.541C23.5176 20.3359 23.3136 20.132 22.9057 19.7241L22.6784 19.4968C22.0584 18.8768 21.7484 18.5667 21.4154 18.3983C20.7533 18.0634 19.9713 18.0634 19.3091 18.3983C18.9762 18.5667 18.6662 18.8768 18.0462 19.4968L17.8623 19.6807C17.2444 20.2986 16.9354 20.6075 16.6995 21.0276C16.4377 21.4936 16.2494 22.2175 16.251 22.7521C16.2524 23.2339 16.3459 23.5632 16.5328 24.2217C17.5372 27.7607 19.4325 31.1001 22.2184 33.8861C25.0044 36.672 28.3438 38.5673 31.8828 39.5717C32.5413 39.7586 32.8706 39.8521 33.3524 39.8535C33.8869 39.8551 34.6109 39.6668 35.0769 39.405C35.497 39.1691 35.8059 38.8601 36.4238 38.2422L36.6077 38.0583C37.2277 37.4383 37.5378 37.1283 37.7062 36.7954C38.0411 36.1332 38.0411 35.3512 37.7062 34.6891C37.5378 34.3561 37.2277 34.0461 36.6077 33.4261L36.3804 33.1987C35.9725 32.7909 35.7686 32.5869 35.5635 32.4536C34.7901 31.9508 33.7931 31.9508 33.0197 32.4536C32.8147 32.5869 32.6107 32.7909 32.2029 33.1987C32.0695 33.3321 32.0028 33.3988 31.9249 33.4546C31.6479 33.653 31.2462 33.7214 30.9191 33.6261C30.8271 33.5993 30.7544 33.5643 30.6089 33.4945C28.9177 32.6825 27.3326 31.5756 25.9308 30.1737Z" stroke="#3B71F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <p className='text-2xl font-medium'>{data ? `0${data.user?.phone_number.split("+234")[1]}` : '--- --- ---' }</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 my-2">
            <div className="rounded-xl bg-[#F0F4FE]">
              <SongRaterIcon />
              <div className="p-3">
                <p className='text-[#000000] text-2xl font-semibold '>2,304</p>
                <p className='text-[#888888] text-sm font-semibold '>Song Uploaded</p>
              </div>
            </div>
            <div className="rounded-xl bg-[#FFF9EB]">
              <UserRaterIcon />
              <div className="p-3">
                <p className='text-[#000000] text-2xl font-semibold '>124</p>
                <p className='text-[#888888] text-sm font-semibold '>Total Reviews</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FullUserDetails
