import { useState } from 'react'
import { Link } from 'react-router-dom'
import DownloadIcon from '../assets/svg/DownloadIcon'
import Button from '../components/Button'
import Header from '../components/Header'
import Input from '../components/Input'
import Modal from '../components/Modal'
import { Table } from '../components/Table'
import { useGetAllTransactionsQuery, useGetPricingsQuery } from '../features/auth/authApiSplice'
import { formatKoboAmountForDisplay } from '../utils/currency'
import AddWoker from './AddWoker'
import EditMusicUpload from './EditMusicUpload'
import MusicUpload from './MusicUpload'


const Transactions = () => {
    const [step, setStep] = useState<boolean>(false);
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [stateAdd, setStateAdd] = useState<boolean>(false)

    const { data: price } = useGetPricingsQuery({})

    const [search, setSearch] = useState<string>("")

    const { data, isLoading } = useGetAllTransactionsQuery({})

    // data?.filter((item: any) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)?.

    const filterTable = (data: any) => {
        return (
            data?.filter((item: any) => item?.user?.first_name.toLowerCase().includes(search.toLowerCase())
                || item?.user?.last_name.toLowerCase().includes(search.toLowerCase())
                || item?.user?.email?.toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    return (
        <section>
            <div className="flex items-center justify-between">
                <Header title='Transactions' subtitle='All workers added to the platform' />

                <div className="block sm:flex items-center mt-10 gap-5">
                    <div className="text-right mb-2 sm:mb-0">
                        <span className='text-[888888] text-xs'>Current Price</span>
                        <span className='block text-base font-semibold'>{formatKoboAmountForDisplay(price?.price)}</span>
                    </div>
                    <Button className='bg-[#FFC94C] text-black' title='Review Price' onClick={() => setStateBool(true)} />
                </div>
            </div>


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
                        <Link rel="noopener noreferrer" to="/transactions" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Transactions</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>

            <div className="flex items-center justify-between">
                <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle=''
                    placeholder="Search through transactions..."
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
                            view: (row: any) => `${row?.user?.first_name} ${row?.user?.last_name}`,
                        },
                        { header: "EMAIL ADDRESS", view: (row: any) => row?.user?.email },
                        {
                            header: "AMOUNT",
                            view: (row: any) => formatKoboAmountForDisplay(row?.amount)
                        },
                        {
                            header: "PAYMENT STATUS",
                            view: (row: any) => (row?.payment_status),
                        },
                    ]}
                    data={filterTable(data) ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    rowActions={(row) => [
                        {
                            action: () => { },
                            name: "DATE REGISTERED",
                        },
                    ]}
                    loading={isLoading}
                    titleEmpty="No Revenue at the moment"
                    subtitleEmpty="It looks like you haven't added any music to your sound page yet.To add a song to the sound page, click the button below"
                    emptyChild={<Button className='w-full mt-20 bg-[#516CF5] -p-10' type='button' title="Invite a Worker" onClick={() => setStateAdd(true)} />}
                    ActionChild={<DownloadIcon className="cursor-pointer" onClick={() => null} />}
                />
            </div>

            <Modal title='Music Upload Price' show={stateBool} closeModal={setStateBool}>
                <MusicUpload {...{ setStateBool }} {...{ price }} {... { setStep }} />
            </Modal>

            <Modal title='Edit Price' show={step} closeModal={setStep}>
                <EditMusicUpload {...{ setStep }} {...{ price }} />
            </Modal>

            <Modal show={stateAdd} closeModal={setStateAdd}>
                <AddWoker setStateBool={setStateAdd} />
            </Modal>

        </section>
    )
}

export default Transactions
