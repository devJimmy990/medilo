import { Routes } from "core/routes";
import { memo, FC } from "react";
import { Link } from "react-router-dom";

const HomeHero: FC = () => {
    return (
        <section className="w-full h-full flex flex-col lg:flex-row justify-between items-center">
            <div className="container mx-auto px-4 max-w-[90%] lg:max-w-[40%] flex flex-col gap-6 text-start">
                <h1 className="leading-tight lg:leading-[3.5rem] text-3xl lg:text-5xl font-bold text-center lg:text-start">
                    We hospital Doctors Patients 
                    <span className="px-2 text-accent underline">Service</span>
                </h1>
                <p className="text-sm lg:text-base">
                    Medical ers piciatis unde omnis iste natus this the word medical this
                    mountains, far from the countries Vokalia and, live the doctor white
                    teeth sitting on a dental for best medical.
                </p>
                <div className="flex flex-col gap-3 border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-blue text-xl lg:text-2xl">Receive Medical Service.</h3>
                    <p className="text-blue text-sm lg:text-base">Call us at: (+2) 56 541453</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to={Routes.Contact}>
                        <button id="btn-contact"
                            className="flex items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-accent/90 transition"
                            aria-label="Contact Now">
                            Contact Now
                            <div> <i className="fas fa-angles-right fa-xs"></i></div>
                        </button></Link>
                    <button id="btn-discover"
                        className="flex items-center gap-2 font-bold text-white px-5 py-2 bg-blue rounded-3xl hover:bg-blue/90 transition"
                        aria-label="Discover More">
                        Discover More
                        <div> <i className="fas fa-angles-right fa-xs"></i></div>
                    </button>
                </div>
            </div>

            <img src={require("../../assets/images/banner-home.jpeg")} alt="Beautiful hospital banner" loading="lazy"
                className="w-full lg:w-[35%] h-64 lg:h-full object-cover" />
        </section>
    );
}

export default memo(HomeHero);
