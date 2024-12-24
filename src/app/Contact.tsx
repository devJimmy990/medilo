import { FC, memo, lazy } from "react";

const Banner = lazy(() => import("components/shared/Banner"));
const ContactUs = lazy(() => import("components/contact-us/ContactUs"));

const Contact: FC = () => {
  return (
    <div className="flex flex-col relative bg-gray">
      <Banner page='Contact US' path='contact' />
      <div className="mt-[30rem] py-20 bg-white">
        <main className="w-full flex flex-col gap-4">
          <ContactUs />
          <iframe allowFullScreen title="map" loading="lazy" className="border-0 w-full h-[500px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.43102449446!2d29.79007558849771!3d31.22400577226321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1734527241340!5m2!1sen!2seg"
          ></iframe>
        </main>
      </div>
    </div>
  );
};

export default memo(Contact);
