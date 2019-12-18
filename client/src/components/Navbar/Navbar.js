import React from "react";
import "./Navbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
const navbar = props => {
  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="navbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="navbar__logo">
          <a href="/">LOGO</a>
        </div>
        <div className="spacer" />
        <div className="navbar__list">
          <ul>
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
