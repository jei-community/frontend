import { create } from 'zustand';

import { Role } from '@/types/album';

interface UserInfoContextState {
  userId: string;
  name: string;
  role: Role;
  profileImageUrl: string;
  updateUserInfo: (userInfo: Omit<UserInfoContextState, 'updateUserInfo'>) => void;
}

export const useUserInfoStore = create<UserInfoContextState>((set) => ({
  userId: '',
  name: '',
  role: 'USER',
  profileImageUrl: '',

  updateUserInfo: ({ userId, name, role, profileImageUrl }: Omit<UserInfoContextState, 'updateUserInfo'>) =>
    set({
      userId,
      name,
      role,
      profileImageUrl,
    }),
}));
