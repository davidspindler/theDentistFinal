import './Footer.css'; // Make sure to create this CSS file
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            {/* <div className='containerFooter'>
                <div class="containerLogo">
                    <img src="/OC_Center_FAD.jpg" alt="OC CENTER LOGO" class="logo" />
                    <div>OC Center for Advanced Therapy</div>
                </div>
                <div className='containerLogo'>

                    <div>Copyright 2024</div>
                </div>
            </div> */}
            {/* <hr></hr> */}
            <div className="footer-content">
                <div className="containerLogo">

            <img src="/OC_Center_FAD.jpg" alt="OC CENTER LOGO" className="logo" />
                </div>
                <div className="footer-section address">
                    <h3>Our Address</h3>
                    <p>3070 BRISTOL STREET SUITE 180</p>
                    <p>COSTA MESA, CA 92626</p>
                    <p>United States</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: Patientcare@OCCFAD.org</p>
                    <p>Phone: (714) 540-3838</p>
                </div>
                <div className="footer-section social">
                    <h3>Legal Disclaimers</h3>  
                    <NavLink 
                    to="/privacypolicy"
                    >
                        <button className='legal-button'>
                        Privacy Policy and Terms of Service
                        </button>
                        </NavLink>       
                      
                         <p>© {currentYear} OC Center for Advanced Dentistry</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;