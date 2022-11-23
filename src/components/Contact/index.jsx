import ContactButtons from './ContactButtons';
import { LineSvg } from '../../Icons';
// import data from '../../data/data.json';

import React from 'react';
let links = [
    {
        name: "GitHub",
        "icon": "../../images/logos/github.svg",
        "link": "https://github.com/avneesh0612"
    },
    {
        name: "Twitter",
        "icon": "../../images/logos/twitter.svg",
        "link": "https://twitter.com/avneesh0612"
    },
    {
        name: "Hashnode",
        icon: "../../images/logos/hashnode.svg",
        link: "https://blog.avneesh.tech"
    },
    {
        name: "Showwcase",
        icon: "../../images/logos/showwcase.svg",
        link: "https://www.showwcase.com/avneesh"
    },
    {
        name: "Instagram",
        icon: "../../images/logos/instagram.svg",
        link: "https://instagram.com/avneesh.codes"
    },
    {
        name: "Mail me",
        icon: "../../images/logos/mail.svg",
        link: "mailto:avneeshagarwal0612@gmail.com"
    },
    {
        name: "LinkedIn",
        icon: "../../images/logos/linkedin.svg",
        link: "https://www.linkedin.com/in/avneesh0612"
    }
]
const Contact = () => {
    return (
        <div
            className="z-50 flex flex-col items-center justify-center"
            id="contact"
        >
            <div className="flex items-center justify-center mt-10 space-x-5">
                <LineSvg className="relative w-20 h-1 md:w-60" />
                <h2 className="text-xl text-text md:text-4xl whitespace-nowrap">
                    Get in Touch
                </h2>
                <LineSvg className="relative w-20 h-1 md:w-60" />
            </div>

            <div className="flex flex-wrap items-center justify-center mx-auto">
                {links.map((link, i) => (
                    <div key={i}>
                        <ContactButtons
                            icon={link.icon}
                            link={link.link}
                            marginLeft={i === 0 ? 'ml-0' : 'ml-6 md:ml-10'}
                            name={link.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;