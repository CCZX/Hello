import { FC } from 'react';
import HomeLeftPanel from './leftPanel';
import HomeMain from './main';
import './index.less';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <div className='home-page'>
      <HomeLeftPanel />
      <HomeMain />
    </div>
  );
};

export default Home;
