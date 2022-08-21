import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserEntity')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  passworld: string;

  @Column({ length: 500 })
  avatar: string;

  @Column()
  lastLoginTime: number;
}
