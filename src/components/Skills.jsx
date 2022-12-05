import Title from './Common/Title';
import { motion } from 'framer-motion';

import reactIMG from "../images/logos/react.svg"
import reactnativeIMG from "../images/logos/react-native.svg"
import VuejsIMG from "../images/logos/vue.svg"
import typescriptIMG from "../images/logos/typescript.svg"
import tailwindIMG from "../images/logos/tailwind.svg"
import figmaIMG from "../images/logos/figma.svg"
import chakraUI_IMG from '../images/logos/chakraui.svg'

// nb

import DjangoIMG from "../images/logos/django.svg"
import nestjsIMG from "../images/logos/nestjs.png"
import graphqlIMG from "../images/logos/graphql.svg"
import dockerIMG from "../images/logos/docker.svg"
import gcpIMG from "../images/logos/gcp.png"
import ServerlessIMG from '../images/logos/serverless.png'
import firebaseIMG from '../images/logos/firebase.svg'

let frontend_skills = [
    {
        "src": reactIMG,
        "name": "React",
        "link": "https://reactjs.org/"
    },
    {
        "src": reactnativeIMG,
        "name": "react native",
        "link": "https://firebase.google.com/"
    },
    {
        "src": VuejsIMG,
        "name": "Vue",
        "link": "https://vuejs.org/"
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
        "link": "https://chakra-ui.com/"
    },
    {
        "src": figmaIMG,
        "name": "Figma",
        "link": "https://figma.com/"
    },
]

let backend_skills = [
    {
        "src": nestjsIMG,
        "name": "nestjs",
        "link": "https://nestjs.com/"
    },
    {
        "src": DjangoIMG,
        "name": "Django",
        "link": "https://www.djangoproject.com/"
    },
    {
        "src": graphqlIMG,
        "name": "GraphQL",
        "link": "https://graphql.org/"
    },
    {
        "src": dockerIMG,
        "name": "docker",
        "link": "https://www.docker.com/"
    },
    {
        "src": gcpIMG,
        "name": "GCP",
        "link": "https://cloud.google.com"
    },
    {
        "src": ServerlessIMG,
        "name": "Serverless",
        "link": "https://aws.amazon.com/"
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
                {frontend_skills?.map((skill, i) => (
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
                {backend_skills?.map((skill, i) => (
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
