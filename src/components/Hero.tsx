import { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const roles: string[] = [
    "Frontend Developer",
    "UI/UX Designer",
    "Learning Backend",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setText(roles[index].substring(0, text.length + 1));
      if (text.length === roles[index].length) {
        setTimeout(() => {
          setText("");
          setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <div
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full space-y-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm
                <span className="text-blue-400"> Hugo Hakamaa</span>
              </h1>
              <div className="h-12">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  <span className="text-blue-400">{text}</span>
                  <span className="animate-blink">|</span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl">
                17-year-old Frontend Developer passionate about creating modern
                and responsive web experiences.
              </p>
            </div>

            {/*<div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center gap-2 transform transition-all hover:scale-105">
                <FaDownload className="text-lg" />
                Download Resume
              </button>
            </div>*/}

            <div className="flex gap-6 justify-center md:justify-start pt-8">
              <a
                href="https://github.com/HyfenCf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FaGithub aria-label="GitHub Profile" />
              </a>
              <a
                href="https://www.instagram.com/hugo_hakamaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-blue-400 transition-colors"
              >
                <FaInstagram aria-label="Instagram Profile" />
              </a>
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-4 border-blue-400 overflow-hidden shadow-xl transform hover:scale-105 transition-transform">
              <img
                src="https://cdn.discordapp.com/avatars/1073711201546141726/0ed73323bf8ac49026a23b95c87d10be?size=1024"
                alt="Hugo Hakamaa Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://cdn.discordapp.com/avatars/1073711201546141726/0ed73323bf8ac49026a23b95c87d10be?size=1024";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
