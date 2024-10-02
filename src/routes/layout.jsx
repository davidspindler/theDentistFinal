import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
        {/* <div className="hero-title-container">
    <h1 className='hero-title'>
      Our mission is to bring joy to patients through:
    </h1>
      <div className="vertical-line"></div>
    <div className='hero-list-container'>
      <ul className='hero-list'>
        <li>High Skilled Dentistry</li>
        <li>Advanced Technology</li>
        <li>Economically Valuable Patient Care</li>
      </ul>
    </div>
    </div> */}
   
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
