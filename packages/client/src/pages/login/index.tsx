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
          <div className='item'>
            <Input size='large' />
          </div>
          <div className='item'>
            <Input size='large' />
          </div>
          <div className='item'>
            <Button block type='primary'>
              登录
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
