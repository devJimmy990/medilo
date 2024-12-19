import AllService from "components/AllService";
import ServiceDetailsBox from "components/ServiceDetailsBox";
import ServiceDetailsIcons from "components/ServiceDetailsIcons";
import ServiceDetailsText from "components/ServiceDetailsText";

function ServicesDetails() {
  return (
    <main className="px-2 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-4">
      <AllService />
      <ServiceDetailsText />
      <ServiceDetailsBox />
      <ServiceDetailsIcons />
    </main>
  );
}

export default ServicesDetails;
