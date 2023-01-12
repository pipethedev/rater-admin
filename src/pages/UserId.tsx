import React from 'react'
import { Link } from 'react-router-dom'
import Arrowlong from '../assets/svg/Arrowlong'
import RevenueIcon from '../assets/svg/RevenueIcon'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserRaterIcon from '../assets/svg/UserRater.Icon'
import CardPlatList from '../components/CardPlatList'
import Header from '../components/Header'
import MicAuth from '../assets/svg/micauth.svg'


const UserId = () => {
  return (
    <section>
      <Header title='User #24' subtitle="All registered users on the platform — 2,550" />

      <div className="my-5 flex items-center">
        <div className="flex items-center justify-center rounded-full w-20 h-20 lg:w-[100px] lg:h-[100px] lg:p-10 bg-[#3B71F7] text-white text-center text-xl lg:text-[50px] font-extrabold">
        <img src={MicAuth} alt="" className='items-center lg:w-52 lg:h-52' />
        </div>

        <div className="ml-5">
          <span className='text-2xl lg:text-[46px] font-semibold'>Lord Gerald Kachi</span>
          <div className="text-[#888888] text-lg">fitzgeraldkachi@gmail.com</div>
        </div>
      </div>

      <div className="card grid lg:grid-cols-3 gap-4 my-8">
        <div className="bg-[#F5F8FF] flex items-center p-5 rounded-xl">
          <SongRaterIcon className='space-x-10' />

          <div className="items-center ml-5">
            <div className='text-4xl font-semibold'>3000</div>
            <div className='text-[#888888] mt-3 font-medium'>Songs Uploaded</div>
          </div>
        </div>

        <div className="bg-[#FFFAF0] flex items-center p-5 rounded-xl">
          <UserRaterIcon className='space-x-10' />

          <div className="items-center ml-5">
            <div className='text-4xl font-semibold'>4.5</div>
            <div className='text-[#888888] mt-3 font-medium'>Total Rating</div>
          </div>
        </div>

        <div className="bg-[#F5FFFC] flex items-center p-5 rounded-xl">
          <RevenueIcon className='space-x-10' />

          <div className="items-center ml-5">
            <div className='text-4xl font-semibold'>₦125,000.00</div>
            <div className='text-[#888888] mt-3 font-medium'>Total payments made</div>
          </div>
        </div>
      </div>

      <div className="my-10">

        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-lg font-medium">Top Rated Songs By Worker to listen to....</p>

          <p className="text-sm sm:text-base text-[#3B71F7] font-semibold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
        </div>

        <div className="my-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4).fill('').map((item) => (
              <CardPlatList title='Song Title' subtitle='Play Time — 2mins 45sec' rate='Good' />
            ))}
          </div>
        </div>

        <div className="flex items-center my-20 gap-4">
          <p className="text-sm sm:text-lg font-extrabold">Emmanuel’sTop Songs</p>
          <p> — Based off Reviews and Ratings</p>

          {/* <p className="text-sm sm:text-base text-[#3B71F7] font-bold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p> */}
        </div>
      </div>
    </section>
  )
}

export default UserId
