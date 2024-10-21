import GenericServiceComponent from "./GenericServiceComponent";
import './TeethWhitening.css'
const teethWhiteningData = {
    mainTitleText: 'Teeth Whitening',
    imgSrc: '/TeethWhitening.jpg'
  };
const TeethWhiteningContent = () => {
  return (
    <>
    <div className="">
  <h3 className="padding-bottom-5">What is teeth whitening?</h3>
  <p className="padding-bottom-5">
    Teeth whitening is a cosmetic dental procedure designed to lighten the color of your teeth and remove stains and discoloration. There are two major approaches to teeth whitening:
  </p>
  
  <ul className="">
    <li className="">
      <strong>In Office Professional Whitening:</strong>
      <ul className="">
        <li className="padding-left-15">
          <strong>Chairside Bleaching:</strong> A highly concentrated bleaching agent is applied directly to the teeth, with or without combination of a UV light.
        </li>
      </ul>
    </li>
    
    <li className="">
      <strong>Home based Whitening:</strong>
      <ul className="">
        <li className="padding-left-15">
          <strong>Tray based whitening:</strong> Your dentist provides you with custom-fit trays and a whitening gel with a lower concentration of peroxide. You wear the trays for a specified time period each day.
        </li>
      </ul>
    </li>
  </ul>
  
  <p className="padding-top-10">
    Teeth whitening is a safe and effective way to brighten your smile. However, it's important to talk to your dentist before you start any type of whitening treatment.
  </p>
</div>
    </>
  )
}
const TeethWhitening = () => {

    return (
        <>
     {/* <h1>Teeth Whitening</h1> */}
   <GenericServiceComponent {...teethWhiteningData} AdditionalComponent={TeethWhiteningContent}/>
  
            </>
    );
  };
  
  export default TeethWhitening;