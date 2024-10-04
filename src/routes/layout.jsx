import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className='layout-styles-1'>
      <Navigation />
      <main className='main-content-2'>
        <Outlet />
      
   
      <Footer />
      </main>
    </div>
  );
};

export default Layout;
