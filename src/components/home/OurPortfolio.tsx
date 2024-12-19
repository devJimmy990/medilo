import { FC, memo } from 'react';

const OurPortfolio: FC = () => {
    return (
        <section className="w-full flex flex-col py-16 gap-10 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h4 className="text-lg font-bold text-blue-600 uppercase tracking-wider">Our Portfolio</h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-800">
                        All The Great Work That We've Done
                    </h2>
                </div>

                <div className="max-w-md text-center md:text-left">
                    <p className="text-gray-600">
                        We are privileged to work with hundreds of future-thinking medical
                        professionals, including many of the world's top hardware, software,
                        and healthcare brands. Feel safe and comfortable in establishing
                        partnerships with us.
                    </p>
                    <ul
                        className="flex flex-wrap gap-2 mt-4 text-sm text-blue-600 font-medium justify-center md:justify-start">
                        <li className="bg-blue-100 px-3 py-1 rounded-md">Dental</li>
                        <li className="bg-blue-100 px-3 py-1 rounded-md">Cardiology</li>
                        <li className="bg-blue-100 px-3 py-1 rounded-md">Neurology</li>
                        <li className="bg-blue-100 px-3 py-1 rounded-md">Medical</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                <figure className="relative group overflow-hidden rounded-lg shadow-md">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={require("../../assets/images/jobs/job-0.jpg")} alt="Medical Project" />
                    <figcaption
                        className="max-w-[85%] absolute inset-x-0 bottom-0 rounded-tr-lg bg-white/75 ps-6 py-4 text-blue-900 transition-opacity duration-300 group-hover:opacity-90">
                        <div className="border-l-2 border-accent ps-4">
                            <h4 className="text-xl font-bold">Future Ready</h4>
                            <p className="max-w-[90%] text-sm text-gray-800">
                                Leveraging cutting-edge technology to transform medical practices worldwide.
                            </p>
                        </div>
                    </figcaption>
                    <div
                        className="w-12 h-12 flex justify-center items-center rounded-full absolute bottom-12 right-[16%] translate-x-1/2 translate-y-1/2 bg-blue text-white">
                        <span className="text-2xl font-bold">01</span>
                    </div>
                </figure>

                <figure className="relative group overflow-hidden rounded-lg shadow-md">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={require("../../assets/images/jobs/job-1.jpg")} alt="Medical Project 2" />
                    <figcaption
                        className="max-w-[85%] absolute inset-x-0 bottom-0 rounded-tr-lg bg-white/75 ps-6 py-4 text-blue-900 transition-opacity duration-300 group-hover:opacity-90">
                        <div className="border-l-2 border-accent ps-4">
                            <h4 className="text-xl font-bold">Future Ready</h4>
                            <p className="max-w-[90%] text-sm text-gray-800">
                                Leveraging cutting-edge technology to transform medical practices worldwide.
                            </p>
                        </div>
                    </figcaption>
                    <div
                        className="w-12 h-12 flex justify-center items-center rounded-full absolute bottom-12 right-[16%] translate-x-1/2 translate-y-1/2 bg-blue text-white">
                        <span className="text-2xl font-bold">02</span>
                    </div>
                </figure>

                <figure className="relative group overflow-hidden rounded-lg shadow-md">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={require("../../assets/images/jobs/job-2.jpg")} alt="Medical Project 3" />
                    <figcaption
                        className="max-w-[85%] absolute inset-x-0 bottom-0 rounded-tr-lg bg-white/75 ps-6 py-4 text-blue-900 transition-opacity duration-300 group-hover:opacity-90">
                        <div className="border-l-2 border-accent ps-4">
                            <h4 className="text-xl font-bold">Future Ready</h4>
                            <p className="max-w-[90%] text-sm text-gray-800">
                                Leveraging cutting-edge technology to transform medical practices worldwide.
                            </p>
                        </div>
                    </figcaption>
                    <div
                        className="w-12 h-12 flex justify-center items-center rounded-full absolute bottom-12 right-[16%] translate-x-1/2 translate-y-1/2 bg-blue text-white">
                        <span className="text-2xl font-bold">03</span>
                    </div>
                </figure>
            </div>
        </section>
    );
}

export default memo(OurPortfolio);
