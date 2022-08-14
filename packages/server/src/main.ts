import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_BASE_HOST, SERVER_PORT } from '@hello/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost', 'http://localhost:3000'],
      credentials: true,
    },
  });

  await app.listen(4000);
}

bootstrap();
