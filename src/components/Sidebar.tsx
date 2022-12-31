import React, { useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { routeList } from '../assets/data/sidebar-data';
import DashboardIcon from '../assets/svg/DashboardIcon';
import NotificationIcon from '../assets/svg/NotificationIcon';

const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate();


    const logout = useCallback(() => {
        // useAuth.setState({
        //     isAuthenticated: false,
        //     email: null,
        //     token: null,
        // });
        // Cookies.remove('@Authenticated')
        navigate("/");
    }, [])

    return (
        <section className={`hidden sm:block  ${'open' && 'hidden'}`}>
            <div className={` ${'open' ? "sm:w-60" : "w-max"} flex flex-col justify-between transition-all ease-in-out top-0 left-0 bg-[#02123B] text-white h-screen pt-8 relative duration-300`}>

                <div className={`pt-3 ${'' && ""}`}>
                    {/* <div className={`${'open' ? "pt-6 mx-auto" : "m-0"}`}> */}
                    <div className="flex items-center justify-between pb-10 px-5">
                        {/* <div className="inline-flex items-center pb-10 gap-4"> */}
                        <p className='text-[#3B71F7] text-xl font-bold'>M.Rater</p>
                        {/* <DashboardIcon onClick={() => ''} className={`cursor-pointer duration-500 ${'open' && "rotate-[360deg]"}`} /> */}
                        <NotificationIcon className={`cursor-pointer ${!'open' && "scale-0 hidden"}`} />
                    </div>
                    {routeList.map((item, index) => {
                        const activeItem = item.route.includes(location.pathname);
                        // .map((item: any) => location.pathname.includes(item.route) && item.route)[0]
                        // console.log(activeItem, 'ROUTE');
                        const iconArr = [
                            <DashboardIcon key={1} index={activeItem} />,
                            <DashboardIcon key={2} index={activeItem} />,
                            <DashboardIcon key={3} index={activeItem} />,
                            <DashboardIcon key={4} index={activeItem} />,
                            <DashboardIcon key={5} index={activeItem} />,
                            <DashboardIcon key={6} index={activeItem} />,
                            <DashboardIcon key={7} index={activeItem} />,
                        ]
                        return (
                            <Link to={item.route} key={index} className={`${activeItem && "bg-[#142349] text-[#3B71F7] font-bold border-r-4 border-[#3B71F7]"} flex items-center p-3 cursor-pointer my-4 text-lg space-x-3 text-[rgba(255, 255, 255, 0.65)]`}>
                                <div key={index}>{iconArr[index]}</div>

                                <span className={`${!'open' && "hidden"} ${10 < 1200 ? "" : ""} origin-left duration-200`}>
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

                <div className="flex items-center justify-center" onClick={logout}>
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
