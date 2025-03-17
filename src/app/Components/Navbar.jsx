'use client'

import React, { useState } from 'react'
import { Noto_Sans } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CTAButton from './CTAButton';

// Load the Noto Sans font at the module scope
const notoSans = Noto_Sans( {
    subsets: [ 'latin' ], // Specify subsets
    weight: [ '400', '700' ], // Specify weights
    style: [ 'italic', 'normal' ], // Specify styles
} );

const Navbar = () => {
    const [ isHovered, setIsHovered ] = useState( false )

    return (
        // className = { notoSans.className }
        <div className={ twMerge( clsx( "flex justify-center items-center w-full h-28  ",
            notoSans.className ) ) }>
            <nav className={ twMerge( clsx( "bg-white  rounded-full shadow-2xl w-[95%]  py-4 mt-4 h-16    transition-all duration-300 ease-in-out fixed top-0 z-10",
                isHovered ? "h-max rounded-4xl" : "h-20"
            ) ) }>
                <div className='flex  w-full h-full items-center  text-sm text-gray-900  '>
                    {/* left menu 🚀 */ }
                    <ul className='w-1/4 flex gap-6   items-center px-8 '>

                        <li className='hover:text-green-600 cursor-pointer transition-all delay-100'>Integrations</li>
                        <ul className='flex items-center gap-1 group cursor-pointer'>
                            <li className={ "hover:text-green-600  transition-all delay-100" }
                                onMouseEnter={ () => setIsHovered( true ) }
                                onMouseLeave={ () => setIsHovered( false ) }
                            >Resources </li>
                            {/* <FaChevronDown className='block  group-hover:hidden' />  <FaChevronUp className='hidden group-hover:block text-green-600' /> */ }
                            {/* another way  */ }
                            { isHovered ? <FaChevronUp className='text-green-600' /> : <FaChevronDown className='' /> }
                        </ul>

                    </ul>


                    {/* image logo 🚀 */ }
                    <div className='w-1/2 flex justify-center cursor-pointer'>
                        <Image src={ 'https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66aca8da3bf8ea683c979050_mojek-logo-individual.svg' }
                            width={ 40 }
                            height={ 40 }
                            alt='img'
                        />
                        <Image src={ 'https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb170a93892f5436dd062_mojek-logo-nav.svg' }
                            width={ 120 }
                            height={ 120 }
                            alt='img'
                        />

                    </div>

                    {/* right menu 🚀 */ }
                    <ul className='w-1/4 flex justify-evenly items-center'>

                        <li className='hover:text-green-600 cursor-pointer transition-all delay-100'>Help</li>
                        <li className='hover:text-green-600 cursor-pointer transition-all delay-100'>Contact</li>
                        <li className=''>
                            <CTAButton >Download Now</CTAButton>
                        </li>

                    </ul>
                </div>

                {
                    isHovered &&
                    <div className='flex px-8 pt-8  overflow-hidden   transition-all duration-300'>
                        <ul className='flex gap-6'>
                            <li className='cursor-pointer'>
                                <Image
                                    src={ 'https://cdn.prod.website-files.com/66a7527e649360728394a4ba/675734966e931bf8956fe019_Blog-dropdown.avif' }
                                    width={ 200 }
                                    height={ 200 }
                                    alt='sub-menu-img'
                                    className='border border-gray-300 rounded-lg'

                                />
                                <a className='text-sm text-gray-900 hover:text-green-600 '>blogs</a>
                            </li>
                            <li className='cursor-pointer'>
                                <Image
                                    src={ 'https://cdn.prod.website-files.com/66a7527e649360728394a4ba/675735940ae3e2a2d69be69f_Calculators-Dropdown.avif' }
                                    width={ 200 }
                                    height={ 200 }
                                    alt='sub-menu-img'
                                    className='border border-gray-300 rounded-lg'

                                />
                                <a className='text-sm text-gray-900 hover:text-green-600 '>calculator</a>
                            </li>
                            <li className='cursor-pointer'>
                                <Image
                                    src={ 'https://cdn.prod.website-files.com/66a7527e649360728394a4ba/675735a2909da0d28a6044ed_Glossary-Dropdown.avif' }
                                    width={ 200 }
                                    height={ 200 }
                                    alt='sub-menu-img'
                                    className='border border-gray-300 rounded-lg'

                                />
                                <a className='text-sm text-gray-900 hover:text-green-600 '>glossary</a>
                            </li>
                        </ul>
                    </div>

                }



            </nav>
        </div >
    )
}

export default Navbar