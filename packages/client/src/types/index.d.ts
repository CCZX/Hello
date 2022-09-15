declare interface UserInfo {
  id: number;
  account: string;
  name: string;
  avatar: string;
}

declare interface Friend {
  id: number;

  note?: string;

  isTop?: boolean;

  isBottom?: boolean;

  info: UserInfo;
}
