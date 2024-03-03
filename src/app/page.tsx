import Hero from '@/containers/Hero';
import About from '@/containers/About';
import Skills from '@/containers/Skills';
/* import Experience from '@/containers/Experience' */
import Projects from '@/containers/Projects';

export default function Home() {
  return (
    <main className="h-full p-6 sm:p-14">
      <Hero />
      <About />
      <Skills />
      {/*<Experience />*/}
      <Projects />
    </main>
  );
}
