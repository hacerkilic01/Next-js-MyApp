import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main classesName={classes.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
