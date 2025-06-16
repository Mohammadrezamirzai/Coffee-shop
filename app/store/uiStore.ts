import { create } from 'zustand';

interface UiState {
  isMenuOpen: boolean;
  setMenuOpen: (isOpen: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  isMenuOpen: false,
  setMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
}));
