import { FC, memo, lazy, ReactNode } from 'react';
import {
    FaBriefcaseMedical, FaHandHoldingHeart, FaHeartPulse, FaCapsules, FaUserDoctor, FaFlask
} from "react-icons/fa6";

const SubTitle = lazy(() => import("components/SubTitle"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

type ServicesModel = {
    label: string,
    icon: ReactNode
    description: string,
}

const services: ServicesModel[] = [
    { label: 'Service & Check', description: 'Medical competitor research startup to financial success', icon: <FaBriefcaseMedical size={24} /> },
    { label: 'Medical Advices', description: 'Helping you overcome health challenges efficiently', icon: <FaHandHoldingHeart size={24} /> },
    { label: 'Emergency Help', description: 'Access to top medical professionals and resources', icon: <FaHeartPulse size={24} /> },
    { label: 'Medical Research', description: 'Tailored health plans designed for your needs', icon: <FaCapsules size={24} /> },
    { label: 'Qualified Doctors', description: 'Access to top medical professionals and resources', icon: <FaUserDoctor size={24} /> },
    { label: 'Affordable Prices', description: 'Tailored health plans designed for your needs', icon: <FaFlask size={24} /> },
]
const WhyChooseUs: FC = () => {
    return (
        <section className="md:w-full flex justify-between gap-4  mx-auto bg-gray-100">
            <div className="container mx-auto px-4 lg:w-[65%] flex flex-col justify-center gap-14 lg:ms-auto">
                <div className="flex flex-col gap-3">
                    <BorderedTitle borderStart label="Why Choose Us" />
                    <SubTitle label="Medical Ready To Get This Health Solution" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-16">
                    {
                        services.map(({ label, description, icon }, index) => (
                            <div key={label} className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    {icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue">{label}</h4>
                                    <p className="text-gray-700">{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="hidden lg:block w-[30%]">
                <img loading='lazy' className="h-full w-full object-cover rounded-lg shadow-lg" src={require("../../assets/images/solution.png")}
                    alt="Health Solution" />
            </div>
        </section>
    );
}

export default memo(WhyChooseUs);
