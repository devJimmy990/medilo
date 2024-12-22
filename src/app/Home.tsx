import { FC, lazy, memo } from 'react';

const Scores = lazy(() => import("components/home/Scores"));
const HomeHero = lazy(() => import("components/home/HomeHero"));
const OurAboutUs = lazy(() => import("components/shared/OurAboutUs"));
const WhyChooseUs = lazy(() => import("components/home/WhyChooseUs"));
const OurPortfolio = lazy(() => import("components/home/OurPortfolio"));
const OurTeamMember = lazy(() => import("components/home/OurTeamMember"));
const MedicalService = lazy(() => import("components/home/MedicalService"));
const OurBestService = lazy(() => import("components/home/OurBestService"));
const OurWatchVideo = lazy(() => import("components/shared/OurWatchVideo"));
const ServiceOffering = lazy(() => import("components/home/ServiceOffering"));
const MakeAppointment = lazy(() => import("components/home/MakeAppointment"));

const Home: FC = () => {
    return (
        <main className="w-full flex flex-col gap-12 bg-gray relative">
            <HomeHero />
            <MedicalService />
            <OurAboutUs />
            <Scores />
            <OurBestService />
            <OurTeamMember />
            <WhyChooseUs />
            <OurPortfolio />
            <OurWatchVideo />
            <ServiceOffering />
            <MakeAppointment />
        </main>
    );
}

export default memo(Home);
