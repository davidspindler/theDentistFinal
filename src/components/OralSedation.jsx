import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const oralSedationData = {
    mainTitleText: 'Oral Sedation',
    title: 'What is Oral Sedation?',
    description: `Oral sedation is a medical procedure in which a patient takes sedative medications by mouth to induce a
    state of relaxation and reduce anxiety during a medical or dental procedure. It is a common option for
    people who have dental anxiety, a strong gag reflex, or who need to undergo lengthy or complex
    procedures.
    
    18
    Oral sedatives are typically taken in pill form about 30 to 60 minutes before the procedure. The
    medication will make you feel drowsy and relaxed, but you will still be awake and conscious. You may
    also experience some memory loss of the procedure.`,
  };

const OralSedation = () => {

    return (
        <>
     
   <GenericServiceComponent {...oralSedationData}/>
            </>
    );
  };
  
  export default OralSedation;