import Title from '../Common/Title';
import Project from './Project';

import dazzleHR from '../../images/projects/dazzleHR.png'
import musicApp from '../../images/projects/musicApp.png'
import codeFacade from '../../images/projects/code-facade.png'
import superface from '../../images/projects/superface.png'

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
            GitHub: "https://github.com/Qodestackr/",
            Live: "https://dazzlehr.vercel.app/"
        },
        role: "Solo Dev | Fullstack | SaaS"
    },
    {
        name: "Remo",
        image: codeFacade,
        about: "Remote code execution engine. Supports multiple languages. </>",
        tech: [
            "React",
            "Ace/CodeMirror",
            "Firebase/Auth",
            "Nesjs/Docker"
        ],
        links: {
            GitHub: "https://github.com/Qodestackr/",
            Live: "https://code-facade.vercel.app/"
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
            GitHub: "https://github.com/Qodestackr/CloudMusic",
            Live: "https://cloud-music.vercel.app/" // add to productHunt 
        },
        role: "Solo Dev | Fullstack | SaaS"
    },
    {
        name: "Open Source contributions",
        image: superface,
        about: "I contribute and collaborate on various open source projects by documenting and proposing features. More on GitHub",
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
