"use client";
import React from "react";
import Image from "next/image";

const InfoCard = ( { title, text, imageUrl, images, isSlider } ) => {
    return (
        <div className="flex flex-col gap-8 shadow-2xl rounded-3xl w-1/2 h-150 bg-[#ffffff] border border-gray-300 p-10">
            <div className="flex flex-col gap-8">
                <div className="w-full">
                    <h1 className="text-[#1d6e5b] text-2xl">{ title }</h1>
                    <p className="text-md text-[#8f8f8f]">{ text }</p>
                </div>

                {/* Image Section: Slider or Single Image */ }
                <div className="w-full flex justify-center">
                    { isSlider ? (
                        <div className="relative w-[500px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                            { images.map( ( item, index ) => (
                                <Image
                                    key={ item.id }
                                    src={ item.imgUrl }
                                    alt={ `Slide ${ index }` }
                                    width={ 300 }
                                    height={ 200 }
                                    className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out"
                                />
                            ) ) }
                        </div>
                    ) : (
                        <Image src={ imageUrl } width={ 700 } height={ 700 } alt={ title } />
                    ) }
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
