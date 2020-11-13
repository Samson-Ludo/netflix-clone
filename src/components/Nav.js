import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">
          Home
        </a>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">
          &#9776;
        </a>
      </div>
    </div>
  );
}

export default Nav;
