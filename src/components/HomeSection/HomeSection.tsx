'use client';
import { ReactNode } from 'react';

interface HomeSectionProps {
  title?: string;
  className?: string;
  children?: ReactNode;
  id?: string;
}

const HomeSection = ({
  title = '',
  className = '',
  children,
  id = '',
  ...props
}: HomeSectionProps) => {
  return (
    <section
      className={`section mx-auto flex flex-col items-start justify-center
    scroll-smooth py-10 md:max-w-2xl md:py-20 lg:max-w-3xl xl:max-w-4xl ${className}`}
      id={id}
      {...props}
    >
      {title && (
        <h2 className="mb-4 text-4xl font-bold tracking-tightest md:text-5xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default HomeSection;
