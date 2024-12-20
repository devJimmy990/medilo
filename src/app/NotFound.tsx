import { memo } from 'react';

const NotFound = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <img src={require('../assets/images/not-found.jpg')} alt="not found" />
        </div>
    );
}

export default memo(NotFound);
