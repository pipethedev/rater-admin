import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from '../BottomNav'
import Sidebar from '../sidebar/Sidebar'
import './layout.css'

const Layout = () => {
    return (
        <>
            <section className={`layout bg-[#FAFDFF]`}>
                <Sidebar />
                <div className={`layout__content ${'open' ? "sm:pl-60" : "sm:pl-20"} `}>
                    {/* <TopNav /> */}
                    <div className={`layout__content-main p-5`}>
                        <Outlet />
                    </div>
                </div>
                <BottomNav />
            </section>
        </>
    )
}

export default Layout


// return (
//     <>
//         <div className="flex w-full gap-10 px-5 sm:px-0">
//             <Sidebar />

//             <div className="sm:pr-10 right-child flex-1">
//                 <Outlet />
//             </div>
//         </div>
//     </>
// )
