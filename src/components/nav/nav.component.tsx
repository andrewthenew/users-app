import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';


const Nav: FC = () => {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <div className="col-md-12">
          <NavLink to="/" className="btn me-1" exact>
            Users list
          </NavLink>
          <NavLink to="/add" className="btn me-1">
            + add
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
