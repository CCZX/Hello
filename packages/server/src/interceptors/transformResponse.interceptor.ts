import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CustomResponseCodeEnum } from '@hello/common';
import { Response } from 'src/interface/common';

export class TransformResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<any>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data: data || [],
          code: CustomResponseCodeEnum.success,
          message: '请求成功',
        };
      }),
    );
  }
}
