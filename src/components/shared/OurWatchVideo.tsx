import { Routes } from 'core/routes';
import { FC, memo, lazy } from 'react';
import { Link } from 'react-router-dom';
import { IoPlay } from "react-icons/io5";
import { FaAnglesRight } from "react-icons/fa6";

const SubTitle = lazy(() => import("components/SubTitle"));
const Description = lazy(() => import("components/Description"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

const OurWatchVideo: FC = () => {
    return (
        <section
            className="w-full min-h-64 lg:h-40 flex items-center bg-cover relative my-16 text-white gap-10 md:gap-0 overflow-hidden"
        >
            <div className='w-full h-full absolute z-0'>
                <img className='w-full h-full' src={require('../../assets/images/footer.jpg')} alt="banner" />
            </div>
            <div className='w-full flex flex-col md:flex-row items-center  absolute z-10'>
                {/* Video Play Button Section */}
                <div className="md:w-[45%] flex justify-center items-center gap-3 group cursor-pointer text-center md:text-left">
                    <div
                        className="w-14 h-14 flex justify-center items-center rounded-full bg-white text-blue border-4 border-transparent hover:ring-8 hover:ring-accent"
                    >
                        <IoPlay size={24} className="text-blue" />
                    </div>
                    <p className="text-xl font-bold">Watch Video</p>
                </div>

                {/* Text Content Section */}
                <div className="md:w-[45%] container mx-auto flex flex-col items-center md:items-start gap-4 px-6">
                    <div className="space-y-4 text-center md:text-left">
                        <BorderedTitle className='hidden md:flex' borderStart label='Our Watch Video' />

                        <SubTitle label="Professional Medical Care & Measures" />

                        <Description className='text-white'>
                            We are privileged to work with hundreds of future-thinking medical professionals worldwide.
                            Experience safety and comfort with us.
                        </Description>
                    </div>
                    <Link to={Routes.Blogs}>
                        <button className="hidden lg:flex items-center gap-2 bg-white text-blue px-6 py-3 rounded-full font-bold transition-all hover:shadow-md"                    >
                            More Videos
                            <FaAnglesRight size={12} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default memo(OurWatchVideo);
