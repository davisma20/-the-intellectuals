import React from "react";
import classes from "./SidebarOption.module.css";

const SidebarOption = ({ option = "test", Icon }) => {
  return (
    <div className={classes.sidebarOption}>
      {Icon && <Icon className={classes.sidebarOption__icon} />}
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  );
}

export default SidebarOption;