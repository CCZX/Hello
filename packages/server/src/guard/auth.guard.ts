import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log('==guard==');
    const req = context.switchToHttp().getRequest();
    const token = context.switchToRpc().getData();

    return true;
  }
}
