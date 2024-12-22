import { Routes } from "core/routes";
import { FC, memo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHeadset, FaAnglesRight } from "react-icons/fa6";
import { IoCloseSharp, IoListOutline, IoSearchSharp } from "react-icons/io5";

const links: { label: string, route: string }[] = [
    { label: "Home", route: Routes.Home },
    { label: "About", route: Routes.About },
    { label: "Services", route: Routes.Services },
    { label: "Blogs", route: Routes.Blogs },
    { label: "Contact Us", route: Routes.Contact },
]
const Header: FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <header className="w-full h-auto bg-gray">
            <nav className="container mx-auto flex justify-between items-center px-8 xl:px-32 py-4">
                <div className="w-full lg:w-[10rem] flex items-center justify-between ">
                    <Link to={Routes.Home} className="w-auto flex justify-start items-center gap-2 border-0 outline-0">
                        <img loading="lazy" className="w-12 md:w-16" src={require('../../assets/images/logo.png')} alt="Medilo Logo" />
                        <h4 className="text-2xl font-[900]">Medilo</h4>
                    </Link>
                    <div id="menu" className="md:hidden flex items-center justify-center cursor-pointer" onClick={() => { !openModal && setOpenModal(true) }}>
                        <IoListOutline size={28} />
                    </div>
                    <div
                        className={`w-[60%] h-min ${openModal ? 'flex' : 'hidden'} lg:hidden  flex-col justify-between gap-10 absolute top-0 end-0 z-40 p-4 text-white  bg-[#22336198]`}>
                        <div className="w-full flex flex-col">
                            <div id="close" className="w-7 h-7 flex justify-center items-center self-end cursor-pointer" onClick={() => { openModal && setOpenModal(false) }}>
                                <IoCloseSharp size={28} />
                            </div>
                            <ul className="flex flex-col gap-4 lg:gap-8" role="menu">
                                {
                                    links.map(({ label, route }) => (
                                        <NavLink key={label} to={route} className={({ isActive }) =>
                                            isActive ? "text-red-500" : "hover:rounded-xl hover:px-3 hover:py-1 hover:bg-accent"} onClick={() => { openModal && setOpenModal(false) }}>
                                            <li className="font-semibold" role="menuitem">
                                                {label}
                                            </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link to={Routes.Appointment} className="w-full">
                            <button
                                className="w-full flex justify-center items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl"
                                aria-label="Book Now">
                                Book Now
                                <FaAnglesRight size={12} />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-5 lg:gap-8">
                    <ul className="flex gap-4 lg:gap-8" role="menu">
                        {
                            links.map(({ label, route }) => (
                                <li key={label}>
                                    <NavLink to={route} className={({ isActive }) =>
                                        isActive ? "text-white bg-accent px-6 py-1 rounded-xl" : "font-semibold hover:text-accent"} role="menuitem">
                                        {label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="flex items-center justify-center border rounded-full w-7 h-7" aria-label="Search">
                        <IoSearchSharp />
                    </button>
                    <Link to={Routes.Appointment} className="hidden lg:block">
                        <button
                            className="flex justify-center items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl"
                            aria-label="Book Now">
                            Book Now
                            <FaAnglesRight size={12} />
                        </button>
                    </Link>
                    <Link to={Routes.Appointment} className="lg:hidden">
                        <button
                            className="flex items-center justify-center px-4 py-2 bg-accent text-white rounded-full"
                            aria-label="Book Now">
                            <FaHeadset size={24} />
                        </button>
                    </Link>
                </div>
            </nav>
        </header >

    );
}

export default memo(Header);
