import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const otherProstheticsData = {
    mainTitleText: 'Other Prosthetics',
   
    imgSrc: '/OtherProsthetics.jpg'
  };

const OtherProstheticsContent = () => {
  return (
    <>
    <h2 className="padding-bottom-5">What Are Dental Prosthetics?</h2>
  <p className="padding-bottom-5">
    Dental prosthetics are a vital branch of prosthetics, focused on restoring function and aesthetics to the mouth and dentition. They cover a wide range of options, addressing issues like missing teeth, damaged teeth, and jawbone deficiencies.
  </p>
  
  <h3 className="padding-bottom-5">Fixed Prosthetic Devices:</h3>
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">
      <strong>Bridges:</strong> These replace one or more missing teeth by anchoring to surrounding teeth with crowns. They act as a bridge, filling the gap and restoring chewing function. Anchoring can be done by using an existing tooth or an implant.
    </li>
  </ul>

  <h3 className="padding-bottom-5">Removable Prosthetic Devices:</h3>
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">
      <strong>Dentures:</strong> These are full or partial sets of artificial teeth held in place by gums or remaining teeth. They can be removed for cleaning and maintenance.
    </li>
    <li className="padding-bottom-5">
      <strong>Partial dentures:</strong> These replace a few missing teeth, often attached to metal clasps that anchor onto surrounding teeth.
    </li>
  </ul>
    </>
  )
}
const OtherProsthetics = () => {

    return (
        <>
   <GenericServiceComponent {...otherProstheticsData} AdditionalComponent={OtherProstheticsContent}/>
            </>
    );
  };
  
  export default OtherProsthetics;