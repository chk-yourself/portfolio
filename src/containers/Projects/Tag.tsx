import React from 'react';

interface TagProps {
  text: string;
  className?: string;
}

const Tag = ({ text, className = '' }: TagProps) => {
  return <li className={`border px-2 py-1 ${className}`}>{text}</li>;
};

export default Tag;
