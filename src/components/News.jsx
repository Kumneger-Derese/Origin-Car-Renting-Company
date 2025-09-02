import React, {useRef} from 'react';
import {newsData} from "../constant/news.js";
import {HiArrowRight} from "react-icons/hi2";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const News = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.news-card', {
            opacity: 0,
            y: 20,
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.news-card',
                start: "top 600",
                end: "bottom 200",
            }
        })
    }, {scope: containerRef});

    return (
        <div id={'news'} ref={containerRef} className={'flex flex-col gap-y-12 px-8'}>
            <div className={'flex flex-col gap-y-2 items-center justify-center'}>
                <h1 className={'font-bold text-4xl'}>Recent News</h1>
                <p>Latest news and updates about our services.</p>
            </div>

            {/**/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4'}>
                {
                    newsData.map((news) => {
                        return (
                            <div key={news.id} className={'news-card flex flex-col gap-y-2 bg-light/80 rounded-xl'}>
                                <img src={news.image} alt={news.headline}
                                     className={'rounded-t-xl h-32 object-cover'}
                                />

                                <div className={'p-4 flex flex-col gap-y-2 '}>
                                    <h2 className={'text-lg font-semibold'}>{news.headline}</h2>
                                    <p>{news.date}</p>

                                    <button className={'flex mt-4 items-center gap-x-4 font-semibold'}>
                                        Read News <HiArrowRight/>
                                    </button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default News;