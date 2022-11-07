import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../container.component';
import { getUsers } from './users.utils';
import { UserCollectionProps, UserProps } from './user.types';

const UsersList: FC = () => {
  const [users, setUsers] = useState<UserCollectionProps>({});

  const fetchUsersData = async () => {
    const usersFetched = await getUsers();
    if (usersFetched) setUsers(usersFetched);
  };

  useEffect(() => {
    fetchUsersData();
  }, []);


  return (
    <Container>
      <div className="row">
        <div className="col-12">
          <h2>Users list</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {Object.keys(users).length > 0 ? Object.keys(users).map((uKey) => {
              const user: UserProps = users[uKey];

              return (
                <li key={uKey} className="list-group-item">
                  <Link to={`/users/${uKey}`}>
                    <small>username:</small> <strong>{user.username}</strong>,
                    <small> email:</small> <strong>{user.email}</strong>,
                    <small> phone:</small> <strong>{user.phone}</strong>
                  </Link>
                </li>
              )
            }) : (
              <div>
                no data
              </div>
            ) }
          </ul>
        </div>
      </div>

    </Container>
  );
};

export default UsersList;
