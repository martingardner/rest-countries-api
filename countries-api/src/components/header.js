import React from "react";

const Header = props => {
  return (
    <header>
      <span>Where in the world?</span>
      <span>
        <button onClick={() => props.switchmode()}>Dark Mode</button>
      </span>
    </header>
  );
};

export default Header;
