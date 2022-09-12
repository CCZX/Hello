import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLeftPanel from './leftPanel';
import HomeMain from './main';
import './index.less';
import Preview from './main/components/preview';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <div className='home-page'>
      <HomeLeftPanel />
      <Routes>
        <Route path='/message/:id' element={<HomeMain />} />
        <Route path='*' element={<Preview />} />
      </Routes>
    </div>
  );
};

export default Home;
