import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const failedImplantTreatmentData = {
    mainTitleText: 'Failed Implant Treatment',
  
    imgSrc: '/ImplantTreatment.jpg'
  };

const FailedImplantTreatmentContent = () => {
  return (
    <>
    <p className="padding-bottom-5">
    Dental implants have a success rate of 98% but a few can fail. A dental implant tends to fail if it has not successfully integrated into the jawbone or has lost its functionality. This can be a frustrating and concerning experience for patients, as dental implants are often seen as a permanent solution for missing teeth.
  </p>

  <p className="padding-bottom-5">
    There are several reasons why a dental implant may fail, including:
  </p>

  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Infection:</strong> Bacteria can enter the area around the implant and cause an infection, which can damage the bone and surrounding tissues.
    </li>
    <li className="padding-bottom-5">
      <strong>Peri-implantitis:</strong> This is a condition like gum disease that affects the tissues around the implant. It can lead to bone loss and eventual implant failure.
    </li>
    <li className="padding-bottom-5">
      <strong>Medical conditions:</strong> Certain medical conditions, such as diabetes or osteoporosis, can increase the risk of implant failure.
    </li>
    <li className="padding-bottom-5">
      <strong>Smoking:</strong> Smoking is a major risk factor for implant failure, as it can impair blood flow and healing.
    </li>
    <li className="padding-bottom-5">
      <strong>Poor implant placement:</strong> In some cases, implant failure may be due to errors made during the surgery. Insufficient jawbone or improper placement can lead to implant failures.
    </li>
  </ul>

  <p className="padding-bottom-5">
    Treatment for a failed dental implant can vary depending on the cause of the failure. In some cases, the implant may simply need to be cleaned and the surrounding tissues treated. In other cases, the implant may need to be removed and replaced.
  </p>

  <p className="padding-bottom-5">
    We’re your source for treating a failed implant in Orange County. Our team is highly skilled at restoring and replacing failing implants. More importantly, we’ll make sure that your implant is set up for success this time.
  </p>
    </>
  )
}

const FailedImplantTreatment = () => {

    return (
        <>
     
   <GenericServiceComponent {...failedImplantTreatmentData} AdditionalComponent={FailedImplantTreatmentContent}/>
 
            </>
    );
  };
  
  export default FailedImplantTreatment;