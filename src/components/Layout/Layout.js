import React from "react";
import classes from "./Layout.module.css";
// import Aux from "../../hoc/A/uxx";
import Aux from "../../hoc/Auxx";
const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar,sideDrwaer,Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
