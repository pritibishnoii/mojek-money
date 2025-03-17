"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin( ScrollTrigger );

const CardContainer = ( { imagesArr } ) => {
    const imagesRef = useRef( [] );

    useEffect( () => {
        gsap.fromTo(
            imagesRef.current,
            { opacity: 0, y: 100 }, // Initial position (hidden below)
            {
                opacity: 1,
                y: 0, // Move to normal position
                duration: 1.2,
                stagger: 0.3, // Delayed animation for each image
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".card-container",
                    // start: "top 80%", // Start animation when 80% of the page is scrolled
                    scroller: "body", // Uses full page scroll
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [] );

    return (
        <div className="flex flex-wrap justify-center items-start gap-12 w-full">
            { imagesArr.map( ( src, index ) => (
                <div key={ index } ref={ ( el ) => ( imagesRef.current[ index ] = el ) } className="relative">
                    <Image
                        src={ src }
                        width={ 350 }
                        height={ 350 }
                        alt={ `card-img-${ index }` }
                        className="rounded-lg shadow-lg"
                    />
                </div>
            ) ) }
        </div>
    );
};

export default CardContainer;
