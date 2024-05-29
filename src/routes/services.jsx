import Hero from '../components/hero/Hero';
import HeroContent from '../components/hero/HeroContent';
import HeroTitle from '../components/hero/HeroTitle';

import image from '../assets/images/buy_banner.jpg';
import { Outlet } from 'react-router-dom';

const ServicesPage = () => {
  return (
 <div>
<Outlet />
 </div>
  );
};

export default ServicesPage;
