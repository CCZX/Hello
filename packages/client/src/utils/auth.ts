import { TOKEN_LOCAL_STORAGE_KEY } from '../constant/common';

export function saveToken(token: string) {
  window.localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, token);
}

export function getToken() {
  return window.localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY) || '';
}
