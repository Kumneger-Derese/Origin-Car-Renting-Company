import Navbar from './Navbar.jsx'
import RideForm from './RideForm.jsx'
import HeroImage from '../assets/Hero-bg2.jpeg'
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

const Hero = () => {
    const textRef = useRef(null)

    useGSAP(() => {
            if (textRef.current) {
                const split = new SplitText(textRef.current, {type: 'words'})

                gsap.from(split.words, {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                    duration: 1.5,
                    ease: 'power3.out',
                });
            }


    }, {scope: textRef})

    return (
        <div
            id="home"
            className={
                'flex flex-col justify-between py-4 px-8 relative max-sm:min-h-screen lg:min-h-screen'
            }
        >
            <Navbar/>

            {/*Hero text*/}
            <h1 ref={textRef}
                className={'font-bold font-primary text-primary text-5xl my-16 lg:my-0 min-lg:-mt-16 text-center z-20'}>
                Experience Luxury rides <br className={'hidden sm:block'}/>
                at exclusive deals.
            </h1>

            <div className='sm:px-4 z-20'>
                <RideForm/>
            </div>

            <img src={HeroImage} alt="hero" className="absolute object-cover inset-0 size-full"/>
        </div>
    )
}

export default Hero
