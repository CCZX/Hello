import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MessageModule } from './modules/message/message.module';
import { UserModule } from './modules/user/user.module';

const libModules = [
  ConfigModule.forRoot({
    envFilePath: ['.env'],
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return {
        type: 'mysql',
        // .env 获取
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 3306), // 端口号
        username: configService.get('DB_USER', 'chenchao'), // 用户名
        password: configService.get('DB_PASSWORD', '123456'), // 密码
        database: configService.get('DB_DATABASE', 'Hello'), //数据库名
        // entities
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
      };
    },
  }),
];

const businessModules = [MessageModule, UserModule];

@Module({
  imports: [...libModules, ...businessModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
