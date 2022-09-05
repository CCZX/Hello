import { MessageTragetEnum, MessageTypeEnum } from '@hello/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class MessageEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  /**
   * sender
   */
  @Column()
  from: number;

  /**
   * receiver
   */
  @Column()
  to: number;

  /**
   * message send time
   */
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  at: number;

  @Column({ type: 'int', default: MessageTypeEnum.text })
  type: MessageTypeEnum;

  /**
   * text content
   */
  @Column({ type: 'text' })
  text: string;

  /**
   * is read message
   */
  @Column({ type: 'int', default: 0 })
  is_read: number;

  /**
   * target of message
   * exp:
   * 1. friend message
   * 2. group message
   */
  @Column({ type: 'int', default: MessageTragetEnum.friend })
  target: number;
}
