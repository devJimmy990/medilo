import { Routes } from "core/routes";
import { FC, memo } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MedicalService: FC = () => {
    return (
        <section
            className="w-full h-32 flex justify-center md:justify-between bg-blue px-6 md:px-12 py-10 md:py-0 relative">
            <div className="flex items-center gap-10 ">
                <div className="h-full hidden lg:flex relative ">
                    <img loading='lazy' src={require('../../assets/images/support.jpg')} alt="team-support" className="h-full" />
                    <div
                        className="absolute top-0 right-[-60px] border-l-[30px] border-r-[30px] border-b-transparent border-t-[30px] border-b-[30px] border-t-transparent border-r-transparent border-l-accent">
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        className="book-appointment md:hidden w-12 h-12 flex items-center justify-center bg-accent text-white rounded-full shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Book Now">
                        <i className="fas fa-headset fa-lg"></i>
                    </button>
                    <div className="flex flex-col justify-end items-start gap-2 md:gap-4 text-white">
                        <h3 className="font-bold text-lg md:text-2xl">Meet The Team Support Medical Service</h3>
                        <p className="text-body text-sm md:text-base">For us, there are no minor aspects, because a quality
                        </p>
                    </div>
                </div>
            </div>


            <div className="hidden md:flex items-center">
                <Link to={Routes.Appointment}>
                    <button
                        className="book-appointment h-10 flex items-center gap-2 font-bold text-blue px-5 py-2 bg-white rounded-3xl"
                        aria-label="Book Now">
                        Booking Now
                        <FaAnglesRight size={12} />
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default memo(MedicalService);
