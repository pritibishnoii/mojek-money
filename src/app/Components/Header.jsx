import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import CTAButton from './CTAButton';

const Header = () =>
{
    return (
        <div className='w-full flex flex-col items-center justify-center h-max  fixed '>
            {/* Top Section */ }
            <div className='mt-28  w-full flex items-center justify-center  '>
                <div className='bg-white rounded-full w-[22%] h-max py-2 px-4 shadow-2xl flex gap-2 items-center'>
                    <span>⚡</span>
                    <span className='text-sm text-black'>New features out now!</span>
                    <a className='text-[#9c9b9d] pl-2 text-sm cursor-pointer'>Check it out</a>
                    <GoArrowRight className='text-gray-500 cursor-pointer' />
                </div>
            </div>

            {/* Main Heading and Paragraph */ }
            <div className='w-2/3  h-68 flex flex-col items-center justify-center text-center '>
                <h1 className='text-7xl text-[#1f705d] font-semibold  leading-[1.2]'>
                    Save <span className='text-[#64f07c]'>Thousands</span> Every Single Month.
                </h1>
                <p className='text-[#9c9b9d] text-lg mt-4 w-3/4'>
                    Track smarter, spend better, and save thousands every month with Mojek’s personalized
                    financial insights.
                </p>
            </div>

            {/* CTA Button */ }
            <div className='mt-8'>
                <CTAButton>Get Started</CTAButton>
            </div>
        </div>
    );
};

export default Header;