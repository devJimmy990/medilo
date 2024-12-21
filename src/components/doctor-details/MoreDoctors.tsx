import { memo, FC } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img_doctor_1 from "../../assets/images/doctors/doctor-1.jpg";
import img_doctor_2 from "../../assets/images/doctors/doctor-2.jpg";
import img_doctor_3 from "../../assets/images/doctors/doctor-3.jpg";
import img_doctor_4 from "../../assets/images/doctors/doctor-4.jpg";
import img_doctor_5 from "../../assets/images/doctors/doctor-5.jpg";
import img_doctor_6 from "../../assets/images/doctors/doctor-6.jpg";
import img_doctor_7 from "../../assets/images/doctors/doctor-7.jpg";
import img_doctor_8 from "../../assets/images/doctors/doctor-8.jpg";
import { Link } from "react-router-dom";
import { Routes } from "core/routes";
import DoctorDetails from "app/DoctorDetails";

const MoreDoctors: FC = () => {
  const img_doctors = [
    img_doctor_1,
    img_doctor_2,
    img_doctor_3,
    img_doctor_4,
    img_doctor_5,
    img_doctor_6,
    img_doctor_7,
    img_doctor_8,
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
      modules={[Pagination]}
      className="mySwiper h-[450px] w-4/5 mt-8"
    >
      {img_doctors.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="card group relative overflow-hidden cursor-pointer">
              <div className="data-doctor absolute top-[-100%] p-4 transition-all duration-500 ease-in-out group-hover:top-0 bg-[#2fa7f729] h-full">
                <h2 className="text-xl my-1 text-[#013f68]">Rawan Selima</h2>
                <h6 className="text-sm mb-1 text-[#013f68]">
                  Specialist in Cardiology
                </h6>
                <p className="font-normal text-[#013f68]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio quasi voluptatibus odio similique deserunt debitis
                  nihil dolor mollitia nobis ullam, dolorem ad,
                </p>
                <Link to={Routes.DetailsDoctor}>
                  <button
                    type="button"
                    className="btn mt-6 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#013f68] duration-300 hover:bg-[#0b2332]"
                  >
                    More Details
                  </button>
                </Link>
              </div>
              <img className="h-96 w-full rounded-lg" src={img} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(MoreDoctors);
