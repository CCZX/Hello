import { FC } from 'react';
import { ConfigProvider, Radio, Tooltip } from 'antd';
import { useThemeModeState } from '../../../hooks/useThemeModeState';
import { useBrandColorState } from '../../../hooks/useThemeColorState';
import { PRESET_BRAND_COLOR } from '../../../constant/theme';
import './index.less';

interface ThemeProps {}

const themeModeList = [
  { label: <Tooltip title='浅色'>☀️</Tooltip>, value: 'light' },
  { label: <Tooltip title='深色'>🌛</Tooltip>, value: 'dark' },
  { label: <Tooltip title='跟随系统'>💻</Tooltip>, value: 'system' },
];

const Theme: FC<ThemeProps> = (props) => {
  const [themeMode, setThemeMode] = useThemeModeState();
  const [brandColor, setBrandColor] = useBrandColorState();

  const onChangeBrandColor = (color: string) => {
    setBrandColor(color);
    ConfigProvider.config({
      theme: {
        primaryColor: color,
      },
    });
  };

  return (
    <div className='theme-container'>
      <div className='preset-color-list'>
        {PRESET_BRAND_COLOR.map((item) => {
          return (
            <div
              key={item.value}
              className={`preset-color-item ${brandColor === item.value ? 'active' : ''}`}
              data-color={item.value}
              style={{ backgroundColor: item.value }}
              onClick={() => onChangeBrandColor(item.value)}
            />
          );
        })}
      </div>
      <Radio.Group
        options={themeModeList}
        onChange={(e) => setThemeMode(e?.target?.value || 'system')}
        value={themeMode}
        optionType='button'
        buttonStyle='solid'
        size='small'
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Theme;
