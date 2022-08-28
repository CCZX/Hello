import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { CustomResponseCodeEnum } from '@hello/common';
import { LoginUserDTO } from './dto/loginUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(dto: CreateUserDTO) {
    const { account, name, password, rePassword } = dto;

    if (password !== rePassword) {
      throw new HttpException('两次密码不一致', CustomResponseCodeEnum.fail);
    }

    const user = await this.userRepository.findOne({
      where: { account: account },
    });

    if (user) {
      throw new HttpException('账号重复', CustomResponseCodeEnum.fail);
    }

    const userEntity = new UserEntity();
    userEntity.account = account;
    userEntity.name = name;
    userEntity.password = password;

    return this.userRepository.save(userEntity);
  }

  async login(dto: LoginUserDTO) {
    const { account, password } = dto;

    const user = await this.userRepository.findOne({
      where: { account: account },
    });

    if (!user || user.password !== password) {
      throw new HttpException('账号或密码错误', CustomResponseCodeEnum.fail);
    }

    return {};
  }
}
