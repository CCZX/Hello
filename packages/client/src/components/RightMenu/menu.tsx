import { FC } from 'react';
import ReactDOM from 'react-dom';
import { MenuItem, RIGHT_MENU_CLS } from '.';
import SvgIcon from '../SvgIcon';

interface MenuProps {
  x: number;
  y: number;
  target: Element;
  menus: MenuItem[];
}

const Menu: FC<MenuProps> = (props) => {
  const { x, y, target, menus } = props;

  return ReactDOM.createPortal(
    <div className={RIGHT_MENU_CLS} style={{ left: x, top: y }}>
      {menus.map(({ key, label, iconName, danger }) => {
        return (
          <div key={key} className={`right-menu-item  ${danger ? 'danger' : ''}`}>
            {iconName && (
              <div className='right-menu-item__icon'>
                <SvgIcon name={iconName} color={danger ? 'var(--hello-error-color)' : ''} />
              </div>
            )}
            <div className='right-menu-item__text'>{label}</div>
          </div>
        );
      })}
    </div>,
    target,
  );
};

export default Menu;
