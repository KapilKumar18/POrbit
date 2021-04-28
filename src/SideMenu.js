import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="col-md-2 h-md-25 bg-primary p-5 menu">
      <ul className="d-flex justify-content-end list-group list-group-flush list-unstyled font-weight-bold p-4 m-0">
        <li className="list-group-item">
          <NavLink to="/profile"  className="text-decoration-none text-color"  activeClassName="text-color-active">  Profile </NavLink> 
          </li>         
          <li className="list-group-item">  <NavLink to="/posts"   className="text-decoration-none text-color" activeClassName="text-color-active"> Posts   </NavLink> </li>
          <li className="list-group-item">  <NavLink to="/gallery" className="text-decoration-none text-color" activeClassName="text-color-active"> Gallery </NavLink> </li>
          <li className="list-group-item">  <NavLink to="/todo"    className="text-decoration-none text-color" activeClassName="text-color-active"> ToDo    </NavLink> </li>
        </ul>
    </div>
  );
};

export default SideMenu;
