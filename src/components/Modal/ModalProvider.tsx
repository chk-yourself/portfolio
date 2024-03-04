'use client';

import { useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import ModalContext from './ModalContext';
import Modal from './Modal';

interface ModalProviderProps {
  children: ReactNode | null;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const [isActive, setIsActive] = useState(false);

  const openModal = useCallback((content: ReactNode | null) => {
    setContent(content);
    setIsActive(true);
  }, []);

  const closeModal = useCallback(() => {
    setContent(null);
    setIsActive(false);
  }, []);

  return (
    <ModalContext.Provider value={{ content, isActive, openModal }}>
      {children}
      <Modal isActive={isActive} content={content} onClose={closeModal} />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
