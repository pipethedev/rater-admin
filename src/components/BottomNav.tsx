import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { routeList } from '../assets/data/sidebar-data';
import DashboardIcon from '../assets/svg/DashboardIcon';
import MusicIcon from '../assets/svg/MusicIcon';
import MyProfileIcon from '../assets/svg/MyProfileIcon';
import SettingsIcon from '../assets/svg/SettingsIcon';
import TransactionIcon from '../assets/svg/TransactionIcon';
import UserIcon from '../assets/svg/UserIcon';

const BottomNav = () => {
    const location = useLocation()

    return (
        <section className="sm:hidden bottomnav px-3 fixed  bottom-0 bg-white w-full shadow-xl flex items-center gap-3 justify-between overflow-x-scroll">
            {routeList.map((item, index) => {
                const activeItem = item.route.includes(location.pathname);
                const iconArr = [
                    <DashboardIcon key={1} index={activeItem} />,
                    <MusicIcon key={2} index={activeItem} />,
                    <UserIcon key={3} index={activeItem} />,
                    <UserIcon key={4} index={activeItem} />,
                    <TransactionIcon key={5} index={activeItem} />,
                    <MyProfileIcon key={6} index={activeItem} />,
                    <SettingsIcon key={7} index={activeItem} />,

                ]
                return (
                    <Link to={item.route} key={index}
                        className={`${activeItem && "text-white rounded-2xl bg-[#02123B] w-max"} flex justify-between gap-x-4 items-center rounded-full px-3 py-2 cursor-pointer my-3  text-sm space-x-1`}>
                        <div className=''> {iconArr[index]}</div>

                        <span className={`origin-left duration-200 whitespace-nowrap`}>
                            {item.title}
                        </span>
                    </Link>
                )
            }
            )}
        </section>
    )
}

export default BottomNav
