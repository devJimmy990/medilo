// import { Routes } from 'core/routes';
import { memo } from 'react';
// import { FaAnglesLeft } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <img loading='lazy' src={require('../assets/images/not-found.jpg')} alt="not found" className='absolute z-0' />
            {/* <Link replace to={Routes.Home}>
                <button className='flex items-center gap-2 absolute z-10 font-bold italic text-blue hover:bg-accent hover:text-white px-4 py-2 rounded-full top-10 start-[15%]'>
                    <FaAnglesLeft size={16} />
                    <span>Back Home</span>
                </button>
            </Link> */}
        </div>
    );
}

export default memo(NotFound);
