import { FC, memo, lazy } from 'react';
import { FaUserLarge, FaComment, FaAngleRight } from "react-icons/fa6";

const SubTitle = lazy(() => import("components/SubTitle"));
const Banner = lazy(() => import("components/shared/Banner"));
const BorderedTitle = lazy(() => import("components/BorderedTitle"));

type BLogModel = {
    title: string,
    date: { day: string, month: string }
}
const blogs: BLogModel[] = [
    {
        title: "Medical Of This Working Health Blog",
        date: { day: "22", month: "Feb" }
    },
    {
        title: "There Is Only One Thing That Is Hospital",
        date: { day: "06", month: "Apr" }
    },
    {
        title: "This Working World and Infection Prevention",
        date: { day: "13", month: "Jul" }
    },
    {
        title: "Medical Of This Working Health Blog",
        date: { day: "01", month: "Sep" }
    },
    {
        title: "There Is Only One Thing That Is Hospital",
        date: { day: "04", month: "Nov" }
    },
    {
        title: "This Working World and Infection Prevention",
        date: { day: "10", month: "Dec" }
    }
];


const Blogs: FC = () => {
    return (
        <div className="flex flex-col relative bg-gray">
            <Banner page='Blogs Page' path='blogs' />
            <div className="mt-[30rem] py-20 bg-white">
                <main className="container flex flex-col items-center gap-3 mx-auto">
                    <BorderedTitle borderStart borderEnd label="OUR LARGEST BLOGS" />
                    <SubTitle label="Latest Posts & Articles" />
                    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {
                            blogs.map(({ title, date: { day, month } }, index) => (
                                <figure className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="w-full aspect-square relative">
                                        <img loading='lazy' src={require(`../assets/images/blogs/blog-${index % 3}.jpg`)} alt="Blog" className="w-full aspect-square absolute z-0" />
                                        <span className="uppercase text-accent text-xl absolute top-10 start-6 rounded-lg z-10 px-4 py-1 bg-white">
                                            medical
                                        </span>
                                        <div className="w-14 aspect-square flex flex-col items-center absolute -bottom-6 end-6 z-10 text-white border border-white bg-blue">
                                            <span>{month}</span>
                                            <span>{day}</span>
                                        </div>
                                    </div>
                                    <figcaption className="flex flex-col gap-2 p-4">
                                        <div className="flex gap-12 text-body">
                                            <div className="flex items-center gap-2">
                                                <FaUserLarge size={14} />
                                                <span>By: Admin</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaComment size={14} />
                                                <span>Comment</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold mt-2">
                                            {title}
                                        </h3>
                                        <p className="text-gray-600 mt-2 text-sm">
                                            Medical standard chunk off nibh velit auctor aliquet sollicitudin.
                                        </p>
                                        <span className="flex items-center gap-1 text-blue-700 text-sm font-semibold mt-4 cursor-wait hover:text-accent">
                                            <span>Read More</span>
                                            <FaAngleRight size={14} />
                                        </span>
                                    </figcaption>
                                </figure>
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    );
}

export default memo(Blogs);
