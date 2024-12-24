import { Routes } from 'core/routes';
import { memo, FC, lazy, ReactNode, useCallback } from 'react';
import {
    FaBriefcaseMedical, FaHospitalUser, FaUserDoctor,
    FaXRay, FaEye, FaHeartPulse, FaHeadSideVirus, FaBedPulse
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
const SubTitle = lazy(() => import("components/SubTitle"));
const Description = lazy(() => import("components/Description"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

type ServiceModel = {
    title: string,
    icon: ReactNode,
    description: string,
}

const services: ServiceModel[] = [
    {
        title: "Pharmacology",
        description: "Medical competitor research startup to financial",
        icon: <FaBriefcaseMedical size={28} />,
    },
    {
        title: "Orthopedic",
        description: "Medical competitor research startup to financial",
        icon: <FaXRay size={28} />,
    },
    {
        title: "Hematology",
        description: "Medical competitor research startup to financial",
        icon: <FaHeartPulse size={28} />,
    },
    {
        title: "Plastic Surgery",
        description: "Medical competitor research startup to financial",
        icon: <FaUserDoctor size={28} />,
    },
    {
        title: "Neurology",
        description: "Medical competitor research startup to financial",
        icon: <FaHeadSideVirus size={28} />,
    },
    {
        title: "Ophthalmology",
        description: "Medical competitor research startup to financial",
        icon: <FaEye size={28} />,
    },
    {
        title: "Dental Care",
        description: "Medical competitor research startup to financial",
        icon: <FaHospitalUser size={28} />,
    },
    {
        title: "Cardiology",
        description: "Medical competitor research startup to financial",
        icon: <FaBedPulse size={28} />,
    },
];

const OurBestService: FC = () => {
    const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth', }), [])
    return (
        <section className="container flex flex-col gap-8 mx-auto my-20 px-4 lg:px-0">
            <BorderedTitle borderStart label="our best services" />

            <div className="flex flex-wrap justify-between items-start gap-4">
                <SubTitle label="High-Quality Services This Doctor" className="lg:w-[22%]" />

                <Description className="w-full lg:w-[50%] sm:text-lg text-justify text-body">
                    We are privileged to work with hundreds of future-thinking medical
                    organizations, including many of the world's top hardware, software, and brands.
                    Feel safe and comfortable in establishing a relationship with us.
                </Description>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    services.map(({ title, description, icon }, index) => (
                        <Link key={title} to={`${Routes.ServiceDetails}/${title.replace(' ', '-').toLowerCase()}`} onClick={onScrollTop}
                            className="flex flex-col items-center rounded-lg px-6 py-8 bg-white shadow-md hover:shadow-lg">
                            <div className="w-14 h-14 flex justify-center items-center rounded-full text-white bg-blue">
                                {icon}
                            </div>
                            <h4 className="text-blue text-lg font-bold mt-4">{title}</h4>
                            <p className="text-body text-center">
                                {description}
                            </p>
                        </Link>
                    ))
                }


            </div>

            <div className="flex justify-center items-center gap-4 text-center mx-auto">
                <p className="max-w-3xl text-lg sm:text-xl font-semibold font-heading">
                    Delivering tomorrow's health care for your family.
                    <span className="text-accent underline">SEE MORE <i className="fas fa-angles-right fa-xs"></i></span>
                </p>
            </div>
        </section >
    );
}

export default memo(OurBestService);
