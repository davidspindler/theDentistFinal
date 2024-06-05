import GenericServiceComponent from "./GenericServiceComponent";
// import './ToothExtractions.css'
const softTissueLasersData = {
    mainTitleText: 'Soft Tissue Lasers',
    title: 'What are soft tissue lasers?',
    description: `Laser stands for light amplification by stimulated emission of radiation. During a procedure, the laser will
    emit light energy in a narrow, concentrated beam. This light produces a reaction when it hits tissue,
    allowing it to remove or shape tissue. Soft tissue lasers are used for procedures involving soft tissues in
    the mouth, like gums.`,
    sectionOneTitle: 'In general, lasers are used for various purposes in dentistry:',
    sectionOneData: [
      {
        title: '',
        description: `  <li>-Removing tissue around an exposed wisdom tooth</li>
        <li>-Reshaping gum tissue</li>
        <li>-Removing and reshaping bone and gum tissue during crown lengthening procedures</li>
        <li>-Removing inflamed gum tissue</li>
        <li>-Removing muscle attachments that restrict tongue or lip movement</li>
        <li>-Accelerating in-office tooth whitening procedures</li>
        <li>-Reducing the discomfort from cold sores and cankers</li>
        <li>-Removing small amounts of tooth enamel</li>
        <li>-Preparing tooth enamel for composite bonding</li>
        <li>-Repairing certain worn-down fillings</li>`,
      },
    ],
  
  };

const SoftTissueLasers = () => {

    return (
        <>
     
   <GenericServiceComponent {...softTissueLasersData}/>
            </>
    );
  };
  
  export default SoftTissueLasers;