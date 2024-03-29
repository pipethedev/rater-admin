import { Dispatch, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CardPlatList from '../components/CardPlatList'
import Header from '../components/Header'
import Input from '../components/Input'
import Modal from '../components/Modal'
import { useAllSongsQuery } from '../features/auth/authApiSplice'
import SelectAssignWorker from './SelectAssignWorker'

const AllMusic = () => {
    const { data, isLoading, isError, error } = useAllSongsQuery({})
    const [search, setSearch] = useState<string>("")
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [songObject, setSongObject] = useState(null)


    const openAssignWorkerToSong = (data: any) => {
        setSongObject(data)
        setStateBool(true)
    }

    const Loader = () => <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#3B71F7]"></div>

    return (
        <section>
            <Header title='Music' subtitle='All Songs uploaded on this platform' />
            <nav aria-label="breadcrumb" className="w-full p-4">
                <ol className="space-x-2  flex items-center py-5 border-b border-t border-opacity-20">
                    {/* <div className=""> */}
                    <li className="flex items-center space-x-2">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current text-[#FFC94C]">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg> */}
                        <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
                    </li>
                    <li className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current text-[#FFC94C]">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <Link rel="noopener noreferrer" to="/songs" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Music</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>

            <div className="flex items-center justify-between">
                <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle=''
                    placeholder="Search songs by title or Artiste&apos;s name"
                    searchIcon
                    type="search"
                    value={search}
                    onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                />

                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2">Alphabetic Order</button>
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2">Date Uploaded</button>
                </div>
            </div>

            <div className="my-10">
                <div className="flex items-center justify-center">
                    {isError && (
                        // @ts-ignore
                        <span className='text-3xl my-5'>Something Went Wrong - {error?.error}</span>
                    )}
                    {isLoading && <div className='text-3xl my-5'>
                        <Loader />
                    </div>}
                    {/* {isFetching && <div className='text-3xl'>Fecthing all songs</div>} */}
                </div>
                <div className="flex items-center justify-center">
                    {search?.length < 0 &&
                        (<div className='grid grid-cols-1 place-items-center w-screen text-center text-2xl font-semibold'>
                            No Songs
                        </div>)}
                    {data?.length < 0 &&
                        (<div className='grid grid-cols-1 place-items-center w-screen text-center text-2xl font-semibold'>
                            No Songs
                        </div>)}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.filter((item: any) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1)?.map((item: any) => (
                        <CardPlatList key={item?.id} {...{stateBool}} {...{item}} {...{ setStateBool }} title={item?.title} subtitle={item?.file_name} rate={item?.ratings?.[0]['rating']} id={item?.id} assignWorkFunc={openAssignWorkerToSong}/>
                    ))}
                </div>
            </div>

            {/* <div className="flex items-center justify-center my-20">
                <Button title='Upload your Music' onClick={() => setStateBool(true)} />
            </div> */}

            <Modal show={stateBool} closeModal={setStateBool}>
                <SelectAssignWorker {...{ setStateBool }} data={songObject}  />
            </Modal>
        </section >
    )
}

export default AllMusic
