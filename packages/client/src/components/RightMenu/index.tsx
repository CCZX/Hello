import React, { FC, PropsWithChildren } from 'react';

interface MenuItem {
  key: string;
  label: string;
  iconName: string;
  disabled?: boolean;
  danger?: boolean;
  containerCls?: string;
}

interface RightMenuProps {
  className?: string;
  menus: MenuItem[];
}

const RightMenu: FC<PropsWithChildren<RightMenuProps>> = (props) => {
  const { className, menus, children } = props;

  const onContextMenu = (e: React.MouseEvent) => {
    console.log('onContextMenu');
    e.preventDefault();
  };

  return (
    <div className={`${className} right-menu-able`} onContextMenu={onContextMenu}>
      {children}
    </div>
  );
};

export default RightMenu;
