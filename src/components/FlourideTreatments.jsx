import GenericServiceComponent from "./GenericServiceComponent";
import './Fillings.css'
const flourideTreatmentsData = {
    mainTitleText: 'Fluoride treatment',
    title: 'What is Fluoride treatment?',
    description: `Dental fluoride treatment is a preventive dental procedure aimed at strengthening tooth enamel and
    preventing tooth decay. Fluoride is a natural mineral that helps to rebuild weakened tooth enamel and
    make it more resistant to acid attacks from bacteria and sugars in the mouth.
    During a fluoride treatment, a concentrated fluoride gel, foam, or varnish is applied to the teeth. The
    dentist or dental hygienist may use a brush, swab, or tray to apply the fluoride to the teeth. The
    treatment is usually quick and painless.
    It's important to note that fluoride is also available in toothpaste, mouthwash, and some drinking water
    supplies. The American Dental Association (ADA) and other dental health organizations recommend the
    use of fluoride products as part of a comprehensive oral care routine.`,
    imgSrc: '/FlourideTreatment.jpg'
  };

const FlourideTreatments = () => {

    return (
        <>
     
   <GenericServiceComponent {...flourideTreatmentsData}/>
   <div className="container3">
    <h2>Who benefits from fluoride treatments?</h2>
   </div>
   <div className="container3">
   <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Fluoride Benefits" />
      <div className="card-content">
        <h3>Children and adults who are at high risk of cavities can benefit from fluoride treatments. This includes people with:</h3>
        <ul>
          <li>Dry mouth</li>
          <li>Weak tooth enamel</li>
          <li>A history of cavities</li>
          <li>Orthodontic appliances</li>
        </ul>
      </div>
    </div>
   </div>
            </>
    );
  };
  
  export default FlourideTreatments;