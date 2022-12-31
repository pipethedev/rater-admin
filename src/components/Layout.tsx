import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <>
            <div className="flex w-full gap-4">
                <div>
                    <Sidebar />
                </div>
                <div className="pr-5 right-child flex-1">
                    {/* <Header {...{ setHideSide }} /> */}
                    <Header title='Overide' />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
