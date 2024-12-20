
import { FC, memo, lazy } from "react";
const OurTeam = lazy(() => import('components/about/OurTeam'));
const Scores = lazy(() => import('components/about/Scores'));
const OurAboutUs = lazy(() => import('components/shared/OurAboutUs'));
const OurWatchVideo = lazy(() => import('components/shared/OurWatchVideo'));

const About: FC = () => {
    return (

        <main className="w-full flex flex-col gap-12 items-center relative bg-gray">
            <OurAboutUs />
            <Scores />
            <OurWatchVideo />
            <OurTeam />
        </main>
    );
}

export default memo(About);
