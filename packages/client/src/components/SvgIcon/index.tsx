import { FC } from 'react';
import { useGlobalStore } from '../../store/global';

interface SvgIconProps {
  name: string;
  size?: number;
  color?: string;
  opacity?: number;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { showThemeMode } = useGlobalStore();

  const defaultColor = showThemeMode === 'dark' ? '#fff' : '#000';

  const { name, size = 24, color, opacity = 1 } = props;

  return (
    <div className='svg-icon-container' style={{ display: 'flex', opacity }}>
      <svg width={size} height={size}>
        <use href={`#icon-${name}`} fill={color || defaultColor} />
      </svg>
    </div>
  );
};

export default SvgIcon;
