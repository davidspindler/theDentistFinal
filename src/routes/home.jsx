import Hero from '../components/hero/Hero';
import HeroContent from '../components/hero/HeroContent';
import HeroTitle from '../components/hero/HeroTitle';

import image from '../assets/images/home_banner.jpg';
import { Heading1 } from 'lucide-react';

const HomePage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={image}>
        <HeroTitle title="Home page hero title" />
      </HeroContent>
      <Heading1 className="hero-title-container">
    {/* <h1 className='hero-title'> */}
      Our mission is to bring joy to patients through High Skilled Dentistry, Advanced Technology, and Economically Valuable Patient Care.
    {/* </h1> */}
      {/* <div className="vertical-line"></div>
    <div className='hero-list-container'>
      <ul className='hero-list'>
        <li>High Skilled Dentistry</li>
        <li>Advanced Technology</li>
        <li>Economically Valuable Patient Care</li>
      </ul>
    </div> */}
    </Heading1>
    </Hero>
  );
};

export default HomePage;
