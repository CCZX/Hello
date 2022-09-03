import { FC } from 'react';
import { Avatar } from 'antd';
import { Message } from '@hello/common';
import './index.less';

interface ConversationProps {
  /**
   * your firend id
   */
  id: string;
  /**
   * user or group avatar
   */
  avatar: string;
  /**
   * user name or group name
   */
  title: string;
  /**
   * last message
   */
  message?: Message;
  /**
   * unread message number
   */
  unReadMessage?: number;
}

/**
 * 会话组件，点击可以和会话人、群进行聊天
 * @param props
 * @returns
 */
const Conversation: FC<ConversationProps> = (props) => {
  return (
    <div className='conversation-container'>
      <div className='conversation-avatar'>
        <Avatar size={60} shape='square' style={{ borderRadius: 8 }} />
      </div>
      <div className='conversation-content'>
        <div className='conversation-content__left'>
          <div className='conversation-content__left-title'>title</div>
          <div className='conversation-content__left-message'>message</div>
        </div>
        <div className='conversation-content__right'>
          <div className='conversation-content__right-time'>23:00</div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
