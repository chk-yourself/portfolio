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
      <p className="text-sm">
        As the project manager, lead developer, and lead UX/UI designer for{' '}
        <a
          href="https://www.1999world.com/"
          target="_blank"
          className="font-black underline"
          rel="noopener noreferrer"
        >
          1999 World
        </a>
        , in partnership with Microsoft and 88rising, I re-engineered the iconic
        Windows 98 experience for the modern web.
      </p>
      <p className="mt-4 text-sm">
        In addition to directing the project lifecycle from concept through
        launch, I spearheaded both the technical development and UX/UI design of
        the innovative digital platform, earning accolades from{' '}
        <a
          href="https://hypebeast.com/2024/5/mercer-labs-art-experiences-88rising-fam-1999-world"
          target="_blank"
          className="font-black underline"
          rel="noopener noreferrer"
        >
          Hypebeast
        </a>{' '}
        for seamlessly blending '90s nostalgia with cutting-edge technology to
        offer "a unique digital journey through the past with a modern twist."
      </p>
      <p className="mt-4 text-sm">Notable contributions include:</p>
      <ul className="mb-2 mt-4 list-disc px-6 text-sm md:px-8">
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
          <ul className="my-2 list-disc px-6 text-xs md:px-8">
            <li>
              <span className="font-display text-[0.6rem] font-bold uppercase">
                File System
              </span>
              : Architected robust global state management using Context API,
              useReducer, and localStorage and engineered interactive OS
              features like drag-and-drop file management
            </li>
            <li className="mt-1">
              <span className="font-display text-[0.6rem] font-bold uppercase">
                Window Media Player
              </span>
              : Enhanced with features for creating, customizing, and sharing
              custom video playlists
            </li>
            <li className="mt-1">
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Notepad
              </strong>
              : Modernized for web usage, allowing users to create and edit text
              files with data persisted to localStorage
            </li>
            <li className="mt-1">
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Recycle Bin
              </strong>
              : Implemented file restoration to original location, permanent
              deletion of user-generated files, and classic drag-and-drop
              functionality
            </li>
            <li className="mt-1">
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Paint
              </strong>
              : Integrated Azure storage to persist user-generated Paint files,
              and enabled key shortcut support via postMessage API
            </li>
            <li className="mt-1">
              <strong className="font-display text-[0.6rem] font-bold uppercase">
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
