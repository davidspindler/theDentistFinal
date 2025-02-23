import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '/OC_Center_FAD.jpg';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header">
      {/* <Container> */}
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={'/'}>
            <img className='navbar_logo' src={logo} alt="O.C. Center For Advanced Dentistry Logo" />
            <h2 className='logo_text'>O.C. Center For Advanced Dentistry</h2>
          </Link>

          <div className="hidden md:block">
            <MegaMenu />
          </div>
          <UserProfile />

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      {/* </Container> */}
    </header>
  );
};

export default Navigation;
