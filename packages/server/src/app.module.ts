import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MessageModule } from './modules/message/message.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { FriendModule } from './modules/friend/friend.module';
import { GroupModule } from './modules/group/group.module';

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
        /**
         * .env | .env.prod
         */
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 3306),
        username: configService.get('DB_USER', 'chenchao'),
        password: configService.get('DB_PASSWORD', '123456'),
        database: configService.get('DB_DATABASE', 'Hello'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        /**
         * open will auto create database
         * sure to set the false in production environments
         */
        synchronize: false,
      };
    },
  }),
];

const businessModules = [MessageModule, UserModule, AuthModule, FriendModule, GroupModule];

@Module({
  imports: [...libModules, ...businessModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
