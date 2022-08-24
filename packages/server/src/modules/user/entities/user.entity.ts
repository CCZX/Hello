import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  account: string; // 唯一，使用 account 登录

  @Column({ length: 10 })
  name: string;

  @Column({ length: 20 })
  password: string;

  @Column({ length: 500, default: '' })
  avatar: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_login_time: number;
}
