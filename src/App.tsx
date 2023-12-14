import About from "./components/About";
import Contact from "./components/Contact";
import { Experience } from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillStack from "./components/SkillStack";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />

      <Projects />

      <SkillStack />
      <Experience />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
