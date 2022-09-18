import { useChatStore } from '@/store/chat';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RightMenu, { MenuItem } from '../../../../../components/RightMenu';
import { getFriends } from '../../../../../network/http/friend';
import Conversation from '../../../../components/conversation';
import './index.less';

interface RecentProps {}

const Recent: FC<RecentProps> = (props) => {
  const nav = useNavigate();
  const params = useParams();

  console.log(params, params);

  const { setUserInfo } = useChatStore();
  const [firends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    getFriends().then((res) => {
      setFriends(res.data);

      if (window.location.pathname.includes('home/message')) {
        const pathnameArr = window.location.pathname.split('/');
        const useId = pathnameArr[pathnameArr.length - 1];

        setUserInfo(res.data.find((item) => item.info.id === Number(useId))?.info!);
      }
    });
  }, []);

  const menus: MenuItem[] = [
    {
      key: 'unread',
      label: '标记为未读',
      iconName: 'unread',
    },
    {
      key: 'pin',
      label: '置顶',
      iconName: 'pin',
    },
    {
      key: 'bottom',
      label: '置底',
      iconName: 'bottom',
    },
    {
      key: 'delete',
      label: '删除',
      iconName: 'delete',
      danger: true,
    },
  ];

  const onClick = (user: UserInfo) => {
    nav(`/home/message/${user.id}`);
    setUserInfo(user);
  };

  return (
    <div className='left-panel__recent'>
      {firends.map((f) => {
        return (
          <RightMenu key={f.id} menus={menus}>
            <Conversation
              id={f.id}
              avatar={f.info.avatar}
              title={f.info.name}
              onClick={() => onClick(f.info)}
            />
          </RightMenu>
        );
      })}
    </div>
  );
};

export default Recent;
