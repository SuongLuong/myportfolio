import React from "react";
import "./DrawerToggleButton.scss";

const drawerToggleButton = props => {
  return (
    <button className="toggle__button" onClick={props.click}>
      <div className="toggle__button-line"></div>
      <div className="toggle__button-line"></div>
      <div className="toggle__button-line"></div>
    </button>
  );
};

export default drawerToggleButton;
