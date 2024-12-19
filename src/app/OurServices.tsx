import Boxes from "components/Boxes";
import HealthCare from "components/HealthCare";
import HighQuality from "components/HighQuality";
import OurBestService from "components/OurBestService";

function OurServices() {
  return (
    <main className="px-2 md:px-16 lg:px-24 xl:px-32 2xl:px-48 py-4">
      <OurBestService />
      <HighQuality />
      <Boxes />
      <HealthCare />
    </main>
  );
}

export default OurServices;