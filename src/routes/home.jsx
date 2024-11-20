import Hero from '../components/hero/Hero';
import HeroContent from '../components/hero/HeroContent';
import HeroTitle from '../components/hero/HeroTitle';

import image from '../assets/images/home_banner.jpg';


const HomePage = () => {
  return (
    <Hero>
      <HeroContent imageSrc={image}>
        <HeroTitle title="Home page hero title" />
      </HeroContent>
      <h1 className="hero-title-container">

      Our mission is to bring joy to patients through High Skilled Dentistry, Advanced Technology, and Economically Valuable Patient Care.
   
    </h1>
    </Hero>
  );
};

export default HomePage;
