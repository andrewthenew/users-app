import { UserCollectionProps, UserProps } from './user.types';
import { retrieveUsers, storeUsers } from '../storage.utils';

export const getUsers = (): UserCollectionProps => {
  return retrieveUsers();
};

export const getUser = (username: string): UserProps => {
  const users = getUsers();
  const uname = users && Object.keys(users).filter((ukey: string) => ukey === username)?.[0];

  return users[uname];
}

export const createUser = (user: UserProps) => {
  const userInStorage = getUser(user.username);
  if (userInStorage) {
    throw new Error('User exists');
  } else {
    const usersObj = {
      ...getUsers(),
      [user.username]: {
        ...user
      }
    };
    storeUsers(usersObj);
  }
};

export const updateUser = (username: string, userObj: UserProps) => {
  const users = getUsers();
  if (
    users[username] && username === userObj.username
  ) {
    users[username] = userObj;
    storeUsers(users);
  } else if (!getUser(userObj.username)) {
    delete users[username];
    users[userObj.username] = userObj;
    storeUsers(users);
  } else {
    throw new Error('Cannot reassign existing user');
  }
}

export const deleteUser = (username: string) => {
  const userInStorage = getUser(username);
  if (!userInStorage) {
    throw new Error(`Cannot delete. User '${username}' does not exist!`);
  } else {
    const users = getUsers();
    const newUsers: UserCollectionProps = {};
    users && Object.keys(users).forEach((uname: string) => {
      if (uname !== username) {
        newUsers[uname] = users[uname];
      }
    });

    storeUsers(newUsers);
  }
};
