import React from 'react'
import { dataTable } from '../assets/data/sidebar-data'
import Button from '../components/Button'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import { Table } from '../components/Table'

const ManageWorkers = () => {
    return (
        <section>
            <div className="flex items-center justify-between">
                <Header title='Workers' subtitle='All workers added to the platform' />

                <div className="mt-10">
                    <Button title='Add a Worker' />
                </div>
            </div>

            <div className="flex items-center justify-between">

                <SearchInput placeholder='Search through workers on the platform' />


                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Status : All</button>
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Date : All</button>
                </div>
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
                    // data={[] ?? []}
                    // data={customerData?.data?.customers ?? []}
                    data={dataTable ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    rowActions={(row) => [
                        {
                            action: () => { },
                            name: "ACTION",
                        },
                    ]}
                    title="No Transactions yet"
                    subtitle="It looks like you haven't added any music to your sound page yet. To add a song to the sound page, click the button below"
                    />
                </div>


        </section>
    )
}

export default ManageWorkers
