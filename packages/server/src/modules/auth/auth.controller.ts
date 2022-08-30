import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserDTO } from '../user/dto/loginUser.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/localAuth.guard';

@ApiTags('权限接口')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '用户登录' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() _: LoginUserDTO, @Request() req) {
    return this.authService.login(req?.user);
  }
}
