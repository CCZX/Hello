import { useChatStore } from '@/store/chat';
import { FC } from 'react';
import ChatContent from './content';
import ChatHeader from './header';
import './index.less';
import ChatFooter from './footer';

interface ChatProps {}

const Chat: FC<ChatProps> = (props) => {
  const { userInfo } = useChatStore();

  if (!userInfo) {
    return null;
  }

  return (
    <div className='chat-container'>
      <ChatHeader />
      <ChatContent />
      <ChatFooter />
    </div>
  );
};

export default Chat;
