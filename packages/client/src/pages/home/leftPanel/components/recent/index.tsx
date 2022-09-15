import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RightMenu from '../../../../../components/RightMenu';
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

  return (
    <div className='left-panel__recent'>
      {firends.map((f) => {
        return (
          <RightMenu key={f.id} menus={[]}>
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
