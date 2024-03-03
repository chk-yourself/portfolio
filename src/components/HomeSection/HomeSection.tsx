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
  ...props
}: HomeSectionProps) => {
  return (
    <section
      className={`mx-auto min-h-screen
    scroll-smooth pt-14 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl ${className}`}
      {...props}
    >
      {title && (
        <h2 className="mb-8 text-4xl font-bold tracking-tightest md:text-5xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default HomeSection;
