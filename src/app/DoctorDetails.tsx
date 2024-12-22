import { memo, FC, lazy } from "react";
import { useLocation } from "react-router-dom";
import doctorsData, { DoctorModel } from "data/doctors";

const Banner = lazy(() => import("components/shared/Banner"));
const DoctorInfo = lazy(() => import("components/doctor-details/DoctorInfo"));
const MoreDoctors = lazy(() => import("components/doctor-details/MoreDoctors"));
const SkillsDoctor = lazy(() => import("components/doctor-details/SkillsDoctor"));

const DoctorDetails: FC = () => {
  const { pathname } = useLocation();
  const doctor: DoctorModel = doctorsData.find(({ name }) => name.replace(' ', '-').toLowerCase() === pathname.split('/')[2])!;
  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page={doctor.name} path={`doctors/${doctor.name.replace(' ', '-').toLowerCase()}`} />
      <div className="mt-[30rem] py-20 bg-white">
        <main className="container flex flex-col gap-8 mx-auto ">
          <DoctorInfo   {...doctor} />
          <SkillsDoctor />
          <MoreDoctors />
        </main>
      </div>
    </div>
  );
};

export default memo(DoctorDetails);
