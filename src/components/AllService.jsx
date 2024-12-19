function AllService() {
  return (
    <section class="md:mt-16 flex-col md:flex-row sm:flex justify-between gap-5 mb-10">
      <div class="bg-gray p-6">
        <p class="mb-8 font-bold text-2xl">All Service:</p>
        <ul>
          <li class="mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
            <i class="fa-solid fa-check p-2 bg-blue text-white rounded-full"></i>
            Medical lab service
          </li>
          <li class="mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
            <i class="fa-solid fa-check p-2 bg-blue text-white rounded-full"></i>
            Dental best service
          </li>
          <li class="mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
            <i class="fa-solid fa-check p-2 bg-blue text-white rounded-full"></i>
            Dedicate doctor best
          </li>
          <li class="mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
            <i class="fa-solid fa-check p-2 bg-blue text-white rounded-full"></i>
            Team can help achieve
          </li>
          <li class="mb-6 text-xs bg-white md:pr-24 p-2 rounded-full font-bold">
            <i class="fa-solid fa-check p-2 bg-blue text-white rounded-full"></i>
            Medical goals lab
          </li>
        </ul>
      </div>
      <div class="mt-7 md:w-[65%] flex">
        <img
          src="service-1.jpg"
          class="max-w-full"
          alt="doctors"
        />
      </div>
    </section>
  );
}

export default AllService;
