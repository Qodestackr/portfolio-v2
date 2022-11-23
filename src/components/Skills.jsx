import Title from './Common/Title';
import data from '../data/data.json';
import { motion } from 'framer-motion';

import reactIMG from "../images/logos/react.svg"
import nextjsIMG from "../images/logos/nextjs.svg"
import typescriptIMG from "../images/logos/typescript.svg"
import tailwindIMG from "../images/logos/tailwind.svg"

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
    }
]


const Skills = () => {
    return (
        <div id="skills">
            <Title num={4} title="Skills" />

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
                            src={skill.src}
                        />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Skills;
// icon-512x512