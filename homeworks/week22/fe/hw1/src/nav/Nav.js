import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Tab({ label, to, exact }) {
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match ? "active" : ""}>
            <Link className="link" to={to}>{label}</Link>
          </li>
        )}
      />
    );
  }

const Nav = ({isMove}) => {
    return (
        <nav className={isMove ? "window-is-Moving" : "window-UnMoving"}>
            <ul>
                <li>
                    Blue Orange
                </li>
                <Tab exact={true} to="/" label="Home" />
                <Tab to="/about" label="About" />
                <Tab to="/list" label="List" />
                <Tab to="/write" label="Write" />
            </ul>
        </nav>
    )
}


export default Nav








