import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RightMenu, { MenuItem } from '../../../../../components/RightMenu';
import { getFriends } from '../../../../../network/http/friend';
import Conversation from '../../../../components/conversation';
import './index.less';

interface RecentProps {}

const Recent: FC<RecentProps> = (props) => {
  const [firends, setFriends] = useState<Friend[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    getFriends().then((res) => {
      setFriends(res.data);
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

  return (
    <div className='left-panel__recent'>
      {firends.map((f) => {
        return (
          <RightMenu key={f.id} menus={menus}>
            <Conversation
              id={f.id}
              avatar={f.info.avatar}
              title={f.info.name}
              onClick={() => nav(`/home/message/${f.id}`)}
            />
          </RightMenu>
        );
      })}
    </div>
  );
};

export default Recent;
