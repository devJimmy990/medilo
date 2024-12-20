import { FC, memo } from 'react';
import { IoPlay } from "react-icons/io5";

const OurWatchVideo: FC = () => {
    return (
        <section
            className="w-full h-40 flex items-center bg-cover relative my-16 text-white gap-10 md:gap-0"
        >
            <div className='absolute z-0'>
                <img src={require('../../assets/images/footer.jpg')} alt="banner" />
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
                        <h3 className="text-3xl font-bold">Our Watch Video</h3>
                        <h2 className="text-2xl font-semibold">
                            Professional Medical Care & Measures
                        </h2>
                        <p>
                            We are privileged to work with hundreds of future-thinking medical professionals worldwide.
                            Experience safety and comfort with us.
                        </p>
                    </div>
                    <button
                        className="hidden lg:flex items-center gap-2 bg-white text-blue px-6 py-3 rounded-full font-bold transition-all hover:shadow-md"
                    >
                        More Videos
                        <i className="fas fa-angles-right fa-xs"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default memo(OurWatchVideo);
