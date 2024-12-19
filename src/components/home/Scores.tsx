import { memo, FC, ReactNode } from 'react';
import { FaUserGroup, FaHeadset, FaChartLine, FaAward } from "react-icons/fa6";

type ScoreModel = {
    title: string,
    score: string,
    icon: ReactNode

}
const records: ScoreModel[] = [
    { title: "Active Client", score: "567", icon: <FaUserGroup /> },
    { title: "Team Support", score: "23K", icon: <FaHeadset /> },
    { title: "Projects Complete", score: "241", icon: <FaChartLine /> },
    { title: "Award Winner", score: "16K", icon: <FaAward /> },
]
const Scores: FC = () => {
    return (
        <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 rounded-lg bg-blue px-6 py-8 my-10">
            {
                records.map((item, index) => (
                    <div className="flex flex-col justify-center items-center gap-1 text-white">
                        <div className={`w-12 h-12 flex justify-center items-center rounded-full bg-white text-accent ${index % 2 === 0 ? 'bg-blue' : 'bg-green'}`}>
                            {item.icon}
                        </div>
                        <h4 className="text-2xl">{item.score}+</h4>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </section>
    );
}

export default memo(Scores);
