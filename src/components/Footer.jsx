import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className='containerFooter'>
                <div>
                <div>logo</div>

                <div>OC Center for Advanced Therapy</div>
                </div>
            <div>Copyright 2024</div>
            </div>
            <hr></hr>
            <div className="footer-content">
                <div className="footer-section address">
                    <h3>Our Address</h3>
                    <p>3070 BRISTOL STREET SUITE 180</p>
                    <p>COSTA MESA, CA 92626</p>
                    <p>Country</p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: Patientcare@OCCFAD.org</p>
                    <p>Phone: (714) 540-3838</p>
                </div>
                {/* <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;