import { memo } from "react";

import AllService from "components/service-details/AllService";
import ServiceDetailsText from "components/service-details/ServiceDetailsText";
import ServiceDetailsBox from "components/service-details/ServiceDetailsBox";
import ServiceDetailsIcons from "components/service-details/ServiceDetailsIcons";

const ServiceDetails = () => {
  return (
    <main className="px-2 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-4">
      <AllService />
      <ServiceDetailsText />
      <ServiceDetailsBox />
      <ServiceDetailsIcons />
    </main>
  );
};

export default memo(ServiceDetails);
