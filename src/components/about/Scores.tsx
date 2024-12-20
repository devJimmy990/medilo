import { FC, memo, ReactNode } from 'react';
import { FaUserGroup, FaHeadset, FaChartLine, FaAward } from "react-icons/fa6";

type ScoreModel = {
    title: string,
    score: string,
    icon: ReactNode

}
const records: ScoreModel[] = [
    { title: "Active Client", score: "567", icon: <FaUserGroup size={24} /> },
    { title: "Team Support", score: "23K", icon: <FaHeadset size={24} /> },
    { title: "Projects Complete", score: "241", icon: <FaChartLine size={24} /> },
    { title: "Award Winner", score: "16K", icon: <FaAward size={24} /> },
]
const Scores: FC = () => {
    return (
        <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 text-blue bg-white">
            {
                records.map(({ score, title, icon }) => (
                    <article key={title}
                        className="flex flex-col justify-center items-center gap-2 border-[1.5px] border-gray p-12 text-center">
                        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue text-white">
                            {icon}
                        </div>
                        <h4 className="text-2xl font-bold">{score}+</h4>
                        <p className="font-bold">{title}</p>
                    </article>
                ))
            }
        </section>
    );
}

export default memo(Scores);
