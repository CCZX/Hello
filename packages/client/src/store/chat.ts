import create from 'zustand';

interface ChatStoreState {
  userInfo: UserInfo;

  setUserInfo: (userInfo: UserInfo) => void;
}

export const useChatStore = create<ChatStoreState>((set) => ({
  userInfo: {} as UserInfo,

  setUserInfo(userInfo: UserInfo) {
    set(() => ({ userInfo }));
  },
}));
