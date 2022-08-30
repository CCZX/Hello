import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { JWT_SECRET } from 'config/conf';
import { JwtStrategy } from './strategies/jwt.strategy';

const jwtModule = JwtModule.register({
  secret: JWT_SECRET,
  signOptions: { expiresIn: '1h' },
});

@Module({
  imports: [UserModule, PassportModule, jwtModule],
  exports: [],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
