import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const Button: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <button
            className={
                'mt-7 border-b-2 border-b-teal-500 pb-2 uppercase tracking-wider font-semibold transition-all duration-400 hover:bg-teal-200 pr-3 pt-1 hover:pl-3 group text-base dark:hover:bg-teal-500' +
                ` ${className}`
            }
            {...props}
        >
            <span className="group-hover:-translate-y-3">{children}</span>
        </button>
    );
};

export default Button;
