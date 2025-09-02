import React, {useRef} from 'react';
import {HiArrowRight} from "react-icons/hi2";
import SpecialCar from '../assets/special-car.png';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SpecialDeal = () => {
    const specialContainer = useRef(null);

    useGSAP(() => {
        gsap.from(['.deal-1,.deal-2,.deal-3,.deal-4'], {
            y: 20,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.deal',
                start: 'top bottom',
                end: 'bottom top'
            }
        })
    }, {scope: specialContainer})
    return (
        <div ref={specialContainer} className={'p-8 relative bg-light overflow-hidden'}>
            <div className={'deal flex flex-col justify-between gap-y-32 sm:gap-y-16 w-full sm:w-2/3 z-20'}>
                {/*Special car*/}
                <div className={'flex flex-col gap-8 sm:gap-y-6'}>
                    <button className={' deal-1 text-lg w-fit font-semibold bg-gold-bg px-4 py-2 rounded-xl'}>
                        Special Deal
                    </button>

                    <h1 className={' deal-2 font-bold text-5xl leading-14'}>
                        1927 Chrysler Imperial <br/>
                        Series E-80
                    </h1>

                    <p className={' deal-3 w-full sm:w-3/4 lg:w-2/5'}>
                        Limited-time opportunity to rent and <br/>
                        experience a vintage vehicle from the past.
                    </p>
                </div>

                {/*Special Price*/}
                <div className={'deal-4 flex flex-col gap-y-3'}>
                    <div className={'flex items-end gap-x-1'}>
                        <h1 className={'font-bold text-3xl'}>$100</h1>
                        <span className={'text-sm'}>per hour</span>
                    </div>

                    <button
                        className={'uppercase w-fit bg-primary px-4 py-2 text-light font-semibold rounded-xl flex items-center gap-x-4'}>
                        <h2>Book it Now</h2>
                        <HiArrowRight/>
                    </button>
                </div>
            </div>

            {/*bg image*/}
            <img src={SpecialCar} alt="car"
                 className={'absolute right-0 sm:top-0 top-44 max-sm:-right-32'}
            />
        </div>
    );
};

export default SpecialDeal;