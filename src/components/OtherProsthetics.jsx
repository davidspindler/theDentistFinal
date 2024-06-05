import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const otherProstheticsData = {
    mainTitleText: 'Other Prosthetics',
    title: 'What are Prosthetics',
    description: `Dental prosthetics are a vital branch of prosthetics, focused on restoring function and aesthetics to the
    mouth and dentition. They cover a wide range of options, addressing issues like missing teeth, damaged
    teeth, and jawbone deficiencies.`,
    sectionOneTitle: 'Fixed Prosthetic Devices:',
    sectionOneData: [
      {
        title: 'Crowns:',
        description: `These are tooth-shaped caps that completely cover a damaged or weakened tooth, restoring its
        strength and appearance. Crowns can be placed on existing shaped tooth structure or on an implant.`,
      },
      {
        title: 'Bridges:',
        description: `These replace one or more missing teeth by anchoring to surrounding teeth with crowns. They
        act as a bridge, filling the gap and restoring chewing function. Anchoring can done by using existing
        tooth or an implant.`,
      },
      {
        title: 'Implants:',
        description: `Please see implant treatment section above.`,
      },
      {
        title: 'Removable Prosthetic Devices:',
        description: ``,
      },
      {
        title: 'Dentures:',
        description: `These are full or partial sets of artificial teeth held in place by gums or remaining teeth. They
        can be removed for cleaning and maintenance.`,
      },
      {
        title: 'Partial dentures:',
        description: `These replace a few missing teeth, often attached to metal clasps that anchor onto
        surrounding teeth.`,
      },
      {
        title: 'Implant-supported dentures:',
        description: `These dentures anchor onto strategically placed dental implants for
        increased stability and comfort compared to traditional dentures.`,
      },
      {
        title: 'Other Prosthetic Devices:',
        description: `others include Veneers, Inlays and Onlays.`,
      },


    ],
    sectionTwoTitle: 'What are different types of Crown materials:',
    sectionTwoData: [
      {
        title: 'Porcelain implantTreatment:',
        description: `These implantTreatment provide a natural appearance and are suitable for front teeth.`,
      },
      {
        title: 'Metal implantTreatment:',
        description: `Made of various metals, these implantTreatment are highly durable and are often used for
        back teeth.`,
      },
      {
        title: 'Porcelain-fused-to-metal (PFM) implantTreatment:',
        description: `Combine the strength of metal with the aesthetics of
        porcelain.`,
      },
      {
        title: 'All-Ceramic or All-Porcelain implantTreatment:',
        description: `Offer excellent aesthetics and are suitable for use in various
        areas of the mouth.`,
      },
     
    ],
  };

const OtherProsthetics = () => {

    return (
        <>
   <GenericServiceComponent {...otherProstheticsData}/>
            </>
    );
  };
  
  export default OtherProsthetics;