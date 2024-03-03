import React from 'react';
import HomeSection from '@/components/HomeSection';

const Hero = () => {
  return (
    <HomeSection id="hero">
      <div className="absolute bottom-1/4 m-0 ">
        <h1 className="mb-6 text-6xl font-bold tracking-tightest sm:text-7xl md:text-8xl">
          Christina Kim
        </h1>
        <p className="text-[1.4rem] leading-tight text-pink-500 sm:text-[1.7rem] md:text-[2rem]">
          frontend engineer
        </p>
        <p className="text-[1.4rem] leading-tight sm:text-[1.7rem] md:text-[2rem]">
          based in Los Angeles, CA
        </p>
        <ul className="mt-6 flex gap-4">
          <li className="">
            <a target="_blank" href="https://github.com/chk-yourself">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 hover:fill-pink-300"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </li>
          <li className="">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/christina-kim-12904646"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 hover:fill-pink-300"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </HomeSection>
  );
};

export default Hero;
