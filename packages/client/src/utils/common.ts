import { THEME_MODE_ATTR, THEME_MODE_LOCAL_STORAGE_KEY } from '../constant/common';

type ThemeMode = 'dark' | 'light';

/**
 * 设置主题
 * @param mode
 */
export function setThemeMode(mode?: ThemeMode) {
  if (mode) {
    window.localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, mode);
  }

  mode = (window.localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY) as ThemeMode) || 'light';

  const body = document.querySelector('body');

  body?.removeAttribute(THEME_MODE_ATTR);
  body?.setAttribute(THEME_MODE_ATTR, mode);
}
