import { memo, FC, ReactNode } from 'react';

const Description: FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <p className={`text-body ${className}`}>
            {children}
        </p>
    );
}

export default memo(Description);
