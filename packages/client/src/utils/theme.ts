import { THEME_MODE_ATTR, THEME_MODE_LOCAL_STORAGE_KEY } from '../constant/common';

export type ThemeMode = 'dark' | 'light';

export function setCurrentThemeMode(mode: ThemeMode) {
  window.localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, mode);
}

export function getCurrentThemeMode() {
  return (window.localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY) as ThemeMode) || 'light';
}

/**
 * 设置主题
 * @param mode
 */
export function switchThemeMode(mode?: ThemeMode, callback?: (mode: ThemeMode) => void) {
  if (mode) {
    setCurrentThemeMode(mode);
  }

  mode = getCurrentThemeMode();

  const body = document.querySelector('body');

  body?.removeAttribute(THEME_MODE_ATTR);
  body?.setAttribute(THEME_MODE_ATTR, mode);

  if (callback) {
    callback(mode);
  }
}
