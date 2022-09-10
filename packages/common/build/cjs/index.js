"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTragetEnum = exports.MessageTypeEnum = exports.CustomResponseCodeEnum = exports.AddFriendTypeEnum = exports.constant = void 0;
const constant_1 = __importDefault(require("./constant"));
exports.constant = constant_1.default;
// 添加用户为好友的方式
var AddFriendTypeEnum;
(function (AddFriendTypeEnum) {
    AddFriendTypeEnum[AddFriendTypeEnum["search"] = 0] = "search";
    AddFriendTypeEnum[AddFriendTypeEnum["phoneNumber"] = 1] = "phoneNumber";
    AddFriendTypeEnum[AddFriendTypeEnum["group"] = 2] = "group";
    AddFriendTypeEnum[AddFriendTypeEnum["QRCode"] = 3] = "QRCode";
    AddFriendTypeEnum[AddFriendTypeEnum["recommend"] = 4] = "recommend";
})(AddFriendTypeEnum = exports.AddFriendTypeEnum || (exports.AddFriendTypeEnum = {}));
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
var MessageTragetEnum;
(function (MessageTragetEnum) {
    MessageTragetEnum[MessageTragetEnum["friend"] = 0] = "friend";
    MessageTragetEnum[MessageTragetEnum["group"] = 1] = "group";
})(MessageTragetEnum = exports.MessageTragetEnum || (exports.MessageTragetEnum = {}));
// ===== dto end =====
