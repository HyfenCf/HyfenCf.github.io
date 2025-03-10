import projectImage from "../assets/project-image.png";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
}

const projectsData: Project[] = [
  {
    title: "Next.js loppytyö",
    description:
      "This was my first project using Next.js - a React framework, so it's not very special. I made this for the final HTML and CSS assignment.",
    technologies: ["Next.js", "TailwindCSS", "TypeScript"],
    image: projectImage,
    githubLink: "https://github.com/HyfenCf/Next.js-Lopputyo",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img
        src={project.image}
        alt={project.title} // Improved accessibility
        className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
      />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <a
            href={project.githubLink} // Link to GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-blue-400 hover:underline"
          >
            {project.title}
          </a>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-bold text-white">My Projects</h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
