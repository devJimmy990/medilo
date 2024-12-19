import { FC, memo } from 'react';

const Scores: FC = () => {
    return (
        <section className="container mx-auto grid grid-cols-2 lg:grid-cols-4 text-blue">
            <article
                className="flex flex-col justify-center items-center gap-2 border-[1.5px] border-gray p-12 text-center">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue text-white">
                    <i className="fas fa-user-group fa-lg"></i>
                </div>
                <h4 className="text-2xl font-bold">567+</h4>
                <p className="font-bold">Active Clients</p>
            </article>

            <article
                className="flex flex-col justify-center items-center gap-2 border-[1.5px] border-gray p-12 text-center">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue text-white">
                    <i className="fas fa-headset fa-lg"></i>
                </div>
                <h4 className="text-2xl font-bold">23K+</h4>
                <p className="font-bold">Team Support</p>
            </article>

            <article
                className="flex flex-col justify-center items-center gap-2 border-[1.5px] border-gray p-12 text-center">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue text-white">
                    <i className="fas fa-chart-line fa-lg"></i>
                </div>
                <h4 className="text-2xl font-bold">241+</h4>
                <p className="font-bold">Projects Completed</p>
            </article>

            <article
                className="flex flex-col justify-center items-center gap-2 border-[1.5px] border-gray p-12 text-center">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-blue text-white">
                    <i className="fas fa-award fa-lg text-white"></i>
                </div>
                <h4 className="text-2xl font-bold">16K+</h4>
                <p className="font-bold">Award Winners</p>
            </article>
        </section>
    );
}

export default memo(Scores);
