import ContactUs from "components/contact-us/ContactUs";
import Map from "components/contact-us/Map";

import { memo } from "react";
const Contact = () => {
  return (
    <main className="w-full flex flex-col gap-4">
      <ContactUs />
      <Map />
    </main>
  );
};

export default memo(Contact);
