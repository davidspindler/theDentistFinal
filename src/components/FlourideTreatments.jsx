import GenericServiceComponent from "./GenericServiceComponent";
import './Fillings.css'
const flourideTreatmentsData = {
    mainTitleText: 'Fluoride treatment',
    imgSrc: '/FlourideTreatment.jpg'
  };

const FlourideTreatmentsContent = () => {
  return (
    <>
     <p className="padding-bottom-5">
    Dental fluoride treatment is a preventive dental procedure aimed at strengthening tooth enamel and preventing tooth decay. Fluoride is a natural mineral that helps to rebuild weakened tooth enamel and make it more resistant to acid attacks from bacteria and sugars in the mouth.
  </p>

  <p className="padding-bottom-5">
    During a fluoride treatment, a concentrated fluoride gel, foam, or varnish is applied to the teeth. The dentist or dental hygienist may use a brush, swab, or tray to apply the fluoride to the teeth. The treatment is usually quick and painless.
  </p>

  <p className="padding-bottom-5">
    It's important to note that fluoride is also available in toothpaste, mouthwash, and some drinking water supplies. The American Dental Association (ADA) and other dental health organizations recommend the use of fluoride products as part of a comprehensive oral care routine.
  </p>
    </>
  )
}
const FlourideTreatments = () => {

    return (
        <>
     
   <GenericServiceComponent {...flourideTreatmentsData} AdditionalComponent={FlourideTreatmentsContent}/>
   
            </>
    );
  };
  
  export default FlourideTreatments;