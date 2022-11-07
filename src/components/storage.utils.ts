import { USERS_STORAGE_NAME } from '../config/app';

export const retrieveUsers = () => {
  const data = window.localStorage.getItem(USERS_STORAGE_NAME);
  return data ? JSON.parse(data) : {};
};

export const storeUsers = (data: object) => {
  window.localStorage.setItem(USERS_STORAGE_NAME, JSON.stringify(data));
}
