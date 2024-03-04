import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="nav-link mx-3 block font-display text-base font-bold lowercase hover:text-slate-900 active:text-slate-300 md:mx-4 md:text-base lg:inline-block"
    >
      ck
    </Link>
  );
};

export default Logo;
