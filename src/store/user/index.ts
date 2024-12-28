import { create } from 'zustand';

interface UserInfoContextState {
  userId: string;
  name: string;
  role: string;
  profileImageUrl: string;
  updateUserInfo: (userInfo: Omit<UserInfoContextState, 'updateUserInfo'>) => void;
}

export const useUserInfoStore = create<UserInfoContextState>((set) => ({
  userId: '',
  name: '',
  role: '',
  profileImageUrl: '',

  updateUserInfo: ({ userId, name, role, profileImageUrl }: Omit<UserInfoContextState, 'updateUserInfo'>) =>
    set({
      userId,
      name,
      role,
      profileImageUrl,
    }),
}));
