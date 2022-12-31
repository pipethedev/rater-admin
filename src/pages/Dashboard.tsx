import React from 'react'
import { Link } from 'react-router-dom'
import Arrowlong from '../assets/svg/Arrowlong'
import PlayMusicIcon from '../assets/svg/PlayMusicIcon'
import RevenueIcon from '../assets/svg/RevenueIcon'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserRaterIcon from '../assets/svg/UserRater.Icon'
import Header from '../components/Header'

const Dashboard = () => {
    return (
        <section>
            <Header title='Good Evening Admin,' subtitle='Always remember you are a star, and you would always be!' />

            <div className="card grid lg:grid-cols-3 gap-4 my-8">
                <div className="bg-[#F5F8FF] flex items-center p-5 rounded-xl">
                    <SongRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl'>0</div>
                        <div className='text-[#888888] mt-3'>Songs on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#FFFAF0] flex items-center p-5 rounded-xl">
                    <UserRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl'>0</div>
                        <div className='text-[#888888] mt-3'>Users on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#F5FFFC] flex items-center p-5 rounded-xl">
                    <RevenueIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl'>₦0.00</div>
                        <div className='text-[#888888] mt-3'>Revenue</div>
                    </div>
                </div>
            </div>

            <div className="my-10">

                <div className="flex items-center justify-between">
                    <p className="text-lg font-extrabold">Top Rated Songs By Worker to listen to....</p>

                    <p className="text-base text-[#3B71F7] font-bold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
                </div>

                <div className="my-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col my-3">
                            <PlayMusicIcon />

                            <p className='text-xl font-extrabold'>Song Title</p>
                            <p className='text-[#666666] text-sm'>Play Time — 2mins 45sec</p>
                            <p className='bg-[#EBFFF9] p-2 text-[#00C288] text-base rounded-full'>Good</p>
                        </div>

                        <div className="flex flex-col my-3">
                            <PlayMusicIcon />

                            <p className='text-xl font-extrabold'>Song Title</p>
                            <p className='text-[#666666] text-sm'>Play Time — 2mins 45sec</p>
                            <p className='bg-[#EBFFF9] p-2 text-[#00C288] text-base rounded-full'>Good</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
