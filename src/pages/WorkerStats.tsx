import { format } from "date-fns"


const WorkerStats = ({ worker, data }: any) => {
    return (
        <div className=''>

            <div className="flex items-center gap-x-4">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="8" fill="#F0F4FE" />
                    <path d="M37.3332 38.5V36.1667C37.3332 34.929 36.8415 33.742 35.9663 32.8668C35.0912 31.9917 33.9042 31.5 32.6665 31.5H23.3332C22.0955 31.5 20.9085 31.9917 20.0333 32.8668C19.1582 33.742 18.6665 34.929 18.6665 36.1667V38.5" stroke="#3B71F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28.0002 26.8333C30.5775 26.8333 32.6668 24.744 32.6668 22.1667C32.6668 19.5893 30.5775 17.5 28.0002 17.5C25.4228 17.5 23.3335 19.5893 23.3335 22.1667C23.3335 24.744 25.4228 26.8333 28.0002 26.8333Z" stroke="#3B71F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{worker?.worker?.first_name} {worker?.worker?.last_name}</p>
            </div>

            <div className="bg-[#F0F4FE] flex my-4 gap-x-3 p-4 rounded-xl">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="white" />
                    <g clipPath="url(#clip0_1481_3018)">
                        <path d="M30.9658 27.2632C31.7117 26.0151 32.2065 24.4365 32.3025 22.8745C32.3634 21.872 32.14 20.8196 31.6563 19.83C30.8975 18.2754 29.594 17.4021 28.3348 16.5583C27.395 15.9287 26.5069 15.3342 25.8792 14.4849L25.7665 14.3335C25.3954 13.835 24.9763 13.27 24.9099 12.7955C24.8434 12.3154 24.4077 11.9739 23.9313 12.0016C23.4476 12.0348 23.0728 12.4355 23.0728 12.921V29.3717C22.2992 28.9028 21.3465 28.6147 20.3033 28.6147C17.7591 28.6147 15.6875 30.2709 15.6875 32.3074C15.6875 34.3439 17.7591 36 20.3033 36C22.8475 36 24.9191 34.3439 24.9191 32.3074V21.547C26.3057 22.0769 28.5748 23.4266 29.1989 26.5783C29.0825 26.75 28.9718 26.9346 28.8425 27.0823C28.5046 27.4645 28.5416 28.0479 28.9256 28.384C29.3059 28.7237 29.8894 28.6831 30.2273 28.3009C30.4747 28.0202 30.6944 27.6916 30.9049 27.3482C30.927 27.3223 30.9474 27.2946 30.9658 27.2632V27.2632Z" fill="#3B71F7" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1481_3018">
                            <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                        </clipPath>
                    </defs>
                </svg>

                <div>
                    <p className='font-semibold mb-1'>{data.length}</p>
                    <p className=''>Music Plays</p>
                </div>

            </div>

            <p className="font-medium text-lg my-4">Times Listened</p>
            <div className="flex items-center gap-x-4 p-5 my-5 border rounded-xl border-[#D2DEFC]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#F0F4FE" />
                    <g clipPath="url(#clip0_1481_3293)">
                        <path d="M15.7126 22.6663C19.3945 22.6663 22.3792 19.6816 22.3792 15.9997C22.3792 12.3178 19.3945 9.33301 15.7126 9.33301C12.0307 9.33301 9.0459 12.3178 9.0459 15.9997C9.0459 19.6816 12.0307 22.6663 15.7126 22.6663Z" stroke="#3B71F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.7124 12V16L18.3791 17.3333" stroke="#3B71F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1481_3293">
                            <rect width="16" height="16" fill="white" transform="translate(7.7124 8)" />
                        </clipPath>
                    </defs>
                </svg>

                {/* <p>4:28pm -4:32pm — Monday 23, 2023</p> */}
                {data?.map((item: any) => (
                    <p key={item?.id}>{item?.listening_duration}— {format(new Date(item?.listened_at), "dd-MM-yyyy")}</p>

                )) }
            </div>
        </div>
    )
}

export default WorkerStats
