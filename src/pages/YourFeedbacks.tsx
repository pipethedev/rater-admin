import { format } from 'date-fns'

const YourFeedbacks = ({ data, feed, setStateBool }: any) => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 gap-5">
                <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-2xl shadow-sm border border-[#E2EAFE] relative">
                    <div className="flex space-x-4 items-start justify-between">
                        <div className="flex space-x-4 items-center">
                            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-base font-semibold">{data?.file_name}</a>
                                <span className="text-sm">Today — {`${format(new Date(feed?.created_at), "MM/dd/yyyy")}`}</span>
                                {/* <span className="text-sm">Today — {feed?.created_at}</span> */}
                            </div>
                        </div>
                        <svg className='cursor-pointer' onClick={() => setStateBool(true)} width="75" height="37" viewBox="0 0 75 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="75" height="37" rx="18.5" fill="#F0F4FE" />
                            <path d="M21.49 23V21.642H16.296V18.968H21.28V17.596H16.296V14.978H21.49V13.62H14.784V23H21.49ZM25.0683 23.14C26.2583 23.14 27.0283 22.65 27.3643 21.852H27.4203V23H28.8063V13.62H27.3083V17.12H27.2663C26.9583 16.49 26.2163 15.902 24.9843 15.902C23.0663 15.902 22.0023 17.316 22.0023 19.514C22.0023 21.726 23.0803 23.14 25.0683 23.14ZM23.5143 19.514C23.5143 17.806 24.0743 17.19 25.4043 17.19C26.6363 17.19 27.3083 17.736 27.3083 18.898V20.144C27.3083 21.306 26.6363 21.852 25.4043 21.852C24.0603 21.852 23.5143 21.236 23.5143 19.514ZM31.428 15.16V13.62H29.916L29.93 15.16H31.428ZM31.442 23V16H29.93V23H31.442ZM35.4077 23C35.8838 23 36.3598 22.944 36.6538 22.874V21.642H35.7997C34.8618 21.642 34.5537 21.516 34.5537 20.788V17.302H36.6538V16.042H34.5537V14.32H33.3917L33.0697 16.042H31.8797V17.302H33.0417V20.858C33.0417 22.426 33.8537 23 35.4077 23Z" fill="black" />
                            <path d="M53 23.3335H59H53Z" fill="#3B71F7" />
                            <path d="M53 23.3335H59" stroke="#3B71F7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M56 12.3332C56.2652 12.0679 56.6249 11.9189 57 11.9189C57.1857 11.9189 57.3696 11.9555 57.5412 12.0266C57.7128 12.0977 57.8687 12.2018 58 12.3332C58.1313 12.4645 58.2355 12.6204 58.3066 12.792C58.3776 12.9635 58.4142 13.1474 58.4142 13.3332C58.4142 13.5189 58.3776 13.7028 58.3066 13.8744C58.2355 14.0459 58.1313 14.2018 58 14.3332L49.6667 22.6665L47 23.3332L47.6667 20.6665L56 12.3332Z" fill="#3B71F7" stroke="#3B71F7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <span className={`${data?.ratings[0]?.rating === 'Good' || 'AlmostGood' ? 'text-[#00C288]' : "bg-[#f1afa6] text-[#c22d00] "} bg-[#EBFFF9] px-4 py-2 my-5 font-semibold text-base rounded-full min-w-max`}>{data?.ratings[0]?.rating}</span>
                        <p className='text-lg my-5'>{feed?.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourFeedbacks
