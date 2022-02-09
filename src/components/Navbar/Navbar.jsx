import classes from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div>
        <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
      </div>
      <div>
        <NavLink to="/contacts" className={navData => navData.isActive ? classes.active : classes.item}>Contacts</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
      </div>
    </nav>);
};
export default Navbar;