import { Link, useLocation } from 'react-router-dom';
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


      <div className="navItem navItemOne">
        {/* {location.pathname !== '/' && <Link to="/" className="navLink">Main</Link>} */}
        <Link to="/" className="navLink"><p className="navLinkText">Main</p></Link>
      </div>

      
      <div className="navItem navItemTwo">
        {/* {location.pathname !== '/projects' && <Link to="/projects" className="navLink">Projects</Link>} */}
        <Link to="/projects" className="navLink"><p className="navLinkText">Projects</p></Link>
      </div>




      <div className="navItem navItemThree">
        {/* {location.pathname !== '/contact' && <Link to="/contact" className="navLink">Contact</Link>} */}
        <Link to="/contact" className="navLink">
          <p className="navLinkText">Contact</p>
        </Link>
      </div>




    </div>
  );
};

export default Navbar;