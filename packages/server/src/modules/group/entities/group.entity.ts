import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * group account
   */
  @Column({ unique: true })
  account: string;

  /**
   * group owner id
   */
  @Column()
  owner: number;

  /**
   * group name
   */
  @Column({ length: 50 })
  name: string;

  @Column({ default: '' })
  avatar: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}
