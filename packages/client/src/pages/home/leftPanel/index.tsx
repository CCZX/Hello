import { FC } from 'react';
import Recent from './components/recent';
import './index.less';

interface HomeLeftPanelProps {}

const HomeLeftPanel: FC<HomeLeftPanelProps> = (props) => {
  return (
    <div className='home-left-panel'>
      <div className='home-left-panel__header'></div>

      <div className='home-left-panel__search'></div>

      <Recent />
    </div>
  );
};

export default HomeLeftPanel;
