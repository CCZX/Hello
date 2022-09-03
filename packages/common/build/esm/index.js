import constant from './constant';
export { constant };
// 添加用户为好友的方式
export var AddUserTypeEnum;
(function (AddUserTypeEnum) {
    AddUserTypeEnum[AddUserTypeEnum["search"] = 0] = "search";
    AddUserTypeEnum[AddUserTypeEnum["phoneNumber"] = 1] = "phoneNumber";
    AddUserTypeEnum[AddUserTypeEnum["group"] = 2] = "group";
    AddUserTypeEnum[AddUserTypeEnum["QRCode"] = 3] = "QRCode";
    AddUserTypeEnum[AddUserTypeEnum["recommend"] = 4] = "recommend";
})(AddUserTypeEnum || (AddUserTypeEnum = {}));
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
// ===== dto end =====
