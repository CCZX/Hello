import constant from './constant';
export { constant };
export declare enum AddFriendTypeEnum {
    search = 0,
    phoneNumber = 1,
    group = 2,
    QRCode = 3,
    recommend = 4
}
export declare enum CustomResponseCodeEnum {
    success = 200,
    fail = -200,
    unAuthorization = 401
}
export declare enum MessageTypeEnum {
    text = 0,
    image = 1,
    textAndImage = 2
}
export declare enum MessageTragetEnum {
    friend = 0,
    group = 1
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
