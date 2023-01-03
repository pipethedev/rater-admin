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



const dataTable = [
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Ubah Ikechukwu Dominion',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
]

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
                    <p className="text-sm sm:text-lg font-extrabold">Top Rated Songs By Worker to listen to....</p>

                    <p className="text-sm sm:text-base text-[#3B71F7] font-bold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
                </div>

                <div className="my-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array(8).fill('').map((item) => (
                            <CardPlatList title='Song Title' subtitle='Play Time — 2mins 45sec' rate='Good' />
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between my-20">
                    <p className="text-sm sm:text-lg font-extrabold">Recent Transactions</p>

                    <p className="text-sm sm:text-base text-[#3B71F7] font-bold"><Link to="#" className='flex items-center'><p>View More</p> <span className='ml-3'><Arrowlong /></span></Link></p>
                </div>


                <div className="mt-5">

                    <Table
                        // loading={customerData.isLoading}
                        columns={[
                            {
                                header: "DATE",
                                // view: (row) => `${row?.user.first_name} ${row?.user.last_name}`,
                                view: (row) => `${row?.date} ${row?.date}`,
                            },
                            { header: "RECIPENT", view: (row) => row?.recipent },
                            {
                                header: "DESCRIPTION",
                                view: (row) => row?.totalAmount ? currencyFormat(row?.amount) : 0
                            },
                            {
                                header: "DESCRIPTION",
                                view: (row) => (row?.description),
                                // view: (row) => dayjs(row?.description).format("DD MMM YYYY"),
                            },
                        ]}
                        // data={[] ?? []}
                        // data={customerData?.data?.customers ?? []}
                        data={dataTable ?? []}
                        pagination={{page: 5, pageSize: 1, totalRows: 1}}
                        rowActions={(row) => [
                            {
                                action: () => { },
                                name: "ACTION",
                            },
                        ]}
                    />

                    {/* <TableMam /> */}
                </div>
            </div>
        </section>
    )
}

export default Dashboard
