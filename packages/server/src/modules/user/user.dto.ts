import { ApiProperty } from '@nestjs/swagger';

export class SearchUserDTO {
  @ApiProperty({ description: '用户 id' })
  key: string;
}
