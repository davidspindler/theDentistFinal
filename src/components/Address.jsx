import GenericServiceComponent from "./GenericServiceComponent";
import './Address.css'
const addressData = {
    mainTitleText: 'Address',
    title: 'Where are we?',
    description: `123 sample address:`,
  };

const Address = () => {

    return (
        <>
     
   <GenericServiceComponent {...addressData}/>
   <div className="carder">
    <div className="card-content">
      <h3>Our Location: 123 sample address:</h3>
      <iframe
        title="Google Maps Location"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.95373531586806!3d-37.81627944202162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778ddbe326bfb0!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1592148504276!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  </div>
            </>
    );
  };
  
  export default Address;