import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import Resume from "./components/Resume";

const App = () => {
  return (
    <main className="w-full mx-auto">
      <Resume />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
