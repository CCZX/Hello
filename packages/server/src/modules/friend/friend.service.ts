import { AddFriendTypeEnum } from '@hello/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FriendEntity } from './entities/friend.entity';
import { AddFriendDTO } from './friend.dto';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(FriendEntity) private readonly friendRepository: Repository<FriendEntity>,
  ) {}

  async add(dto: AddFriendDTO) {
    const { userAId, userBId, userCId, addType = AddFriendTypeEnum.search } = dto;

    const friendEntity = new FriendEntity();
    friendEntity;
  }
}
