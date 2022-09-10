import constant from './constant';
export { constant };
// 添加用户为好友的方式
export var AddFriendTypeEnum;
(function (AddFriendTypeEnum) {
    AddFriendTypeEnum[AddFriendTypeEnum["search"] = 0] = "search";
    AddFriendTypeEnum[AddFriendTypeEnum["phoneNumber"] = 1] = "phoneNumber";
    AddFriendTypeEnum[AddFriendTypeEnum["group"] = 2] = "group";
    AddFriendTypeEnum[AddFriendTypeEnum["QRCode"] = 3] = "QRCode";
    AddFriendTypeEnum[AddFriendTypeEnum["recommend"] = 4] = "recommend";
})(AddFriendTypeEnum || (AddFriendTypeEnum = {}));
// 自定义状态码
export var CustomResponseCodeEnum;
(function (CustomResponseCodeEnum) {
    CustomResponseCodeEnum[CustomResponseCodeEnum["success"] = 200] = "success";
    CustomResponseCodeEnum[CustomResponseCodeEnum["fail"] = -200] = "fail";
    CustomResponseCodeEnum[CustomResponseCodeEnum["unAuthorization"] = 401] = "unAuthorization";
})(CustomResponseCodeEnum || (CustomResponseCodeEnum = {}));
export var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum[MessageTypeEnum["text"] = 0] = "text";
    MessageTypeEnum[MessageTypeEnum["image"] = 1] = "image";
    MessageTypeEnum[MessageTypeEnum["textAndImage"] = 2] = "textAndImage";
})(MessageTypeEnum || (MessageTypeEnum = {}));
export var MessageTragetEnum;
(function (MessageTragetEnum) {
    MessageTragetEnum[MessageTragetEnum["friend"] = 0] = "friend";
    MessageTragetEnum[MessageTragetEnum["group"] = 1] = "group";
})(MessageTragetEnum || (MessageTragetEnum = {}));
// ===== dto end =====
