import { memo } from "react";

import Boxes from "components/our-services/Boxes";
import HealthCare from "components/our-services/HealthCare";
import HighQuality from "components/our-services/HighQuality";
import OurBestService from "components/our-services/OurBestService";

const Services = () => {
  return (
    <main className="px-2 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-4">
      <OurBestService />
      <HighQuality />
      <Boxes />
      <HealthCare />
    </main>
  );
};

export default memo(Services);
