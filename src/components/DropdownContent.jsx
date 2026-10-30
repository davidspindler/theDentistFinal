import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
}) => {
  const [openSections, setOpenSections] = useState({});
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust this to match your hamburger breakpoint
    const handleMediaQueryChange = () => setIsMobile(mediaQuery.matches);

    handleMediaQueryChange(); // Set initial value
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className={`dropdown_content${submenuscontent.length === 1 ? ' dropdown_content--single' : ''}`}>
    {submenuscontent.map((item, index) => (
      <React.Fragment key={index}>
        <section>
          {item.note && (
            <div className="dropdown_note">
              {item.note.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}
          {item.heading && (
          <h4
            onClick={() => isMobile && toggleSection(index)} // Toggle only if mobile
            style={{ cursor: isMobile ? 'pointer' : 'default' }} // Pointer cursor only on mobile
          >
            {item.heading}
          </h4>
          )}
          {item.submenu && (!item.heading || !isMobile || openSections[index]) && ( // No heading to tap on mobile, so always show the links
            <ul>
              {item.submenu?.map(({ label, href }, idx) => (
                <li
                  key={idx}
                  className='padding-left-3'
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </React.Fragment>
    ))}
  </section>
  );
};

export default DropdownContent;
