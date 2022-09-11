import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddFriendDTO } from './friend.dto';
import { FriendService } from './friend.service';

@ApiTags('好友接口')
@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Post('add')
  async add(@Body() dto: AddFriendDTO) {
    return this.friendService.add(dto);
  }
}
