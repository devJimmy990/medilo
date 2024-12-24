import { FC, memo, lazy } from 'react';
const BorderedTitle = lazy(() => import("components/BorderedTitle"));
const SubTitle = lazy(() => import("components/SubTitle"));

const OurTeam: FC = () => {
    return (
        <section className="container mx-auto my-10 text-center space-y-8">
            <article className='flex flex-col items-center'>
                <BorderedTitle borderStart borderEnd label="our team members" />
                <SubTitle label="meet our specialists" />
            </article>
            <div className="flex flex-wrap justify-center gap-6">
                {
                    Array.from({ length: 4 }, ((_, index) => (
                        <figure className="w-56 h-72">
                            <img alt="Doctor" loading="lazy"
                                className="w-full h-full object-cover rounded-xl"
                                src={require(`../../assets/images/doctors/doctor-${index}.jpg`)}
                            />
                        </figure>
                    )))
                }
            </div>
        </section>
    );
}

export default memo(OurTeam);
