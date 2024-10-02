import Container from '../Container';
import defaultBanner from '../../assets/images/default_banner.jpg';
import './HeroContent.css'; // Create and style this CSS file

const HeroContent = ({ imageSrc = defaultBanner, children }) => {
  return (
    // <div className="hero">
    //   <div className="img_wrapper">
    //     <img src={imageSrc} alt="banner" height="450px" />
    //     <div className="overlay"></div>
    //   </div>
    //   <div className="content">
    //     <Container>{children}</Container>
    //   </div>
    // </div>
    <div className="hero-container">
         
            <video className="hero-video" width="500" height="500" autoPlay playsInline loop muted>
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="hero-content">
              
                <h1 className='hero-title'>
                Our mission is to bring joy to patients through
                <ul className='list-style-disc'>
                  <li>High Skilled Dentistry</li>
                  <li>Advanced Technology</li>
                  <li>Economically Valuable Patient Care</li>
                </ul>
                  </h1>
            
            </div> */}
            <div className="hero-content">
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
</div>
<div>HELLO TEXT HERE LOREM30</div>
        </div>
  );
};

export default HeroContent;
