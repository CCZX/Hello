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

// 自定义状态码
export enum CustomResponseCodeEnum {
  success = 200, // 处理成功
  fail = -200, // 处理失败
  noPermission = 401, // 没有权限
}

// ===== dto start... =====

export declare interface CreateUserDTO {
  account: string;
  name: string;
  password: string;
  rePassword: string;
  avatar?: string;
}

export declare interface LoginUserDTO {
  account: string;
  password: string;
}

// ===== dto end =====
