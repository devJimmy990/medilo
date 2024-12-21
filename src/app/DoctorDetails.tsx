import { memo } from "react";
import InfoDoctor from "components/doctor-details/InfoDoctor";
import MoreDoctors from "components/doctor-details/MoreDoctors";
import SkillsDoctor from "components/doctor-details/SkillsDoctor";
const DoctorDetails = () => {
  return (
    <div>
      <InfoDoctor />
      <SkillsDoctor />
      <MoreDoctors />
    </div>
  );
};

export default memo(DoctorDetails);
