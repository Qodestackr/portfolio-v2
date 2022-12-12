import Title from '../Common/Title';
import Project from './Project';

import dazzleHR from '../../images/projects/dazzleHR.png'
import musicApp from '../../images/projects/musicApp.png'

const projectsList = [
    {
        name: "Dazzle HR",
        image: dazzleHR,
        about: "",
        tech: [
            "React",
            "AWS",
            "Node.js",
            "Firebase"
        ],
        links: {
            GitHub: "https://github.com/Qodestackr",
            Live: "https://dazzlehr.vercel.app/"
        },
        role: "Solo Dev | Fullstack | SaaS"
    },
    {
        name: "Taglich",
        image: dazzleHR,
        about: "A one stop shop for your daily needs. A mobile and web app powered by Serverless CMS",
        tech: [
            "React",
            "React Native",
            "AWS & Webiny"
        ],
        links: {
            GitHub: "https://github.com/Qodestackr",
            Live: "https://taglich-shop.vercel.app/"
        },
        role: "Solo Dev | Fullstack"
    },
    {
        name: "CloudMusic",
        image: musicApp,
        about: "Music streaming, podcasts, and audio spaces. A mobile/ Web app inspired by Spotify.",
        tech: [
            "Next.js",
            "React Native",
            "Typescript"
        ],
        links: {
            GitHub: "https://github.com/Qodestackr",
            Live: "https://cloud.music.vercel.app/" // add to productHunt 
        },
        role: "Solo Dev | Fullstack | SaaS"
    },
    {
        name: "Open Source contributions",
        image: dazzleHR,
        about: "I contribute and collaborate with friends on various open source projects by documenting and adding features. Repos pinned on my GitHub",
        tech: [
            "Node.js",
            "Typescript",
            "React",
            "JavaScript",
            "Python"
        ],
        links: {
            GitHub: "https://github.com/Qodestackr",
        },
        role: "Co-builder"
    }
]

const Projects = () => {
    return (
        <div id="work">
            <Title num={3} title="Some Things I’ve Built" />

            <div className="flex flex-col">
                {projectsList?.map((project, i) => (
                    <Project key={i} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
