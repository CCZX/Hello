import { useChatStore } from '@/store/chat';
import { formatAvatar } from '@/utils/common';
import { Avatar } from 'antd';
import { FC } from 'react';
import './index.less';

interface ChatHeaderProps {}

const ChatHeader: FC<ChatHeaderProps> = (props) => {
  const { userInfo } = useChatStore();

  if (!userInfo.id) {
    return null;
  }

  return (
    <div className='chat-header-conainer'>
      <div className='chat-info'>
        <Avatar size={48} shape='square' src={formatAvatar(userInfo.avatar)} />
        <div className='chat-info__right'>
          <div className='chat-info-title'>{userInfo.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
