import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout = props => {
  return (
    <>
      <Navbar />
      <div className={classes["container"]}>{props.children}</div>
      <h6 className={classes.footer}>{props.side}</h6>
    </>
  );
};

export default Layout;
