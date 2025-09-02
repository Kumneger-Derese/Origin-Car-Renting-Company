import { useState } from 'react';
import { navLinks } from '../constant/navLinks.js';
import { CgMenu } from 'react-icons/cg';
import { HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navIndex, setNavIndex] = useState(0);

    const smoothScroll = href => {
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); // This already closes the menu
    };

    const handleNavHighlight = index => {
        if (navIndex !== index) {
            setNavIndex(index);
        }
    };

    return (
        // The outer div now needs a wrapper or to be a Fragment <> to avoid layout issues with the fixed menu
        <>
            <div
                className={
                    'flex items-center justify-between bg-light backdrop-blur-lg rounded-xl py-4 px-4 lg:py-2 z-50'
                }
            >
                {/*Logo*/}
                <div>
                    <h1 className={'font-black text-2xl'}>Origin</h1>
                </div>

                {/*Desktop menu list*/}
                <ul className={'hidden lg:flex items-center gap-x-6'}>
                    {navLinks.map((link, index) => (
                        <li
                            key={link.id}
                            className={`cursor-pointer hover:text-gold rounded-xl ${
                                index === navIndex && 'bg-gray-200/50 px-4 py-1.5 '
                            }`}
                            onClick={() => {
                                smoothScroll(link.href);
                                handleNavHighlight(index);
                            }}
                        >
                            {link.title}
                        </li>
                    ))}
                </ul>

                {/*Desktop Buttons*/}
                <div className={'hidden lg:flex items-center gap-x-2'}>
                    <button className={'px-4 py-1.5 text-base rounded-xl hover:text-gold '}>
                        Sign-in
                    </button>
                    <button
                        className={`px-4 py-1.5 text-light bg-primary rounded-xl border 
                        border-transparent hover:border hover:border-primary hover:bg-light
                        hover:text-primary duration-300 transition-colors
                        `}
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className={'lg:hidden'}>
                    <CgMenu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
                </div>
            </div>

            {/* Mobile Menu list*/}
            <div
                className={`lg:hidden fixed top-0 right-0 z-[100] w-2/3 max-w-sm h-full bg-primary p-4 
                flex flex-col transform transition-transform duration-300 ease-in-out ${ // Added flex flex-col here
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button: self-end pushes it to the right */}
                <button
                    className="my-8 text-light self-end cursor-pointer hover:text-red-500"
                    aria-label="Close menu"
                    onClick={() => setIsOpen(false)}
                >
                    <HiOutlineX size={32} />
                </button>

                {/* Mobile Links */}
                <ul className={'flex flex-col gap-y-3 p-4'}>
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            className={
                                'bg-background text-primary rounded-lg p-2 text-center hover:text-gold cursor-pointer'
                            }
                            onClick={() => smoothScroll(link.href)} // Simplified onClick
                        >
                            {link.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;