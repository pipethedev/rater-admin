import React from 'react'
import { Link } from 'react-router-dom'
import Arrowlong from '../assets/svg/Arrowlong'
import PlayMusicIcon from '../assets/svg/PlayMusicIcon'
import RevenueIcon from '../assets/svg/RevenueIcon'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserRaterIcon from '../assets/svg/UserRater.Icon'
import CardPlatList from '../components/CardPlatList'
import Header from '../components/Header'
import { Table } from '../components/Table'
import * as dayjs from 'dayjs'
import TableMam from '../components/TableMam'
import { dataTable } from '../assets/data/sidebar-data'
import DownloadIcon from '../assets/svg/DownloadIcon'
import { useAllSongsQuery, useDashboardStatsQuery, useGetAllTransactionsQuery } from '../features/auth/authApiSplice'
import { formatKoboAmountForDisplay } from '../utils/currency'

const Loader = () => <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#3B71F7]"></div>

const Dashboard = () => {
    const { data, isLoading, isFetching } = useDashboardStatsQuery({})
    const { data: allsongs, isLoading: isLoadingAllsongs, isError, isSuccess } = useAllSongsQuery({})

    const { data: transac, isLoading: loadingTrasac } = useGetAllTransactionsQuery({})

    // console.log(data, 'datadatadata dashboard state')

    return (
        <section>
            <Header title='Good Evening Admin,' subtitle='Always remember you are a star, and you would always be!' />

            <div className="card grid lg:grid-cols-3 gap-4 my-8">
                <div className="bg-[#F5F8FF] flex items-center p-5 rounded-xl">
                    <SongRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>{data ? data?.songs : '-'}</div>
                        <div className='text-[#888888] mt-3 font-medium'>Songs on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#FFFAF0] flex items-center p-5 rounded-xl">
                    <UserRaterIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>{data ? data?.users : '-'}</div>
                        <div className='text-[#888888] mt-3 font-medium'>Users on Music Rater</div>
                    </div>
                </div>

                <div className="bg-[#F5FFFC] flex items-center p-5 rounded-xl">
                    <RevenueIcon className='space-x-10' />

                    <div className="items-center ml-5">
                        <div className='text-4xl font-semibold'>{data ? formatKoboAmountForDisplay(data?.revenue) : '-'}</div>
                        <div className='text-[#888888] mt-3 font-medium'>Revenue</div>
                    </div>
                </div>
            </div>

            <div className="my-10">

                <div className="flex items-center justify-between">
                    <p className="text-sm sm:text-lg font-medium">Top Rated Songs By Worker to listen to....</p>

                    <p className="text-sm sm:text-base text-[#3B71F7] font-semibold"><Link to="/songs" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
                </div>

                <div className="my-10">
                    <div className="flex items-center justify-center">
                        {isLoadingAllsongs &&
                            <div className="flex items-center justify-center">
                                <Loader />
                            </div>
                        }
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {allsongs?.length === 0 ?
                            (<div className='flex items-center justify-center text-center'>
                                <p>No Songs</p>
                            </div>)
                            :
                            allsongs?.slice(0, 5).map((item: any) => (
                                <CardPlatList title={item?.title} subtitle={item?.file_name} rate={item?.ratings?.[0]['rating']} id={item?.id} />
                            ))}
                    </div>
                </div>

                <div className="flex items-center justify-between my-20">
                    <p className="text-sm sm:text-lg font-extrabold">Recent Transactions</p>

                    <p className="text-sm sm:text-base text-[#3B71F7] font-bold"><Link to="/transactions" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
                </div>


                <div className="mt-5">

                    <Table
                        // loading={customerData.isLoading}
                        columns={[
                            {
                                header: "FULLNAME",
                                view: (row) => `${row?.user?.first_name} ${row?.user?.last_name}`,
                                // view: (row) => `${row?.user?.first_name} ${row?.user?.first_name}`,
                            },
                            { header: "EMAIL ADDRESS", view: (row) => row?.user?.email },
                            {
                                header: "AMOUNT",
                                view: (row) => formatKoboAmountForDisplay(row?.amount)
                                // view: (row) => row?.amount ? (row?.amount) : 0
                            },
                            {
                                header: "PAYMENT STATUS",
                                view: (row) => (row?.payment_status),
                            },
                        ]}
                        // data={[] ?? []}
                        // data={customerData?.data?.customers ?? []}
                        // loading={isLoading}
                        data={transac?.slice(0, 5) ?? []}
                        pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                        rowActions={(row) => [
                            {
                                action: () => { < DownloadIcon /> },
                                name: "ACTION",
                            },
                        ]}
                        titleEmpty="No Transactions yet"
                        subtitleEmpty="It looks like you haven't added any music to your sound page yet.To add a song to the sound page, click the button below"
                        ActionChild={<DownloadIcon className="cursor-pointer" onClick={() => null} />}
                    />

                </div>
            </div>
        </section>
    )
}

export default Dashboard
