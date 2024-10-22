import GenericServiceComponent from "./GenericServiceComponent";
// import './ToothExtractions.css'
const softTissueLasersData = {
    mainTitleText: 'Soft Tissue Lasers',
   
  };

const SoftTissueLasersContent = () => {
  return (
    <>
     <p className="padding-bottom-5">
    Laser stands for light amplification by stimulated emission of radiation. During a procedure, the laser emits light energy in a narrow, concentrated beam. This light produces a reaction when it hits tissue, allowing it to remove or shape tissue. Soft tissue lasers are used for procedures involving soft tissues in the mouth, like gums.
  </p>

  <h3 className="padding-bottom-5">General Uses of Lasers in Dentistry:</h3>
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Removing tissue around an exposed wisdom tooth.</li>
    <li className="padding-bottom-5">Reshaping gum tissue.</li>
    <li className="padding-bottom-5">Removing and reshaping bone and gum tissue during crown lengthening procedures.</li>
    <li className="padding-bottom-5">Removing inflamed gum tissue.</li>
    <li className="padding-bottom-5">Removing muscle attachments that restrict tongue or lip movement.</li>
    <li className="padding-bottom-5">Accelerating in-office tooth whitening procedures.</li>
    <li className="padding-bottom-5">Reducing discomfort from cold sores and cankers.</li>
    <li className="padding-bottom-5">Removing small amounts of tooth enamel.</li>
    <li className="padding-bottom-5">Preparing tooth enamel for composite bonding.</li>
    <li className="padding-bottom-5">Repairing certain worn-down fillings.</li>
  </ul>
    </>
  )
}
const SoftTissueLasers = () => {

    return (
        <>
   <GenericServiceComponent {...softTissueLasersData} AdditionalComponent={SoftTissueLasersContent}/>
            </>
    );
  };
  
  export default SoftTissueLasers;