import { memo } from "react";
import { FaHeadset, FaAnglesRight } from "react-icons/fa6";
import { IoCloseSharp, IoListOutline, IoSearchSharp } from "react-icons/io5";

const links: { label: string, route: string }[] = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Services", route: "/services" },
    { label: "Blogs", route: "/blogs" },
    { label: "Contact Us", route: "/contact" },
]
const Header = () => {
    return (
        <header className="w-full h-auto bg-gray">
            <nav className="container mx-auto flex justify-between items-center px-8 xl:px-32 py-4">
                <div className="w-full lg:w-[10rem] flex items-center justify-between ">
                    <a href="index.html" className="w-auto flex justify-start items-center gap-2 border-0 outline-0">
                        <img loading="lazy" className="w-12 md:w-16" src={require('../../assets/images/logo.png')} alt="Medilo Logo" />
                        <h4 className="text-2xl font-[900]">Medilo</h4>
                    </a>
                    <div id="menu" className="md:hidden flex items-center justify-center cursor-pointer">
                        <IoListOutline />
                    </div>
                    <div id="modal"
                        className="w-[75%] md:w-[50%] h-screen lg:hidden hidden flex-col justify-between absolute top-0 end-0 z-40 p-4 text-white  bg-[#223361]">
                        <div className="w-full flex flex-col">
                            <div id="close" className="w-7 h-7 flex justify-center items-center self-end cursor-pointer">
                                <IoCloseSharp />
                            </div>
                            <ul className="flex flex-col gap-4 lg:gap-8" role="menu">
                                {
                                    links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.route} className="font-semibold hover:text-accent" role="menuitem">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button
                            className="main-book-appointment flex justify-center items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl"
                            aria-label="Book Now">
                            Book Now
                            <FaAnglesRight />
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-5 lg:gap-8">
                    <ul className="flex gap-4 lg:gap-8" role="menu">
                        {
                            links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.route} className="font-semibold hover:text-accent" role="menuitem">
                                        {link.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <button className="flex items-center justify-center border rounded-full w-7 h-7" aria-label="Search">
                        <IoSearchSharp />
                    </button>
                    <button
                        className="main-book-appointment hidden lg:flex items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl"
                        aria-label="Book Now">
                        Book Now
                        <FaAnglesRight />
                    </button>
                    <button
                        className="main-book-appointment lg:hidden flex items-center justify-center px-5 py-2 bg-accent text-white rounded-3xl"
                        aria-label="Book Now">
                        <FaHeadset />
                    </button>
                </div>
            </nav>
        </header>

    );
}

export default memo(Header);
