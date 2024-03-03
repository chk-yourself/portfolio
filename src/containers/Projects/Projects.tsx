'use client';
import { useState } from 'react';
import type { ReactElement } from 'react';
import type { MouseEvent } from 'react';
import HomeSection from '@/components/HomeSection';
import Modal from '@/components/Modal';
import FlumeContent from './FlumeContent';
import Shop88risingContent from './Shop88risingContent';
import World1999Content from './World1999Content';
import HondaLookbookContent from './HondaLookbookContent';
import OhtNycContent from './OhtNycContent';

export interface TagsProps {
  tech: string[];
  other?: string[];
}

interface ProjectProps {
  title: string;
  subtitle: string;
  url?: string;
  content?: ReactElement | null;
  tags?: TagsProps;
  ghUrl?: string;
}

const PROJECTS: ProjectProps[] = [
  {
    title: '88rising Shop',
    subtitle: 'custom Shopify 2.0 theme',
    content: <Shop88risingContent />,
    url: 'https://shop.88rising.com',
    tags: {
      tech: ['JavaScript', 'Web Components', 'HTML', 'CSS', 'Sass', 'Liquid'],
      other: ['UX/UI', 'Responsive Design', 'E-commerce', 'Shopify', 'Klaviyo'],
    },
  },
  {
    title: '1999 World',
    subtitle: 'Windows 98 reimagined in the modern web',
    content: <World1999Content />,
    tags: {
      tech: [
        'Next',
        'React',
        'Typescript',
        'Emotion',
        'Azure',
        'PostgreSQL',
        'Strapi',
      ],
      other: ['UX/UI', 'Responsive Design', 'Project Management', 'Agile'],
    },
  },
  {
    title: '88rising x Honda',
    subtitle: 'interactive 88rising x Honda digital lookbook',
    content: <HondaLookbookContent />,
    url: 'https://shop.88rising.com/pages/88typer',
    tags: {
      tech: ['JavaScript', 'HTML', 'CSS', 'Sass', 'Liquid'],
      other: ['UX/UI', 'Responsive Design', 'E-commerce', 'Shopify'],
    },
  },
  {
    title: '88rising x OHT NYC',
    subtitle: 'landing page for 88rising x OHT NYC collaboration',
    content: <OhtNycContent />,
    url: 'https://shop.88rising.com/pages/88-x-oht-nyc-jewelry',
    tags: {
      tech: ['JavaScript', 'HTML', 'CSS', 'Sass', 'Liquid'],
      other: ['UX/UI', 'Responsive Design', 'E-commerce', 'Shopify'],
    },
  },
  {
    title: 'Flume',
    subtitle: 'dependency-free, modern slider/carousel plugin',
    content: <FlumeContent />,
    url: 'https://chk-yourself.github.io/flume/',
    tags: {
      tech: ['JavaScript', 'HTML', 'CSS', 'Sass'],
      other: ['UX/UI', 'Responsive Design'],
    },
    ghUrl: 'https://github.com/chk-yourself/flume',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectProps | null>(null);

  const handleOpenProject = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveProject(
      PROJECTS[Number(e.currentTarget.getAttribute('data-index'))] ?? null,
    );
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <>
      <HomeSection title="Projects" id="projects" className="">
        <ul className="mx-auto flex flex-col gap-1 md:mr-0 md:max-w-md md:gap-2">
          {PROJECTS.map((project, i) => (
            <li key={project.title} className="text-3xl md:text-5xl">
              <button
                className="project-btn text-left leading-none"
                onClick={handleOpenProject}
                data-index={i}
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </HomeSection>
      <Modal
        onClose={handleCloseProject}
        {...(activeProject ? activeProject : {})}
        isActive={!!activeProject}
      />
    </>
  );
};

export default Projects;
