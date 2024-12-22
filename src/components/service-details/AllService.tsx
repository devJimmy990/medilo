import { FC, memo } from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const services: string[] = ['Medical lab service', 'Dental best service', 'Dedicate doctor best', 'Team can help achieve', 'Medical goals lab']
const AllService: FC = () => {
  return (
    <section className=" max-h-[30rem] md:mt-16 flex-col md:flex-row sm:flex justify-between gap-5 mb-10">
      <div className="bg-gray p-6">
        <p className="mb-8 font-bold text-2xl">All Service:</p>
        <ul>
          {
            services.map((service, index) => (
              <li key={index} className="flex items-center gap-2 mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
                <IoCheckmarkCircleSharp size={32} className='bg-white text-blue ' />
                <span>{service}</span>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="mt-7 md:w-[65%] flex">
        <img loading='lazy' alt="doctors" className="w-full"
            src={require(`../../assets/images/services/service-${Math.floor(Math.random() * 4)}.jpg`)}
            />
      </div>
    </section>
  );
}

export default memo(AllService);
