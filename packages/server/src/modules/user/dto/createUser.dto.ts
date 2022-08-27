import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ description: '用户账号' })
  @IsNotEmpty({ message: '用户账号必传' })
  account: string;

  @ApiProperty({ description: '用户名称' })
  name: string;

  @ApiProperty({ description: '用户密码' })
  password: string;
}
