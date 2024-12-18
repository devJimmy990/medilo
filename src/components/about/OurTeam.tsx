import { FC, memo } from 'react';

const OurTeam: FC = () => {
    return (
        <section className="container mx-auto my-10 text-center space-y-8">
            <header>
                <h4 className="text-lg font-bold text-blue-500">Our Team Members</h4>
                <h2 className="text-3xl font-bold">Meet Our Specialists</h2>
            </header>
            <div className="flex flex-wrap justify-center gap-6">
                {
                    Array.from({ length:4}, ((_, index) => (
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
