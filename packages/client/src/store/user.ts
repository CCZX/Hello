import create from 'zustand';

interface UserStoreState {
  userInfo: UserInfo;

  setUserInfo: (userInfo: UserInfo) => void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  userInfo: {} as UserInfo,

  setUserInfo(userInfo: UserInfo) {
    set(() => ({ userInfo }));
  },
}));
