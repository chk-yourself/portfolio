import React from 'react';

const World1999Content = () => {
  return (
    <>
      <p className="text-sm">
        I spearheaded the development and design of 1999 World, in partnership
        with Microsoft, reimagining the classic Windows 98 experience in the
        modern web with optimized web performance, cross-platform compatibility,
        accessibility, and responsive design. Serving as project manager, lead
        developer, and lead UX/UI designer:
      </p>
      <ul className="my-2 list-disc px-8 text-sm">
        <li>Managed the project scope, timeline, and resource allocation</li>
        <li>
          Orchestrated seamless cross-organizational and cross-functional
          collaboration, ensuring transparency, realistic stakeholder
          expectations, and project alignment, while efficiently navigating
          through anticipated constraints, unforeseen roadblocks, and evolving
          project requirements
        </li>
        <li>
          Faithfully recreated defining features of Windows 98 with modern UX,
          WCAG standards, and extended capabilities, including core file system
          capabilities, Windows Media Player, Notepad, Recycle Bin, and
          Minesweeper
          <ul className="my-2 list-disc px-8 text-xs">
            <li>
              <span className="font-display text-[0.6rem] font-bold uppercase">
                File System
              </span>
              : global state management via Context API and useReducer
            </li>
            <li>
              <span className="font-display text-[0.6rem] font-bold uppercase">
                Window Media Player
              </span>
              : create custom playlists, save to localStorage, edit tracks, and
              share via URL parameters
            </li>
            <li>
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Notepad
              </strong>
              : create custom text files, save to localStorage, and update
              content
            </li>
            <li>
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Recycle Bin
              </strong>
              : delete/move custom files to Recycle Bin and restore to original
              location
            </li>
            <li>
              <strong className="font-display text-[0.6rem] font-bold uppercase">
                Minesweeper
              </strong>
              : custom branded icons
            </li>
          </ul>
        </li>
        <li>
          Led ongoing sprint reviews, retrospectives, and backlog refinement to
          ensure timely deliverables responsive to shifting priorities,
          achieving a 30% boost in web performance and 60% in WCAG compliance
        </li>
        <li>
          Develop headless CMS and custom API for seamless content management
          across cross-functional teams, using Strapi, PostgreSQL, Azure Blob
          storage
        </li>
      </ul>
    </>
  );
};

export default World1999Content;
