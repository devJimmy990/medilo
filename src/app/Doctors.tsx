import { Routes } from "core/routes";
import doctorsData from "data/doctors";
import { Link } from "react-router-dom";
import { memo, FC, lazy, useCallback } from "react";

const Banner = lazy(() => import("components/shared/Banner"));

const Doctors: FC = () => {
  const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth', }), [])
  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page='Our Doctors' path='doctors' />
      <div className="mt-[30rem] py-20 bg-white">
        {/* <main className="container flex flex-col gap-8 mx-auto "> */}
        <main className="all-doctors mx-auto container max-w-7xl font-bold">
          <>
            <div className="title text-center my-10">
              <h4 className="flex items-center mx-auto w-fit relative text-[#2fa7f7]">
                <i className="fa-solid fa-minus rotate-90 absolute -left-1.5"></i>
                <i className="fa-solid fa-minus fa-2x me-3"></i> our team members
                <i className="fa-solid fa-minus fa-2x ms-3"></i>
                <i className="fa-solid fa-minus rotate-90 absolute -right-1.5"></i>
              </h4>
              <h1 className="text-3xl w-96 mx-auto">
                Meet Our Specialist This Doctor Meeting
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {doctorsData.map(({ id, name, specialty, img }, index) => {
                return (
                  <div
                    key={index}
                    className="card group relative overflow-hidden cursor-pointer"
                  >
                    <div className="data-doctor absolute top-[-100%] p-4 transition-all duration-500 ease-in-out group-hover:top-0 bg-[#2fa7f787] h-full">
                      <h2 className="text-xl my-1 text-[#013f68]">{name}</h2>
                      <h6 className="text-sm mb-1 text-[#013f68]">
                        Specialist in {specialty}
                      </h6>
                      <p className="font-normal text-[#013f68]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio quasi voluptatibus odio similique deserunt debitis
                        nihil dolor mollitia nobis ullam, dolorem ad,
                      </p>
                      <Link to={`${Routes.DoctorDetails}/${name.replace(' ', '-').toLowerCase()}`} onClick={onScrollTop}>
                        <button
                          type="button"
                          className="btn mt-6 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#013f68] duration-300 hover:bg-[#0b2332]"
                        >
                          More Details
                        </button>
                      </Link>
                    </div>
                    <img src={img} alt="doctor"
                      className="h-96 w-full rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
          </>
        </main>
      </div>
    </div>
  );
};

export default memo(Doctors);
