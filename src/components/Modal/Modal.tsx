'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Icon from '@/components/Icon';

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
    <div className="fixed left-0 top-10 z-40 h-screen w-screen overflow-y-auto bg-slate-50 p-[3.25rem] text-slate-900">
      <button
        className="fixed right-4 top-14 block text-slate-900 hover:text-pink-300"
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
