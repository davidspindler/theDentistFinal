import GenericServiceComponent from "./GenericServiceComponent";
// import './implantTreatment.css'
const sinusLiftData = {
    mainTitleText: 'Sinus Lift',
    title: 'What is a Sinus Lift?',
    description: `A sinus lift, also known as sinus augmentation, is a surgical procedure that is typically done in
    preparation for dental implant placement in the upper jaw where the bone density is often insufficient
    due to the presence of the sinus cavity. The upper jawbone (maxilla) naturally has less bone than the
    lower jaw, and it can lose even more bone after tooth loss or gum disease. When there isn't enough
    bone to support dental implants, a sinus lift can be performed to create a stronger foundation.
    During a sinus lift, the sinus membrane is gently lifted or pushed upward, and bone graft material is
    inserted into the space created. This helps to promote bone growth and provides a solid foundation for
    the future dental implant.
    The bone grafting material can be made from your own bone, donated bone, or synthetic bone. It will
    take several months for the new bone to grow in place. Once the healing is complete, dental implants
    can be placed.`,
    sectionOneTitle: 'Some of the benefits of a sinus lift include:',
    sectionOneData: [
      {
        title: 'Arresting on-going deterioration of the jawbone and associated long term deleterious effects.',
        description: ``,
      },
      {
        title: 'Increased success rate of dental implants',
        description: ``,
      },
      {
        title: 'Improved appearance of your smile',
        description: ``,
      },
      {
        title: 'Improved chewing function',
        description: ``,
      },
      {
        title: 'Enhanced self-confidence',
        description: ``,
      },
    ],
    
  };

const SinusLift = () => {

    return (
        <>
     
   <GenericServiceComponent {...sinusLiftData}/>
            </>
    );
  };
  
  export default SinusLift;