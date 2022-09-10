import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('group_member')
export class GroupMemberEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  group_id: number;

  /**
   * group note name
   */
  @Column({ length: 20 })
  note: string;
}
