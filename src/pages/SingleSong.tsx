import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import PlayMusicIcon from '../assets/svg/PlayMusicIcon'
import SongRaterIcon from '../assets/svg/SongRaterIcon'
import UserRaterIcon from '../assets/svg/UserRater.Icon'
import Button from '../components/Button'
import Header from '../components/Header'
import Modal from '../components/Modal'
import { useSingleSongQuery } from '../features/auth/authApiSplice'
import GiveaFeedback from './GiveaFeedback'
import WorkersReviews from './WorkersReviews'
import YourFeedbacks from './YourFeedbacks'

const SingleSong = () => {
    const { id } = useParams()
    const [tabIndex, setTabIndex] = useState<string>("Workers Reviews")
    const [stateBool, setStateBool] = useState<boolean>(false)
    const { data, isLoading } = useSingleSongQuery(id, { refetchOnMountOrArgChange: true })

    console.log(data, 'single song')

    return (
        <div>
            <div className="flex items-center justify-between">
                <Header title='Song #12' subtitle='This song has 130 reviews' />

                <div className="flex items-center mt-10">
                    <Button title='Rate and Review' onClick={() => setStateBool(true)} />
                </div>
            </div>

            {/* cards */}
            <div className="sm:flex gap-x-5">
                {/* <div className="w-52 h-40 sm:w-72 mb-48 mt-5"> */}
                <div className="w-full h-40 sm:w-72 mb-48 mt-10">
                    <div className="my-3 cursor-pointer bg-[#F5F8FF] p-4 rounded-lg">
                        <div className="bg-[#F5F8FF] p-4 flex items-center justify-center my-2 rounded-xl py-10">
                            <PlayMusicIcon className='' />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button title='Play Song' className='w-full' />
                        </div>
                    </div>
                </div>

                <div className='my-8 w-full'>
                    <p className='font-semibold text-2xl sm:text-5xl'>{data ? data?.title : '-- --'}</p>
                    <p className='text-lg my-2  border-b-4 border-[#E2EAFE] p-2'>Play Time — {data ? data?.updated_at : '-- --'}</p>

                    <div className="my-14">
                        <span className='my-5 bg-[#EBFFF9] px-4 py-4 text-[#00C288] font-semibold text-base rounded-full min-w-max'>Overall : Good</span>
                    </div>

                    <div className="flex items-center my-5 gap-4">
                        <div className="flex items-center gap-4">
                            <SongRaterIcon />
                            <div className="">
                                <p className='font-semibold text-lg'>2,304</p>
                                <p>Total Plays</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <UserRaterIcon />
                            <div className="">
                                <p className='font-semibold text-lg'>150</p>
                                <p>Total Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="">
                <div className=" flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-4 border-[#F1F3FF] text-[#949AB1] cursor-pointer relative">
                    <p className={"tabIndex py-3 hover:border-b-4 hover:border-[#3B71F7] cursor-pointer hover:text-[#3B71F7]" + (tabIndex === "Workers Reviews" && "tabIndex text-[#3B71F7] border-b-4 border-b-[#3B71F7]")} onClick={() => setTabIndex("Workers Reviews")}>Workers Reviews{" "}</p>
                    <p className={"tabIndex py-3 hover:border-b-4 hover:border-[#3B71F7] cursor-pointer hover:text-[#3B71F7]" + (tabIndex === "Voucher Details" && "text-[#3B71F7] border-b-4 border-b-[#3B71F7]")} onClick={() => setTabIndex("Your Feedbacks")}>Your Feedbacks</p>
                </div>
            </div>


            {tabIndex === "Workers Reviews" && (<>
                <WorkersReviews />
            </>)}
            {tabIndex !== "Workers Reviews" && (<>
                <YourFeedbacks />
            </>)}


            <Modal show={stateBool} closeModal={setStateBool}>
                <GiveaFeedback {...{ setStateBool }} />
            </Modal>
        </div>
    )
}

export default SingleSong
