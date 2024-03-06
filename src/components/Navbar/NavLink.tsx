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
      className={`nav-link mx-3 inline-block text-4xl uppercase hover:text-slate-900 active:text-slate-300 md:mx-4 md:text-base ${className}`}
      {...props}
    >
      {label}
      <span className="sr-only">{`Scroll to ${label}`}</span>
    </Link>
  );
};

export default NavLink;
