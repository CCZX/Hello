import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * friends group entity
 */
@Entity('friend_group')
export class FriendGroup {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * friend group name
   */
  @Column({ length: 20 })
  name: string;

  /**
   * sort by oreder
   */
  @Column({ type: 'int' })
  order: number;

  /**
   * number of friend group members
   */
  @Column({ type: 'int' })
  memberNumber: number;
}
