import { FC, useEffect } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Store from './store';
import Login from './pages/login';
import Home from './pages/home';
import { WSManager } from './network/websocket';
import { switchThemeMode } from './utils/theme';
// import 'antd/dist/antd.variable.css';
// import 'antd/dist/antd.dark.css';
import './static/style/.variable.less';
import './static/style/.dark.less';
import './static/style/variable.less';
import Theme from './pages/components/theme';

const store = new Store();

const App: FC<{}> = () => {
  useEffect(() => {
    const ws = new WSManager();
    ws.init();

    switchThemeMode();
  }, []);

  ConfigProvider.config({
    theme: {
      primaryColor: '#128C7E',
      // errorColor: '#ff4d4f',
      // warningColor: '#faad14',
      // successColor: '#52c41a',
      // infoColor: '#1890ff',
    },
    prefixCls: 'hello',
  });

  return (
    <Provider store={store}>
      <ConfigProvider prefixCls='hello'>
        <Theme />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
