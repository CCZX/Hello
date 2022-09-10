import { AddFriendTypeEnum } from '@hello/common';
import { ApiProperty } from '@nestjs/swagger';

export class AddFriendDTO {
  @ApiProperty({ description: '主动发起添加好友的用户 id' })
  userAId: string;

  @ApiProperty({ description: '被添加好友的用户 id' })
  userBId: string;

  @ApiProperty({ description: '中间人 id' })
  userCId?: string;

  @ApiProperty({ description: '添加方式' })
  addType: AddFriendTypeEnum;
}
