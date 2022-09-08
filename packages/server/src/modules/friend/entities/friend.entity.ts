import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * if userA initiates add userB, the databse will record two data,
 * respectively using userA and useB as party A (user_a_id),
 * using userA as sender (send_user_id)
 */
@Entity('friend')
export class UserFriend {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * party a, is you
   */
  @Column()
  user_a_id: number;

  /**
   * pary b, you firend
   */
  @Column()
  user_b_id: number;

  /**
   * middleman, shares one to another
   */
  @Column()
  user_c_id: number;

  /**
   * the initiates adding friends userId
   */
  @Column()
  send_user_id: number;

  /**
   * friend note name
   */
  @Column({ length: 500, nullable: true })
  note: string;

  /**
   * friend's group id
   */
  @Column({ nullable: true })
  group_id: number;

  /**
   * top friend
   */
  @Column({ default: 0 })
  is_top: number;

  /**
   * bottom friend
   */
  @Column({ default: 0 })
  is_bottom: number;

  /**
   * how add?
   */
  @Column()
  type: number;
}
