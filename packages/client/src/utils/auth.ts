import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../constant/common';

export function saveAccessToken(token: string) {
  window.localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, token);
}

export function getAccessToken() {
  return window.localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY) || '';
}
