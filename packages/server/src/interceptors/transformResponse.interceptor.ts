import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CustomResponseCodeEnum } from '@hello/common';

export class TransformResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: CustomResponseCodeEnum.success,
          message: '请求成功',
        };
      }),
    );
  }
}
