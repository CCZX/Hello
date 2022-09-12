import { FC } from 'react';

interface SvgIconProps {
  name: string;
  size?: number;
  color?: string;
  opacity?: number;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { name, size = 24, color = '#000', opacity = 1 } = props;

  const symbolId = `#icon-${name}`;

  return (
    <div className='svg-icon-container' style={{ display: 'flex', opacity }}>
      <svg width={size} height={size}>
        <use href={symbolId} fill={color} />
      </svg>
    </div>
  );
};

export default SvgIcon;
