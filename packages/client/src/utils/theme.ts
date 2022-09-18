import {
  BRAND_COLOR_LOCAL_STORAGE_KEY,
  DEFAULT_BRAND_COLOR,
  THEME_MODE_ATTR,
  THEME_MODE_LOCAL_STORAGE_KEY,
} from '../constant/theme';
import { useGlobalStore } from '../store/global';

export type ThemeMode = 'dark' | 'light' | 'system';

/**
 * 获取系统的主题色
 */
export function getSystemThemeMode(): ThemeMode {
  const themeMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (themeMedia.matches) {
    return 'light';
  }

  return 'dark';
}

/**
 * 设置当前的主题色，并更新 globalStore 里面的值
 * @param mode
 */
export function setCurrentThemeMode(mode: ThemeMode) {
  let showThemeMode = mode;
  if (mode === 'system') {
    showThemeMode = getSystemThemeMode();
  }
  console.log('showThemeMode', showThemeMode);
  useGlobalStore.setState({ themeMode: mode, showThemeMode });
  window.localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, mode);
}

export function getCurrentThemeMode() {
  return (window.localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY) as ThemeMode) || 'light';
}

/**
 * 获取展示的主题，如果是跟随系统需要计算系统的主题
 * @returns
 */
export function getCurrentShowThemeMode() {
  const mode = getCurrentThemeMode();
  if (mode === 'system') {
    return getSystemThemeMode();
  }

  return mode;
}

/**
 * 切换主题
 * @param mode
 */
export function changeThemeMode(mode?: ThemeMode) {
  if (mode) {
    setCurrentThemeMode(mode);
  }

  mode = getCurrentThemeMode() || 'system';

  let attrValue = mode;

  if (mode === 'system') {
    attrValue = getSystemThemeMode();
  }

  const body = document.querySelector('body');

  body?.removeAttribute(THEME_MODE_ATTR);
  body?.setAttribute(THEME_MODE_ATTR, attrValue);
}

export function getBrandColor() {
  const color = window.localStorage.getItem(BRAND_COLOR_LOCAL_STORAGE_KEY) || DEFAULT_BRAND_COLOR;
  if (isValidHEX(color)) {
    return color;
  }
  setBrandColor(DEFAULT_BRAND_COLOR);
  return DEFAULT_BRAND_COLOR;
}

/**
 * 更新主题色
 * @param color
 */
export function setBrandColor(color: string) {
  let _color = color;
  if (!isValidHEX(color)) {
    _color = DEFAULT_BRAND_COLOR;
  }

  window.localStorage.setItem(BRAND_COLOR_LOCAL_STORAGE_KEY, _color);
  useGlobalStore.setState({ brandColor: _color });
}

/**
 * 有效的 16 进制颜色
 * @param params
 */
export function isValidHEX(hex: string) {
  const reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
  return reg.test(hex);
}
