import { get } from './request/methods';

/**
 * 获取好友
 * @param userId
 * @returns
 */
export function getFriends(userId?: string) {
  return get<any, Friend[]>({
    url: '/friend/get',
    data: { userId },
  });
}
