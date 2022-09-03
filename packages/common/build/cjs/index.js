"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTypeEnum = exports.CustomResponseCodeEnum = exports.AddUserTypeEnum = exports.constant = void 0;
const constant_1 = __importDefault(require("./constant"));
exports.constant = constant_1.default;
// 添加用户为好友的方式
var AddUserTypeEnum;
(function (AddUserTypeEnum) {
    AddUserTypeEnum[AddUserTypeEnum["search"] = 0] = "search";
    AddUserTypeEnum[AddUserTypeEnum["phoneNumber"] = 1] = "phoneNumber";
    AddUserTypeEnum[AddUserTypeEnum["group"] = 2] = "group";
    AddUserTypeEnum[AddUserTypeEnum["QRCode"] = 3] = "QRCode";
    AddUserTypeEnum[AddUserTypeEnum["recommend"] = 4] = "recommend";
})(AddUserTypeEnum = exports.AddUserTypeEnum || (exports.AddUserTypeEnum = {}));
// 自定义状态码
var CustomResponseCodeEnum;
(function (CustomResponseCodeEnum) {
    CustomResponseCodeEnum[CustomResponseCodeEnum["success"] = 200] = "success";
    CustomResponseCodeEnum[CustomResponseCodeEnum["fail"] = -200] = "fail";
    CustomResponseCodeEnum[CustomResponseCodeEnum["unAuthorization"] = 401] = "unAuthorization";
})(CustomResponseCodeEnum = exports.CustomResponseCodeEnum || (exports.CustomResponseCodeEnum = {}));
var MessageTypeEnum;
(function (MessageTypeEnum) {
    MessageTypeEnum[MessageTypeEnum["text"] = 0] = "text";
    MessageTypeEnum[MessageTypeEnum["image"] = 1] = "image";
    MessageTypeEnum[MessageTypeEnum["textAndImage"] = 2] = "textAndImage";
})(MessageTypeEnum = exports.MessageTypeEnum || (exports.MessageTypeEnum = {}));
// ===== dto end =====
