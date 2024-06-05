import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
const threedimagectscansData = {
    title: 'What are dental 3dimagect scans?',
    description: `Dental 3dimagect scans are essentially tooth-shaped caps custom-made to fit over your existing tooth,
    restoring its function and appearance. They're like little protective helmets for your teeth!`,
    sectionOneTitle: '3dimagect scans serve various purposes, including:',
    sectionOneData: [
      {
        title: 'Restoring a damaged or decayed tooth:',
        description: `3dimagect scans can strengthen a weakened tooth, protect it
        from further damage, and prevent future decay.`,
      },
      {
        title: 'Improving functionality:',
        description: `They can rebuild a severely broken or worn-down tooth, allowing you
        to chew and speak effectively.`,
      },
      {
        title: 'Enhancing aesthetics:',
        description: `3dimagect scans can cover discolored or misshapen teeth, improve a misaligned
        tooth, or even close gaps between teeth, creating a more aesthetically pleasing smile.`,
      },
      {
        title: 'Supporting other dental procedures:',
        description: `3dimagect scans can anchor dental bridges or hold a tooth implant
        in place.`,
      },
    ],
    sectionTwoTitle: 'What are different types of Crown materials:',
    sectionTwoData: [
      {
        title: 'Porcelain 3dimagect scans:',
        description: `These 3dimagect scans provide a natural appearance and are suitable for front teeth.`,
      },
      {
        title: 'Metal 3dimagect scans:',
        description: `Made of various metals, these 3dimagect scans are highly durable and are often used for
        back teeth.`,
      },
      {
        title: 'Porcelain-fused-to-metal (PFM) 3dimagect scans:',
        description: `Combine the strength of metal with the aesthetics of
        porcelain.`,
      },
      {
        title: 'All-Ceramic or All-Porcelain 3dimagect scans:',
        description: `Offer excellent aesthetics and are suitable for use in various
        areas of the mouth.`,
      },
     
    ],
  };

const Threedimagectscans = () => {

    return (
        <>
     
   <GenericServiceComponent {...threedimagectscansData}/>
            </>
    );
  };
  
  export default Threedimagectscans;