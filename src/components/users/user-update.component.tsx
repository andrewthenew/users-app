import React, { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../container.component';
import UserForm from './user-form.component';
import { updateUser, getUser } from './users.utils';
import { UserProps } from './user.types';

const UserUpdate: FC<{ username: string }> = ({ username }) => {
  const history = useHistory();
  const [user, setUser] = useState<UserProps>();

  const fetchUserData = async () => {
    const userFetched = await getUser(username);
    if (userFetched) setUser(userFetched);
  };

  const handleOnFormSubmit = useCallback((userObj: UserProps) => {
    try {
      updateUser(username, userObj);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <Container>
      <UserForm user={user} onFormSubmit={handleOnFormSubmit} />
    </Container>
  );
};

export default UserUpdate;
