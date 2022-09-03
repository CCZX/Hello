import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeMode, changeThemeMode, getCurrentThemeMode } from '../utils/theme';

export function useThemeModeState() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  useLayoutEffect(() => {
    setThemeMode(getCurrentThemeMode());
  }, []);

  const handleChangeMode = useCallback((mode: ThemeMode) => {
    changeThemeMode(mode, setThemeMode);
  }, []);

  useEffect(() => {
    // update app theme mode when the system theme mode changes
    const onMediaQueryChange = (e: MediaQueryListEvent) => {
      const themeMode = getCurrentThemeMode();
      if (themeMode !== 'system') {
        return;
      }

      handleChangeMode('system');
    };
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)');

    themeMedia.addEventListener('change', onMediaQueryChange);

    return () => {
      themeMedia.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return [themeMode, handleChangeMode] as const;
}
