import { useState, useRef, useEffect } from 'react';

import { X } from 'lucide-react';
import MegaMenu from './MegaMenu';

const MobileNavigationDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
  drawerButtonRef,
}) => {
  const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      // Focus the drawer when it opens
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDrawerOpen(false);
      // Focus the drawer button when it closes
      if (drawerButtonRef.current) {
        drawerButtonRef.current.focus();
      }
    }
  };

  return (
    <section
      className="mobile_navigation"
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <button
          className="backdrop"
          onClick={() => {
            setIsDrawerOpen(false);
            // Focus the drawer button when it closes
            if (drawerButtonRef.current) {
              drawerButtonRef.current.focus();
            }
          }}
        ></button>
      )}

      <div
        className={`drawer_content ${isDrawerOpen ? 'active' : ''}`}
      >
        <div className="close_drawer">
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              // Focus the drawer button when it closes
              if (drawerButtonRef.current) {
                drawerButtonRef.current.focus();
              }
            }}
          >
            <X size={30} />
          </button>
        </div>
        <li>
          <MegaMenu
            handleToggle={handleToggle}
            clicked={clicked}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </li>
      </div>
    </section>
  );
};

export default MobileNavigationDrawer;
