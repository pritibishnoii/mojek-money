import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import CTAButton from './CTAButton';
import Heading from './Headings';




const Header = () => {


    return (
        <div className={ `w-full flex flex-col items-center  h-[500px]  ` }>
            {/* Top Section */ }
            <div className='mt-18 w-full  h-max flex items-center justify-center '>
                <div className='bg-white rounded-full w-[22%] h-full py-2 px-4 shadow-2xl flex gap-2 items-center'>
                    <span>⚡</span>
                    <span className='text-sm text-black'>New features out now!</span>
                    <a className='text-[#9c9b9d] pl-2 text-sm cursor-pointer'>Check it out</a>
                    <GoArrowRight className='text-gray-500 cursor-pointer' />
                </div>
            </div>

            {/* Main Heading and Paragraph */ }

            <Heading
                titleParts={ [
                    { text: "Save", color: "#1e6f5c", className: "" },
                    { text: "Thousands", color: "#64f07a", className: "" },
                    { text: "Every Single Month.", color: "#1e6f5c", className: "" }
                ] }
                description="Track smarter, spend better, and save thousands every month with Mojek’s personalized financial insights."
            />

            {/* CTA Button */ }
            <div className='mt-8'>
                <CTAButton>Get Started</CTAButton>
            </div>
        </div>
    );
};

export default Header;