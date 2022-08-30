import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddUserTypeEnum } from '@hello/common';

/**
 * user_a 主动添加 user_b
 */
@Entity('user_relation')
export class UserRelationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  user_a_id: string;

  @Column({ length: 500 })
  user_b_id: string;

  @Column({ length: 500 })
  user_c_id: string; // user_c 把 user_b 推荐给 user_a

  @Column()
  type: AddUserTypeEnum; // 添加好友的方式
}
