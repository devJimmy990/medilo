import { memo } from 'react';

const Appointment = () => {
    return (
        <main
            className="w-[95%] md:w-[80%] lg:w-[65%] xl:w-[50%] flex flex-col justify-center items-center gap-10 mx-auto rounded-3xl my-24 px-2 md:px-8 lg:px-16 py-12 bg-gray">
            <div className="flex flex-col justify-center items-center gap-4">
                <h4 className="text-lg font-bold text-accent">MAKE APPOINTMENTS</h4>
                <h2 className="text-3xl font-bold">Booking Now Appointments</h2>
            </div>
            <form action="" className="w-full flex flex-col gap-8">
                <div className="w-full flex flex-col md:flex-row gap-8">
                    <input type="text" className="w-full h-10 outline-0 rounded-lg px-4 py-1" id="name" placeholder="Full Name" />
                    <input type="text" className="w-full h-10 outline-0 rounded-lg px-4 py-1" id="email"
                        placeholder="Email Address" />
                </div>
                <input type="text" className="w-full h-10 outline-0 rounded-lg px-4 py-1" id="address"
                    placeholder="Email Address" />
                <select id="service" name="service"
                    className="w-full h-10 outline-0 rounded-lg px-4 py-1">
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                    <option value="service4">Service 4</option>
                    <option value="service5">Service 5</option>
                    <option value="service6">Service 6</option>
                </select>
                <input type="date" className="w-full h-10 outline-0 rounded-lg px-4 py-1" id="date"
                    placeholder="Appointment Data & Time" />
                <button className="w-full font-semibold rounded-md px-5 py-2  text-white bg-blue">Make Appointment</button>
            </form>
        </main>
    );
}

export default memo(Appointment);
