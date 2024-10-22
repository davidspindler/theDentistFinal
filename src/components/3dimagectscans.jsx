import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
import hi from '../../src/assets/images/hi.png'
const threedimagectscansData = {
    mainTitleText: "CT Scans/ 3D Imaging",
     imgSrc: hi

  };

const ThreedimagectscansContent = () => {
return (
  <>
    <h2 className="padding-bottom-5">Cone-Beam CT (CBCT) Technology</h2>
  
  <p className="padding-bottom-5">
    We use state-of-the-art, full-cranial Cone-Beam CT (CBCT) technology that provides highly accurate 3-D radiographic images for the diagnosis, planning, and treatment of the oral and maxillofacial region. The technology uses a narrow cone-shaped X-ray beam to capture multiple images from different angles while rotating around your head. Software then reconstructs these images into detailed 3D views. CBCT is used when regular dental X-rays aren't enough to provide necessary information. Common uses include:</p>

  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Planning for implant placement</li>
    <li className="padding-bottom-5">Investigating impacted teeth and wisdom teeth issues, nerve pathways</li>
    <li className="padding-bottom-5">Diagnosing jaw fractures or tumors</li>
    <li className="padding-bottom-5">Assessing root canal anatomy</li>
    <li className="padding-bottom-5">Evaluating orthodontic treatment options</li>
  </ul>

  <p className="padding-bottom-5">
    Lower Radiation Exposure: While CBCT involves X-rays, the radiation exposure is generally lower compared to traditional medical CT scans.
  </p>
  </>
)
}
const Threedimagectscans = () => {

    return (
        <>
     
   <GenericServiceComponent {...threedimagectscansData} AdditionalComponent={ThreedimagectscansContent}/>
  
            </>
    );
  };
  
  export default Threedimagectscans;