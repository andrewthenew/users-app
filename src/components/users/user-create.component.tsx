import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../container.component';
import UserForm from './user-form.component';
import { createUser } from './users.utils';
import { UserProps } from './user.types';

const UserCreate: FC = () => {
  const history = useHistory();

  const handleOnFormSubmit = useCallback((user: UserProps) => {
    try {
      createUser(user);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  }, [history]);

  return (
    <Container>
      <UserForm onFormSubmit={handleOnFormSubmit} />
    </Container>
  );
};

export default UserCreate;
