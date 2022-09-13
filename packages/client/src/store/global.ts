import create from 'zustand';
import {
  getBrandColor,
  getCurrentShowThemeMode,
  getCurrentThemeMode,
  getSystemThemeMode,
  ThemeMode,
} from '../utils/theme';

interface GlobalStoreState {
  themeMode: ThemeMode;
  /**
   * 当前展示的主题，如果是 system 需要算出是 dark 还是 light
   */
  showThemeMode: ThemeMode;

  /**
   * 主题色
   */
  brandColor: string;

  setThemeMode: (themeMode: ThemeMode) => void;
}

const useGlobalStore = create<GlobalStoreState>((set) => ({
  themeMode: getCurrentThemeMode(),
  showThemeMode: getCurrentShowThemeMode(),

  brandColor: getBrandColor(),

  setThemeMode(themeMode) {
    let showThemeMode = themeMode;
    if (showThemeMode === 'system') {
      showThemeMode = getSystemThemeMode();
    }
    set(() => ({ themeMode, showThemeMode }));
  },
}));

export { useGlobalStore };
