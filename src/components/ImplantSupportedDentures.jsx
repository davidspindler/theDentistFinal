import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const implantSupportedDenturesData = {
    mainTitleText: 'Implant Supported Dentures',
    title: 'What are Implant Supported Dentures?',
    description: `Implant-supported dentures are a type of dental prosthesis that is secured in place with the help of
    dental implants. Unlike traditional dentures that rely on adhesive or suction to stay in place, implant-
    supported dentures are anchored to dental implants surgically placed in the jawbone. They are superior
    to traditional dentures due to these factors:`,
    sectionOneTitle: 'Implant Supported Dentures serve various purposes, including:',
    sectionOneData: [
      {
        title: 'Improved stability:',
        description: `Implant-supported dentures are much more stable than traditional dentures
        because they are anchored to the jawbone. This means that they won&#39;t slip or move around
        when you eat or talk.`,
      },
      {
        title: 'Increased comfort:',
        description: `Implant-supported dentures are also more comfortable than traditional
        dentures because they don't irritate the gums.`,
      },
      {
        title: 'Improved chewing:',
        description: `Because they are more stable, implant-supported dentures allow you to
        chew food more effectively.`,
      },

      {
        title: 'Preserved bone health:',
        description: `Traditional dentures can lead to bone loss in the jawbone. Implant-
        supported dentures, on the other hand, actually help to preserve bone health.`,
      },
      {
        title: 'Enhanced confidence:',
        description: `Implant-supported dentures can give you back your confidence to smile
        and speak in public.`,
      },
    ],
    sectionTwoTitle: 'The process typically involves:',
    sectionTwoData: [
        {
            title: 'Consultation and Evaluation:',
            description: `The first step involves a consultation where we assess your oral
            health, bone density, and overall suitability for dental implants.`,
          },
          {
            title: 'Implant Placement:',
            description: `Dental implants, usually made of titanium, are surgically placed into the
            jawbone. The number of implants can vary based on individual needs.`,
          },
          {
            title: 'Healing Period (Osseointegration):',
            description: `After implant placement, there is a healing period during
            which the implants fuse with the surrounding bone in a process called osseointegration. This
            provides a stable foundation for the dentures.`,
          },
          {
            title: 'Abutment Attachment:',
            description: `Once the implants have integrated with the jawbone, abutments
            (connector pieces) are attached to the implants. These abutments will serve as attachment
            points for the dentures.`,
          },
          {
            title: 'Denture Fabrication:',
            description: `The dentures are custom-made to fit your mouth and are designed to
            attach securely to the abutments.`,
          },
          {
            title: 'Attachment of Dentures:',
            description: `The final step involves attaching the dentures to the abutments.
            Implant-supported dentures can be removable or fixed in place, depending on the specific type
            chosen.`,
          },
    
    
    
    
     
    ],
    imgSrc: '/ImplantSupportedDentures.jpg'
  };

const ImplantSupportedDentures = () => {

    return (
        <>
     
   <GenericServiceComponent {...implantSupportedDenturesData}/>
            </>
    );
  };
  
  export default ImplantSupportedDentures;