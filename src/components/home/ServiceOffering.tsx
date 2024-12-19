import { FC, memo } from 'react';

const ServiceOffering: FC = () => {
    return (
        <section className="w-full mx-auto flex flex-col gap-8 items-center bg-white px-4 lg:px-8 py-12">
            <div className="container lg:max-w-[65%] text-center flex flex-col items-center gap-4">
                <h4 className="text-xl font-semibold text-gray-700">Service Offering</h4>
                <p className="text-lg text-gray-500">Explore Our Service Offerings</p>
            </div>

            <ul className="w-full container lg:max-w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <li
                    className="flex items-center rounded-r-xl shadow hover:shadow-lg transition bg-blue text-white cursor-pointer">
                    <div
                        className="w-12 h-full flex items-center justify-center border-r-2 border-white rounded-e-[35%] bg-accent">
                        <i className="fas fa-microscope fa-lg"></i>
                    </div>
                    <h3 className="p-3 text-gray-700 font-medium">Modern Technology</h3>
                </li>
                <li
                    className="flex items-center rounded-r-xl bg-[#f1f7fc] shadow hover:shadow-lg transition cursor-pointer">
                    <div className="w-12 h-full flex items-center justify-center text-accent">
                        <i className="fas fa-truck-medical fa-flip-horizontal fa-lg"></i>
                    </div>
                    <h3 className="p-3 text-gray-700 font-medium">Success of Treatment</h3>
                </li>
                <li
                    className="flex items-center rounded-r-xl bg-[#f1f7fc] shadow hover:shadow-lg transition cursor-pointer">
                    <div className="w-12 h-full flex items-center justify-center text-accent">
                        <i className="fas fa-bed-pulse fa-lg"></i>
                    </div>
                    <h3 className="p-3 text-gray-700 font-medium">Certified Doctors</h3>
                </li>
                <li
                    className="flex items-center rounded-r-xl bg-[#f1f7fc] shadow hover:shadow-lg transition cursor-pointer">
                    <div className="w-12 h-full flex items-center justify-center text-accent">
                        <i className="fas fa-hand-holding-droplet fa-lg"></i>
                    </div>
                    <h3 className="p-3 text-gray-700 font-medium">Medical Advice</h3>
                </li>
            </ul>

            <div
                className="container lg:max-w-[65%] flex flex-col lg:flex-row items-start gap-8 p-4 border border-gray-200 rounded-lg shadow">
                <div className="flex-shrink-0 w-full lg:w-[40%] bg-amber-400 rounded-lg overflow-hidden">
                    <img loading='lazy' src={require("../../assets/images/services/service-0.jpg")} alt="Service images"
                        className="w-full h-full object-cover" />
                </div>

                <div className="lg:max-w-[60%] flex flex-col gap-6">
                    <h5 className="text-xl font-semibold text-gray-800">We are here to hear and heal you</h5>
                    <p className="text-gray-600 leading-relaxed">
                        We are privileged to work with hundreds of future-thinking medical teams,
                        including many of the world's top hardware, software, and brands. Feel
                        safe and comfortable in establishing trust and care with us.
                    </p>
                    <div className="space-y-4">
                        <figure className="flex items-start gap-4">
                            <div className="text-blue-500"><i className="fas fa-check fa-2xl"></i></div>
                            <p className="text-gray-600">Medical care with expertise and compassion, ensuring a safe and
                                healthy future for all our clients.</p>
                        </figure>
                        <figure className="flex items-start gap-4">
                            <div className="text-blue-500"><i className="fas fa-check fa-2xl"></i></div>
                            <p className="text-gray-600">Comprehensive services tailored to meet individual needs with a
                                focus on well-being and recovery.</p>
                        </figure>
                    </div>
                    <div>
                        <button
                            className="hidden lg:flex items-center gap-2 font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-blue-600"
                            aria-label="Read More">
                            <span> Read More</span>
                            <div><i className="fas fa-angles-right fa-xs"></i></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(ServiceOffering);
