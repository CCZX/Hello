import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/chat';
import Preview from './components/preview';
import './index.less';

interface HomeMainProps {}

const HomeMain: FC<HomeMainProps> = (props) => {
  return (
    <div className='home-main'>
      <Routes>
        <Route path='/message/:id' element={<Chat />} />
        <Route path='*' element={<Preview />} />
      </Routes>
    </div>
  );
};

export default HomeMain;
