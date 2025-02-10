import { Link, NavLink, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const location = useLocation();

  const getActiveClass = () => {
    switch (location.pathname) {
      case '/':
        return 'main-active';
      case '/projects':
        return 'projects-active';
      case '/contact':
        return 'contact-active';
      default:
        return '';
    }
  };

  return (
    <div className={`navbar ${getActiveClass()}`}>
      <NavLink to="/" className="navItem navItemOne">
        <Link to="/" className="navLink">
          <p className="navLinkText">Main</p>
        </Link>
      </NavLink>

      <NavLink to="/projects" className="navItem navItemTwo">
        <div to="/projects" className="navLink">
          <p className="navLinkText">Projects</p>
        </div>
      </NavLink>

      <NavLink to="/contact" className="navItem navItemThree">
        <div className="navLink">
          <p className="navLinkText">Contact</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;