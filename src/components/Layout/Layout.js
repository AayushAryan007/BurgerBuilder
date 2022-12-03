import React from "react";
import classes from "./Layout.module.css";

// import Aux from "../../hoc/A/uxx";
import Aux from "../../hoc/Auxx";
import Toolbar from "./Navigation/Toolbar/Toolbar";

import SideDrawer from "./Navigation/SideDrawer/SideDrawer";
const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
