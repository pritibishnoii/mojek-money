"use client"
import React from 'react';
import { IMAGES } from '../../utils/Data';
import Image from 'next/image';

const StickyBg = () => {
    return (
        <div className='relative w-full h-[98vh] flex '>


            <div className="h-[98vh]   w-[90%] flex  mx-auto justify-between px-10 py-5">
                {/* Left Side Images */ }
                <div className="flex flex-col gap-4 h-full  justify-evenly">
                    <Image
                        src={ IMAGES[ 0 ].url }
                        width={ 200 }
                        height={ 200 }
                        alt={ IMAGES[ 0 ].id }
                        className="rounded-lg shadow-lg"
                    />
                    <Image
                        src={ IMAGES[ 1 ].url }
                        width={ 200 }
                        height={ 200 }
                        alt={ IMAGES[ 1 ].id }
                        className="rounded-lg shadow-lg"
                    />
                </div>



                {/* Right Side Images */ }
                <div className="flex flex-col gap-4 h-full justify-around  ">
                    <Image
                        src={ IMAGES[ 2 ].url }
                        width={ 200 }
                        height={ 200 }
                        alt={ IMAGES[ 2 ].id }
                        className="rounded-lg shadow-lg"
                    />
                    <Image
                        src={ IMAGES[ 3 ].url }
                        width={ 200 }
                        height={ 200 }
                        alt={ IMAGES[ 3 ].id }
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            {/* center image  */ }
            <div className='flex  flex-col justify-center w-full items-center  absolute  top-5'>
                <Image
                    src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/6744ddc9f1d85f52e0af69b9_Mojek-Hand-Holding-Phone_New.avif"
                    width={ 500 }
                    height={ 500 }
                    alt="mobile"
                    className=''
                />
            </div>
        </div>
    );
};

export default StickyBg;
