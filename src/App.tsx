import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Journey } from '@/components/sections/Journey';
import { Events } from '@/components/sections/Events';
import { Internship } from '@/components/sections/Internship';
import { Education } from '@/components/sections/Education';
import { CurrentlyLearning } from '@/components/sections/CurrentlyLearning';
import { CareerVision } from '@/components/sections/CareerVision';
import { Contact } from '@/components/sections/Contact';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--primary), var(--accent))',
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Events />
        <Internship />
        <Education />
        <CurrentlyLearning />
        <CareerVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
