import { FC, memo, lazy } from "react";

const Scores = lazy(() => import('components/about/Scores'));
const Banner = lazy(() => import('components/shared/Banner'));
const OurTeam = lazy(() => import('components/about/OurTeam'));
const OurAboutUs = lazy(() => import('components/shared/OurAboutUs'));
const OurWatchVideo = lazy(() => import('components/shared/OurWatchVideo'));

const About: FC = () => {
    return (
        <div className="flex flex-col relative bg-gray">
            <Banner page='About Page' path='about' />
            <div className="mt-[30rem] py-20 bg-white">
                <main className="flex flex-col gap-12">
                    <div className="container flex flex-col gap-12 mx-auto pb-16">
                        <OurAboutUs />
                        <Scores />
                    </div>
                    <OurWatchVideo />
                    <div className="container mx-auto">
                        <OurTeam />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default memo(About);
