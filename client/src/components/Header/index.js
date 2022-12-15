import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements"

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <h1>Git-Fit</h1>
        <Nav>
          <NavMenu>
            <NavLink to="/Home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/Workouts" activeStyle>
              Tracker
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </header>
  );
};

export default Header;
