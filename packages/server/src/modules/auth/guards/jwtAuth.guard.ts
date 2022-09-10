import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
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

    if (roles && roles.includes(RolesTypeEnum.open)) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err, user, _, context: ExecutionContext) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    // 请求信息里添加上 user id
    const req = context.switchToHttp().getRequest();
    req.userId = user.id;
    return user;
  }
}
