import { FC, memo } from "react"

const ServiceReview: FC = () => {
  return (
    <section className="text-center sm:text-start">
      <article>
        <p className="mb-7 font-bold text-2xl">Service Details:</p>
        <p className="mb-5 text-body">
          It is a long established fact that a reader will be distracted restore
          inexpensive e-markets vis to is a long established fact that a reader
          will be distracted restore inexpensive e- markets vis to corporate
          intellectual capital. Holisticly reinvent compelling niche markets via
          scalable strategic. by the readable content of a page when looking.
          vis corporate intellectual capital. Holisticly reinvent compelling
          niche markets via scalabl etrategic.by the meadable content of a page
          when looking at its layout. The point to this singis that normal
          distribution of Medical
        </p>
        <p className="text-body mb-5">
          We is a long established fact that a reader will be distracted restore
          inexpensive e-markets vis tontellectual capital. Holisticly reinvent
          compelling niche markets via scalable strategic. by the readable
          content of a page when looking. vis corporate intellectual capital.
          vis corporate intellectual capitalh olisticly reinvent compelling
          niche markets via scalable strategic. by the readable content of a
          page when looking.
        </p>
      </article>




      <div className="mt-10 mb-16">
        <div className="flex flex-col md:flex-row gap-5 mb-10">
          <div className="md:w-1/2 mb-6 md:m-0">
            <img
              src={require(`../../assets/images/services/service-${Math.floor(Math.random() * 4)}.jpg`)}
              className="w-full md:aspect-[12_/_9] lg:aspect-[18_/_9]"
              alt="doctors"
            />
          </div>
          <div className="md:w-1/2">
            <div
              className="flex text-center md:text-start flex-col md:flex-row gap-7 md:gap-5 mb-5"
            >
              <div className="bg-gray p-5 rounded-2xl">
                <div
                  className="md:z-[5] md:w-fit md:relative md:before:content-[''] md:before:absolute md:before:w-0 md:before:h-0 md:before:border-t-[10px] md:before:border-b-[10px] md:before:border-b-transparent md:before:border-l-[15px] md:before:border-t-transparent md:before:border-b-transparentm md:before:border-l-accent md:before:top-1/2 md:before:transform md:before:-translate-y-1/2 md:before:-right-[9px] md:before:z-[-1]"
                >
                  <i
                    className="fa-solid fa-briefcase-medical bg-blue text-white p-3 rounded-full"
                  ></i>
                </div>
                <p className="font-bold text-xl">Service & Check</p>
                <p className="text-body">
                  Medical competitor research startup to financial
                </p>
              </div>
              <div className="bg-gray p-5 rounded-2xl">
                <div
                  className="md:z-[5] md:w-fit md:relative md:before:content-[''] md:before:absolute md:before:w-0 md:before:h-0 md:before:border-t-[10px] md:before:border-b-[10px] md:before:border-b-transparent md:before:border-l-[15px] md:before:border-t-transparent md:before:border-b-transparentm md:before:border-l-accent md:before:top-1/2 md:before:transform md:before:-translate-y-1/2 md:before:-right-[9px] md:before:z-[-1]"
                >
                  <i
                    className="fa-solid fa-truck-medical fa-flip-horizontal bg-blue text-white p-3 rounded-full"
                  ></i>
                </div>
                <p className="font-bold text-xl">Medical Care</p>
                <p className="text-body">
                  Medical competitor research startup to financial
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col text-xs md:flex-row">
              <i
                className="fa-regular fa-circle-check mr-3 flex items-center justify-center p-[8px] text-[15px] text-white bg-blue rounded-full"
              ></i>
              <div className="text-center md:text-start">
                <p>There are many variations of pass available this medical</p>
                <p>
                  service the team
                  <span className="text-accent font-bold">READ MORE +</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <article className="text-body text-center md:text-start">
          We is a long established fact that a reader will be distracted restore
          inexpensive e-markets vis tontellectual capital. Holisticly reinvent
          compelling niche markets via scalable strategic. by the readable
          content of a page when looking. vis corporate intellectual capital.
          vis corporate intellectual capitalh olisticly reinvent compelling
          niche markets via scalable strategic. by the readable content of a
          page when looking.
        </article>
      </div>


    </section>
  )
}

export default memo(ServiceReview)
