import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const patientExperiencesData = {
    mainTitleText: 'Patient Experiences',
    title: 'Our Patients describe us best! Let us see what they have to say:',
    description: `Jane Doe: 'Description of first patient experience'`,
  };

const PatientExperiences = () => {

    return (
        <>
     
   <GenericServiceComponent {...patientExperiencesData}/>
            </>
    );
  };
  
  export default PatientExperiences;