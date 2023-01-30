import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { dataTable } from '../assets/data/sidebar-data'
import Header from '../components/Header'
import Input from '../components/Input'
import SearchInput from '../components/SearchInput'
import { Table } from '../components/Table'
import { useGetAllUsersQuery } from '../features/auth/authApiSplice'

const Users = () => {
    const { data, isLoading } = useGetAllUsersQuery({})
    const [search, setSearch] = useState<string>("")


    const filterTable = (data: any) => {
        return (
            data?.filter((item: any) => item?.first_name.toLowerCase().includes(search.toLowerCase())
                || item?.last_name.toLowerCase().includes(search.toLowerCase())
                || item?.role?.toLowerCase().includes(search.toLowerCase())
                || item?.phone_number?.toLowerCase().includes(search.toLowerCase())
            )
        )
    }


    return (
        <section>
            <Header title='Users' subtitle='All registered users on the platform' />

            <nav aria-label="breadcrumb" className="w-full p-4">
                <ol className="space-x-2  flex items-center py-5 border-b border-t border-opacity-20">
                    {/* <div className=""> */}
                    <li className="flex items-center space-x-2">
                        <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current text-[#FFC94C]">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/users" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Users</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>


            <div className="flex items-center justify-between">
                {/* <SearchInput placeholder="Search through users on the platform"
                     searchIcon
                     type="search"
                     value={search}
                     onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                /> */}
                <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle=''
                    placeholder="Search through users on the platform"
                    searchIcon
                    type="search"
                    value={search}
                    onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                />

                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2">Date : All</button>
                </div>
            </div>


            <div className="my-10">
                <Table
                    // loading={customerData.isLoading}
                    columns={[
                        {
                            header: "FULLNAME",
                            // view: (row) => `${row?.user.first_name} ${row?.user.last_name}`,
                            view: (row: any) => `${row?.first_name} ${row?.first_name}`,
                        },
                        { header: "EMAIL ADDRESS", view: (row: any) => row?.email },
                        {
                            header: "DESCRIPTION",
                            // view: (row: any) => row?.amount ? (row?.amount) : 0
                            view: (row: any) => (row?.role)
                        },
                        {
                            header: "MOBILE NUMBER",
                            view: (row: any) => (row?.phone_number),
                        },
                    ]}
                    data={filterTable(data) ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    loading={isLoading}
                    // rowActions={(row) => [
                    //     {
                    //         action: () => { },
                    //         name: "DATE REGISTERED",
                    //     },
                    // ]}
                    titleEmpty="No user on the platform at the moment"
                    subtitleEmpty="It looks like you haven't added any music to your sound page yet.To add a song to the sound page, click the button below"
                />
            </div>
        </section>
    )
}

export default Users
