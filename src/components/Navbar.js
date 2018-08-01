import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

//COMPONENTS
import Login from './Login.js'

const Navbar = (props) => {

  return (
    <div className="navbar">
      {props.loggedIn
        ?
          <div>
            <NavLink to="/" exact>Home</NavLink><br/>
            <NavLink to="/mywineries" exact>My Wineries</NavLink><br/>
            <button onClick={props.handleLogout}>Log Out</button>
          </div>
        : <Login setUser={props.setUser} />
      }
    </div>
  )

}

export default Navbar;
