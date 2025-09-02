import React, {useRef} from 'react';
import {faqsData} from "../constant/faq.js";
import {HiChevronDown,HiChevronUp} from "react-icons/hi2";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger,useGSAP);

const Faq = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const containerRef = useRef(null);

    useGSAP(()=> {
        gsap.from('.accordion-item', {
            opacity:0,
            y:20,
            stagger:0.2,
            scrollTrigger:{
                trigger:'.accordion-item',
                start:"top 600",
                end:"bottom 200",
            }
        })
    },{scope: containerRef});

    const toggleAccordion = (index) => {
        if (currentIndex === index) {
            setCurrentIndex(null)
        } else {
            setCurrentIndex(index);

        }
    }
    return (
        <div ref={containerRef} className={'flex flex-col gap-y-8'}>
            <div className={'flex flex-col gap-y-2 items-center justify-center'}>
                <h1 className={'font-bold text-4xl'}>FAQ</h1>
                <p>A quick response for frequently asked questions.</p>
            </div>

            {/*Faq List*/}
            <div className={'flex flex-col gap-y-4 mx-auto w-full sm:w-4/6 px-8 sm:px-0'}>
                {
                    faqsData.map((faq, i) => (
                        <div key={faq.id} className={'accordion-item flex flex-col gap-y-4'}>
                            <h1 onClick={() => toggleAccordion(i)}
                                className={'font-bold flex gap-x-2 items-center bg-base/20 p-2 rounded-xl'}>
                                {currentIndex === i ? <HiChevronUp/> : <HiChevronDown/>}
                                <span>{faq.title}</span>
                            </h1>

                            {
                                currentIndex === i && (

                                    <p className={'p-4'}>{faq.content}</p>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Faq;