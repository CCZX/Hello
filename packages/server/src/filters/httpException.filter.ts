import { Catch, ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { CustomResponseCodeEnum } from '@hello/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 请求上下文
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const errorMessage = exception.message || (status >= 500 ? 'Server error' : 'Client error');

    // response.status(status).json({
    //   retcode: status,
    //   message: exception.message,
    //   timestamp: new Date().toISOString(),
    //   path: request.url,
    //   data: exception.getResponse(),
    // });

    const errorResponse = {
      data: {},
      message: errorMessage,
      code: status,
    };

    // 设置返回的状态码， 请求头，发送错误信息
    response.status(200);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
