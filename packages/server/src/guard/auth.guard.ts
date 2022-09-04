import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // const req = context.switchToHttp().getRequest();
    // const token = context.switchToRpc().getData()?.headers?.authorization;

    return true;
  }
}
