import { FC } from 'react';
import { ConfigProvider, Radio } from 'antd';
import { useThemeModeState } from '../../../hooks/useThemeModeState';
import { useBrandColorState } from '../../../hooks/useThemeColorState';
import './index.less';

interface ThemeProps {}

const optionsWithDisabled = [
  { label: '深色', value: 'dark' },
  { label: '浅色', value: 'light' },
  { label: '跟随系统', value: 'system', disabled: true },
];

const Theme: FC<ThemeProps> = (props) => {
  const [themeMode, setThemeMode] = useThemeModeState();
  const [_, setBrandColor] = useBrandColorState();

  const onChangeBrandColor = (color: string) => {
    setBrandColor(color);
    ConfigProvider.config({
      theme: {
        primaryColor: color,
      },
    });
  };

  return (
    <div className='theme-container' style={{ position: 'fixed', bottom: '70px', right: '30px' }}>
      <div className='preset-color-list'>
        <div
          className='preset-color-item blue'
          data-color='1890ff'
          onClick={() => onChangeBrandColor('#1890ff')}
        ></div>
        <div
          className='preset-color-item green'
          data-color='128C7E'
          onClick={() => onChangeBrandColor('#128C7E')}
        ></div>
      </div>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={(e) => setThemeMode(e.target.value)}
        value={themeMode}
        optionType='button'
        buttonStyle='solid'
        size='small'
      />
    </div>
  );
};

export default Theme;
