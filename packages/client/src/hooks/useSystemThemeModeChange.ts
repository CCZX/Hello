import { useEffect } from 'react';
import { changeThemeMode, getCurrentThemeMode } from '../utils/theme';

export function useSystemThemeModeChange() {
  useEffect(() => {
    // update app theme mode when the system theme mode changes
    const onMediaQueryChange = (e: MediaQueryListEvent) => {
      const themeMode = getCurrentThemeMode();
      if (themeMode !== 'system') {
        return;
      }

      changeThemeMode('system');
    };
    const themeMedia = window.matchMedia('(prefers-color-scheme: light)');

    themeMedia.addEventListener('change', onMediaQueryChange);

    return () => {
      themeMedia.removeEventListener('change', onMediaQueryChange);
    };
  }, []);
}
