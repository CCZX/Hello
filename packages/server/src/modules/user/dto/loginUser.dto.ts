import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { LoginUserDTO as ILoginUserDTO } from '@hello/common';

export class LoginUserDTO implements ILoginUserDTO {
  @ApiProperty({ description: '用户账号' })
  @IsNotEmpty({ message: '用户账号必传' })
  account: string;

  @ApiProperty({ description: '用户密码' })
  @IsNotEmpty({ message: '用户密码必传' })
  password: string;
}
