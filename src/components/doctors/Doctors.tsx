import { FC, memo } from "react";
import img_doctor_1 from "../../assets/images/doctors/doctor-1.jpg";
import img_doctor_2 from "../../assets/images/doctors/doctor-2.jpg";
import img_doctor_3 from "../../assets/images/doctors/doctor-3.jpg";
import img_doctor_4 from "../../assets/images/doctors/doctor-4.jpg";
import img_doctor_5 from "../../assets/images/doctors/doctor-5.jpg";
import img_doctor_6 from "../../assets/images/doctors/doctor-6.jpg";
import img_doctor_7 from "../../assets/images/doctors/doctor-7.jpg";
import img_doctor_8 from "../../assets/images/doctors/doctor-8.jpg";

const Doctors: FC = () => {
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
        {img_doctors.map((img, index) => {
          return (
            <div
              key={index}
              className="card group relative overflow-hidden cursor-pointer"
            >
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
                <a href="./doctor-details.html">
                  <button
                    type="button"
                    className="btn mt-6 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#013f68] duration-300 hover:bg-[#0b2332]"
                  >
                    More Details
                  </button>
                </a>
              </div>
              <img
                className="h-96 w-full rounded-lg"
                src={img}
                alt="img-doctors"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default memo(Doctors);
