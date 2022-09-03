import { FC } from 'react';
import Conversation from '../../components/conversation';
import './index.less';

interface HomeLeftPanelProps {}

const HomeLeftPanel: FC<HomeLeftPanelProps> = (props) => {
  return (
    <div className='home-left-panel'>
      <Conversation id='' avatar='' title='t' />
      <Conversation id='' avatar='' title='t' />
      <Conversation id='' avatar='' title='t' />
      <Conversation id='' avatar='' title='t' />
    </div>
  );
};

export default HomeLeftPanel;
