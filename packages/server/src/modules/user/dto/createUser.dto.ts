import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDTO as ICreateUserDTO } from '@hello/common';

export class CreateUserDTO implements ICreateUserDTO {
  @ApiProperty({ description: '用户账号' })
  @IsNotEmpty({ message: '用户账号必传' })
  account: string;

  @ApiProperty({ description: '用户名称' })
  name: string;

  @ApiProperty({ description: '用户密码' })
  password: string;

  @ApiProperty({ description: '确认用户密码' })
  rePassword: string;

  @ApiProperty({ description: '用户头像' })
  avatar?: string;
}
