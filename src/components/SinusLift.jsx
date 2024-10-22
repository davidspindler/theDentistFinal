import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const sinusLiftData = {
    mainTitleText: 'Sinus Lift',
    imgSrc: '/SinusLift.mp4'
  };

const SinusLiftContent = () => {
  return (
    <>
     <h3 className="padding-bottom-5">Sinus Lift (Sinus Augmentation)</h3>
  <p className="padding-bottom-5">
    A sinus lift, also known as sinus augmentation, is a surgical procedure that is typically done in preparation for dental implant placement in the upper jaw where the bone density is often insufficient due to the presence of the sinus cavity. The upper jawbone (maxilla) naturally has less bone than the lower jaw, and it can lose even more bone after tooth loss or gum disease. When there isn't enough bone to support dental implants, a sinus lift can be performed to create a stronger foundation.
  </p>

  <p className="padding-bottom-5">
    During a sinus lift, the sinus membrane is gently lifted or pushed upward, and bone graft material is inserted into the space created. This helps to promote bone growth and provides a solid foundation for the future dental implant.
  </p>

  <p className="padding-bottom-5">
    The bone grafting material can be made from your own bone, donated bone, or synthetic bone. It will take several months for the new bone to grow in place. Once the healing is complete, dental implants can be placed.
  </p>

  <p className="padding-bottom-5">
    Some of the benefits of a sinus lift include:
  </p>

  <ul className="arrow-list">
    <li className="padding-bottom-5">
      Arresting on-going deterioration of the jawbone and associated long term deleterious effects.
    </li>
    <li className="padding-bottom-5">
      Increased success rate of dental implants.
    </li>
    <li className="padding-bottom-5">
      Improved appearance of your smile.
    </li>
    <li className="padding-bottom-5">
      Improved chewing function.
    </li>
    <li className="padding-bottom-5">
      Enhanced self-confidence.
    </li>
  </ul>
    </>
  )
}
const SinusLift = () => {

    return (
        <>
     
   <GenericServiceComponent {...sinusLiftData} AdditionalComponent={SinusLiftContent}/>
            </>
    );
  };
  
  export default SinusLift;