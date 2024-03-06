'use client';
import { useState, useEffect } from 'react';
import { MouseEvent } from 'react';
import { useMediaQuery } from '@/hooks';
import NavLink from './NavLink';
import Logo from './Logo';
import { CloseIcon, MenuIcon, LinkedInIcon, GitHubIcon } from '@/icons';

const NAV_LINKS = [
  {
    label: 'About',
    hash: 'about',
  },
  {
    label: 'Skills',
    hash: 'skills',
  },
  {
    label: 'Projects',
    hash: 'projects',
  },
  {
    label: 'Resume',
  },
];

interface NavbarProps {
  disableScroll: (isDisabled: boolean) => void;
}

const Navbar = ({ disableScroll }: NavbarProps) => {
  const [activeSectionId, setActiveSectionId] = useState('hero');
  const [showMenu, setShowMenu] = useState(false);
  const expandMenu = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const handleScrollEnd = () => {
      const scrollPosition = document.body.scrollTop;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 40 &&
          scrollPosition < sectionTop + sectionHeight - 40
        ) {
          setActiveSectionId(section.id);
        }
      });
    };

    document.body.addEventListener('scrollend', handleScrollEnd);
    return () => {
      document.body.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById(activeSectionId);
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [activeSectionId]);

  useEffect(() => {
    setShowMenu(false);
    /*
    if (expandMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    */
  }, [expandMenu]);

  useEffect(() => {
    disableScroll(showMenu);
  }, [showMenu, disableScroll]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = e.currentTarget.dataset.sectionId;
    if (sectionId) {
      setActiveSectionId(sectionId);
    }
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className="fixed z-10 flex h-10 w-full items-center justify-between bg-slate-50">
      <div>
        <Logo />
      </div>
      <div className="block md:hidden">
        <button
          onClick={handleToggleMenu}
          className="flex items-center px-3 py-2 hover:text-pink-300"
          title={showMenu ? 'Close menu' : 'Open menu'}
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
        >
          {showMenu ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">
            {showMenu ? 'Close menu' : 'Open menu'}
          </span>
        </button>
      </div>
      {(expandMenu || showMenu) && (
        <div className="absolute left-0 top-10 flex h-[calc(100vh_-_40px)] w-full items-start justify-center overflow-y-auto bg-slate-50 pt-10 md:static md:top-0 md:flex md:h-auto md:w-auto md:items-center md:pt-0">
          <ul className="flex flex-col md:flex-grow md:flex-row">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="py-4 md:py-0">
                <NavLink
                  key={link.label}
                  onClick={handleLinkClick}
                  className={activeSectionId === link.hash ? 'active' : ''}
                  {...link}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="absolute right-0 top-16 px-3 md:top-20 md:px-4">
        <li className="">
          <a
            target="_blank"
            href="https://github.com/chk-yourself"
            className=""
            title="GitHub"
            aria-label="GitHub"
          >
            <GitHubIcon size={14} className="md:h-[18px] md:w-[18px]" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li className="mt-5 md:mt-9">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/christina-kim-12904646"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={14} className="md:h-[18px] md:w-[18px]" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
