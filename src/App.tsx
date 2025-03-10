import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [isMounted, SetIsMounted] = useState(true);

  useEffect(() => {
    SetIsMounted(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isMounted ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
