import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
import hi from '../../src/assets/images/hi.png'
const threedimagectscansData = {
    mainTitleText: "CT Scans/ 3D Imaging",
    title: 'What are CT Scans and 3D imaging?',
    description: `A Dental CT scan, also known as Cone Beam Computed Tomography (CBCT), is a specialized type of CT
    scan designed for imaging the structures of the oral and maxillofacial region.`,
    sectionOneTitle: 'What is a CBCT?',
    sectionOneData: [
      {
        title: 'The technology uses a narrow cone-shaped X-ray beam to capture multiple images from different angles while rotating around your head. Software then reconstructs these images into detailed 3D views.',
        description: ``,
      },
      
    ],
    sectionTwoTitle: 'When is CBCT used?',
    sectionTwoData: [
      {
        title: `When regular dental X-rays aren't enough to provide necessary information.`,
        description: `Common uses include:

        <li> -Planning for implant placement </li>
        <li> -Investigating impacted teeth and wisdom teeth issues </li>
        <li> -Diagnosing jaw fractures or tumors </li>
        <li> -Assessing root canal anatomy</li>
        <li> -Evaluating orthodontic treatment options</li>`,
      },
    ],
     sectionThreeTitle: 'What are the benefits of CBCT?',
     sectionThreeData: [
        {title: 'Lower Radiation Exposure:',
        description: "While CBCT involves X-rays, the radiation exposure is generally lower compared to traditional medical CT scans."
        },
        {
            title: 'High Resolution:',
            description: `Dental CT scans offer high-resolution images, allowing for precise visualization
            of teeth, bone, soft tissues, and nerve pathways. This enables precise diagnostics and treatment
            planning. This provides much more detailed information than standard X-rays.`,
          },
          {
            title: 'Diagnostics and treatment planning',
            description: ``,
          },
         
    
    
     ],
     imgSrc: hi

  };

const Threedimagectscans = () => {

    return (
        <>
     
   <GenericServiceComponent {...threedimagectscansData}/>
   <div className="cardImplantTreatment">
   We use state-of-the-art, full-cranial cone-beam CT technology that provides highly accurate 3-D
radiographic images for the diagnosis, planning and treatment of oral surgery and implants.
   </div>
            </>
    );
  };
  
  export default Threedimagectscans;