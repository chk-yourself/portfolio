import React from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag = ({ text, className = '' }: TagProps) => {
  return (
    <div className={`border px-2 py-1 text-xs leading-none ${className}`}>
      {text}
    </div>
  );
};

export default Tag;
