import React, { useState } from 'react'
import { toast } from 'react-toastify'
import CheckSelecIcon from '../assets/svg/CheckSelecIcon'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAssignASongMutation, useGetAllWorkersQuery } from '../features/auth/authApiSplice'

const Loader = () => <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#3B71F7]"></div>


const SelectAssignWorker = ({ setStateBool, data }: any) => {
    const [search, setSearch] = useState<string>("")
    const [checker, setChecker] = useState<boolean>(false)
    const { data: allworkers, isLoading, isError, error } = useGetAllWorkersQuery({})
    const [AssignASong, { data: assigndata, isLoading: isloadingAssign }] = useAssignASongMutation({})
    const [selectedWorker, setSelectedWorker] = useState()


    const filterTable = (data: any) => {
        return (
            allworkers?.filter((item: any) => item?.first_name.toLowerCase().includes(search.toLowerCase())
                || item?.last_name.toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
                <div className="my-3">
                    <h1 className=" text-[28px] font-semibold">Select Worker to assign song to</h1>
                    <span className='text-[#888888]'>All Songs uploaded on this platform (3,523)</span>
                </div>
                <form className=" ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
                    <div className="flex items-center justify-between w-full">
                        <Input
                            className="w-full flex-1 lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            divStyle=''
                            placeholder="Search songs by title or Artiste&apos;s name"
                            searchIcon
                            type="search"
                            value={search}
                            onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                        />
                    </div>
                    <div className="mt-4 relative">
                        {/*
                        {isError && (
                            <div className="flex items-center justify-center animate-pulse">
                                <span className='text-3xl my-5'>Something Went Wrong - {error?.error}</span>
                            </div>
                        )} */}

                        {isLoading && <div className="flex items-center justify-center">
                            <Loader />
                        </div>}

                        {filterTable(allworkers)?.map((item: any, i: number) => (
                            <>
                                <div key={item?.id} className='flex items-center justify-between cursor-pointer mb-2'
                                    onClick={async () => {
                                        try {
                                            if (data?.id && item?.id) {
                                                await AssignASong({
                                                    songId: data?.id,
                                                    workerId: item?.id
                                                })
                                                setChecker(!checker)
                                                setSelectedWorker(item.id)
                                            }

                                        } catch (error: any) {
                                            toast.error(error?.data?.message)
                                        }
                                    }}>
                                    <div className='flex items-center'>
                                        <div className='flex items-center justify-center h-8 w-8 bg-[#3B71F7] rounded-full text-xl text-white text-center font-semibold p-7 sm:p-8'>
                                            <span className='whitespace-nowrap'>{item?.first_name[0]} {item?.last_name[0]}</span>
                                        </div>

                                        <div className="ml-4 text-base rounded-full text-[18px] font-semibold">{item?.first_name} {item?.last_name}</div>
                                    </div>
                                    <div className='relative'>
                                        {((item?.id === selectedWorker) &&
                                            (isloadingAssign ? <Loader /> : <CheckSelecIcon className='absolute right-0 -top-0' />)
                                        )}
                                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="15" cy="15" r="14.3" stroke="#CEDBFD" stroke-width="0.6" />
                                        </svg>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </form>
                <div className="space-y-2">
                    <div className='flex items-center justify-end'>
                        <Button className=' mt-20 bg-[#516CF5] -p-10' type='submit' title="Select and Continue" onClick={() => setStateBool(false)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectAssignWorker
