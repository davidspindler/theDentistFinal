import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
const intraoralScannerData = {
    mainTitleText: "Intraoral Scanners:",
    title: 'What are Intraoral Scanners?',
    description: `An intraoral scanner is a handheld device used in dentistry to create digital 3D models of the teeth and
    gums. It has revolutionized dentistry by offering a more accurate, comfortable, and efficient alternative
    to taking traditional impressions using trays with dental putty.
    The scanner typically consists of a handheld wand with a small camera that captures thousands of digital
    impressions per second of the oral structures. These images are then processed to create a highly
    accurate and detailed 3D model of the patient&#39;s teeth. Intraoral scanners are commonly used in various
    dental procedures, including the fabrication of Veneers, crowns, bridges, braces, and other dental
    restorations.
    We use the latest 3shape® wireless scanner, which has the best-in-class functionality in this space.`,
   
  };

const IntraoralScanners = () => {

    return (
        <>
     
   <GenericServiceComponent {...intraoralScannerData}/>
            </>
    );
  };
  
  export default IntraoralScanners;