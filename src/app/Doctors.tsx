import { memo, FC, lazy } from "react";

const Our_Doctors = lazy(() => import("components/doctors/Doctors"));

const Doctors: FC = () => {
  return (
      <main className="all-doctors mx-auto container max-w-7xl font-bold">
          <Our_Doctors />
    </main>
  );
};

export default memo(Doctors);
