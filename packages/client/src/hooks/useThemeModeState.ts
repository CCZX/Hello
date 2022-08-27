import { useCallback, useLayoutEffect, useState } from 'react';
import { ThemeMode, switchThemeMode, getCurrentThemeMode } from '../utils/theme';

export function useThemeModeState() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useLayoutEffect(() => {
    setThemeMode(getCurrentThemeMode());
  }, []);

  const handleChangeMode = useCallback((mode: ThemeMode) => {
    switchThemeMode(mode, setThemeMode);
  }, []);

  return [themeMode, handleChangeMode] as const;
}
