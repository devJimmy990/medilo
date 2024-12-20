import { memo, FC } from 'react';

const MakeAppointment: FC = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-end items-center relative bg-gray-50">
            <div className="w-full lg:w-[60%] py-28" >
                <div className="container lg:w-[80%] flex flex-col justify-center gap-8 mx-auto px-5 lg:px-0">
                    <div className="lg:max-w-[80%] flex flex-col gap-2 text-center lg:text-left">
                        <h4 className="text-lg font-bold text-blue-600 uppercase">Contact Us</h4>
                        <p className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
                            Make An Appointment <br />
                            Apply For Treatments
                        </p>
                    </div>

                    <form className="w-full flex flex-col gap-8">
                        <div className="w-full flex flex-col md:flex-row gap-8">
                            <input type="text" id="name" name="name" className="w-full h-10 outline-0 rounded-lg px-4 py-1 focus:ring-2 focus:ring-blue-500"
                                placeholder="Full Name" />
                            <input type="text" id="email" name="email"
                                className="w-full h-10 outline-0 rounded-lg px-4 py-1 focus:ring-2 focus:ring-blue-500" placeholder="Email Address" />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-8">
                            <div className="w-full md:w-1/2">
                                <select id="service" name="service" className="w-full h-10 outline-0 rounded-lg px-4 py-1" >
                                    <option value="service1">Service 1</option>
                                    <option value="service2">Service 2</option>
                                    <option value="service3">Service 3</option>
                                    <option value="service4">Service 4</option>
                                    <option value="service5">Service 5</option>
                                    <option value="service6">Service 6</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2">
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="w-full h-10 outline-0 rounded-lg px-4 py-1 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>


                        <textarea name="comment" id="comment" className="outline-0 rounded-lg px-4 py-1 resize-none focus:ring-2 focus:ring-blue-500"
                            rows={4} placeholder="Write Your Message"></textarea>
                        <div>
                            <button className="font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-blue-600"
                                aria-label="Send Request">
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-[40%] aspect-square hidden lg:block">
                <img loading='lazy' src={require("../../assets/images/support.jpg")} alt="Contact us"
                    className="w-full h-full rounded-lg shadow-lg object-cover" />
            </div>
            <div style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 10%, 70% 15%, 84% 100%, 0 100%, 15% 22%, 0 14%)',
            }}
                className="w-28 h-52 hidden md:block absolute bottom-0 start-20 lg:start-4 2xl:bottom-4 2xl:start-12 z-10 -rotate-12">
                <img loading='lazy' src={require("../../assets/images/contact-stethoscope.png")} alt="stethoscope"
                    className="w-full h-full opacity-80 object-cover" />
            </div>
        </section >
    );
}

export default memo(MakeAppointment);
