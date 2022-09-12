import { get } from './request/methods';

/**
 *
 * @param userId
 * @returns
 */
export function getFriends(userId?: string) {
  return get({
    url: '/friend/get',
    data: { userId },
  });
}
