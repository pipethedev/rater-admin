import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <div className="overflow-hidden">
                <Sidebar />

                <div className="sm:pl-60 sm:pr-10 px-5">
                    <Outlet />
                </div>
            </div>
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
