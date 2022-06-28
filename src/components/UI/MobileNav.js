import React from "react";
import classes from "./MobileNav.module.css";
export default function MobileNav(props) {
  const sideBarProps = [...props.list];
  const sideBarLinks = sideBarProps.map((link) => (
    <li>
      <a className="dropdown-item" href={link.id}>{link.text}</a>
    </li>
  ));
  return (
    <div className={classes.navbar}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Input Components
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Navigate to &nbsp;
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {sideBarLinks}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
