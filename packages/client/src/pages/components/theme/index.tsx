import { FC } from 'react';
import { Switch } from 'antd';
import { useThemeModeState } from '../../../hooks/useThemeModeState';

interface ThemeProps {}

const Theme: FC<ThemeProps> = (props) => {
  const [themeMode, setThemeMode] = useThemeModeState();

  return (
    <div className='theme-container'>
      <Switch checked={themeMode === 'dark'} onChange={(e) => setThemeMode(e ? 'dark' : 'light')} />
    </div>
  );
};

export default Theme;
