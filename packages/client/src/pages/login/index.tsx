import { FC, useState } from 'react';
import { Button, Input, message, Tabs } from 'antd';
import { CreateUserDTO, CustomResponseCodeEnum, LoginUserDTO } from '@hello/common';
import Logo from '../../components/Logo';
import { create, login } from '../../network/http/uesr';
import './index.less';
import { genRandomAvatar } from '../../utils/common';

const { TabPane } = Tabs;

interface LoginProps {}

const Login: FC<LoginProps> = (props) => {
  const [loginDTO, setLoginDTO] = useState<LoginUserDTO>({} as LoginUserDTO);
  const [createDTO, setCreateDTO] = useState<CreateUserDTO>({} as CreateUserDTO);

  const onLogin = async () => {
    const data = await login(loginDTO);
    if (data.code === CustomResponseCodeEnum.success) {
      window.location.href = `${window.location.origin}/home`;
      return;
    }

    message.error(data.message);
  };

  const onCreate = () => {
    const avatar = genRandomAvatar();
    create({ ...createDTO, avatar });
  };

  return (
    <div className='login-page'>
      <div className='login-page__content'>
        <Logo size={200} />

        <Tabs centered className='tabs' defaultActiveKey='2'>
          <TabPane disabled tab='中文' key='1'></TabPane>
          <TabPane tab='登录' key='2'>
            <div className='login-page__form'>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='账号'
                  value={loginDTO.account}
                  onChange={(v) => setLoginDTO({ ...loginDTO, account: v.target.value })}
                />
              </div>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='密码'
                  value={loginDTO.password}
                  onChange={(v) => setLoginDTO({ ...loginDTO, password: v.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && onLogin()}
                />
              </div>
              <div className='item'>
                <Button block type='primary' onClick={onLogin}>
                  登录
                </Button>
              </div>
            </div>
          </TabPane>

          <TabPane tab='注册' key='3'>
            <div className='login-page__form'>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='账号'
                  value={createDTO.account}
                  onChange={(v) => setCreateDTO({ ...createDTO, account: v.target.value })}
                />
              </div>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='昵称'
                  value={createDTO.name}
                  onChange={(v) => setCreateDTO({ ...createDTO, name: v.target.value })}
                />
              </div>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='密码'
                  value={createDTO.password}
                  onChange={(v) => setCreateDTO({ ...createDTO, password: v.target.value })}
                />
              </div>
              <div className='item'>
                <Input
                  size='large'
                  placeholder='确认密码'
                  value={createDTO.rePassword}
                  onChange={(v) => setCreateDTO({ ...createDTO, rePassword: v.target.value })}
                />
              </div>
              <div className='item'>
                <Button block type='primary' onClick={onCreate}>
                  注册
                </Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
