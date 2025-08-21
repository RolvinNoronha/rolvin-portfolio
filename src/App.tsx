import { Navigation } from "./components/portfolio/Navigation";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Education } from "./components/portfolio/Education";
import { Footer } from "./components/portfolio/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
