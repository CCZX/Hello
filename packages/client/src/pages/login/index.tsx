import { FC } from 'react';
import { Button, Input, Switch } from 'antd';
import Logo from '../../components/Logo';
import { setThemeMode } from '../../utils/common';
import './index.less';

interface LoginProps {}

const Login: FC<LoginProps> = (props) => {
  return (
    <div className='login-page'>
      <div className='login-page__content'>
        <Logo width={200} height={200} />

        <div className='login-page__form'>
          <Input />
          <Button>hello</Button>
          <Switch
            onChange={(e) => setThemeMode(e ? 'dark' : 'light')}
            checkedChildren='开启'
            unCheckedChildren='关闭'
            defaultChecked
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
