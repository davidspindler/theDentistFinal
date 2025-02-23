import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const occfadData = {
    mainTitleText: 'OCCFAD',
    title: 'What is the O.C. Center For Advanced Dentistry?',
    description: `The Orange County Center for Advanced dentistry is a highly skilled, comprehensive, and economically valued dentist office offering many types of dental care. Navigate to 'Patient Care Services' to find out more about what we offer. `,
  };

const OCCFAD = () => {

    return (
        <>
     
   <GenericServiceComponent {...occfadData}/>
            </>
    );
  };
  
  export default OCCFAD;