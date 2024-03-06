import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="#hero"
      className="mx-3 block font-display text-xl font-bold lowercase tracking-tightest hover:text-pink-300 active:text-pink-300 md:mx-4 md:text-xl"
    >
      ck
      <span className="sr-only">Scroll to top</span>
    </Link>
  );
};

export default Logo;
