import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { constant } from '@hello/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/httpException.filter';
import { TransformResponseInterceptor } from './interceptors/transformResponse.interceptor';

function setApiDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Hello 聊天系统')
    .setDescription('Hello 聊天系统接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
}

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

  setApiDocs(app);

  await app.listen(4000);
}

bootstrap();
