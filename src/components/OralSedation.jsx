import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const oralSedationData = {
    title: 'What are dental oralSedation?',
    description: `Dental oralSedation are essentially tooth-shaped caps custom-made to fit over your existing tooth,
    restoring its function and appearance. They're like little protective helmets for your teeth!`,
    sectionOneTitle: 'oralSedation serve various purposes, including:',
    sectionOneData: [
      {
        title: 'Restoring a damaged or decayed tooth:',
        description: `oralSedation can strengthen a weakened tooth, protect it
        from further damage, and prevent future decay.`,
      },
      {
        title: 'Improving functionality:',
        description: `They can rebuild a severely broken or worn-down tooth, allowing you
        to chew and speak effectively.`,
      },
      {
        title: 'Enhancing aesthetics:',
        description: `oralSedation can cover discolored or misshapen teeth, improve a misaligned
        tooth, or even close gaps between teeth, creating a more aesthetically pleasing smile.`,
      },
      {
        title: 'Supporting other dental procedures:',
        description: `oralSedation can anchor dental bridges or hold a tooth implant
        in place.`,
      },
    ],
    sectionTwoTitle: 'What are different types of Crown materials:',
    sectionTwoData: [
      {
        title: 'Porcelain oralSedation:',
        description: `These oralSedation provide a natural appearance and are suitable for front teeth.`,
      },
      {
        title: 'Metal oralSedation:',
        description: `Made of various metals, these oralSedation are highly durable and are often used for
        back teeth.`,
      },
      {
        title: 'Porcelain-fused-to-metal (PFM) oralSedation:',
        description: `Combine the strength of metal with the aesthetics of
        porcelain.`,
      },
      {
        title: 'All-Ceramic or All-Porcelain oralSedation:',
        description: `Offer excellent aesthetics and are suitable for use in various
        areas of the mouth.`,
      },
     
    ],
  };

const OralSedation = () => {

    return (
        <>
     
   <GenericServiceComponent {...oralSedationData}/>
            </>
    );
  };
  
  export default OralSedation;