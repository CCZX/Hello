import { CustomResponseCodeEnum } from '@hello/common';
import { Body, Controller, Get, HttpException, Param, Post, Query, Request } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddFriendDTO } from './friend.dto';
import { FriendService } from './friend.service';

@ApiTags('好友接口')
@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @ApiOperation({ summary: '添加好友' })
  @Post('add')
  async add(@Body() dto: AddFriendDTO) {
    return this.friendService.add(dto);
  }

  @ApiOperation({ summary: '获取用户的好友' })
  @Get('get')
  async get(@Query() query: { id: string }, @Request() req) {
    const userId = Number(query.id || req.userId);
    if (Number.isNaN(userId)) {
      throw new HttpException('error', CustomResponseCodeEnum.fail);
    }
    return await this.friendService.get(userId);
  }
}
