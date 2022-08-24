import constant from './constant';

export { constant };

// 添加用户为好友的方式
export enum AddUserTypeEnum {
  search = 0,
  phoneNumber = 1,
  group = 2, // 通过群聊添加
  QRCode = 3, // 扫描二维码
  recommend = 4, // 其他好友推荐
}

// ===== dto start... =====

interface CreateUserDTO {
  account: string;
  name: string;
  password: string;
  avatar?: string;
}

// ===== dto end =====
