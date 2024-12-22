import { Routes } from 'core/routes';
import { FC, memo, useCallback } from 'react';
import { FaHeadset, FaUserDoctor } from "react-icons/fa6";
import { IoPlay, IoCheckmarkCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";


const OurAboutUs: FC = () => {
    const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth', }), [])
    return (
        <section className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 bg-white">
            <div className="w-full lg:w-[45%] h-[30rem] lg:h-[35rem] flex items-start relative">
                <div className="w-full h-[70%] lg:h-[70%] flex items-center justify-between absolute z-0">
                    <div className="w-[80%] h-full aspect-square">
                        <img loading='lazy' className="w-full h-full object-cover"
                            src={require('../../assets/images/banner-home.jpeg')} alt="about" />
                    </div>
                    <div className="w-auto h-full flex flex-col flex-grow justify-center items-center gap-4">
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="flex flex-col items-center gap-2 py-4 text-xl font-bold text-blue">
                                <span>Work</span>
                                <span>to</span>
                                <span>How</span>
                            </div>
                            <div
                                className="w-14 md:w-20 aspect-square flex justify-center items-center rounded-full border-[6px] md:border-[10px] border-[#d2ecfd] bg-accent text-white rotate-90">
                                <IoPlay className='text-xl rotate-180' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[45%] md:h-[42%] flex justify-end items-center absolute bottom-0 end-0 z-10">
                    <div className="w-[80%] h-full">
                        <img loading='lazy' className="w-full h-full" src={require('../../assets/images/about.jpg')} alt="about" />

                    </div>
                    <div
                        className="w-20 md:w-28 aspect-square flex flex-col justify-center items-center rounded-full absolute start-[12%] lg:start-[14%] top-[-4px] z-5 border-[8px] md:border-[10px] bg-blue text-white">
                        <h5 className="text-lg md:text-3xl font-bold">26+</h5>
                        <p className="hidden md:block text-sm">Experience</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full flex flex-1 flex-col justify-between gap-6 relative p-4">
                <section className="w-full flex flex-col justify-center items-start gap-4">
                    <aside className="w-full md:w-[90%] md:max-w-[80%] flex flex-col gap-6">
                        <h3 className="text-xl font-bold pl-4 border-l-4 border-blue-500">OUR ABOUT US</h3>
                        <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
                            More Than 26+ Years About Provide Medical.
                        </h2>
                        <p className="text-justify text-body">
                            We are privileged to work with hundreds of future-thinking medical organizations,
                            including many of the world's top hardware, software, and brands. Feel safe and
                            comfortable in establishing.
                        </p>
                    </aside>

                    <div className="w-full flex flex-wrap sm:flex-nowrap gap-4">
                        <figure className="w-full sm:w-[48%] flex flex-col gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-12 aspect-square flex justify-center items-center rounded-full shadow-lg bg-[#fdfdfe] text-blue">
                                    <FaHeadset />
                                </div>
                                <h4 className="text-xl text-blue-500 font-bold">Client Support</h4>
                            </div>
                            <hr className="my-2 border-gray-300" />
                            <figcaption className="text-gray-600">We explain to you the medical process and pain relief.
                            </figcaption>
                        </figure>

                        <figure className="w-full sm:w-[48%] flex flex-col gap-3 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-12 aspect-square flex justify-center items-center rounded-full shadow-lg bg-[#fdfdfe] text-blue">
                                    <FaUserDoctor />
                                </div>
                                <h4 className="text-xl text-blue-500 font-bold">Doctor Support</h4>
                            </div>
                            <hr className="my-2 border-gray-300" />
                            <figcaption className="text-gray-600">We explain to you the medical process and pain relief.
                            </figcaption>
                        </figure>
                    </div>

                    <div className="w-[90%] lg:w-[60%] flex gap-4 text-body">
                        <div className="w-7 h-7 md:w-9 md:h-9 flex justify-center items-center rounded-full p-2 bg-blue">
                            <div className="w-6 h-6 md:w-8 md:h-8 flex justify-center items-center text-white rounded-full">
                                <IoCheckmarkCircleSharp />
                            </div>
                        </div>


                        <p>
                            <span>There are many variations of processes available in this medical service team. </span>
                            <span className="font-bold text-accent underline">
                                READ MORE+
                            </span>
                        </p> 
                    </div>


                    <div>
                        <Link to={Routes.Doctors} onClick={onScrollTop}>
                            <button
                                className="hidden lg:flex items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                                aria-label="Learn more about us">
                                About More
                                <FaAnglesRight size={12} />
                            </button>
                        </Link>
                    </div>
                </section>

                <img loading='lazy' src={require('../../assets/images/stethoscope.png')} alt="Stethoscope"
                    className="absolute end-0 -bottom-4 max-w-[8rem] sm:max-w-[10rem] z-0 opacity-50 pointer-events-none" />
            </div>

        </section>
    );
}

export default memo(OurAboutUs);
