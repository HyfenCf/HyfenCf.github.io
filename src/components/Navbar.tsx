const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex justify-between items-center">
          <div className="text-3xl font-bold hidden md:inline">Hugo</div>
          <div className="space-x-6 font-bold">
            <a
              href="#home"
              className="transition-all duration-300 ease-in-out hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-all duration-300 ease-in-out hover:text-blue-400"
            >
              About Me
            </a>
            <a
              href="#technologies"
              className="transition-all duration-300 ease-in-out hover:text-blue-400"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="transition-all duration-300 ease-in-out hover:text-blue-400"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
