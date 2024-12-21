import { memo, FC, useEffect, useRef } from "react";

const SkillsDoctor: FC = () => {
  const progressContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const progressContainer = progressContainerRef.current;
      if (!progressContainer) return;

      const progressBars = progressContainer.querySelectorAll<HTMLDivElement>(
        ".progress .style-background"
      );

      if (progressContainer.offsetHeight <= window.scrollY) {
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-set");
          if (width) {
            bar.style.width = width;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  type ProgressDataType = {
    title: string;
    width: number;
  };
  const progressData: ProgressDataType[] = [
    {
      title: "Medical",
      width: 85,
    },
    {
      title: "Dental",
      width: 89,
    },
    {
      title: "Medical Lab",
      width: 69,
    },
    {
      title: "Solution",
      width: 80,
    },
  ];
  return (
    <section className="info-doctor max-w-5xl mx-auto px-4">
      <p className="text-[#676767]">
        The majority have differed alteration in some form m=, by injected
        humour or randomized words which don't look even slightly verifiable if
        your are going to use a passage of lorem ipsum, you need to ve sure
        there isn't anything embar assign hidden in ge editors now the middle of
        all the lorem ipsum generators on the internet tend to repeat predefined
        chunk readable content of a page when looking at its layout the point of
        using lorem ipsum is that it has a more-or- less normal distribution of
        letters as opposed to using content here making it look like readable
        english many
      </p>
      <div
        ref={progressContainerRef}
        className="progress-container flex flex-wrap justify-between mt-6"
      >
        {progressData.map(({ title, width }, index) => {
          return (
            <div
              key={index}
              className="progress w-full sm:w-full md:w-2/5 lg-w-2/5 my-2"
            >
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#2fa7f7]">
                  {title}
                </span>
                <span className="text-sm font-medium text-[#2fa7f7]">{`${width}%`}</span>
              </div>
              <div className="rounded-full h-2.5 bg-[#eaeaea]">
                <div
                  className="bg-[#2fa7f7] h-2.5 rounded-full style-background duration-500 w-0"
                  data-set={`${width}%`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(SkillsDoctor);
