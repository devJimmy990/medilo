import { FC, memo, lazy, ReactNode, useState } from 'react';
import { FaMicroscope, FaTruckMedical, FaHeartPulse, FaHandHoldingHeart } from "react-icons/fa6";

const SubTitle = lazy(() => import("components/SubTitle"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

type ServiceModel = {
    label: string,
    icon: ReactNode
}
const services: ServiceModel[] = [
    { label: "Modern Technology", icon: <FaMicroscope size={20} /> },
    { label: "Success of Treatment", icon: <FaTruckMedical size={20} /> },
    { label: "Certified Doctors", icon: <FaHeartPulse size={20} /> },
    { label: "Medical Advice", icon: <FaHandHoldingHeart size={20} /> }]

const ServiceOffering: FC = () => {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
    return (
        <section className="w-full mx-auto flex flex-col gap-8 items-center px-4 lg:px-8 py-12 bg-white">
            <div className="container lg:max-w-[65%] text-center flex flex-col items-center gap-4">
                <BorderedTitle borderStart borderEnd label="Service Offering" />
                <SubTitle label="Explore Our Service Offerings" />
            </div>

            <ul className="w-full container lg:max-w-[85%] xl:max-w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    services.map(({ label, icon }, index) => (
                        <li key={label} onClick={() => { selectedServiceIndex !== index && setSelectedServiceIndex(index) }}
                            className={`flex items-center rounded-r-xl bg-[#f1f7fc] shadow hover:shadow-lg transition cursor-pointer ${index === selectedServiceIndex && 'bg-blue text-white'}`}>
                            <div className={`w-12 h-full flex items-center justify-center  ${index !== selectedServiceIndex ? 'text-accent' : 'border-r-2 border-white rounded-e-[35%] bg-accent'} `}>
                                {icon}
                            </div>
                            <h3 className="p-3 text-gray-700 font-medium">{label}</h3>{/**Done */}
                        </li>
                    ))
                }
            </ul>

            <div
                className="container lg:max-w-[65%] lg:h-96 flex flex-col lg:flex-row items-start gap-8 p-4 border border-gray-200 rounded-lg shadow">
                <div className="w-full lg:w-[40%] h-full rounded-lg">
                    <img loading='lazy' src={require(`../../assets/images/services/service-${selectedServiceIndex}.jpg`)} alt="Service images"
                        className="w-full h-full object-fill" />
                </div>

                <div className="lg:max-w-[60%] flex flex-col gap-6">
                    <h5 className="text-xl font-semibold text-gray-800">We are here to hear and heal you</h5>
                    <p className="text-gray-600 leading-relaxed">
                        We are privileged to work with hundreds of future-thinking medical teams,
                        including many of the world's top hardware, software, and brands. Feel
                        safe and comfortable in establishing trust and care with us.
                    </p>
                    <div className="space-y-4">
                        <figure className="flex items-start gap-4">
                            <div className="text-blue-500"><i className="fas fa-check fa-2xl"></i></div>
                            <p className="text-gray-600">Medical care with expertise and compassion, ensuring a safe and
                                healthy future for all our clients.</p>
                        </figure>
                        <figure className="flex items-start gap-4">
                            <div className="text-blue-500"><i className="fas fa-check fa-2xl"></i></div>
                            <p className="text-gray-600">Comprehensive services tailored to meet individual needs with a
                                focus on well-being and recovery.</p>
                        </figure>
                    </div>
                    <div>
                        <button
                            className="hidden lg:flex items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-blue"
                            aria-label="Read More">
                            <span> Read More</span>
                            <div><i className="fas fa-angles-right fa-xs"></i></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(ServiceOffering);
