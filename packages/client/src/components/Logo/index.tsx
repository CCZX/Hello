import { FC } from 'react';
import LogoSVG from './../../static/images/Logo.svg';

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({ width = 100, height = 100 }) => {
  return <img width={width} height={height} src={LogoSVG} />;
};

export default Logo;
