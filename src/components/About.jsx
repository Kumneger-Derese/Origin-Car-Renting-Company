import React from 'react'
import {whyOrigin} from "../constant/about.js";
import AboutCar from '../assets/car-about.png'
import AboutStat from "./AboutStat.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
    const aboutContainerRef = React.useRef(null);

    //gsap
    useGSAP(() => {
        gsap.from('.about-card,.about-text-1,.about-text-2', {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: aboutContainerRef.current,
                start: 'top bottom',
                end: 'bottom top',
            }
        })
    }, {scope: aboutContainerRef})
    return (
        <div ref={aboutContainerRef} id={'locations'} className={'flex flex-col px-8 gap-y-12'}>
            {/*Text Part Container*/}
            <div className={'about-text-1 flex flex-col gap-y-8 items-center justify-center w-full sm:w-4/5 lg:w-3/5 mx-auto'}>
                <div className={'about-text-1 flex flex-col gap-y-4 text-center'}>
                    <h1 className='text-5xl font-semibold text-center'>Why you choose us</h1>
                    <p>We offer a satisfying services ans option to choose</p>
                </div>


                <p className={'about-text-2 text-xl font-medium text-center leading-8'}>
                    We offer a diverse fleet of cars, competitive rates, and flexible rental
                    options to suit your needs. With easy booking, multiple pick-up locations
                    and dedicated customer support, we ensure a seamless and reliable
                    rental experience every time.
                </p>
            </div>

            {/*Stat Part*/}
            <AboutStat/>

            {/*About Car Container*/}
            <div className={'inline-flex flex-col gap-y-4 sm:flex-row justify-between items-center sm:mx-12'}>
                <div className={'flex flex-col gap-2 relative sm:ml-16 sm:-mr-32 flex-1 w-full sm:flex-2/6' +
                    ' bg-light/90 rounded-xl p-4 backdrop-blur-2xl'}>
                    {
                        whyOrigin.map((data) => (
                            <div key={data.id} className={'about-card'}>
                                <p>{data.text}</p>
                            </div>
                        ))
                    }
                </div>

                <div className={'flex-1 sm:flex-4/6 rounded-2xl '}>
                    <img src={AboutCar} alt={'about-car'}
                         className={'object-cover rounded-2xl flex-1 sm:flex-4/6 h-64 w-full'}/>
                </div>
            </div>

        </div>
    )
}

export default About
