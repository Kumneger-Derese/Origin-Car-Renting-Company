import React from 'react';
import {carType} from "../constant/carType.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CarType = () => {
    const typeContainerRef = React.useRef(null);

    //gsap
    useGSAP(() => {
        gsap.from('.type-card', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.type-card',
                start: 'top bottom',
                end: 'bottom top',
            }
        })
    }, {scope: typeContainerRef})

    return (
        <div ref={typeContainerRef} id={'services'} className={'px-8 py-10 bg-primary grid gap-8 grid-cols-2 lg:grid-cols-4 place-items-center text-light'}>
            {
                carType.map((car) => (
                    <div key={car.id} className={'type-card'}>
                        <h1 className={'text-2xl sm:text-3xl font-semibold'}>{car.type}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default CarType;