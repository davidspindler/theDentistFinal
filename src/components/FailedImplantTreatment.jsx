import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const failedImplantTreatmentData = {
    mainTitleText: 'Failed Implant Treatment',
    title: 'What is a Failed Implant Treatment?',
    description: `Dental implants have a success rate of 98% but a few can fail. A dental implant tends to fail if it has not
    successfully integrated into the jawbone or has lost its functionality. This can be a frustrating and
    concerning experience for patients, as dental implants are often seen as a permanent solution for
    missing teeth.`,
    sectionOneTitle: 'There are several reasons why a dental implant may fail, including:',
    sectionOneData: [
      {
        title: 'Infection:',
        description: `Bacteria can enter the area around the implant and cause an infection, which can damage the
        bone and surrounding tissues.`,
      },
      {
        title: 'Peri-implantitis:',
        description: `This is a condition like gum disease that affects the tissues around the implant. It can
        lead to bone loss and eventual implant failure.`,
      },
      {
        title: 'Medical conditions:',
        description: `Certain medical conditions, such as diabetes or osteoporosis, can increase the risk of
        implant failure.`,
      },
      {
        title: 'Smoking:',
        description: `Smoking is a major risk factor for implant failure, as it can impair blood flow and healing.`,
      },
      {
        title: 'Poor implant placement:',
        description: `In some cases, implant failure may be due to errors made during the surgery.
        Insufficient jaw bone or improper placement can lead to implant failures.`,
      },
    ],
  };

const FailedImplantTreatment = () => {

    return (
        <>
     
   <GenericServiceComponent {...failedImplantTreatmentData}/>
   <div className="cardImplantTreatment">Treatment for a failed dental implant can vary depending on the cause of the failure. In some cases, the
implant may simply need to be cleaned and the surrounding tissues treated. In other cases, the implant
may need to be removed and replaced.
We’re your source for treating a failed implant in Orange County. Our team is highly skilled at restoring
and replacing failing implants. More importantly, we’ll make sure that your implant is set up for success
this time.</div>
            </>
    );
  };
  
  export default FailedImplantTreatment;