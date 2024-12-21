import { memo, FC } from "react";

const ContactUs: FC = () => {
  return (
    <section className="container grid md:grid-cols-2 gap-5 justify-center items-center mx-auto my-16">
      <div className="w-full h-[35rem] 2xl:h-[42rem] mx-auto relative flex flex-col justify-end">
        {/* Top Section with Images  */}
        <div className="absolute top-[20%] md:top-[20%] lg:top-[2%] z-10 flex justify-end container mx-auto gap-4 px-4 lg:px-8">
          <div className="w-full lg:w-[60%] xl:w-[40%] bg-white overflow-hidden">
            <img
              src={require("../../assets/images/contact.png")}
              alt="Contact us"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-[60%] xl:w-[40%] overflow-hidden">
            <img
              src={require("../../assets/images/sprocket.png")}
              alt="Sprocket"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/*   
          <!-- Bottom Section with Emergency Call --> */}
        <div className="h-60 lg:h-72 bg-[#d8e6f3] border-t-[3px] border-blue-500 flex items-end py-12 md:py-16 px-4 lg:px-8">
          <div className="w-full max-w-3xl mx-auto flex items-center gap-6">
            {/* <!-- Icon Box --> */}
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-blue text-white flex items-center justify-center rounded-full shadow-lg">
              <i className="fas fa-phone-volume fa-2xl"></i>
            </div>
            {/* <!-- Text Section --> */}
            <div className="flex flex-col gap-2">
              <h5 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500">
                Emergency Call
              </h5>
              <p className="text-sm md:text-base text-gray-700">
                24/7 Support for your convenience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-center px-3 gap-8">
        {/* <!-- Header --> */}
        <div className=" flex flex-col gap-2 text-center lg:text-left">
          <h4 className="text-lg font-bold text-accent uppercase">
            Contact Us
          </h4>
          <p className="text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
            Meet Our Specialist This Doctor Meet
          </p>
        </div>

        {/* <!-- Form --> */}
        <form className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col md:flex-row gap-8">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full h-10 outline-0 rounded-lg px-4 py-1 bg-gray"
              placeholder="Full Name"
            />
            <input
              type="text"
              id="email"
              name="email"
              className="w-full h-10 outline-0 rounded-lg px-4 py-1 bg-gray"
              placeholder="Email Address"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-8">
            <select
              id="service"
              name="service"
              className="w-full h-10 outline-0 rounded-lg px-4 py-1 bg-gray"
            >
              <option value="default" disabled>
                Choose a service
              </option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
              <option value="service4">Service 4</option>
              <option value="service5">Service 5</option>
              <option value="service6">Service 6</option>
            </select>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full h-10 outline-0 rounded-lg px-4 py-1 bg-gray"
              placeholder="Phone Number"
            />
          </div>

          <textarea
            name="comment"
            id="comment"
            className="outline-0 rounded-lg px-4 py-1 resize-none bg-gray"
            rows={4}
            placeholder="Write Your Message"
          ></textarea>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              id="auth"
              name="auth"
              className="w-full h-10 outline-0 rounded-lg px-4 py-1 bg-gray"
              placeholder="Type the below text"
            />
            <div className="w-min px-8 py-2 bg-gray">
              <p className="italic select-none">5RLOpW</p>
            </div>
            <div>
              <button
                className="font-bold text-white px-5 py-2 bg-accent rounded-3xl hover:bg-blue-600"
                aria-label="Send Request"
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactUs);
