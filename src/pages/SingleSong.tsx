import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
import { format } from "date-fns"
import EditAFeedBack from './EditAFeedBack'
import FullUserDetails from './FullUserDetails'

const Loader = () => <div className="w-10 h-10 sm:w-16 sm:h-16 border-4 border-dashed rounded-full animate-spin border-[#3B71F7]"></div>


const SingleSong = () => {
    const { id } = useParams()
    const [tabIndex, setTabIndex] = useState<string>("Workers Reviews")
    const [stateBoolUser, setStateBoolUser] = useState<boolean>(false)
    const [stateBool, setStateBool] = useState<boolean>(false)
    const [stateBoolEdit, setStateBoolEdit] = useState<boolean>(false)
    const { data, isLoading, isError, error } = useSingleSongQuery(id, { refetchOnMountOrArgChange: true })
    // const navigate = useNavigate()

    const worker = data?.ratings[0]
    const adminFeed = data?.admin_feedback

    return (
        <>
            {isError ?
                <div className="flex items-center justify-center h-screen animate-pulse text-3xl">
                    {/* @ts-ignore */}
                    {error?.error}
                </div> :
                (
                    <>
                        {isLoading ? (
                            <div className="flex items-center justify-center h-screen animate-pulse">
                                <Loader />
                            </div>
                        )
                            : (

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
                                                    {/* <Link to={{ pathnam: data?.file_url }}>
                                    </Link> */}
                                                    <Button title='Play Song' className='w-full' onClick={() => window.open(data?.file_url, '_blank')} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='my-8 w-full'>
                                            <p className='font-semibold text-2xl sm:text-5xl cursor-pointer' onClick={() => setStateBoolUser(prev => !prev)}>{data ? data?.title : '-- --'}</p>
                                            <p className='text-lg my-2  border-b-4 border-[#E2EAFE] p-2'>Play Time — {data ? format(new Date(data?.updated_at), "dd-MM-yyyy") : '-- --'}</p>

                                            <div className="my-14">
                                                <span className='my-5 bg-[#EBFFF9] px-4 py-4 text-[#00C288] font-semibold text-base rounded-full min-w-max'>Overall : Good</span>
                                            </div>

                                            <div className="flex items-center my-5 gap-4">
                                                {/* <div className="flex items-center gap-4">
                            <SongRaterIcon />
                            <div className="">
                                <p className='font-semibold text-lg'>2,304</p>
                                <p>Total Plays</p>
                            </div>
                        </div> */}

                                                <div className="flex items-center gap-4">
                                                    <UserRaterIcon />
                                                    <div className="">
                                                        {/* <p className='font-semibold text-lg'>150</p> */}
                                                        <p className='font-semibold text-lg'>- -</p>
                                                        <p>Total Reviews</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabs */}
                                    <div className="">
                                        <div className="flex gap-6 h-full items-center flex-row my-4 ml-4 border-b-4 border-[#F1F3FF cursor-pointer relative">
                                            <p className={"py-3 hover:border-b-4 p-4 hover:border-[#3B71F7] -mb-1 cursor-pointer hover:text-[#3B71F7]  text-[#777777]" + (tabIndex === "Workers Reviews" && "  border-b-4 text-[#3B71F7] border-b-[#3B71F7] bg-[#F5F8FF] p-4 -mb-1 font-semibold")} onClick={() => setTabIndex("Workers Reviews")}>Workers Reviews{" "}</p>
                                            <p className={"py-3 hover:border-b-4 p-4 hover:border-[#3B71F7] -mb-1 cursor-pointer hover:text-[#3B71F7] text-[#777777]" + (tabIndex === "Your Feedbacks" && "  border-b-4 text-[#3B71F7] border-b-[#3B71F7] bg-[#F5F8FF] p-4 -mb-1 font-semibold")} onClick={() => setTabIndex("Your Feedbacks")}>Your Feedbacks</p>
                                        </div>
                                    </div>

                                    <div className="mb-20">
                                        {tabIndex === "Workers Reviews" && (<>
                                            {worker ? (
                                                <WorkersReviews {...{ worker }} />
                                            ) : (
                                                <div className="flex items-center justify-center font-semibold text-black">No Data</div>
                                            )}
                                        </>)}
                                        {tabIndex !== "Workers Reviews" && (<>
                                            {adminFeed ? (
                                                <YourFeedbacks {... { data }} feed={adminFeed} setStateBool={setStateBoolEdit} />
                                            ) : (
                                                <div className="flex items-center justify-center font-semibold text-black">No Data</div>
                                            )}
                                        </>)}
                                    </div>

                                    <Modal show={stateBoolUser} closeModal={setStateBoolUser}>
                                        <FullUserDetails />
                                    </Modal>
                                    <Modal show={stateBool} closeModal={setStateBool}>
                                        <GiveaFeedback {...{ setStateBool }} {...{ id }} />
                                    </Modal>
                                    <Modal show={stateBoolEdit} closeModal={setStateBoolEdit}>
                                        <EditAFeedBack setStateBool={setStateBoolEdit} {...{ id }} />
                                    </Modal>
                                </div>
                            )}
                    </>
                )}
        </>
    )
}

export default SingleSong
