import { SetMetadata } from '@nestjs/common';
import { RolesTypeEnum, ROLE_META_DATA_KEY } from 'src/constants/roles';

/**
 * set the control role, default is RolesTypeEnum.normalUser
 * @param roles
 */
export function setRole(roles: RolesTypeEnum[]) {
  return SetMetadata(ROLE_META_DATA_KEY, roles);
}
