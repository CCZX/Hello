import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * friend group member entity
 */
@Entity('friend_group_member')
export class FriendGroupMemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * friend group id
   */
  @Column()
  friend_gruop_id: number;

  /**
   * friend user id
   */
  @Column()
  user_id: number;
}
