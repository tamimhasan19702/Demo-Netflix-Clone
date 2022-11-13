import React ,{useEffect} from 'react';
import './Nav.css';

function Nav() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
      handleShow(true);
      }else handleShow(false);
    });
    return () => {
    window.removeEventListener('scroll');
    }
  }, []);

  return (
    <div className='nav'>

    <img 
    className='nav-logo' 
    src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" 
    alt="nav-logo" />
 
    <img 
    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" 
    alt="nav-avatar" 
    className="nav-avatar" />

    </div>
  )
}

export default Nav;