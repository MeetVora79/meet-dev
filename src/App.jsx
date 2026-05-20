import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";
import Footer from "./components/common/Footer";
import ScrollProgress from "./components/common/ScrollProgress";
import GithubSection from "./components/home/GithubSection";
import FloatingDock from "./components/common/FloatingDock";
import Loader from "./components/common/Loader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="theme-bg overflow-hidden">
      <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubSection />
        <Experience />
        <Contact />
        <FloatingDock />
        <Footer />
    </div>
  );
}

export default App;
