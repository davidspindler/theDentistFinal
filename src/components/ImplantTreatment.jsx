import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const implantTreatmentData = {
    mainTitleText: 'Implant Treatment',
   
    imgSrc: '/ImplantTreatment.jpg'
  };
  const ImplantTreatmentContent = () => {
    return (
      <>
  <p className="padding-bottom-5">
    Dental implant treatment is a surgical procedure in which a titanium post is surgically inserted into the jawbone to replace a missing tooth root. This post acts as a foundation for a crown, bridge, or denture. Dental implants are a popular choice for replacing missing teeth because they look, feel, and function like natural teeth.
  </p>

  <h3 className="padding-bottom-5">Benefits of Dental Implants</h3>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Improved appearance:</strong> Dental implants can give a natural-looking smile that one can be confident in.
    </li>
    <li className="padding-bottom-5">
      <strong>Improved oral health:</strong> Dental implants can help to prevent bone loss in the jaw, which can occur after tooth loss. They can also help to improve the bite and speech.
    </li>
    <li className="padding-bottom-5">
      <strong>Durability:</strong> Dental implants are very durable and can last for many years with proper care.
    </li>
    <li className="padding-bottom-5">
      <strong>Comfort:</strong> Dental implants are comfortable to wear and feel like natural teeth.
    </li>
  </ul>

  <h3 className="padding-bottom-5">The Process of Getting a Dental Implant</h3>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      Consultation with the dentist.
    </li>
    <li className="padding-bottom-5">
      Establishing a treatment plan.
    </li>
    <li className="padding-bottom-5">
      Performing all prerequisite procedures to ensure a good outcome, including extractions and bone grafts.
    </li>
    <li className="padding-bottom-5">
      Allow for healing time for procedures.
    </li>
    <li className="padding-bottom-5">
      Return for placement of the post. (In some instances, both extractions and placements can be done at the same time by an experienced dentist)
    </li>
    <li className="padding-bottom-5">
      Allow time for gums to heal.
    </li>
    <li className="padding-bottom-5">
      Return for placement of the abutment and taking impressions.
    </li>
    <li className="padding-bottom-5">
      Return for installation of your implant crown.
    </li>
  </ul>

  <p className="">
    Our dental implants will restore your health and breathe new life into your smile.
  </p>
      </>
    )
  }
const ImplantTreatment = () => {

    return (
        <>
     
   <GenericServiceComponent {...implantTreatmentData} AdditionalComponent={ImplantTreatmentContent}/>

            </>
    );
  };
  
  export default ImplantTreatment;