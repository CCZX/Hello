import { CreateUserDTO, LoginUserDTO } from '@hello/common';
import { get, post } from './request/methods';

/**
 *
 * @param dto
 * @returns
 */
export function create(dto: CreateUserDTO) {
  return post<CreateUserDTO, {}>({
    url: '/user/create',
    data: dto,
  });
}

/**
 *
 * @param dto
 * @returns
 */
export function login(dto: LoginUserDTO) {
  return post<LoginUserDTO, {}>({
    url: '/auth/login',
    data: dto,
  });
}

/**
 *
 * @param id
 * @returns
 */
export function getUserInfo(dto?: { id: string }) {
  return get<{ id: string }, UserInfo>({
    url: '/user/info',
    data: dto,
  });
}
