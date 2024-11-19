import { menuData } from '../menuData';
import MenuItem from './MenuItem';

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  return (
    <section className="nav__container">
      <nav className='navBoxContainer'>
        <ul>
          {menuData?.map(({ label, href, children }, index) => {
            return (
              <MenuItem
                key={index}
                {...{
                  label,
                  href,
                  children,
                  setIsDrawerOpen,
                }}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default MegaMenu;
