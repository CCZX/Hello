import { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Login from './pages/login';
import Home from './pages/home';
import { WSManager } from './network/websocket';
import { getBrandColor, changeThemeMode } from './utils/theme';
import Theme from './pages/components/theme';
import { useSystemThemeModeChange } from './hooks/useSystemThemeModeChange';
// import 'antd/dist/antd.variable.css';
// import 'antd/dist/antd.dark.css';
import './static/style/.variable.less';
import './static/style/.dark.less';
import './static/style/variable.less';
import './static/style/replenish.less';

const App: FC<{}> = () => {
  useEffect(() => {
    const ws = new WSManager();
    ws.init();

    changeThemeMode();
  }, []);

  useSystemThemeModeChange();

  ConfigProvider.config({
    theme: {
      primaryColor: getBrandColor(),
    },
    prefixCls: 'hello',
  });

  return (
    <ConfigProvider prefixCls='hello'>
      <Theme />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/*' element={<Home />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
