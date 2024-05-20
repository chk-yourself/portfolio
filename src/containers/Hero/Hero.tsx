import React from 'react';
import Link from 'next/link';
import HomeSection from '@/components/HomeSection';
import Icon from '@/components/Icon';

const Hero = () => {
  return (
    <HomeSection id="hero" className="relative min-h-full py-0">
      <h1 className="mb-6 pt-10 text-6xl font-bold tracking-tightest sm:text-7xl md:text-8xl">
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
          <Link
            target="_blank"
            href="/Christina-Kim_Frontend-Engineer-Resume.pdf"
            title="Resume"
            aria-label="View Resume"
            rel="noopener noreferrer"
          >
            <Icon name="resume" hoverFill />
            <span className="sr-only">Resume</span>
          </Link>
        </li>
        <li className="">
          <a
            target="_blank"
            href="https://github.com/chk-yourself"
            title="GitHub"
            aria-label="View GitHub"
            rel="noopener noreferrer"
          >
            <Icon name="gitHub" hoverFill />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li className="">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/christina-kim-12904646"
            title="LinkedIn"
            aria-label="View LinkedIn"
            rel="noopener noreferrer"
          >
            <Icon name="linkedIn" hoverFill />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
      </ul>
      <div className="pt-10">
        <div className="absolute bottom-8 left-[5%] w-min -rotate-90 transform leading-none md:bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 17 10"
            className="bounce block block align-middle"
          >
            <path
              className="cls-1"
              d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"
            ></path>
          </svg>
        </div>
      </div>
    </HomeSection>
  );
};

export default Hero;
