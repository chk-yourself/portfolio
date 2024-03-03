import Link from 'next/link';
import type { MouseEvent } from 'react';

interface NavLinkProps {
  url?: string;
  hash?: string;
  label: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({
  url = '',
  hash = '',
  label = '',
  className = '',
  ...props
}: NavLinkProps) => {
  return (
    <Link
      href={url}
      {...(hash && { 'data-section-id': hash })}
      className={`nav-link m-4 block text-base uppercase hover:text-slate-900 active:text-slate-300 lg:mt-0 lg:inline-block ${className}`}
      {...props}
    >
      {label}
    </Link>
  );
};

export default NavLink;
