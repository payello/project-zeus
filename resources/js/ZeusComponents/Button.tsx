import { ButtonHTMLAttributes } from 'react';

export default function Button({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    console.log({ className, disabled, children, props });
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-full border border-transparent px-8 py-4 text-sm font-semibold tracking-widest text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
