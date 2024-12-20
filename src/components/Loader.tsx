import React, { useState, useEffect } from 'react';
import { DNA } from 'react-loader-spinner';

const Loader = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [isReversing, setIsReversing] = useState(false);
    const fullText = 'Loading...';

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const updateText = () => {
            if (!isReversing) {
                if (displayedText.length < fullText.length) {
                    setDisplayedText(fullText.slice(0, displayedText.length + 1));
                } else {
                    setIsReversing(true);
                    timeout = setTimeout(updateText, 1000);
                    return;
                }
            } else {
                if (displayedText.length > 1) {
                    setDisplayedText(fullText.slice(0, displayedText.length - 1));
                } else {
                    setIsReversing(false);
                    timeout = setTimeout(updateText, 500);
                    return;
                }
            }
            timeout = setTimeout(updateText, 200);
        };

        timeout = setTimeout(updateText, 200);

        return () => clearTimeout(timeout);
    }, [displayedText, isReversing]);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
            <DNA
                visible={true}
                height="250"
                width="250"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
            <p className="text-white text-4xl tracking-wider italic bg-gradient-to-r from-[#47deef] via-[#c1cbcc] to-red-500 bg-clip-text text-transparent">
                {displayedText}
            </p>
        </div>
    );
};

export default Loader;
