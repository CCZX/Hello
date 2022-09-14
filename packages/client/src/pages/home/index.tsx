import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLeftPanel from './leftPanel';
import HomeMain from './main';
import Preview from './main/components/preview';
import { getUserInfo } from '../../network/http/uesr';
import { useUserStore } from '../../store/user';
import { CustomResponseCodeEnum } from '@hello/common';
import './index.less';

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  const { setUserInfo } = useUserStore();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res.code === CustomResponseCodeEnum.success) {
        setUserInfo(res.data);
      }
    });
  }, []);
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
