import "swiper/css";
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
              <Link replace
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
