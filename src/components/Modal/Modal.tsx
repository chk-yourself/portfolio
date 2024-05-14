'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Icon from '@/components/Icon';
import { useClickOutside } from '@/hooks';

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

  const ref = useClickOutside<HTMLDivElement>(handleClose);

  return isOpen ? (
    <div
      ref={ref}
      className="m:p-[3.25rem] fixed left-0 top-10 z-40 h-[calc(100vh_-_40px)] w-screen overflow-y-auto border-t border-slate-900 bg-white p-9 text-slate-900"
    >
      <button
        className="m:top-14 fixed right-2 top-12 block text-slate-900 hover:text-pink-300 md:right-4"
        onClick={handleClose}
        title="Close modal"
        aria-label="Close modal"
      >
        <Icon name="close" />
        <span className="sr-only">Close modal</span>
      </button>
      {content}
    </div>
  ) : null;
};

export default Modal;
