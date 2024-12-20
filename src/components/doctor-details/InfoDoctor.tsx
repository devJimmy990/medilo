import { memo, FC } from "react";

const InfoDoctor: FC = () => {
  type DetailsType = {
    title: string;
    description: string;
  };

  const details: DetailsType[] = [
    {
      title: "Location",
      description: "Dhaka Dhaka ,20",
    },
    {
      title: "Email",
      description: "RawanSelima@gamil.com",
    },
    {
      title: "Qualification",
      description: "M.S.S",
    },
    {
      title: "Website",
      description: "demo.com",
    },
    {
      title: "Experience",
      description: "2 - 4 Years",
    },
    {
      title: "",
      description: "",
    },
  ];
  return (
    <section className="detail-doctor grid grid-cols-1 md:grid-cols-2 container mx-auto my-10 max-w-5xl">
      <img
        className="h-auto sm:w-10/12 mx-auto md:max-w-sm lg:max-w-sm rounded-md"
        src={require("../assets/images/doctors/doctor-2.jpg")}
        alt="image description"
      />
      <div className="content container">
        <h2 className="font-bold text-2xl">Dr/ Ahmed Mohamed</h2>
        <p className="text-sm text-[#676767] mt-.5">Manager</p>
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
          {details.map(({ title, description }, index) => {
            return (
              <div
                key={index}
                className="card w-full sm:w-full md:w-1/2 lg:w-1/2 p-4 bg-white border border-[#2fa7f7] rounded-sm shadow flex items-center"
              >
                <div className="icon">
                  <i className="fa-solid fa-location-dot fa-2x w-7 h-7 mb-3 me-6 text-[#2fa7f7]"></i>
                </div>
                <div className="data">
                  <a href="#">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h5>
                  </a>
                  <p className="mb-3 text-xs font-medium text-[#676767]">
                    {description}
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

export default memo(InfoDoctor);
