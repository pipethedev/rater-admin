import React from 'react'
import { Link } from 'react-router-dom'
import { dataTable } from '../assets/data/sidebar-data'
import Arrowlong from '../assets/svg/Arrowlong'
import RevenueIcon from '../assets/svg/RevenueIcon'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserRaterIcon from '../assets/svg/UserRater.Icon'
import Header from '../components/Header'
import { Table } from '../components/Table'
import { useGetViewAllProfileQuery } from '../features/auth/authApiSplice'

const MyProfile = () => {
    const { data, isLoading, isFetching } = useGetViewAllProfileQuery({})

    console.log(data, 'datadatadata')

    return (
        <section>
            <Header title='My Profile' subtitle='feedback from admin on your songs' />

            <nav aria-label="breadcrumb" className="w-full p-4 dark:bg-gray-800 dark:text-gray-100">
                <ol className="space-x-2  flex items-center py-5 border-b border-t border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    {/* <div className=""> */}
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/allmusic" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">My Profile</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>

            <div className="my-5 flex items-center">
                <div className="flex items-center justify-center rounded-full w-20 h-20 lg:w-[150px] lg:h-[150px] lg:p-10 bg-[#3B71F7] text-white text-center text-xl lg:text-[50px] font-extrabold">
                    <span>{data?.first_name[0]} {data?.last_name[0]}</span>
                </div>

                <div className="ml-5">
                    <span className='text-2xl lg:text-[56px] font-semibold'>{data?.first_name}</span>
                    <div className="text-[#888888] text-lg">{data?.email}</div>
                </div>
            </div>

            <div className="card grid lg:grid-cols-3 gap-4 my-8">
                <div className="bg-[#F5F8FF] flex items-center p-5 rounded-xl">
                    <SongRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>0</div>
                        <div className='text-[#888888] mt-3 font-medium'>Songs on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#FFFAF0] flex items-center p-5 rounded-xl">
                    <UserRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>0</div>
                        <div className='text-[#888888] mt-3 font-medium'>Users on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#F5FFFC] flex items-center p-5 rounded-xl">
                    <RevenueIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>₦0.00</div>
                        <div className='text-[#888888] mt-3 font-medium'>Revenue</div>
                    </div>
                </div>
            </div>



            <div className="flex items-center justify-between my-20">
                <p className="text-sm sm:text-lg font-extrabold">Recently Added Workers</p>

                <p className="text-sm sm:text-base text-[#3B71F7] font-bold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
            </div>

            <div className="my-10">
                <Table
                    // loading={customerData.isLoading}
                    columns={[
                        {
                            header: "FULLNAME",
                            // view: (row) => `${row?.user.first_name} ${row?.user.last_name}`,
                            view: (row) => `${row?.date} ${row?.date}`,
                        },
                        { header: "EMAIL ADDRESS", view: (row) => row?.recipent },
                        {
                            header: "SONGS REVIEWED",
                            view: (row) => row?.amount ? (row?.amount) : 0
                        },
                        {
                            header: "DATE ADDED",
                            view: (row) => (row?.amount),
                        },
                        {
                            header: "STATUS",
                            view: (row) => (row?.amount),
                        },
                    ]}
                    data={dataTable ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    // rowActions={(row) => [
                    //     {
                    //         action: () => { },
                    //         name: "DATE REGISTERED",
                    //     },
                    // ]}
                    title="No Transactions yet"
                    subtitle="It looks like you haven't added any music to your sound page yet. To add a song to the sound page, click the button below"
                />
            </div>

        </section>
    )
}

export default MyProfile
