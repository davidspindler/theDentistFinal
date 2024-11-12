import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
}) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <div className="dropdown_content">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h4
             style={{ cursor: 'pointer' }}
            onClick={() => toggleSection(index)}
            >{item.heading}</h4>
            {openSections[index] && (
            <ul>
              {item.submenu?.map(({ label, href }, index) => (
                <li
                  key={index}
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
    </div>
  );
};

export default DropdownContent;
