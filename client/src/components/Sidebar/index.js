import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav>
      <h4>
        <Link to="/"> Add Employment </Link>
      </h4>
      <h4>
        <Link to="/contact">  Manage Employees </Link>
      </h4>
      <h4>
        <Link to="/edit/0"> Edit Employees </Link>
      </h4>
      
      {/*
      <h4>
        <Link to="/">Dashboard </Link>
      </h4>
      <h4>
        <Link to="/">Dashboard </Link>
      </h4> */}
    </nav>
  );
}

export default Sidebar;
