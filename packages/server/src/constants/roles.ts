export const RoleTypes = {
  /**
   * 开放，表示没有登录也可以访问
   */
  open: 0,
  /**
   * 必须登录
   */
  normalUser: 1,
  /**
   * 管理员
   */
  admin: 2,
  /**
   * 超级管理员
   */
  superAdmin: 3,
  /**
   * 根用户
   */
  root: 4,
};

export enum RolesTypeEnum {
  /**
   * 开放，表示没有登录也可以访问
   */
  open = 0,
  /**
   * 普通用户
   */
  normalUser = 1,
  /**
   * 管理员
   */
  admin = 2,
  /**
   * 超级管理员
   */
  superAdmin = 3,
  /**
   * 根用户
   */
  root = 4,
}

export const ROLE_META_DATA_KEY = 'role_meta_data_key';
