import React, {useMemo, useRef, useState} from 'react';
import StarRating from "./StarRating.jsx";
import {testimonials} from "../constant/testimonials.js";
import TestimonialCard from "./TestimonialCard.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Testimonials = () => {
    const containerRef = useRef(null);
    const ITEMS_PER_SLIDE = 2

    // gsap
    useGSAP(() => {
        gsap.from('.testimonial-item', {
            opacity: 0,
            y: 20,
            duration: 0.4,
            scrollTrigger:{
                trigger:'.testimonial-item',
                start:'top bottom',
                end:'bottom top'
            }
        })
    }, {scope:containerRef})

    // Group testimonials into slides of 2
    const slides = useMemo(() => {
        const out = []

        for (let i = 0; i < testimonials.length; i += ITEMS_PER_SLIDE) {
            const slice = testimonials.slice(i, i + ITEMS_PER_SLIDE);

            // pad with null so we always render 2 cells (keeps layout stable for odd count)
            while (slice.length < ITEMS_PER_SLIDE) {
                slice.push(null);
            }

            out.push(slice);
        }

        return out;
    }, [])

    //

    const [index, setIndex] = useState(0);
    const total = slides.length

    const prev = () => setIndex((i) => (i - 1 + total) % total); // wrap
    const next = () => setIndex((i) => (i + 1) % total);         // wrap
    const goTo = (i) => setIndex(i);


    return (
        <div ref={containerRef} className={'flex flex-col gap-y-12'}>
            <div className={'flex flex-col items-center justify-center gap-y-4'}>
                <h1 className={'font-bold text-4xl'}>Testimonials</h1>
                <p>What our customers says about our services</p>
            </div>

            {/*Testimonials list Container*/}
            <div className="mx-auto px-4 md:px-8">
                {/* Cards */}
                <div
                    key={index}
                    className=" testimonial-item grid grid-cols-1 gap-6 md:grid-cols-2 transition-all duration-300"
                >
                    {slides[index].map((t, i) => (
                        <TestimonialCard key={t?.id ?? `ghost-${i}`} t={t}/>
                    ))}
                </div>

                {/* Controls */}
                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        aria-label="Previous testimonials"
                        className={`inline-flex size-9 items-center justify-center rounded-full bg-white ring-1
                        ring-black/10 shadow-sm hover:bg-gray-50 active:scale-95`}
                    >
                        ←
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all ${
                                    index === i ? "w-8 bg-black/80" : "w-4 bg-black/20 hover:bg-black/30"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        aria-label="Next testimonials"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow-sm hover:bg-gray-50 active:scale-95"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

