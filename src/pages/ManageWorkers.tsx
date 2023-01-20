import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import { Table } from '../components/Table'
import Modal from '../components/Modal'
import Input from '../components/Input'
import AddWoker from './AddWoker'
import { useGetAllWorkersQuery, useBanAUserMutation } from '../features/auth/authApiSplice'
import ThreeDotsWorker from '../assets/svg/THreeDotsWork'
import { toast } from 'react-toastify'

const ManageWorkers = () => {
    const [banAUser, { isLoading: loadingBan, isSuccess, error, status,data: bannn }] = useBanAUserMutation()
    const { data, isLoading } = useGetAllWorkersQuery({})
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")

    console.log(status, 'workers')
    console.log(bannn, 'data')

    useEffect(() => {
        if (isSuccess) {
            toast.success(status?.message);
            // toast.success("Banned Successfully");
        }
    }, [isSuccess]);

    const UnBanAUser = async (banned: boolean, id: string) => {
        try {
                await banAUser({
                    body: {
                        banned: !banned
                    },
                    id
                }).unwrap()
        } catch {
            toast.error(error?.data?.message)
        }

    }

    return (
        <section>
            <div className="flex items-center justify-between">
                <Header title='Workers' subtitle='All workers added to the platform' />

                <div className="mt-10">
                    <Button title='Add a Worker' onClick={() => setStateBool(true)} />
                </div>
            </div>

            <div className="flex items-center justify-between my-10">

                <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle=''
                    placeholder="Search through workers on the platform"
                    searchIcon
                    type="search"
                    value={search}
                    onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                />


                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] whitespace-nowrap  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2">Status : All</button>
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] whitespace-nowrap focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2">Date : All</button>
                </div>
            </div>

            <div className="my-10">
                <Table
                    // loading={customerData.isLoading}
                    columns={[
                        {
                            header: "FULLNAME",
                            // view: (row) => `${row?.user.first_name} ${row?.user.last_name}`,
                            view: (row) => `${row?.first_name} ${row?.last_name}`,
                        },
                        { header: "EMAIL ADDRESS", view: (row) => row?.email },
                        {
                            header: "ROLES",
                            // view: (row) => row?.amount ? (row?.amount) : 0
                            view: (row) => row?.role
                        },
                        {
                            header: "DATE ADDED",
                            view: (row) => (row?.updated_at),
                        },
                        {
                            header: "ACTION",
                            view: (row) => (row?.action),
                        },
                    ]}
                    loading={isLoading}
                    data={data?.map(item => ({
                        first_name: item?.first_name,
                        last_name: item?.last_name,
                        email: item?.email,
                        role: item?.role,
                        updated_at: item?.updated_at,
                        action: (
                            <span className={`cursor-pointer ${item?.banned ? 'text-green-600' : 'text-red-600'}`} onClick={() => UnBanAUser(item?.banned, item?.id)}>{item?.banned ? 'Activate' : 'Deactivate'}</span>
                        ),
                    })) ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    // rowActions={(row) => [
                    //     {
                    //         action: () => { },
                    //         name: "ACTION",
                    //     },
                    // ]}
                    titleEmpty="No Worker on the platform at the moment"
                    subtitleEmpty="It looks like you haven't added any music to your sound page yet.To add a song to the sound page, click the button below"
                    emptyChild={<Button className='w-full mt-20 bg-[#516CF5] -p-10' type='button' title="Invite a Worker" onClick={() => setStateBool(true)} />}
                />
            </div>


            <Modal show={stateBool} closeModal={setStateBool}>
                <AddWoker {...{ setStateBool }} />
            </Modal>
        </section>
    )
}

export default ManageWorkers
