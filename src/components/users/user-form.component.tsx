import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { UserProps } from './user.types';
import { deleteUser } from './users.utils';

const UserForm: FC<{
  user?: UserProps;
  onFormSubmit?: ({ username, email, phone }: UserProps) => void;
}> = ({
  user,
  onFormSubmit,
}) => {
  const history = useHistory();
  const [uData, setUData] = useState<UserProps | undefined>();
  const refName = useRef<HTMLInputElement>(null);
  const refEmail = useRef<HTMLInputElement>(null);
  const refPhone = useRef<HTMLInputElement>(null);

  const checkForm = (): boolean => {
    return refName.current?.value !== '' && refEmail.current?.value !== '' && refPhone.current?.value !== '';
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (checkForm() && onFormSubmit) {
      onFormSubmit({
        username: refName.current?.value ?? '',
        email: refEmail.current?.value ?? '',
        phone: refPhone.current?.value ?? '',
      });
    }
  };

  const handleDeleteUserClick = () => {
    try {
      if (user) {
        deleteUser(user.username);
        history.push('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (user) setUData(user);
  }, [user]);


  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="uname" className="form-label">UserName</label>
        <input ref={refName} type="text" className="form-control" id="uname" aria-describedby="userName" defaultValue={uData?.username} />
      </div>

      <div className="mb-3">
        <label htmlFor="umail" className="form-label">Email address</label>
        <input ref={refEmail} type="email" className="form-control" id="umail" aria-describedby="emailHelp" defaultValue={uData?.email} />
      </div>

      <div className="mb-3">
        <label htmlFor="uphone" className="form-label">Phone</label>
        <input ref={refPhone} type="tel" className="form-control" id="uphone" defaultValue={uData?.phone} />
      </div>


      <div className="mt-5"></div>
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary me-5">Submit</button>
        {user && (
          <button type="button" className="btn btn-danger" onClick={handleDeleteUserClick}>Delete user</button>
        )}
      </div>

    </form>
  );
};

export default UserForm;
