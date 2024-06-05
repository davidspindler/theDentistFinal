import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const occfadData = {
    mainTitleText: 'OCCFAD',
    title: 'What is the OC Center for Advanced Dentistry?',
    description: `The Orange County Center for Advanced dentistry is ... WHE ARE WE? VISION/CULTURE:`,
  };

const OCCFAD = () => {

    return (
        <>
     
   <GenericServiceComponent {...occfadData}/>
            </>
    );
  };
  
  export default OCCFAD;