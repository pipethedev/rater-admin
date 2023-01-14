import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CardPlatList from '../components/CardPlatList'
import Header from '../components/Header'
import Input from '../components/Input'
import { useAllSongsQuery } from '../features/auth/authApiSplice'

const AllMusic = () => {
    const { data, isLoading, isFetchingm, isError } = useAllSongsQuery({})

    console.log(data, 'allSongsallSongs')

    const [search, setSearch] = useState<string>("")
    return (
        <section>
            <Header title='Music' subtitle='All Songs uploaded on this platform' />
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
                        <Link rel="noopener noreferrer" to="/allmusic" className="flex items-center px-1 text-[#3B71F7] font-[1000] capitalize hover:underline">Music</Link>
                    </li>
                    {/* </div> */}
                </ol>
            </nav>

            <div className="flex items-center justify-between">
                <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    divStyle=''
                    placeholder="Search songs by title or Artiste’s name'"
                    searchIcon
                    type="search"
                    value={search}
                    onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                />

                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Alphabetic Order</button>
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Date Uploaded</button>
                </div>
            </div>

            <div className="my-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* {Array(20).fill('').map((item) => ( */}
                    {/* {data.length === 0 ?
                        (
                            <div className='flex items-center justify-center text-center'>
                                <p>No Songs</p>
                            </div>
                        )
                        :
                        data.map((item) => (
                            // Array(20).fill('').map((item) => (
                            <CardPlatList title={item?.title} subtitle={item?.file_name} rate='Good' />
                        ))} */}
                    {data?.map((item) => (
                            // Array(20).fill('').map((item) => (
                            <CardPlatList title={item?.title} subtitle={item?.file_name} rate={item?.ratings[3]} />
                        ))}
                </div>
            </div>

            {/* <div className="flex items-center justify-center my-20">
                <Button title='Upload your Music' />
            </div> */}
        </section >
    )
}

export default AllMusic
