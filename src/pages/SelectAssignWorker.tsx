import React, { useState } from 'react'
import CheckSelecIcon from '../assets/svg/CheckSelecIcon'
import Button from '../components/Button'
import Input from '../components/Input'
import { useGetAllWorkersQuery } from '../features/auth/authApiSplice'

const Loader = () => <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#3B71F7]"></div>


const SelectAssignWorker = ({ setStateBool }: any) => {
    const [search, setSearch] = useState<string>("")
    const [checker, setChecker] = useState<boolean>(false)
    const { data, isLoading } = useGetAllWorkersQuery({})

    console.log(data, 'man')
    const filterTable = (data: any) => {
        return (
            data?.filter((item: any) => item?.first_name.toLowerCase().includes(search.toLowerCase())
                || item?.last_name.toLowerCase().includes(search.toLowerCase())
                // || item?.role?.toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
                <div className="">
                    <h1 className=" text-[28px] font-semibold">Select Worker to assign song to</h1>
                    <span className='text-[#888888] '>All Songs uploaded on this platform (3,523)</span>
                </div>
                <form className=" ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
                    <div className=" flex items-center justify-between w-full">
                        <Input
                            className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            divStyle=''
                            placeholder="Search songs by title or Artiste’s name'"
                            searchIcon
                            type="search"
                            value={search}
                            onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                        />
                    </div>
                    <div className="mt-4 relative">

                        {isLoading && <div className="flex items-center justify-center">
                            <Loader />
                        </div>}

                        {filterTable(data)?.map((data: any) => (
                            <>
                                <div className='flex items-center justify-between cursor-pointer' onClick={() => setChecker(!checker)}>
                                    <div className='flex items-center'>
                                        <div className='flex items-center justify-center h-8 w-8 bg-[#3B71F7] rounded-full text-xl text-white text-center font-semibold p-7 sm:p-8'>
                                            <span className='whitespace-nowrap'>{data?.first_name[0]} {data?.last_name[0]}</span>
                                        </div>

                                        <div className="ml-4 text-base rounded-full text-[18px] font-semibold">{data?.first_name} {data?.last_name}</div>
                                    </div>
                                    {checker &&
                                        <CheckSelecIcon className='right-0' />
                                    }
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
