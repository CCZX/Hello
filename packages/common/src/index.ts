import constant from './constant';

export { constant };

// 添加用户为好友的方式
export enum AddFriendTypeEnum {
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
  unAuthorization = 401, // 没有权限
}

export enum MessageTypeEnum {
  text = 0,
  image = 1,
  textAndImage = 2,
}

export enum MessageTragetEnum {
  friend = 0,
  group = 1,
}

export interface Message {
  id: number;
  /**
   * message sender id
   */
  from: string | number;
  /**
   * message receiver id
   */
  to: string | number;
  /**
   * message send time
   */
  at: number;
  type: MessageTypeEnum;
  text: string;
  /**
   * is read message
   * 0 || 1
   */
  isRead: number;
  /**
   * target of message
   * exp:
   * 1. friend message
   * 2. group message
   */
  target: MessageTragetEnum;
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
