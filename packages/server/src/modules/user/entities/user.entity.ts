import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * user account
   */
  @Column({ unique: true })
  account: string;

  /**
   * user name
   */
  @Column({ length: 10, default: '' })
  name: string;

  @Column({ length: 20 })
  password: string;

  @Column({ length: 500, default: '' })
  avatar: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_login_time: number;
}
