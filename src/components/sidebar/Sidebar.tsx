import React, { useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { routeList } from '../../assets/data/sidebar-data';
import DashboardIcon from '../../assets/svg/DashboardIcon';
import MusicIcon from '../../assets/svg/MusicIcon';
import MyProfileIcon from '../../assets/svg/MyProfileIcon';
import LogOutIcon from '../../assets/svg/LogOutIcon';
import SettingsIcon from '../../assets/svg/SettingsIcon';
import TransactionIcon from '../../assets/svg/TransactionIcon';
import UserIcon from '../../assets/svg/UserIcon';
import { useLogoutAUserMutation } from '../../features/auth/authApiSplice';
import { useAppDispatch } from '../../hocks/hocks';
import { logout } from '../../features/auth/authSlice'


const Sidebar = () => {
   const [ {}] = useLogoutAUserMutation()
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const logoutUser = useCallback(() => {
        dispatch(logout());
        toast.success("User Logged Out Successfully")
        navigate("/");
    }, [])

    return (
        <section className={`hidden sm:block`}>
            <div className={`sm:w-60 w-max  flex flex-col justify-between transition-all ease-in-out top-0 left-0 bg-[#02123B] text-white h-screen pt-8 duration-300 fixed`}>

                <div className={`pt-3`}>
                    <div className="flex items-center justify-between pb-10 px-5">
                        <p className='text-[#3B71F7] text-xl font-bold'>M.Rater</p>
                        {/* <NotificationIcon className={`cursor-pointer ${!'open' && "scale-0 hidden"}`} onClick={() => logoutUser()} /> */}
                        <LogOutIcon className={`cursor-pointer w-10 h-10 ${!'open' && "scale-0 hidden"}`} onClick={() => logoutUser()} />
                    </div>

                    {routeList.map((item, index) => {
                        const activeItem = item.route.includes(location.pathname);
                        // .map((item: any) => location.pathname.includes(item.route) && item.route)[0]
                        // console.log(activeItem, 'ROUTE');
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
                            <Link to={item.route} key={index} className={`${activeItem && "bg-[#142349] text-[#3B71F7] font-extrabold border-r-4 border-[#3B71F7]"} flex items-center p-3 cursor-pointer my-4 text-lg space-x-3 text-[rgba(255, 255, 255, 0.65)]`}>
                                <div key={item.route}>{iconArr[index]}</div>

                                <span className='origin-left duration-200'>
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

                <div className="flex items-center justify-center" onClick={logoutUser}>
                    {/* <div className="flex items-center  gap-5 cursor-pointer" >
                        icon
                        <div className={`${!'open' && "hidden"} text-white text-sm`}> Logout</div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Sidebar
