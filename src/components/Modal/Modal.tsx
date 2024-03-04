'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface ModalProps {
  isActive: boolean;
  content?: ReactNode | null;
  onClose?: () => void;
}

const Modal = ({
  isActive = false,
  content,
  onClose = () => null,
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
      {content}
    </div>
  ) : null;
};

export default Modal;
