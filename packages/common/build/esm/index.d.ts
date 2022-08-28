import constant from './constant';
export { constant };
export declare enum AddUserTypeEnum {
    search = 0,
    phoneNumber = 1,
    group = 2,
    QRCode = 3,
    recommend = 4
}
export declare enum CustomResponseCodeEnum {
    success = 200,
    fail = -200,
    noPermission = 401
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
