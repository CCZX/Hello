import { FC } from 'react';
import { Input } from 'antd';
import Logo from '../../components/Logo';
import './index.less';

interface LoginProps {}

const Login: FC<LoginProps> = (props) => {
  return (
    <div className='login-page'>
      <div className='login-page__content'>
        <Logo width={200} height={200} />

        <div className='login-page__form'>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Login;
