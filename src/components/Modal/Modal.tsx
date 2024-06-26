'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Icon from '@/components/Icon';
import { useClickOutside, useLockScroll } from '@/hooks';

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
  const { lock, unlock } = useLockScroll();

  useEffect(() => {
    setIsOpen(isActive);
  }, [isActive]);

  useEffect(() => {
    if (isOpen) {
      lock();
    } else {
      unlock();
    }
  }, [isOpen, lock, unlock]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const ref = useClickOutside<HTMLDivElement>(handleClose);

  return isOpen ? (
    <div
      ref={ref}
      className="modal fixed left-0 top-10 z-40 w-screen overflow-y-auto scroll-smooth border-t border-slate-900 bg-white p-9 text-slate-900 md:p-[3.25rem]"
    >
      <button
        className="fixed right-2 top-12 block text-slate-900 hover:text-pink-300 md:right-4 md:top-14"
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
