// import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Link.css';
// import { NavLink } from 'react-router-dom';

const Activelink = ({to,children}) => {
    return (

        <NavLink
        to={to}
        className={({ isActive}) =>
          isActive
            ? "active" : ""
        }
      >
        {children}
        {/* other code */}
      </NavLink>
        
        
        
    );
};

export default Activelink;