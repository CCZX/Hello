import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(dto: CreateUserDTO) {
    const { name, password } = dto;

    // const user = await this.userRepository.findOne({
    //   where: {  }
    // })

    console.log(name, password);

    const userEntity = new UserEntity();
    userEntity.name = name;
    userEntity.password = password;

    return this.userRepository.save(userEntity);
  }
}
