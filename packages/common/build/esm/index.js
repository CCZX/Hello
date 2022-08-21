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
