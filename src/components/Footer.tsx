import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Hugo Hakamaa. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/HyfenCf"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/hugo_hakamaa/"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
