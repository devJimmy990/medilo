import { FC, memo } from 'react';

const WhyChooseUs: FC = () => {
    return (
        <section className="md:w-full flex justify-between gap-4 my-16 mx-auto bg-gray-100">
            <div className="container mx-auto px-4 lg:w-[65%] flex flex-col justify-center gap-10 lg:ms-auto">
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-bold text-blue-600 uppercase">Why Choose Us</h4>
                    <h2 className="text-2xl lg:text-4xl font-bold leading-snug">
                        Medical Ready To Get This Health Solution
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-briefcase-medical fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Service & Check</h4>
                                    <p className="text-gray-700">Medical competitor research startup to financial success.
                                    </p>
                                </div>
                            </div>

                            <hr className="md:hidden border-gray-300" />

                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-hand-holding-droplet fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Medical Advices</h4>
                                    <p className="text-gray-700">Helping you overcome health challenges efficiently.</p>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-300" />

                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-heart-pulse fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Emergency Help</h4>
                                    <p className="text-gray-700">Access to top medical professionals and resources.</p>
                                </div>
                            </div>

                            <hr className="md:hidden border-gray-300" />

                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-capsules fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Medical Research</h4>
                                    <p className="text-gray-700">Tailored health plans designed for your needs.</p>
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-house-medical fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Qualified Doctors</h4>
                                    <p className="text-gray-700">Access to top medical professionals and resources.</p>
                                </div>
                            </div>

                            <hr className="md:hidden border-gray-300" />

                            <div className="flex items-center gap-4">
                                <div
                                    className="w-14 h-14 flex justify-center items-center rounded-md bg-white text-blue shadow-md">
                                    <i className="fas fa-flask fa-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-blue-600">Affordable Prices</h4>
                                    <p className="text-gray-700">Tailored health plans designed for your needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block w-[30%]">
                <img loading='lazy' className="h-full w-full object-cover rounded-lg shadow-lg" src={require("../../assets/images/solution.png")}
                    alt="Health Solution" />
            </div>
        </section>
    );
}

export default memo(WhyChooseUs);
