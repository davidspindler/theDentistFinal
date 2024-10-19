import GenericServiceComponent from "./GenericServiceComponent";
// import './ToothExtractions.css'
const toothExtractionsData = {
    mainTitleText: 'Tooth Extractions',
    // title: 'Tooth extractions (including wisdom teeth)',
    // description: `Tooth extractions, including wisdom teeth removal, are common dental procedures performed by
    // dental surgeons to relieve pain, prevent infection, or make room for other teeth to grow in properly.
    // Wisdom teeth are the third set of molars that typically erupt in the late teens or early twenties. They are
    // often extracted because they can cause pain, crowding, or infection.`,
    // sectionOneTitle: 'Why does a tooth need to be extracted?',
    // sectionOneData: [
    //   {
    //     title: 'Decay or Damage:',
    //     description: `Teeth that are extensively decayed or damaged may need to be removed.`,
    //   },
    //   {
    //     title: 'Impacted Wisdom Teeth:',
    //     description: `Wisdom teeth, also known as third molars, may be removed if they are
    //     impacted (unable to emerge properly) or causing issues like pain, infection, or damage to neighboring
    //     teeth.`,
    //   },
    //   {
    //     title: 'Crowding:',
    //     description: `Sometimes, tooth extraction is necessary to create space for orthodontic treatment when
    //     there is dental crowding.`,
    //   },
    //   {
    //     title: 'Infection or Gum Disease:',
    //     description: `Disease: Severe gum disease or infections may necessitate tooth extraction.`,
    //   },
    //   {
    //     title: 'Fractured Teeth:',
    //     description: `A tooth that is severely fractured may need to be extracted.`,
    //   },
    // ],
    imgSrc: '/ToothExtractions.mp4'
  };
const ToothExtractionsComponent = () => {
  return (
    <>
  <div>
    <h2>Extractions (including wisdom teeth)</h2>
    <p>
      Tooth extractions, including wisdom teeth removal, are common dental procedures performed by
      dental surgeons to relieve pain, prevent infection, or make room for other teeth to grow in properly.
    </p>
    <h3>Why does a tooth need to be extracted?</h3>
    <ul>
      <li><strong>Decay or Damage:</strong> Teeth that are extensively decayed or damaged may need to be removed.</li>
      <li><strong>Impacted Wisdom Teeth:</strong> Wisdom teeth, also known as third molars, may be removed if they are impacted (unable to emerge properly) or causing issues like pain, infection, or damage to neighboring teeth.</li>
      <li><strong>Crowding:</strong> Sometimes, tooth extraction is necessary to create space for orthodontic treatment when there is dental crowding.</li>
      <li><strong>Periodontal Infection:</strong> Severe gum disease or infections may necessitate tooth extraction.</li>
      <li><strong>Fractured Teeth:</strong> A tooth that is severely fractured may need to be extracted.</li>
    </ul>
  </div>
    </>
  )
}
const ToothExtractions = () => {

    return (
        <>
     
   <GenericServiceComponent {...toothExtractionsData} AdditionalComponent={ToothExtractionsComponent}/>
   {/* <div>pic will go here</div> */}
            </>
    );
  };
  
  export default ToothExtractions;