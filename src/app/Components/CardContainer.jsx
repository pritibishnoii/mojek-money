"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "./Headings";
import Cards from "./Cards";

gsap.registerPlugin( ScrollTrigger );

const CardContainer = () => {
    const headingRef = useRef( null );

    useEffect( () => {
        if ( !headingRef.current ) return;

        const headingElement = headingRef.current;
        const spans = headingElement.querySelectorAll( ".mojk-heading span" ); // Select only this component

        gsap.fromTo(
            spans,
            { color: "#cfcfcf" }, // Initial gray color
            {
                color: ( index, target ) => target.dataset.originalColor, // Animate to original color
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.2, // Each word animates slightly delayed
                scrollTrigger: {
                    trigger: headingElement,
                    // start: "top 85%",
                    scroller: "body",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, [] );

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center gap-12 py-16 card-container mt-20">
            {/* First Cards Section */ }
            <Cards
                imagesArr={ [
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef727_CC.svg",
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b7b5f7ae40a0a4efb77a2f_Brokers_WhiteBackground-p-500.webp",
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef6c7_Monthly%20Snapshot.svg",
                ] }
            />

            {/* Heading Section (Only this heading will animate) */ }
            <div className="w-full flex justify-center py-8">
                <Heading
                    ref={ headingRef }
                    titleParts={ [
                        { text: "Mojek", color: "#1e6f5c", className: "" },
                        { text: "securely connects ", color: "#64f07a" },
                        { text: "to your accounts to give a clear picture of your finances and help you lead a", color: "#1e6f5c", className: "" },
                        { text: "healthier financial life", color: "#64f07a" }
                    ] }
                    description="Mojek connects to your accounts through the Government regulated Account Aggregator Framework. OTP is required to connect bank accounts, see the list of integrations."
                />
            </div>

            {/* Second Cards Section */ }
            <Cards
                imagesArr={ [
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef75a_spends.svg",
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a54750ea29796ef77e_Recurring%20payments.svg",
                    "https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef76c_Budget%20Tracker%20Final.svg"
                ] }
            />
        </div>
    );
};

export default CardContainer;
