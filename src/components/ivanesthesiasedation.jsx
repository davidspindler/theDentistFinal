import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const ivData = {
    mainTitleText: 'IV / Oral Anesthesia Sedation',
    
   
  };

const IvanesthesiasedationContent = () => {
  return (
    <>
<p className="padding-bottom-5">
    In dentistry, IV (intravenous) anesthesia sedation is a form of sedation used to help patients relax and remain comfortable during dental procedures. Some important points include:
  </p>

  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Administration: IV sedation involves the administration of sedative drugs directly into the bloodstream through a vein.</li>
    <li className="padding-bottom-5">Monitoring: Patients receiving IV sedation are closely monitored by trained dental professionals. This includes monitoring vital signs such as heart rate, blood pressure, and oxygen levels to ensure the patient's safety throughout the procedure.</li>
    <li className="padding-bottom-5">Conscious Sedation: IV sedation/oral sedation is a form of conscious sedation, meaning that the patient remains awake and able to respond to verbal cues during the procedure. However, they are likely to have little or no memory of the procedure afterward.</li>
    <li className="padding-bottom-5">Qualified Providers: Administration of IV sedation in dentistry is typically performed by qualified and trained dental professionals.</li>
  </ul>
    </>
  )
}
const Ivanesthesiasedation = () => {

    return (
        <>
     
   <GenericServiceComponent {...ivData} AdditionalComponent={IvanesthesiasedationContent}/>
  
            </>
    );
  };
  
  export default Ivanesthesiasedation;