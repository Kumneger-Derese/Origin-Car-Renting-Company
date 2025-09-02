import React from 'react';
import {processData} from "../constant/process.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HowItWorks = () => {
    const processContainerRef = React.useRef(null);

    //gsap
    useGSAP(() => {
        gsap.from('.process-card', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.process-card',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
    }, {scope: processContainerRef})


    return (
        <div ref={processContainerRef} className={'flex flex-col gap-y-16 px-8'}>
            <div className={'flex flex-col gap-2 items-center justify-center'}>
                <h1 className={'text-4xl font-bold'}>How It Works</h1>
                <p className={'text-center'}>An easy to understand and quick booking process.</p>
            </div>

            {/*Process List*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 place-items-center'}>
                {
                    processData.map((process) => (
                        <div key={process.id}
                             className={'process-card flex flex-col items-center justify-center sm:items-start sm:justify-start gap-4'}>
                            <h1 className={'text-5xl text-primary/50 font-bold'}>0{process.step}</h1>
                            <h3 className={'font-semibold text-xl'}>{process.title}</h3>
                            <h3 className={'text-sm text-center sm:text-left'}>{process.description}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;