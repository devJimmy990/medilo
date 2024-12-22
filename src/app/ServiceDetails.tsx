import { lazy, memo } from "react";
import { useLocation } from 'react-router-dom';

const Banner = lazy(() => import("components/shared/Banner"));
const AllService = lazy(() => import("components/service-details/AllService"));
const ServiceReview = lazy(() => import("components/service-details/ServiceReview"));
const ServiceScores = lazy(() => import("components/service-details/ServiceScores"));

const ServiceDetails = () => {
  const { pathname } = useLocation();
  const service = pathname.split('/')[2];
  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page={service.replace('-', ' ')} path={`services/${service}`} />
      <div className="mt-[30rem] py-20 bg-white">
        <main className="container flex flex-col gap-8 mx-auto ">
          <AllService />
          <ServiceReview />
          <ServiceScores />
        </main>
      </div>
    </div >
  );
};

export default memo(ServiceDetails);
