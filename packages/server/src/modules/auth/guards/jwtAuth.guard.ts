import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { RolesTypeEnum, ROLE_META_DATA_KEY } from 'src/constants/roles';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride<RolesTypeEnum[]>(ROLE_META_DATA_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('roles', roles);

    if (roles.includes(RolesTypeEnum.open)) {
      console.log('skip');
      return true;
    }

    return super.canActivate(context);
  }
}
