import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Spinner = () => < div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></>

type Props = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    icon?: string;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'secondary-outline';
};

const variants = {
    primary: 'bg-blue text-white hover:bg-blue-2 border-none',
    secondary: 'bg-red text-white hover:bg-red-1 border-none',
    link: 'bg-none text-blue hover:bg-white-azure border-none',
    outline:
        'bg-white text-blue hover:bg-white-azure border-blue disabled:border-grey-beau',
    "secondary-outline":
        'bg-transparent text-red hover:bg-red hover:text-white border-red disabled:border-grey-beau'
};

const sizes = {
    sm: 'p-1 px-10 -w-128',
    md: 'p-2 px-10 -w-152',
    lg: 'p-3 px-10 -w-196'
};


const Button = ({
    loading,
    disabled,
    title,
    className,
    size = 'lg',
    type = 'button',
    variant = 'primary',
    ...rest
}: Props) => {
    return (
        <button
            {...rest}
            type={type}
            disabled={loading || disabled}
            className="bg-[#3B71F7] shadow-md py-4 md:py-6 px-8 md:px-12 rounded-full font-bold text-white">{loading ? <Spinner /> : <>{title}</>}</button>
    )
}

export default Button
