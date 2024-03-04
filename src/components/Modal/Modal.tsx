import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import Tag from './Tag';
import type { TagsProps } from '@/containers/Projects';

interface ModalProps {
  title?: string;
  subtitle?: string;
  isActive: boolean;
  url?: string;
  content?: ReactElement | null;
  tags?: TagsProps;
  onClose?: () => void;
  ghUrl?: string;
}

const Modal = ({
  isActive = false,
  title,
  subtitle,
  content,
  url,
  tags,
  onClose = () => null,
  ghUrl,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(isActive);

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return isOpen ? (
    <div className="fixed left-0 top-0 h-screen w-screen overflow-y-auto bg-slate-50 p-[3.25rem] text-slate-900">
      <button className="fixed right-4 top-4 block" onClick={handleClose}>
        <svg
          className="h-5 w-5 text-slate-900"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />{' '}
          <line x1="18" y1="6" x2="6" y2="18" />{' '}
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
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
    </div>
  ) : null;
};

export default Modal;
