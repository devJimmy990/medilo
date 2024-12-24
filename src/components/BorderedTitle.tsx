import { memo, FC } from 'react';
type BorderedTitleType = {
    label: string,
    className?: string,
    borderEnd?: boolean,
    borderStart?: boolean,
}
const BorderedTitle: FC<BorderedTitleType> = ({ label, borderEnd, borderStart, className }) => {
    return (
        <h2 className={`flex items-center text-lg font-heading font-bold uppercase text-accent ${className}`}>
            {
                borderStart && (
                    <div className="hidden md:flex items-center relative">
                        <i className="fa-solid fa-minus rotate-90 absolute -left-1.5"></i>
                        <i className="fa-solid fa-minus fa-2x me-3"></i>
                    </div>
                )
            }
            {label}
            {
                borderEnd && (
                    <div className="hidden md:flex items-center relative">
                        <i className="fa-solid fa-minus fa-2x ms-3"></i>
                        <i className="fa-solid fa-minus rotate-90 absolute -right-1.5"></i>
                    </div>
                )
            }
        </h2 >
    );
}

export default memo(BorderedTitle);
