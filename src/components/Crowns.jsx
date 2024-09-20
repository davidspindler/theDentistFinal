import GenericServiceComponent from "./GenericServiceComponent";
import './Crowns.css'
const crownsData = {
    mainTitleText: 'Crowns',
    title: 'What are Dental Crowns?',
    description: `Dental crowns are essentially tooth-shaped caps custom-made to fit over your existing tooth,
    restoring its function and appearance. They're like little protective helmets for your teeth!`,
    sectionOneTitle: 'Crowns serve various purposes, including:',
    sectionOneData: [
      {
        title: 'Restoring a damaged or decayed tooth:',
        description: `Crowns can strengthen a weakened tooth, protect it
        from further damage, and prevent future decay.`,
      },
      {
        title: 'Improving functionality:',
        description: `They can rebuild a severely broken or worn-down tooth, allowing you
        to chew and speak effectively.`,
      },
      {
        title: 'Enhancing aesthetics:',
        description: `Crowns can cover discolored or misshapen teeth, improve a misaligned
        tooth, or even close gaps between teeth, creating a more aesthetically pleasing smile.`,
      },
      {
        title: 'Supporting other dental procedures:',
        description: `Crowns can anchor dental bridges or hold a tooth implant
        in place.`,
      },
    ],
    sectionTwoTitle: 'What are different types of Crown materials:',
    sectionTwoData: [
      {
        title: 'Porcelain Crowns:',
        description: `These crowns provide a natural appearance and are suitable for front teeth.`,
      },
      {
        title: 'Metal Crowns:',
        description: `Made of various metals, these crowns are highly durable and are often used for
        back teeth.`,
      },
      {
        title: 'Porcelain-fused-to-metal (PFM) Crowns:',
        description: `Combine the strength of metal with the aesthetics of
        porcelain.`,
      },
      {
        title: 'All-Ceramic or All-Porcelain Crowns:',
        description: `Offer excellent aesthetics and are suitable for use in various
        areas of the mouth.`,
      },
     
    ],
    imgSrc: '/Crowns.mp4'
  };

const Crowns = () => {
    const benefits = [
        "Can dramatically improve the appearance of your smile",
        "Durable and long-lasting",
        "Stain-resistant",
        "Relatively quick and easy procedure"
      ];
    
      const considerations = [
        "May require some removal of enamel",
        "Not as strong as natural teeth",
        "While Crowns can provide a dramatic improvement, they may not be suitable for everyone. The Dentist will assess your oral health and discuss alternative options if necessary."
      ];
    return (
        <>
     
   <GenericServiceComponent {...crownsData}/>
            </>
    );
  };
  
  export default Crowns;