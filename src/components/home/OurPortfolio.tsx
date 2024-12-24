import { FC, memo, lazy, useState } from 'react';

const SubTitle = lazy(() => import("components/SubTitle"));
const Description = lazy(() => import("components/Description"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

type JobModel = { title: string, description: string, }
const jobs: JobModel[] = [
    { title: 'Medical Of Working', description: 'We business standard chunk of Ipsum used since is Agency & Star tup' },
    { title: 'Medical Of Dental', description: 'We business standard chunk of Ipsum used since is Agency & Startup' },
    { title: 'Laboratory Technologist', description: 'We business standard chunk of Ipsum used since is Agency & Star tup' },
]
const headers: string[] = ['Dental', 'Cardiology', 'Medical']

const jobScope: string[] = ['jobs/job-', 'blogs/blog-', 'services/service-']
const OurPortfolio: FC = () => {
    const [headerIndex, setHeaderIndex] = useState<number>(0);

    return (
        <section className="w-full flex flex-col py-16 gap-10 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <BorderedTitle borderStart label="Our Portfolio" />
                    <SubTitle label="All The Great Work That We've Done" />
                </div>

                <div className="max-w-md text-center md:text-left">
                    <Description>
                        We are privileged to work with hundreds of future-thinking medical
                        professionals, including many of the world's top hardware, software,
                        and healthcare brands. Feel safe and comfortable in establishing
                        partnerships with us.
                    </Description>
                    <ul className="flex justify-center md:justify-center gap-2 mt-4 text-sm text-blue font-medium ">
                        {headers.map((header, index) => (
                            <li key={header} onClick={() => { headerIndex !== index && setHeaderIndex(index) }}
                                className={`px-3 py-1 rounded-md cursor-pointer ${headerIndex === index && 'bg-accent text-white'} hover:bg-accent hover:text-white`}>
                                {header}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                    jobs.map(({ title, description }, index) => (
                        <figure key={title} className={`relative max-h-[18rem] group overflow-hidden rounded-lg shadow-md flex-1 ${index === 2 && 'sm:col-span-2'} lg:col-span-1`}>
                            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                src={require(`../../assets/images/${jobScope[headerIndex]}${index}.jpg`)} alt="Medical Project" />
                            <figcaption
                                className="max-w-[85%] absolute inset-x-0 bottom-0 rounded-tr-lg bg-white/75 ps-6 py-4 text-blue-900 transition-opacity duration-300 group-hover:opacity-90">
                                <div className="border-l-2 border-accent ps-4">
                                    <h4 className="text-xl font-bold">{title}</h4>
                                    <p className="max-w-[90%] text-sm text-gray-800">
                                        {description}
                                    </p>
                                </div>
                            </figcaption>
                            <div
                                className="w-12 h-12 flex justify-center items-center rounded-full absolute bottom-12 right-[16%] translate-x-1/2 translate-y-1/2 bg-blue text-white">
                                <span className="text-2xl font-bold">0{index + 1}</span>
                            </div>
                        </figure>
                    ))
                }
            </div>
        </section>
    );
}

export default memo(OurPortfolio);
