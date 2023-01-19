import React from 'react'
import { format } from 'date-fns'

const YourFeedbacks = ({ data, feed }: any) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md border border-[#E2EAFE]">
                    <div className="flex space-x-4">
                        <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-base font-semibold">{data?.file_name}</a>
                            {/* <span className="text-sm">Today — {`- ${format(feed?.created_at  , "MM/dd/yyyy")}`}</span> */}
                        </div>
                    </div>
                    <div>
                        <span className={`${data?.ratings[0]?.rating === 'Good' || 'AlmostGood' ? 'text-[#00C288]' : "bg-[#f1afa6] text-[#c22d00] "} bg-[#EBFFF9] px-4 py-2 font-semibold text-base rounded-full min-w-max`}>{data?.ratings[0]?.rating}</span>
                        <p className='text-lg mt-5'>{feed?.comment}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourFeedbacks
