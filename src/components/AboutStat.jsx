import React from 'react';
import {statData} from "../constant/about.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutStat = () => {
    const statContainerRef = React.useRef(null);

    //gsap
    useGSAP(() => {
        gsap.from('.stat', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.stat',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
    }, {scope: statContainerRef})

    return (
        <div ref={statContainerRef}>
            {/*Stat Part container*/}
            <div className={'grid grid-cols-2 md:grid-cols-4 gap-4  place-items-center'}>
                {
                    statData
                        .map((stat) => (
                            <div key={stat.id} className={'stat flex flex-col'}>
                                <h1 className={'text-4xl sm:text-5xl lg:text-6xl font-bold'}>{stat.number}</h1>
                                <>{stat.text}</>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default AboutStat;