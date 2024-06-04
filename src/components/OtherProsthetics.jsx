import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const otherProstheticsData = {
    title: 'What are dental other prosthetics?',
    description: `Dental implantTreatment are essentially tooth-shaped caps custom-made to fit over your existing tooth,
    restoring its function and appearance. They're like little protective helmets for your teeth!`,
    sectionOneTitle: 'implantTreatment serve various purposes, including:',
    sectionOneData: [
      {
        title: 'Restoring a damaged or decayed tooth:',
        description: `implantTreatment can strengthen a weakened tooth, protect it
        from further damage, and prevent future decay.`,
      },
      {
        title: 'Improving functionality:',
        description: `They can rebuild a severely broken or worn-down tooth, allowing you
        to chew and speak effectively.`,
      },
      {
        title: 'Enhancing aesthetics:',
        description: `implantTreatment can cover discolored or misshapen teeth, improve a misaligned
        tooth, or even close gaps between teeth, creating a more aesthetically pleasing smile.`,
      },
      {
        title: 'Supporting other dental procedures:',
        description: `implantTreatment can anchor dental bridges or hold a tooth implant
        in place.`,
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