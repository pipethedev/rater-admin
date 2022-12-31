import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <div className="flex w-full gap-10">
                <Sidebar />

                <div className="pr-10 right-child flex-1">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
