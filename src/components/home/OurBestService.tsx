import { memo, FC, ReactNode } from 'react';
import {
    FaBriefcaseMedical, FaHospitalUser, FaUserDoctor,
    FaXRay, FaEye, FaHeartPulse, FaHeadSideVirus, FaBedPulse
} from "react-icons/fa6";

type ServiceModel = {
    title: string,
    icon: ReactNode,
    description: string,
}

export const services: ServiceModel[] = [
    {
        title: "Pharmacology",
        description: "Medical competitor research startup to financial",
        icon: <FaBriefcaseMedical />,
    },
    {
        title: "Orthopedic",
        description: "Medical competitor research startup to financial",
        icon: <FaXRay />,
    },
    {
        title: "Hematology",
        description: "Medical competitor research startup to financial",
        icon: <FaHeartPulse />,
    },
    {
        title: "Plastic Surgery",
        description: "Medical competitor research startup to financial",
        icon: <FaUserDoctor />,
    },
    {
        title: "Neurology",
        description: "Medical competitor research startup to financial",
        icon: <FaHeadSideVirus />,
    },
    {
        title: "Ophthalmology",
        description: "Medical competitor research startup to financial",
        icon: <FaEye />,
    },
    {
        title: "Dental Care",
        description: "Medical competitor research startup to financial",
        icon: <FaHospitalUser />,
    },
    {
        title: "Cardiology",
        description: "Medical competitor research startup to financial",
        icon: <FaBedPulse />,
    },
];

const OurBestService: FC = () => {
    return (
        <section className="container flex flex-col gap-8 mx-auto my-20 px-4 lg:px-0">
            <div className="h-4 flex items-center before:w-[4px] before:h-full before:rounded-lg before:bg-accent">
                <h3 className="text-lg sm:text-xl font-bold font-heading text-accent px-3">
                    OUR BEST SERVICE
                </h3>
            </div>

            <div className="flex flex-wrap justify-between items-start gap-4">
                <h3 className="w-full lg:w-[22%] text-2xl sm:text-3xl font-bold">
                    High-Quality Services This Doctor
                </h3>
                <p className="w-full lg:w-[50%] text-base sm:text-lg text-justify text-body">
                    We are privileged to work with hundreds of future-thinking medical
                    organizations, including many of the world's top hardware, software, and brands.
                    Feel safe and comfortable in establishing a relationship with us.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    services.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-col items-center rounded-lg px-6 py-8 bg-white shadow-md">
                                <div className="w-14 h-14 flex justify-center items-center rounded-full text-white bg-blue">
                                    {item.icon}
                                </div>
                                <h4 className="text-blue text-lg font-bold mt-4">{item.title}</h4>
                                <p className="text-body text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                }


            </div>

            <div className="flex justify-center items-center gap-4 text-center mx-auto">
                <p className="max-w-3xl text-lg sm:text-xl font-semibold font-heading">
                    Delivering tomorrow's health care for your family.
                    <span className="text-accent underline">SEE MORE <i className="fas fa-angles-right fa-xs"></i></span>
                </p>
            </div>
        </section>
    );
}

export default memo(OurBestService);
