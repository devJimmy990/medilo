import { memo, FC } from "react";

const Map: FC = () => {
  return (
    <section className="container mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218360.43102449446!2d29.79007558849771!3d31.22400577226321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2sAlexandria%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1734527241340!5m2!1sen!2seg"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 w-full h-[500px]"
      ></iframe>
    </section>
  );
};

export default memo(Map);
