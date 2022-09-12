import { FC } from 'react';
import Conversation from '../../components/conversation';
import './index.less';

interface HomeLeftPanelProps {}

const HomeLeftPanel: FC<HomeLeftPanelProps> = (props) => {
  return (
    <div className='home-left-panel'>
      <div className='home-left-panel__header'></div>

      <div className='home-left-panel__search'></div>

      <Conversation
        id=''
        avatar='https://raw.githubusercontent.com/CCZX/Hello/master/static/image/7.png'
        title='Tom'
      />
      <Conversation
        id=''
        avatar='https://raw.githubusercontent.com/CCZX/Hello/master/static/image/8.png'
        title='Tony'
      />
      <Conversation
        id=''
        avatar='https://raw.githubusercontent.com/CCZX/Hello/master/static/image/9.png'
        title='Jack'
      />
      <Conversation
        id=''
        avatar='https://raw.githubusercontent.com/CCZX/Hello/master/static/image/10.png'
        title='Bolb'
      />
    </div>
  );
};

export default HomeLeftPanel;
