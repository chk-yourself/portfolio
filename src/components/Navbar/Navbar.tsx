'use client';
import { useState, useEffect } from 'react';
import { MouseEvent } from 'react';
import { useMediaQuery } from '@/hooks';
import NavLink from './NavLink';
import Logo from './Logo';
import { CloseIcon, MenuIcon } from '@/icons';

const NAV_LINKS = [
  {
    label: 'About',
    hash: 'about',
  },
  {
    label: 'Skills',
    hash: 'skills',
  },
  /*
  {
    label: 'Experience',
    hash: 'experience',
  },
  */
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
    element?.scrollIntoView({ behavior: 'smooth' });
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
    <nav className="fixed flex h-10 w-full items-center justify-between bg-slate-50">
      <div>
        <Logo />
      </div>
      <div className="block md:hidden">
        <button
          onClick={handleToggleMenu}
          className="flex items-center px-3 py-2 hover:text-pink-300"
        >
          {showMenu ? <CloseIcon /> : <MenuIcon />}
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
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px] hover:fill-pink-300 md:h-[18px] md:w-[18px]"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </li>
        <li className="mt-5 md:mt-9">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[14px] w-[14px] hover:fill-pink-300 md:h-[18px] md:w-[18px]"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
