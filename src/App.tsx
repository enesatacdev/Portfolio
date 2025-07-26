import Hero from "./pages/Hero/page";
import Header from "./pages/Header/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page";
import Experience from "./pages/Experience/page";
import Projects from "./pages/Projects/page";
import Contact from "./pages/Contact/page";
import Education from "./pages/Education/Education";

export default function App() {
  return (
    <>
      <div className="dark-theme">
        <Header />
        <main>
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
