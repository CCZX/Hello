import { AddFriendTypeEnum, CustomResponseCodeEnum } from '@hello/common';
import { HttpException, Injectable } from '@nestjs/common';
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

    const exitA = await this.friendRepository.findOne({
      where: { user_a_id: userAId, user_b_id: userBId },
    });

    const exitB = await this.friendRepository.findOne({
      where: { user_a_id: userBId, user_b_id: userAId },
    });

    if (exitA || exitB) {
      throw new HttpException('error', CustomResponseCodeEnum.fail);
    }

    const friendEntity1 = new FriendEntity();
    friendEntity1.user_a_id = userAId;
    friendEntity1.user_b_id = userBId;
    friendEntity1.user_c_id = userCId;
    friendEntity1.send_user_id = userAId;
    friendEntity1.add_type = addType;

    const friendEntity2: FriendEntity = {
      ...friendEntity1,
      user_a_id: userBId,
      user_b_id: userAId,
    };

    await this.friendRepository.save(friendEntity1);
    await this.friendRepository.save(friendEntity2);

    return;
  }

  async get(userId: number) {
    // const fs = await this.friendRepository.find({
    //   relations: ['userB'],
    //   where: { user_a_id: userId }
    // })
    // return fs

    // const sql = await this.friendRepository
    //   .createQueryBuilder('friend')
    //   .select([
    //     "friend.id",
    //     "user.id",
    //     "user.account",
    //     "user.name",
    //     "user.avatar",
    //   ])
    //   .leftJoin('friend.info', 'user')
    //   .where("friend.user_a_id = :id", { id: userId })
    //   .getSql()

    // console.log(sql)

    const friends = await this.friendRepository
      .createQueryBuilder('friend')
      .select(['friend.id', 'user.id', 'user.account', 'user.name', 'user.avatar'])
      .leftJoin('friend.info', 'user')
      .where('friend.user_a_id = :id', { id: userId })
      .getMany();

    return friends;
  }
}
