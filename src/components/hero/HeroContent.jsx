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
         
            <video className="hero-video" width="500" height="500" autoPlay loop muted>
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
              
                <h1 className='hero-title'>
                Bringing Joy to patients through technology driven high skilled, comprehensive and economically valued dentistry.
                  </h1>
                {/* <p className='hero-desc'>We are dedicated to bringing you services that will give you value and keep your smile clean</p> */}
            </div>
        </div>
  );
};

export default HeroContent;
