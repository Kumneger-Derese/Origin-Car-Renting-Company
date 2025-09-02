import React from 'react';
import NewsLatter from "./NewsLatter.jsx";
import {footerLinks, socialLinks} from "../constant/footer.js";


const Footer = () => {
    return (
        <div className={'flex flex-col gap-y-16 bg-primary text-light p-8'}>
            {/*News Letter*/}
            <NewsLatter/>

            {/* Links*/}
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8'}>
                <div className={'flex flex-col gap-y-4'}>
                    <h1 className={'font-bold text-xl'}>Origin</h1>
                    <p className={'text-sm text-light/60'}>
                        Origin world wide car <br/> rental services
                        provider with
                    </p>
                </div>

                {
                    footerLinks.map((link) => (
                        <div key={link.id} className={'flex flex-col gap-y-4'}>
                            <h1 className={'text-xl font-bold text-light/50'}>{link.title}</h1>

                            <ul className={'flex flex-col gap-2'}>
                                {
                                    link.links.map((link, index) => (
                                        <li key={index}>{link}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>

            {/* Footer Copyright*/}
            <div className={'flex flex-col gap-y-8 sm:flex-row justify-between'}>
                <div>
                    &copy;2025 Origin inc
                </div>

                <div className={'flex flex-col gap-y-2 sm:flex-row gap-x-4'}>
                    {
                        socialLinks.map((link, index) => (
                            <p key={index}>
                                {link}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;