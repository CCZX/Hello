import { FC, useEffect } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Store from './store';
import { WSManager } from './ws';
import Login from './pages/login';
import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';

const store = new Store();

const App: FC<{}> = () => {
  useEffect(() => {
    const ws = new WSManager();
    ws.init();
  }, []);

  ConfigProvider.config({
    theme: {
      primaryColor: '#ff4d4f',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    },
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <div className='app'></div>
    </Provider>
  );
};

export default App;
