import "swiper/css";
import "swiper/css/pagination";
import { Routes } from "core/routes";
import doctorsData from "data/doctors";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, memo, lazy, useCallback } from 'react';
import { Pagination, Autoplay } from "swiper/modules";


const SubTitle = lazy(() => import("components/SubTitle"));
const Description = lazy(() => import("components/Description"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

const OurTeamMember: FC = () => {
  const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
  return (
    <section className="w-full my-16 px-4 text-center space-y-12 bg-white">
      <div className="container mx-auto py-20">
        <article className="flex flex-col items-center">
          <BorderedTitle borderStart borderEnd label="our team members" />
          <SubTitle label="Meet Our Specialists" />
          <Description className="max-w-3xl text-center">
            Our team of professionals is here to provide you with the best care and expertise. Discover
            their dedication and passion for excellence.
          </Description>
        </article>

        <div className="container  gap-8">
          <Swiper
            spaceBetween={5}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className="mt-8"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 4, spaceBetween: 10 },
            }}
          >
            {doctorsData.map(({ id, name, specialty, img }, index) => (
              <SwiperSlide key={name} className="group overflow-hidden rounded-xl shadow-lg bg-white ">

                <figure className="card group relative overflow-hidden cursor-pointer">
                  <figcaption className="data-doctor absolute top-[-100%] z-10 p-4 transition-all duration-500 ease-in-out group-hover:top-0 bg-[#2fa7f729] h-full">
                    <h2 className="text-xl my-1 text-[#013f68]">{name}</h2>
                    <h6 className="text-sm mb-1 text-[#013f68]">
                      Specialist in {specialty}
                    </h6>
                    <p className="font-normal text-[#013f68]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio quasi voluptatibus odio similique deserunt debitis
                      nihil dolor mollitia nobis ullam, dolorem ad,
                    </p>
                    <Link
                      to={`${Routes.DoctorDetails}/${name.replace(' ', '-').toLowerCase()}`}
                      onClick={onScrollTop}
                    >
                      <button
                        type="button"
                        className="btn mt-6 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#013f68] duration-300 hover:bg-[#0b2332]"
                      >
                        More Details
                      </button>
                    </Link>
                  </figcaption>
                  <img className="w-full h-[30rem] object-cover transition-transform duration-300 group-hover:scale-105"
                    src={img} alt='Doctor' loading="lazy" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>

  );
}

export default memo(OurTeamMember);

/**
 * 
 * 
 * import "swiper/css";
import "swiper/css/pagination";
import { Routes } from "core/routes";
import doctorsData from "data/doctors";
import { Link } from "react-router-dom";
import { memo, FC, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

const MoreDoctors: FC = () => {

  const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      className="mySwiper h-[450px] w-4/5 mt-8"
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
      }}
    >
      {doctorsData.map(({ id, name, specialty, img }, index) => (
        <SwiperSlide key={index}>
          <div className="card group relative overflow-hidden cursor-pointer">
            <div className="data-doctor absolute top-[-100%] p-4 transition-all duration-500 ease-in-out group-hover:top-0 bg-[#2fa7f729] h-full">
              <h2 className="text-xl my-1 text-[#013f68]">{name}</h2>
              <h6 className="text-sm mb-1 text-[#013f68]">
                Specialist in {specialty}
              </h6>
              <p className="font-normal text-[#013f68]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio quasi voluptatibus odio similique deserunt debitis
                nihil dolor mollitia nobis ullam, dolorem ad,
              </p>
              <Link
                to={`${Routes.DoctorDetails}/${name.replace(' ', '-').toLowerCase()}`}
                onClick={onScrollTop}
              >
                <button
                  type="button"
                  className="btn mt-6 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#013f68] duration-300 hover:bg-[#0b2332]"
                >
                  More Details
                </button>
              </Link>
            </div>
            <img className="h-96 w-full rounded-lg" src={img} alt="Doctor" loading="lazy" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(MoreDoctors);

 */