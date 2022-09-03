import {
  BRAND_COLOR_LOCAL_STORAGE_KEY,
  DEFAULT_BRAND_COLOR,
  THEME_MODE_ATTR,
  THEME_MODE_LOCAL_STORAGE_KEY,
} from '../constant/common';

export type ThemeMode = 'dark' | 'light' | 'system';

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
export function changeThemeMode(mode?: ThemeMode, callback?: (mode: ThemeMode) => void) {
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

export function getBrandColor() {
  return window.localStorage.getItem(BRAND_COLOR_LOCAL_STORAGE_KEY) || DEFAULT_BRAND_COLOR;
}

export function setBrandColor(color: string) {
  window.localStorage.setItem(BRAND_COLOR_LOCAL_STORAGE_KEY, color);
}

/**
 * 更新主题色
 * @param color
 * @param callback
 */
export function changeBrandColor(color: string, callback?: (color: string) => void) {
  setBrandColor(color);

  if (callback) {
    callback(color);
  }
}

/**
 * 获取系统的主题色
 */
export function getSystemThemeMode() {}
