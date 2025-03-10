import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = () => {
  const technologies = [
    { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript" },
    { icon: <SiReact className="w-6 h-6" />, name: "React" },
    { icon: <SiNextdotjs className="w-6 h-6" />, name: "Next.js" },
    { icon: <SiVite className="w-6 h-6" />, name: "Vite" },
    { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS" },
    { icon: <SiNodedotjs className="w-6 h-6" />, name: "Node.js" },
    { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript" },
    { icon: <TbBrandCSharp className="w-6 h-6" />, name: "C#" },
  ];

  return (
    <section>
      <div
        id="technologies"
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl w-full space-y-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-4xl font-bold mb-12">
              Technologies
            </h1>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center gap-2 
                         hover:bg-gray-700 transition-all duration-300 animate-float"
              >
                <span className="text-3xl text-blue-400">{tech.icon}</span>
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
