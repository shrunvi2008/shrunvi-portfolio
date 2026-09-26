import { useReveal } from '@/hooks/useReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStrip from '@/components/TechStrip';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import GitHubCTA from '@/components/GitHubCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <GitHubCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
