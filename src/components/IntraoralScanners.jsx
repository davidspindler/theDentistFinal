import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
import intraoral from '../../src/assets/images/intraoral.png'
const intraoralScannerData = {
    mainTitleText: "Intraoral Scanners:",
  
   imgSrc: intraoral
  };

const IntraoralScannersContent = () => {
  return (
    <>
      <p className="padding-bottom-5">
    An intraoral scanner is a handheld device used in dentistry to create digital 3D models of the teeth and gums. It has revolutionized dentistry by offering a more accurate, comfortable, and efficient alternative to taking traditional impressions using trays with dental putty.
  </p>

  <p className="padding-bottom-5">
    The scanner typically consists of a handheld wand with a small camera that captures thousands of digital impressions per second of the oral structures. These images are then processed to create a highly accurate and detailed 3D model of the patient's teeth. Intraoral scanners are commonly used in various dental procedures, including the fabrication of veneers, crowns, bridges, braces, and other dental restorations.
  </p>

  <p className="padding-bottom-5">
    We use the latest 3shape® wireless scanner, which has the best-in-class functionality in this space.
  </p>
    </>
  )
}
const IntraoralScanners = () => {

    return (
        <>
     
   <GenericServiceComponent {...intraoralScannerData} AdditionalComponent={IntraoralScannersContent}/>
            </>
    );
  };
  
  export default IntraoralScanners;