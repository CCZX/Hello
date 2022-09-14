import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesTypeEnum } from 'src/constants/roles';
import { setRole } from 'src/decorates/SetRole';
import { CreateUserDTO } from './dto/createUser.dto';
import { GetUserInfoDTO, SearchUserDTO } from './user.dto';
import { UserService } from './user.service';

@ApiTags('用户接口')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '新建用户' })
  @setRole([RolesTypeEnum.open])
  @Post('create')
  async create(@Body() dto: CreateUserDTO) {
    return this.userService.create(dto);
  }

  @ApiOperation({ summary: '获取用户详情' })
  @Get('info')
  async findOne(@Query() query: GetUserInfoDTO, @Request() req: ExpressRequest) {
    const userId = Number(query.id || req.userId);
    return this.userService.findOneById(userId);
  }

  @ApiOperation({ summary: '搜索用户' })
  @Get('search')
  async search(@Param() query: SearchUserDTO) {
    console.log('query', query);
    return 'ok';
  }
}
