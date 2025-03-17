"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BankCardImages } from '../../utils/BankCard'

const TransactionTracker = () => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentIndex( ( prevIndex ) => ( prevIndex + 1 ) % BankCardImages.length );
        }, 2000 ); // Change image every 2 seconds
        return () => clearInterval( interval );
    }, [] );


    return (
        <div className="w-full h-max flex flex-col justify-center items-center gap-12 py-12">
            {/* Main Container */ }
            <div className="flex shadow-2xl rounded-3xl w-[80%] h-120 bg-[#ffffff] border border-gray-300 p-10">
                <div className="w-3/4 flex">
                    {/* Left Side */ }
                    <div className="flex flex-col gap-2 w-1/2">
                        <h1 className="text-[#1d6e5b] text-2xl">
                            Effortlessly track every transaction
                        </h1>
                        <p className="text-md text-[#8f8f8f]" >
                            Mojek effortlessly organizes your transactions, so you stay in
                            control without the hassle.
                        </p>
                    </div>
                </div>
                {/* Right Side - Image Placeholder */ }
                <div className="w-1/3">
                    <h1>Images</h1>
                </div>
            </div>

            {/* Two-Column Section */ }
            <div className="w-[80%] flex gap-12">
                {/* Left Box with Image Slider */ }
                <div className="flex flex-col gap-8 shadow-2xl rounded-3xl w-1/2 h-150 bg-[#ffffff] border border-gray-300 p-10">
                    <div className="flex flex-col gap-8">
                        <div className="w-full">
                            <h1 className="text-[#1d6e5b] text-2xl">
                                Stay on top of your credit cards
                            </h1>
                            <p className="text-md text-[#8f8f8f]">
                                Stay on top of transactions, balances, and due dates—all in one place, never miss a bill.
                            </p>
                        </div>
                        <div className="w-full h-max flex flex-col justify-center items-center gap-12 py-12">
                            {/* Image Slider */ }
                            <div className="relative w-[500px] h-[300px] overflow-hidden  rounded-lg shadow-lg">
                                { BankCardImages.map( ( item, index ) => (
                                    <Image
                                        key={ item.id }
                                        src={ item.imgUrl }
                                        alt={ item.id }
                                        width={ 300 }
                                        height={ 200 }
                                        className={ `absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out
                            ${ index === currentIndex ? "translate-x-0 opacity-100" : "translate-x-full opacity-0" }` }
                                    />
                                ) ) }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Box */ }
                <div className="flex flex-col gap-2 shadow-2xl rounded-3xl w-1/2 h-150 bg-[#ffffff] border border-gray-300 p-10">
                    <div className="w-full">
                        <h1 className="text-[#1d6e5b] text-2xl">
                            Hit your financial goals with ease
                        </h1>
                        <p className="text-md text-[#8f8f8f]">
                            Mojek’s smart approach to spending and saving makes achieving your financial goals simple.
                        </p>
                    </div>
                    <div className="w-full">
                        <Image
                            src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b233aa18f04d711272b78a_Budget%20(1)-p-1600.webp"
                            width={ 700 }
                            height={ 700 }
                            alt="Transaction Tracking"
                        />
                    </div>
                </div>
            </div>




            <div className="w-[80%] flex gap-12">
                {/* Left Box */ }
                <div className="flex flex-col gap-8 shadow-2xl rounded-3xl w-1/2 h-150 bg-[#ffffff] border border-gray-300 p-10">
                    <div className="flex flex-col gap-8">
                        <div className="w-full">
                            <h1 className="text-[#1d6e5b] text-2xl">
                                Track your net worth at a glance
                            </h1>
                            <p className="text-md text-[#8f8f8f]">
                                See your assets and liabilities grow over time with Mojek’s simple tracking tools. Stay on top of transactions, balances, and due dates—all in one place, never miss a bill.
                            </p>
                        </div>
                        <div className="w-full">
                            <Image
                                src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b235b54089ed5396410dac_Networth%20(1)-p-1600.webp"
                                width={ 700 }
                                height={ 700 }
                                alt="Transaction Tracking"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Box */ }
                <div className="flex flex-col gap-2 shadow-2xl rounded-3xl w-1/2 h-150 bg-[#ffffff] border border-gray-300 p-10">
                    <div className="w-full">
                        <h1 className="text-[#1d6e5b] text-2xl">
                            Monitor your portfolio performance
                        </h1>
                        <p className="text-md text-[#8f8f8f]">
                            Keep track of your investments and see your money grow—all in one clear view.
                        </p>
                    </div>
                    <div className="w-full">
                        <Image
                            src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b236a07a3d59607619f4f6_Investments%20Breakdown-p-1600.webp"
                            width={ 700 }
                            height={ 700 }
                            alt="Transaction Tracking"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionTracker;
