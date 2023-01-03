import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import CardPlatList from '../components/CardPlatList'
import Header from '../components/Header'

const AllMusic = () => {
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
                        <Link rel="noopener noreferrer" to="/dashboard" className="flex items-center px-1 text-[#888888] capitalize hover:underline">Dasboard</Link>
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
                <form>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#02123B" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.9999 20.9999L16.6499 16.6499" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="w-full lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search  songs by title or Artiste’s name" required />
                    </div>
                </form>


                <div className="flex items-center space-x-4">
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Alphabetic Order</button>
                    <button type="submit" className="text-[#3B71F7] bg-[#F5F8FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[72px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Date Uploaded</button>
                </div>
            </div>

            <div className="my-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Array(20).fill('').map((item) => (
                        <CardPlatList title='Song Title' subtitle='Play Time — 2mins 45sec' rate='Good' />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center my-20">
                <Button title='Upload your Music' />
            </div>
        </section >
    )
}

export default AllMusic
