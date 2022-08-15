import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { constant } from '@hello/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost', constant.CLIENT_BASE_HOST],
      credentials: true,
    },
  });

  await app.listen(4000);
}

bootstrap();
