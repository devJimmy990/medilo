import { FC, memo } from 'react';


const doctors: string[] = [
    "Dr. Sarah Johnson",
    "Dr. Michael Carter",
    "Dr. Emily Davis",
    "Dr. James Wilson",
]

const OurTeamMember: FC = () => {
    return (
        <section className="w-full my-16 px-4 text-center space-y-12 bg-white">
            <div className="container mx-auto py-20">
                <article className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-500">Our Team Members</h4>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Meet Our Specialists</h2>
                    <p className="text-body max-w-3xl mx-auto">
                        Our team of professionals is here to provide you with the best care and expertise. Discover
                        their
                        dedication
                        and passion for excellence.
                    </p>
                </article>

                <div className="container grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        doctors.map((item, index) => (
                            <div key={index}>
                                <figure className="group overflow-hidden rounded-xl shadow-lg bg-white">
                                    <img className="w-full h-[30rem] object-cover transition-transform duration-300 group-hover:scale-105"
                                        src={require(`../../assets/images/doctors/doctor-${index}.jpg`)} alt={`Doctor ${index + 1}`} loading="lazy" />
                                    <figcaption className="py-4 text-gray-800 font-medium">
                                        {item}
                                    </figcaption>
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    );
}

export default memo(OurTeamMember);
