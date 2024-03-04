import type { ReactElement } from 'react';
import Tag from './Tag';
import type { TagsProps } from '@/containers/Projects';

interface ProjectModalContentProps {
  title?: string;
  subtitle?: string;
  url?: string;
  tags?: TagsProps;
  ghUrl?: string;
  content?: ReactElement | null;
}

const ProjectModalContent = ({
  title,
  subtitle,
  url,
  tags,
  ghUrl,
  content = null,
}: ProjectModalContentProps) => {
  return (
    <div className="m-auto flex flex-col items-center justify-center md:max-w-xl lg:max-w-[50%]">
      <h3 className="text-5xl font-bold tracking-tightest">{title}</h3>
      <p className="mb-4 mt-2 text-xs">{subtitle}</p>
      {tags?.tech && (
        <ul className="flex flex-wrap gap-2 text-pink-500">
          {tags.tech.map((tag) => (
            <Tag key={tag} text={tag} className="border-pink-500" />
          ))}
        </ul>
      )}
      {tags?.other && (
        <ul className="mt-1 flex flex-wrap gap-2 text-sky-500">
          {tags.other &&
            tags.other.map((tag) => (
              <Tag key={tag} text={tag} className="border-sky-500" />
            ))}
        </ul>
      )}
      <div className="mt-8">{content}</div>
      {url ? (
        <a
          href={url}
          target="_blank"
          className="mt-6 bg-slate-900 px-3 py-1 text-slate-50"
        >
          Check it out
        </a>
      ) : (
        <div className="mt-6 border border-slate-900 px-3 py-1">
          Demo available upon request
        </div>
      )}
      {ghUrl && (
        <a
          href={ghUrl}
          target="_blank"
          className="mt-6 border border-slate-900 px-3 py-1"
        >
          GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectModalContent;
