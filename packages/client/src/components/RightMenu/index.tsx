import React, { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import Menu from './menu';
import './index.less';

export interface MenuItem {
  key: string;
  label: string;
  iconName?: string;
  disabled?: boolean;
  danger?: boolean;
}

interface RightMenuProps {
  hiddenMenuAfterClick?: boolean;
  className?: string;
  menus: MenuItem[];
  getContainer?: () => HTMLElement;
}

export const RIGHT_MENU_CONTAINRT_CLS = 'right-menu-container';

export const RIGHT_MENU_CLS = 'right-menu';

const RightMenu: FC<PropsWithChildren<RightMenuProps>> = (props) => {
  const { hiddenMenuAfterClick, className, menus, getContainer, children } = props;

  const [visible, setVisible] = useState(false);
  const [menuXY, setMenuXY] = useState({ x: 0, y: 0 });
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const target = getContainer ? getContainer() : menuContainerRef.current!;

  const onContextMenu = (e: React.MouseEvent) => {
    if (!menuContainerRef.current) {
      return;
    }
    e.preventDefault();
    const { x, y } = menuContainerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    setMenuXY({ x: clientX - x, y: clientY - y });
    setVisible(true);
  };

  useEffect(() => {
    const onClick = (e: PointerEvent) => {
      if (hiddenMenuAfterClick) {
        setVisible(false);
        return;
      }

      const rightMenu = document.querySelector(`.${RIGHT_MENU_CLS}`);
      if (rightMenu?.contains(e.target as any)) {
        return;
      }

      setVisible(false);
    };

    document.addEventListener('pointerdown', onClick);

    return () => {
      document.removeEventListener('pointerdown', onClick);
    };
  }, []);

  return (
    <div
      ref={menuContainerRef}
      className={`${className} ${RIGHT_MENU_CONTAINRT_CLS}`}
      onContextMenu={onContextMenu}
    >
      {children}
      {visible && <Menu x={menuXY.x} y={menuXY.y} target={target} menus={menus} />}
    </div>
  );
};

export default RightMenu;
