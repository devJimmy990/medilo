import { memo, FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import doctorsData, { DoctorModel } from "data/doctors";

import { FaUserMd } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { MdEmail, MdLocationPin, MdOutlineDesktopMac } from "react-icons/md";

type DetailsType = {
  label: string;
  icon: ReactNode;
  content: string;
};

const details: DetailsType[] = [
  {
    label: "Location",
    content: "Dhaka Dhaka ,20",
    icon: <MdLocationPin size={38} className="text-accent" />,
  },
  {
    label: "Qualification",
    content: "M.S.S",
    icon: <PiCertificateBold size={38} className="text-accent" />
  },
  {
    label: "Website",
    content: "demo.com",
    icon: <MdOutlineDesktopMac size={38} className="text-accent" />,
  },
  {
    label: "Experience",
    content: "2 - 4 Years",
    icon: <FaUserMd size={38} className="text-accent" />,
  },
  {
    label: "",
    content: "",
    icon: "",
  },
];
const DoctorInfo: FC<DoctorModel> = ({ name, specialty, email, img }) => {
  return (
    <section className="detail-doctor grid grid-cols-1 md:grid-cols-2 container mx-auto my-10 max-w-5xl px-4">
      <img src={img} alt="Doctor" className="h-full sm:w-10/12 mx-auto md:max-w-sm lg:max-w-sm rounded-md" />
      <div className="content container">
        <h2 className="font-bold text-2xl">Dr/ {name}</h2>
        <p className="text-sm text-[#676767] mt-.5">{specialty}</p>
        <p className="text-[#676767] mt-4">
          We iraual desktop offers a fast and reliable best form anywhere .
          Artily powerful tool where your data and applications are secured in a
          private location in the prestigious telehouse data center in london
        </p>
        <p className="text-[#676767] mt-6">
          The majority have suffered atteration in some form, by injexted
          humourm or randomised words which son;t look even slightly believable,
          if you are gouing ro use a passage of lrem ipusm . you need to be sure
          ther isn't naything embarrassing hidden in the middle of text.
        </p>
        <div className="cards flex flex-wrap mt-6">
          <div className="card w-full sm:w-full md:w-1/2 lg:w-1/2 p-4 bg-white border border-[#2fa7f7] rounded-sm shadow flex gap-2">
            <MdEmail size={38} className="text-accent" />
            <div className="data">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">
                Email
              </h5>
              <p className="mb-3 text-xs font-medium text-[#676767]">
                {email}
              </p>
            </div>
          </div>
          {details.map(({ label, content, icon }, index) => {
            return (
              <div key={index} className="card w-full sm:w-full md:w-1/2 lg:w-1/2 p-4 bg-white border border-[#2fa7f7] rounded-sm shadow flex gap-2">
                {icon}
                <div className="data">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900">
                    {label}
                  </h5>
                  <p className="mb-3 text-xs font-medium text-[#676767]">
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(DoctorInfo);
