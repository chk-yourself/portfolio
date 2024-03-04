'use client';

import { createContext } from 'react';
import type { ReactNode } from 'react';

interface ModalContextProps {
  content?: ReactNode | null;
  isActive: boolean;
  openModal: (content: ReactNode | null) => void;
}

const ModalContext = createContext<ModalContextProps>({
  content: null,
  isActive: false,
  openModal: () => null,
});

export default ModalContext;