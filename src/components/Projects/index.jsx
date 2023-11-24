import Title from "../Common/Title";
import Project from "./Project";

import dazzleHR from "../../images/projects/dazzleHR.png";
import AcuvaGIS from "../../images/projects/AcuvaGIS.png";
import codeFacade from "../../images/projects/code-facade.png";
import superface from "../../images/projects/superface.png";
import farmex_suite from "../../images/projects/farmex_suite.png"

const projectsList = [
  {
    name: "Farmex Suite",
    image: farmex_suite,
    tech: ["End to End Farming Management Portal", "Written in Go and Next.js"],
    links: {
      GitHub: "https://github.com/Qodestackr/farmex_suite",
      Live: "https://farmex-suite.vercel.app/dashboard",
    },
    about: `Farmex Suite is a suite of Cloud and SaaS products for the Modern Farming. Key enabler solutions eliminating guesswork in farming.`,
    role: "Solo Dev | Fullstack | SaaS",
  },
  {
    name: "Dazzle HR",
    image: dazzleHR,
    about: `Dazzle HR: Simple. Compliant. Affordable.
    The People Operating System for HR-Ops.
    Where Everything Starts With People.`,
    tech: ["React", "AWS", "Node.js", "Firebase"],
    links: {
      GitHub: "https://github.com/Qodestackr/dazzle-facade",
      Live: "https://dazzle-facade.vercel.app/",
    },
    role: "Solo Dev | Fullstack | SaaS",
  },
  {
    name: "Remo",
    image: codeFacade,
    about: "Remote code execution engine. Supports multiple languages. </>",
    tech: ["React", "Ace/CodeMirror", "Firebase/Auth", "Nesjs/Docker"],
    links: {
      GitHub: "https://github.com/Qodestackr/",
      Live: "https://code-facade.vercel.app/",
    },
    role: "Solo Dev | Fullstack",
  },
  {
    name: "Acuva GIS",
    image: AcuvaGIS,
    about:
      "Open Source Geospatial Development. From Web Mapping to Web Mapping Services, Cloud and Serverless for GIS work.",
    tech: [
      "Python",
      "Open Data Portal",
      "Spatial Analytics",
      "Custom Solutions",
    ],
    links: {
      GitHub: "https://github.com/AcuvaGIS",
      Live: "https://acuvagis.github.io/core-docs/", // add to productHunt
    },
    role: "Team of Two | Fullstack | GIS and Spatial Analytics",
  },
  {
    name: "Open Source contributions",
    image: superface,
    about:
      "I contribute and collaborate on various open source projects by documenting and proposing features. More on GitHub",
    tech: ["Node.js", "Typescript", "React", "JavaScript", "Python"],
    links: {
      GitHub: "https://github.com/Qodestackr",
    },
    role: "Co-builder",
  },
];

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
