import { memo, FC } from 'react';
import { Routes } from 'core/routes';
import { Link } from 'react-router-dom';

const Banner: FC<{ page: string, path: string }> = ({ page, path }) => {
    return (
        <div className="absolute w-full h-[30rem] top-0">
            <img
                src={require("../../assets/images/banner.jpg")}
                alt="Beautiful hospital banner"
                className="w-full h-full absolute z-0 object-cover"
            />
            <div className="hidden lg:flex flex-col gap-2 absolute top-[40%] left-[15%] z-10">
                <h1 className="text-5xl font-bold capitalize">{page}</h1>
                <p>
                    <Link to={Routes.Home} className="hover:text-accent">home </Link>
                    <span> / </span>
                    {path.split('/').map((link, index) => {
                        const isLast = index === path.split('/').length - 1;
                        const linkPath = `/${path.split('/').slice(0, index + 1).join('/')}`;
                        return isLast ? (
                            <span key={index} className="text-accent italic font-semibold"> {link} </span>
                        ) : (
                            <Link key={index} to={linkPath} className="hover:text-accent">
                                {link} /
                            </Link>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default memo(Banner);
