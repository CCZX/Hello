import { Body, Controller, Post, Response } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './dto/createUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';
import { UserService } from './user.service';

@ApiTags('用户接口')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '新建用户' })
  @Post('create')
  async create(@Body() dto: CreateUserDTO) {
    return this.userService.create(dto);
  }

  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() dto: LoginUserDTO) {
    return this.userService.login(dto);
  }
}
