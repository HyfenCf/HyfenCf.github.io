const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full space-y-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-4xl font-bold">About Me</h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mt-4">
            I'm a 17-year-old passionate Frontend Developer focused on creating
            modern, responsive, and user-friendly web experiences. Currently
            diving deeper into full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mt-16 max-w-2xl mx-auto text-center items-center">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-400">My Journey</h3>
            <p className="text-gray-300">
              I first got curious about coding at 15, starting with basic
              websites that made me want to learn more. Every project teaches me
              something new, and I'm excited to keep growing my skills as I take
              on bigger challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
