import { memo, FC } from 'react';

const SubTitle: FC<{ label: string, className?: string }> = ({ label, className }) => {
    return (
        <h4 className={`text-2xl lg:text-3xl font-bold capitalize ${className}`}>
            {label}
        </h4>
    );
}

export default memo(SubTitle);
