import React from 'react';
import Close from './Close';
import GitHub from './GitHub';
import LinkedIn from './LinkedIn';
import Menu from './Menu';

type IconName = 'close' | 'gitHub' | 'linkedIn' | 'menu';

interface IconProps {
  size?: number;
  className?: string;
  hoverFill?: boolean;
  name: IconName;
}

const ICONS = {
  close: <Close />,
  gitHub: <GitHub />,
  linkedIn: <LinkedIn />,
  menu: <Menu />,
};

const Icon = ({
  name,
  size = 24,
  className = '',
  hoverFill = false,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${hoverFill && 'hover:fill-pink-300'} ${className}`}
      aria-hidden={true}
      focusable={false}
    >
      {ICONS[name]}
    </svg>
  );
};

export default Icon;
