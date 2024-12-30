import { create } from 'zustand';

interface TokenContextState {
  token: string;
  storeToken: (token: string) => void;
  deleteToken: () => void;
}

export const useTokenStore = create<TokenContextState>((set) => ({
  token: '',

  storeToken: (token: string) => set({ token }),
  deleteToken: () => set({ token: '' }),
}));
