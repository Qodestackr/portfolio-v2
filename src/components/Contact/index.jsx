import ContactButtons from './ContactButtons';
import { LineSvg } from '../../Icons';
// import data from '../../data/data.json';

import GitHubImg from '../../images/logos/github.svg'
import TwitterImg from '../../images/logos/twitter.svg'
import HashnodeImg from "../../images/logos/hashnode.svg"
import ShowwcaseImg from '../../images/logos/showwcase.svg'
import Instagram from '../../images/logos/instagram.svg'
import LinkedIn from '../../images/logos/linkedin.svg'
import MailMe from "../../images/logos/mail.svg"

import React from 'react';
let links = [
    {
        name: "GitHub",
        "icon": GitHubImg,
        "link": "https://github.com/avneesh0612"
    },
    {
        name: "Twitter",
        "icon": TwitterImg,
        "link": "https://twitter.com/avneesh0612"
    },
    {
        name: "Hashnode",
        icon: HashnodeImg,
        link: "https://blog.avneesh.tech"
    },
    {
        name: "Showwcase",
        icon: ShowwcaseImg,
        link: "https://www.showwcase.com/avneesh"
    },
    {
        name: "Instagram",
        icon: Instagram,
        link: "https://instagram.com/avneesh.codes"
    },
    {
        name: "Mail me",
        icon: MailMe,
        link: "mailto:avneeshagarwal0612@gmail.com"
    },
    {
        name: "LinkedIn",
        icon: LinkedIn,
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