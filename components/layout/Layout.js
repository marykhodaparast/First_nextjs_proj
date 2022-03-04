import classes from "./Layout.module.css";
import MainNavigatoin from "./MainNavigation";
function Layout(props) {
  return (
    <div>
      <MainNavigatoin />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
