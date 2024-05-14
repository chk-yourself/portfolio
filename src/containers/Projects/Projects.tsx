'use client';
import { useContext } from 'react';
import type { ReactElement, MouseEvent } from 'react';
import HomeSection from '@/components/HomeSection';
import FlumeContent from './FlumeContent';
import Shop88risingContent from './Shop88risingContent';
import World1999Content from './World1999Content';
import HondaLookbookContent from './HondaLookbookContent';
import OhtNycContent from './OhtNycContent';
import ProjectModalContent from './ProjectModalContent';
import { ModalContext } from '@/components/Modal';

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
    title: '1999 World',
    subtitle: 'Windows 98 reimagined in the modern web',
    content: <World1999Content />,
    url: 'https://www.1999world.com/',
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
    title: '88rising Shop',
    subtitle: 'Shopify on steroids',
    content: <Shop88risingContent />,
    url: 'https://shop.88rising.com',
    tags: {
      tech: ['JavaScript', 'Web Components', 'HTML', 'CSS', 'Sass', 'Liquid'],
      other: ['UX/UI', 'Responsive Design', 'E-commerce', 'Shopify', 'Klaviyo'],
    },
  },
  {
    title: 'Honda Lookbook',
    subtitle: 'interactive, digital fashion lookbook',
    content: <HondaLookbookContent />,
    url: 'https://shop.88rising.com/pages/88typer',
    tags: {
      tech: ['JavaScript', 'HTML', 'CSS', 'Sass', 'Liquid'],
      other: ['UX/UI', 'Responsive Design', 'E-commerce', 'Shopify'],
    },
  },
  {
    title: '88 x OHT NYC',
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

interface ProjectsProps {
  className?: string;
}

const Projects = ({ className = '' }: ProjectsProps) => {
  const { openModal } = useContext(ModalContext);

  const handleOpenProject = (e: MouseEvent<HTMLButtonElement>) => {
    const activeProject =
      PROJECTS[Number(e.currentTarget.getAttribute('data-index'))] ?? null;
    openModal(
      <ProjectModalContent {...(activeProject ? activeProject : {})} />,
    );
  };

  return (
    <HomeSection
      title="Projects"
      id="projects"
      className={`min-h-screen !justify-start ${className}`}
    >
      <ul className="mx-auto flex min-w-full flex-col gap-1 md:mr-0 md:min-w-[28rem] md:max-w-md md:gap-2">
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
  );
};

export default Projects;
