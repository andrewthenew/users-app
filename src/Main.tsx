import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from './components/users/users-list.component';
import UserCreate from './components/users/user-create.component';
import UserUpdate from './components/users/user-update.component';


const Main = () => {
  return (
    <Switch>

      <Route
        path="/users/:username"
        render={({ match: {
          params: {
            username
          }
        }}) => {
          return username && (
            <UserUpdate username={username} />
          );
        }}
      />

      <Route path="/add">
        <UserCreate />
      </Route>

      <Route exact path="/">
        <UsersList />
      </Route>

    </Switch>
  );
};

export default Main;
