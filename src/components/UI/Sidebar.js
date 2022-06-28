import React from "react";
import classes from "./Sidebar.module.css"

export default function Sidebar(props) {
    const sideBarProps = [...props.list]
    const sideBarLinks = sideBarProps.map((link) => (
        <li><a href={link.id}>{link.text}</a></li>
    ))
    
  return (
    <div className={classes.sidebar}>
        <h2>Navigate to:</h2>
        <ul>
      {sideBarLinks}
        </ul>
    </div>
  );
}
