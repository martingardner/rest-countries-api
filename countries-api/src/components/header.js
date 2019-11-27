import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../css/header.css";

const Header = props => {
  let moonIcon = props.darkmode ? "🌙" : "☽";

  return (
    <header>
      <div>
        <span>Where in the world?</span>
      </div>
      <div onClick={() => props.switchmode()}>
        <span>{moonIcon} Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
