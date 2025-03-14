import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const CTAButton = ( { children, hoverColor, bgColor } ) =>
{
    return (
        <button
            className={ twMerge(
                clsx(
                    // Base styles
                    'py-4 px-6 text-white cursor-pointer rounded-full text-md transition-all duration-300 w-48',
                    // Default background color
                    'bg-[#1c6d5b] hover:bg-[#417468]',
                    // Custom background color (if provided)
                    bgColor && `bg-${ bgColor }`,
                    // Custom hover color (if provided)
                    hoverColor && `hover:bg-${ hoverColor }`
                )
            ) }
        >
            { children }
        </button>
    );
};

export default CTAButton;