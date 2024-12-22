import { FC, memo, lazy } from "react";

const Map = lazy(() => import("components/contact-us/Map"));
const Banner = lazy(() => import("components/shared/Banner"));
const ContactUs = lazy(() => import("components/contact-us/ContactUs"));

const Contact: FC = () => {
  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page='Contact US' path='contact' />
      <div className="mt-[30rem] py-20 bg-white">
        <main className="w-full flex flex-col gap-4">
          <ContactUs />
          <Map />
        </main>
      </div>
    </div>
  );
};

export default memo(Contact);
