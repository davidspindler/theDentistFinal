import GenericServiceComponent from "./GenericServiceComponent";
import './Address.css'
import officetour1 from '../assets/images/officetour1.png'
const addressData = {
    mainTitleText: 'Address',
    title: 'Where are we?',
    description: `We are located conveniently in Costa Mesa at 3070 Bristol Street SUITE 180 COSTA MESA CA 92626.`,
    imgSrc: officetour1
  };

const Address = () => {

    return (
        <>
     
   <GenericServiceComponent {...addressData}/>
   <div className="carder">
    <div className="card-content">
      <h3>Our Location: 3070 Bristol Street SUITE 180 COSTA MESA CA 92626</h3>
      <iframe
        title="Google Maps Location"
        width="100%"
        height="400"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4199173739963!2d-117.8876723849641!3d33.68281648070424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc6598ab5e731%3A0x8e2e6f8efed6826c!2s3070%20Bristol%20St%20%23180%2C%20Costa%20Mesa%2C%20CA%2092626%2C%20USA!5e0!3m2!1sen!2sus!4v1623238587310!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false"
      ></iframe>
    </div>
  </div>
            </>
    );
  };
  
  export default Address;