import Title from './Common/Title';
import { motion } from 'framer-motion';

import reactIMG from "../images/logos/react.svg"
import nextjsIMG from "../images/logos/nextjs.svg"
import typescriptIMG from "../images/logos/typescript.svg"
import tailwindIMG from "../images/logos/tailwind.svg"
import figmaIMG from "../images/logos/figma.svg"
import firebaseIMG from '../images/logos/firebase.svg'
import chakraUI_IMG from '../images/logos/chakraui.svg'

let skills = [
    {
        "src": reactIMG,
        "name": "React",
        "link": "https://reactjs.org/"
    },
    {
        "src": nextjsIMG,
        "name": "Next",
        "link": "https://nextjs.org/"
    },
    {
        "src": typescriptIMG,
        "name": "Typescript",
        "link": "https://www.typescriptlang.org/"
    },
    {
        "src": tailwindIMG,
        "name": "Tailwind",
        "link": "https://tailwindcss.com/"
    },
    {
    "src": chakraUI_IMG,
            "name": "Tailwind",
        "link": "https://chakraui.com/"
    },
    {
        "src": figmaIMG,
        "name": "Figma",
        "link": "https://figma.com/"
    },
    {
        "src": firebaseIMG,
        "name": "firebase",
        "link": "https://firebase.google.com/"
    }
]


// [React, Vue, React Native, Chakra UI, Tailwind CSS, Figma]
// [AWS, GCP, Firebase, Django, Node.js, Serverless]

const Skills = () => {
    return (
        <div id="skills">
            <Title num={4} title="Frontend & Mobile" />

            <div className="flex flex-wrap items-center justify-center mt-10 space-x-6 md:space-x-10 md:items-start md:justify-start">
                {skills?.map((skill, i) => (
                    <motion.a
                        className="cursor-pointer relative w-20 h-20"
                        href={skill.link}
                        key={i}
                        rel="noreferrer"
                        target="_blank"
                        whileHover={{
                            scale: [1, 1.3, 1.15],
                            zIndex: 1,
                            transition: {
                                duration: 1,
                            },
                        }}
                    >
                        <img
                            alt={skill.name}
                            layout="fill"
                            objectFit="contain"
                            className='w-[60px] h-[60px] m-1'
                            src={skill.src}
                        />
                    </motion.a>
                ))}
            </div>

            {/*  */}
            <Title num={'5'} title="Backend Stack" />
            <div className="flex flex-wrap items-center justify-center mt-10 space-x-6 md:space-x-10 md:items-start md:justify-start">
                {skills?.map((skill, i) => (
                    <motion.a
                        className="cursor-pointer relative w-20 h-20"
                        href={skill.link}
                        key={i}
                        rel="noreferrer"
                        target="_blank"
                        whileHover={{
                            scale: [1, 1.3, 1.15],
                            zIndex: 1,
                            transition: {
                                duration: 1,
                            },
                        }}
                    >
                        <img
                            alt={skill?.name}
                            layout="fill"
                            objectFit="contain"
                            className='w-[60px] h-[60px] m-1'
                            src={skill?.src}
                        />
                    </motion.a>
                ))}
            </div>
            {/*  */}

        </div>
    );
};

export default Skills;
