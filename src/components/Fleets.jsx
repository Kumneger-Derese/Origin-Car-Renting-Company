import React from 'react';
import {carCategory, fleets} from "../constant/fleets.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Fleets = () => {
    const [category, setCategory] = React.useState('luxury');
    const containerRef = React.useRef(null);

    //gsap
    useGSAP(() => {
        gsap.from('.car-card,.cat-card', {
            y: 20,
            opacity: 0,
            stagger: 0.09,
            scrollTrigger: {
                trigger: '.cat-card',
                start: 'top bottom',
                end: 'bottom top',

            }
        })
    }, {scope: containerRef})


    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    }
    const categories = fleets.filter(fleet => fleet.category === category);


    return (
        <div ref={containerRef} id={'fleets'} className={'flex flex-col gap-y-12 px-8 sm:px-16'}>
            <div className={'flex flex-col gap-y-2 items-center justify-center'}>
                <h1 className={'font-bold text-4xl'}>Our Fleet</h1>
                <p className={'text-primary/80'}>Explore cars from collection of our fleet</p>
            </div>

            {/*Car List Container*/}
            <div className={'flex flex-col gap-y-8 items-center'}>
                {/*Category list*/}
                <div className={'grid grid-cols-3 sm:grid-cols-6 gap-4 mx-auto'}>
                    {
                        carCategory.map((item, index) => (
                            <button key={index}
                                    onClick={() => handleCategoryChange(item)}
                                    className={`cat-card px-4 py-1.5 max-sm:text-sm  rounded-xl bg-gray-300 capitalize
                                    ${item === category && 'bg-primary text-light'}`}>
                                {item}
                            </button>
                        ))
                    }
                </div>

                {/* Car list based on category*/}
                <div className={'grid grid-cols-1 lg:mx-20 gap-4 sm:grid-cols-2 lg:grid-cols-3 place-items-center' +
                    'mx-auto'}>
                    {
                        categories.map((fleet) => (
                            <div key={fleet.id} className={'car-card overflow-hidden rounded-xl relative w-full max-sm:size-64  sm:w-80 sm:h-64 lg:size-64 bg-light'}>
                                <img src={fleet.image} alt={fleet.model}
                                     className={'absolute bottom-4 object-bottom right-4 left-4 rounded-xl'}
                                />

                                <div className={'flex flex-col justify-between p-4'}>
                                    <h2 className={'font-bold text-xl'}>{fleet.model}</h2>
                                    <p>${fleet.pricePerDay} <span className={'text-sm'}>per day</span></p>
                                </div>
                                <div></div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Fleets;