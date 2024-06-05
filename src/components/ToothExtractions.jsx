import GenericServiceComponent from "./GenericServiceComponent";
// import './ToothExtractions.css'
const toothExtractionsData = {
    mainTitleText: 'Tooth Extractions',
    title: 'Tooth extractions (including wisdom teeth)',
    description: `Tooth extractions, including wisdom teeth removal, are common dental procedures performed by
    dental surgeons to relieve pain, prevent infection, or make room for other teeth to grow in properly.
    Wisdom teeth are the third set of molars that typically erupt in the late teens or early twenties. They are
    often extracted because they can cause pain, crowding, or infection.`,
    sectionOneTitle: 'Why does a tooth need to be extracted?',
    sectionOneData: [
      {
        title: 'Decay or Damage:',
        description: `Teeth that are extensively decayed or damaged may need to be removed.`,
      },
      {
        title: 'Impacted Wisdom Teeth:',
        description: `Wisdom teeth, also known as third molars, may be removed if they are
        impacted (unable to emerge properly) or causing issues like pain, infection, or damage to neighboring
        teeth.`,
      },
      {
        title: 'Crowding:',
        description: `Sometimes, tooth extraction is necessary to create space for orthodontic treatment when
        there is dental crowding.`,
      },
      {
        title: 'Infection or Gum Disease:',
        description: `Disease: Severe gum disease or infections may necessitate tooth extraction.`,
      },
      {
        title: 'Fractured Teeth:',
        description: `A tooth that is severely fractured may need to be extracted.`,
      },
    ],
    
  };

const ToothExtractions = () => {

    return (
        <>
     
   <GenericServiceComponent {...toothExtractionsData}/>
   <div>pic will go here</div>
            </>
    );
  };
  
  export default ToothExtractions;