import { CreateUserDTO, LoginUserDTO } from '@hello/common';
import { post } from './request';

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
