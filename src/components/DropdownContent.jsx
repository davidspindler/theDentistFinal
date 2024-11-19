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
    <section className="dropdown_content">
    {submenuscontent.map((item, index) => (
      <React.Fragment key={index}>
        <section>
          <h4
            onClick={() => isMobile && toggleSection(index)} // Toggle only if mobile
            style={{ cursor: isMobile ? 'pointer' : 'default' }} // Pointer cursor only on mobile
          >
            {item.heading}
          </h4>
          {(isMobile ? openSections[index] : true) && ( // Conditionally render `ul` based on `isMobile`
            <ul>
              {item.submenu?.map(({ label, href }, idx) => (
                <li
                  key={idx}
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
