'use client';

import { useState, useCallback } from 'react';
import Hero from '@/containers/Hero';
import About from '@/containers/About';
import Skills from '@/containers/Skills';
import Projects from '@/containers/Projects';
import Navbar from '@/components/Navbar';
import { useLockScroll } from '@/hooks';

export default function Home() {
  /*const [isScrollDisabled, setIsScrollDisabled] = useState(false);*/
  const { lock, unlock } = useLockScroll();

  const handleDisableScroll = useCallback((isDisabled: boolean = false) => {
    if (isDisabled) {
      lock();
    } else {
      unlock();
    }
    //setIsScrollDisabled(isDisabled);
  }, []);

  return (
    <>
      <Navbar disableScroll={handleDisableScroll} />
      <main className="h-full snap-y snap-mandatory scroll-pt-10 p-6 sm:p-10">
        <Hero />
        <About />
        <Skills />
        <Projects className="pb-10" />
      </main>
    </>
  );
}
