import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constant } from '@hello/common';
import { HttpExceptionFilter } from './filters/httpException.filter';
import { TransformResponseInterceptor } from './interceptors/transformResponse.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost', constant.CLIENT_BASE_HOST],
      credentials: true,
    },
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformResponseInterceptor());

  await app.listen(4000);
}

bootstrap();
