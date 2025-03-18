"use client";
import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import { BankCardImages } from "../../utils/BankCard";
import SearchBar from "./SearchBar";

const TransactionTracker = () => {
    const [ currentIndex, setCurrentIndex ] = useState( 0 );

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentIndex( ( prevIndex ) => ( prevIndex + 1 ) % BankCardImages.length );
        }, 2000 );
        return () => clearInterval( interval );
    }, [] );

    return (
        <div className="w-full h-max flex flex-col justify-center items-center gap-12 py-12">
            {/* Main Section */ }
            <div className="flex shadow-2xl rounded-3xl w-[80%] h-120 bg-[#ffffff] border border-gray-300 p-10">
                {/* <div className="w-3/4 flex">
                    <div className="flex flex-col gap-2 w-1/2">
                        <h1 className="text-[#1d6e5b] text-2xl">
                            Effortlessly track every transaction
                        </h1>
                        <p className="text-md text-[#8f8f8f]">
                            Mojek effortlessly organizes your transactions, so you stay in control without the hassle.
                        </p>
                    </div>
                </div>
                <div className="w-1/3">
                    <h1>Images</h1>
                </div> */}

            </div>

            {/* Two-Column Layout */ }
            <div className="w-[80%] flex gap-12">
                {/* Left: Image Slider */ }
                <InfoCard
                    title="Stay on top of your credit cards"
                    text="Stay on top of transactions, balances, and due dates—all in one place, never miss a bill."
                    images={ BankCardImages }
                    isSlider={ true }
                />

                {/* Right: Static Image */ }
                <InfoCard
                    title="Hit your financial goals with ease"
                    text="Mojek’s smart approach to spending and saving makes achieving your financial goals simple."
                    imageUrl="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b233aa18f04d711272b78a_Budget%20(1)-p-1600.webp"
                />
            </div>

            {/* search bar  */ }
            <SearchBar />
            {/* Another Two-Column Layout */ }
            <div className="w-[80%] flex gap-12">
                <InfoCard
                    title="Track your net worth at a glance"
                    text="See your assets and liabilities grow over time with Mojek’s simple tracking tools."
                    imageUrl="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b235b54089ed5396410dac_Networth%20(1)-p-1600.webp"
                />

                <InfoCard
                    title="Monitor your portfolio performance"
                    text="Keep track of your investments and see your money grow—all in one clear view."
                    imageUrl="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b236a07a3d59607619f4f6_Investments%20Breakdown-p-1600.webp"
                />
            </div>
        </div>
    );
};

export default TransactionTracker;
