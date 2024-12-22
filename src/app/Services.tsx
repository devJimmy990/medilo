import { Routes } from 'core/routes';
import { Link } from 'react-router-dom';
import { memo, FC, ReactNode, useCallback, lazy } from 'react';
import {
  FaBriefcaseMedical, FaHospitalUser, FaUserDoctor,
  FaXRay, FaEye, FaHeartPulse, FaHeadSideVirus, FaBedPulse
} from "react-icons/fa6";


const Banner = lazy(() => import("components/shared/Banner"));

type ServiceModel = {
  title: string,
  icon: ReactNode,
  description: string,
}

const services: ServiceModel[] = [
  {
    title: "Pharmacology",
    description: "Medical competitor research startup to financial",
    icon: <FaBriefcaseMedical size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Orthopedic",
    description: "Medical competitor research startup to financial",
    icon: <FaXRay size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Hematology",
    description: "Medical competitor research startup to financial",
    icon: <FaHeartPulse size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Plastic Surgery",
    description: "Medical competitor research startup to financial",
    icon: <FaUserDoctor size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Neurology",
    description: "Medical competitor research startup to financial",
    icon: <FaHeadSideVirus size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Ophthalmology",
    description: "Medical competitor research startup to financial",
    icon: <FaEye size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Dental Care",
    description: "Medical competitor research startup to financial",
    icon: <FaHospitalUser size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
  {
    title: "Cardiology",
    description: "Medical competitor research startup to financial",
    icon: <FaBedPulse size={50} className='bg-blue text-white p-3 rounded-full' />,
  },
];

const Services: FC = () => {
  const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth', }), [])

  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page='Our Services' path='services' />
      <div className="mt-[30rem] py-20 bg-white">
        <main className="container flex flex-col gap-8 mx-auto ">
          <section>
            <div className="flex justify-center md:justify-start items-center mb-4">
              <span className="h-[12px] w-[3px] bg-accent block"></span>
              <span className="w-[15px] h-[4px] bg-accent mr-2"></span>
              <span className="text-accent font-bold text-[14px]">OUR BEST SERVICE</span>
            </div>
            <div className="flex-col items-center flex md:flex-row md:justify-between md:items-center md:mb-10">
              <div className="">
                <p className="font-bold text-sm mb-4 md:text-4xl md:w-[400px] break-words">
                  High-Quality Services This Doctor
                </p>
              </div>
              <div className="text-body text-center md:text-start md:w-[450px] text-[14px] mb-4">
                We are privileged to work with hundreds of future-thinking medial,
                including many of the world's top hardware, software, and brands, feel
                safe and comfortable in establishing.
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {
                services.map(({ title, description, icon }, index) => (
                  <Link key={title} to={`${Routes.ServiceDetails}/${title.replace(' ', '-').toLowerCase()}`} className='hover:shadow-lg' onClick={onScrollTop}>
                    <div className="flex flex-col items-center rounded-lg px-6 py-8 bg-white shadow-md">
                      <div className=" cursor-pointer hover:shadow-lg md:z-[5] md:w-fit md:relative md:before:content-[''] md:before:absolute md:before:w-0 md:before:h-0 md:before:border-t-[10px] md:before:border-b-[10px] md:before:border-b-transparent md:before:border-l-[15px] md:before:border-t-transparent md:before:border-l-accent md:before:top-1/2 md:before:transform md:before:-translate-y-1/2 md:before:-right-[9px] md:before:z-[-1]"                    >
                        {icon}
                      </div>
                      <h4 className="text-blue text-lg font-bold mt-4">{title}</h4>
                      <p className="text-body text-center">
                        {description}
                      </p>
                    </div>
                  </Link>
                ))
              }
            </div>
            <p className="flex items-center gap-2 max-w-3xl text-lg sm:text-xl font-semibold font-heading">
              <span>Delivering tomorrow's health care for your family.</span>
              <span className="text-accent underline">SEE MORE <i className="fas fa-angles-right fa-xs"></i></span>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default memo(Services);


