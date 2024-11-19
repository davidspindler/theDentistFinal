import GenericServiceComponent from "./GenericServiceComponent";
// import './ToothExtractions.css'
const toothExtractionsData = {
    mainTitleText: 'Tooth Extractions',
    imgSrc: '/ToothExtractions.mp4'
  };
const ToothExtractionsComponent = () => {
  return (
    <>
  <section>
    <h3 className="padding-bottom-5">Tooth Extractions (including wisdom teeth)</h3>
    <p>
    Tooth extractions, including wisdom teeth removal, are common dental procedures performed by dental surgeons to relieve pain, prevent infection, or make room for other teeth to grow in properly. 
    </p>
    <h3 className="padding-top-10 padding-bottom-5">Why does a tooth need to be extracted?</h3>
    <ul className="arrow-list">
      <li className="padding-bottom-5"><strong>Decay or Damage:</strong> Teeth that are extensively decayed or damaged may need to be removed.</li>
      <li className="padding-bottom-5"><strong>Impacted Wisdom Teeth:</strong> Wisdom teeth, also known as third molars, may be removed if they are impacted (unable to emerge properly) or causing issues like pain, infection, or damage to neighboring teeth.</li>
      <li className="padding-bottom-5"><strong>Crowding:</strong> Sometimes, tooth extraction is necessary to create space for orthodontic treatment when there is dental crowding.</li>
      <li className="padding-bottom-5"><strong>Periodontal Infection:</strong> Severe gum disease or infections may necessitate tooth extraction.</li>
      <li className="padding-bottom-5"><strong>Fractured Teeth:</strong> A tooth that is severely fractured may need to be extracted.</li>
    </ul>
  </section>
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