import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const implantSupportedDenturesData = {
    mainTitleText: 'Implant Supported Dentures',
    imgSrc: '/ImplantSupportedDentures.jpg'
  };

const ImplantSupportedDenturesContent = () => {
  return (
    <>
    <h3 className="padding-bottom-5">What Are Implant-supported Dentures?</h3>
  <p className="padding-bottom-5">
    Implant-supported dentures are a type of dental prosthesis that is secured in place with the help of dental implants. Unlike traditional dentures that rely on adhesive or suction to stay in place, implant-supported dentures are anchored to dental implants surgically placed in the jawbone.
  </p>
  
  <p className="padding-bottom-5">They are superior to traditional dentures due to these factors:</p>
  
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Improved stability: Implant-supported dentures are much more stable than traditional dentures because they are anchored to the jawbone. This means that they won't slip or move around when you eat or talk.</li>
    <li className="padding-bottom-5">Increased comfort: Implant-supported dentures are also more comfortable than traditional dentures because they don't irritate the gums.</li>
    <li className="padding-bottom-5">Improved chewing: Because they are more stable, implant-supported dentures allow you to chew food more effectively.</li>
    <li className="padding-bottom-5">Preserved bone health: Traditional dentures can lead to bone loss in the jawbone. Implant-supported dentures, on the other hand, actually help to preserve bone health.</li>
    <li className="padding-bottom-5">Enhanced confidence: Implant-supported dentures can give you back your confidence to smile and speak in public.</li>
  </ul>
    </>
  )
}
const ImplantSupportedDentures = () => {

    return (
        <>
     
   <GenericServiceComponent {...implantSupportedDenturesData} AdditionalComponent={ImplantSupportedDenturesContent}/>
            </>
    );
  };
  
  export default ImplantSupportedDentures;