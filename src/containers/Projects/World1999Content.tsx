/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const World1999Content = () => {
  return (
    <>
      <Image
        style={{
          userSelect: 'none',
          objectFit: 'contain',
        }}
        src="/world1999.png"
        alt="preview of 1999world.com"
        width={2400}
        height={1260}
        className="mb-8 rounded border border-slate-900"
      />
      <p className="">
        As the project manager, lead developer, and lead UX/UI designer for{' '}
        <a
          href="https://www.1999world.com/"
          target="_blank"
          className="highlight-hover font-bold underline"
          rel="noopener noreferrer"
        >
          1999 World
        </a>
        , in partnership with Microsoft and 88rising, I re-engineered the iconic
        Windows 98 experience for the modern web.
      </p>
      <p className="mt-4">
        In addition to directing the project lifecycle from concept through
        launch, I spearheaded both the technical development and UX/UI design of
        the innovative digital platform, acclaimed by{' '}
        <a
          href="https://hypebeast.com/2024/5/mercer-labs-art-experiences-88rising-fam-1999-world"
          target="_blank"
          className="highlight-hover font-bold underline"
          rel="noopener noreferrer"
        >
          Hypebeast
        </a>{' '}
        for
      </p>
      <blockquote
        cite="https://hypebeast.com/2024/5/mercer-labs-art-experiences-88rising-fam-1999-world"
        className="my-8"
      >
        <p className="mx-auto w-4/5 max-w-[400px] font-display text-xl font-bold lg:text-2xl">
          <span className="bg-pink-200">
            "combin[ing] the charm and nostalgia of the 90’s internet era with
            cutting-edge technology, offering users a unique digital journey
            through the past with a modern twist."
          </span>
        </p>
        <footer className="mx-auto mt-1 w-4/5 max-w-[400px] text-xs">
          <cite className="uppercase not-italic">
            —{' '}
            <a
              href="https://hypebeast.com/2024/5/mercer-labs-art-experiences-88rising-fam-1999-world"
              target="_blank"
              className="highlight-hover font-bold underline"
              rel="noopener noreferrer"
            >
              Hypebeast
            </a>
          </cite>
        </footer>
      </blockquote>
      <h4 className="mt-4 text-sm font-bold uppercase lg:text-base">
        Notable contributions:
      </h4>
      <ul className="my-2 list-inside list-disc">
        <li>
          Directing the project scope, timelines, and resource allocation across
          cross-organizational and cross-functional teams to ensure alignment
          with stakeholder expectations
        </li>
        <li className="mt-2">
          Spearheading the integration of Microsoft's AI-powered MSN
          application, directing secure, cross-origin communications to
          implement interactive features
        </li>
        <li className="mt-2">
          Conducting sprint reviews, retrospectives, and backlog refinement,
          achieving a 30% boost in web performance and 60% in WCAG compliance
        </li>
        <li className="mt-2">
          Architecting a headless CMS and custom APIs, using Strapi, PostgreSQL,
          and Azure, to streamline content management across teams
        </li>
        <li className="mt-2">
          Recreating defining features of Windows 98 to modern web standards,
          including:
          <ul className="my-2 list-disc px-8 text-xs md:px-12 lg:my-3 lg:text-[0.85rem]">
            <li>
              <span className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                File System
              </span>
              : Architected robust global state management using Context API,
              useReducer, and localStorage and engineered interactive OS
              features like drag-and-drop file management
            </li>
            <li className="mt-1 lg:mt-2">
              <span className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                Window Media Player
              </span>
              : Enhanced with features for creating, customizing, and sharing
              custom video playlists
            </li>
            <li className="mt-1 lg:mt-2">
              <strong className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                Notepad
              </strong>
              : Modernized for web usage, allowing users to create and edit text
              files with data persisted to localStorage
            </li>
            <li className="mt-1 lg:mt-2">
              <strong className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                Recycle Bin
              </strong>
              : Implemented file restoration to original location, permanent
              deletion of user-generated files, and classic drag-and-drop
              functionality
            </li>
            <li className="mt-1 lg:mt-2">
              <strong className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                Paint
              </strong>
              : Integrated Azure storage to persist user-generated Paint files,
              and enabled key shortcut support via postMessage API
            </li>
            <li className="mt-1 lg:mt-2">
              <strong className="font-display text-[0.6rem] font-bold uppercase lg:text-[0.7rem]">
                Minesweeper
              </strong>
              : Reimagined with a customizable interface
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default World1999Content;
