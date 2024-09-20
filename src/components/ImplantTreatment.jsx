import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const implantTreatmentData = {
    mainTitleText: 'Implant Treatment',
    title: 'What is Implant Treatment?',
    description: `Dental implant treatment is a surgical procedure in which a titanium post is surgically inserted into
    the jawbone to replace a missing tooth root. This post acts as a foundation for a crown, bridge, or
    denture. Dental implants are a popular choice for replacing missing teeth because they look, feel, and
    function like natural teeth.`,
    sectionOneTitle: 'Some benefits of dental implants include:',
    sectionOneData: [
        {
            title: 'Improved appearance:',
            description: `Dental implants can give a natural-looking smile that one can be
            confident in.`,
          },
          {
            title: 'Improved oral health:',
            description: `Dental implants can help to prevent bone loss in the jaw, which can occur
            after tooth loss. They can also help to improve the bite and speech.`,
          },
          {
            title: 'Durability:',
            description: `Dental implants are very durable and can last for many years with proper care.`,
          },
          {
            title: 'Comfort:',
            description: `Dental implants are comfortable to wear and feel like natural teeth.`,
          },
    
    
    ],
    imgSrc: '/ImplantTreatment.jpg'
  };

const ImplantTreatment = () => {
const stages = [
    "Consultation with the dentist.",
    "Establishing a treatment plan.",
    "Performing all prerequisite procedures to ensure a good outcome, including extractions and bone grafts.",
    "Allow for healing time for procedures.",
    "Return for placement of the post. (In some instances, both extractions and placements can be done at the same time by an experienced dentist)",
    "Allow time for gums to heal.",
    "Return for placement of the abutment and taking impressions.",
    "Return for installation of your implant crown.",
]
    return (
        <>
     
   <GenericServiceComponent {...implantTreatmentData}/>
<div className="container3">

   <div className="section">
      <h2 className="section-title">The process of getting an implant involves several stages:</h2>
      <ul className="card-list">
      {stages.map((benefit, index) => (
          <li className="card" key={index}>
          <div className="card-content">
          <p className="card-description">{benefit}</p>
          </div>
          </li>
          ))}
          </ul>
          </div>
          </div>
          <div className="cardImplantTreatment">Our dental implants will restore your health and breathe new life into your smile.
</div>
            </>
    );
  };
  
  export default ImplantTreatment;