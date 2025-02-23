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
            <section className="footer-content">
                <section className="containerLogo">

            <img src="/OC_Center_FAD.jpg" alt="OC CENTER LOGO" className="logo" />
                </section>
                <section className="footer-section address">
                    <h3>Our Address</h3>
                    <p>3070 BRISTOL STREET SUITE 180</p>
                    <p>COSTA MESA, CA 92626</p>
                    <p>United States</p>
                </section>
                <section className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><strong>Email: </strong><a href="mailto:Patientcare@OCCFAD.org">Patientcare@OCCFAD.org</a></p>
                    <p><strong>Phone: </strong><a href="tel:+17145403838">(714) 540-3838</a></p>
                    <p><strong>Hours:</strong> Mon - Fri, 8:30 AM - 5:30 PM</p>
                </section>
                <section className="footer-section social">
                    <h3>Legal Disclaimers</h3>  
                    <NavLink 
                    to="/privacypolicy"
                    >
                        <button className='legal-button twelvepixel'>
                        Privacy Policy and Terms of Service
                        </button>
                        </NavLink>       
                      
                         <p className='twelvepixel'>© {currentYear} O.C. Center For Advanced Dentistry</p>
                </section>
            </section>
        </footer>
    );
};

export default Footer;