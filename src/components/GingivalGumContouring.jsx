import GenericServiceComponent from "./GenericServiceComponent";
import './GingivalGumContouring.css'
const gingivalGumContouringData = {
    mainTitleText: 'Gingival/ Gum Contouring',
    title: 'What is Gingival / Gum Contouring?',
    description: `Gingival or gum contouring, also known as gum reshaping or gum sculpting, is a cosmetic dental
    procedure designed to improve the appearance of the gums. The main goal of this procedure is to
    create a more aesthetically pleasing smile by reshaping the gum line. The procedure may involve the use
    of laser technology or traditional surgical methods to reshape the gum tissue.`,
    sectionOneTitle: 'Here are some key aspects of gingival contouring:',
    sectionOneData: [
      {
        title: 'Excessive Gum Display (Gummy Smile):',
        description: `This refers to when excessive gum tissue covers a significant portion of the teeth, making them appear
        short. Gum contouring can remove excess gum tissue to reveal more of the teeth and create a more
        harmonious smile.`,
      },
      {
        title: 'Uneven Gum Line:',
        description: `Uneven gum lines can be a result of genetics, gum recession, or other factors. Gingival contouring can be
        used to create a more symmetrical and balanced gum line.`,
      },
      {
        title: 'Exposed Tooth Roots:',
        description: `Gum recession can expose the roots of your teeth, making them appear longer
        and more sensitive. Gum contouring can be used to cover exposed roots and improve the appearance of
        your smile.`,
      },
      {
        title: 'Dental Health:',
        description: `Excess gum tissue can trap food particles and bacteria, making it difficult to clean the teeth effectively.
        Gum contouring can remove this excess tissue, making it easier to brush and floss and reducing the risk
        of gum disease.`,
      },
      {
        title: 'Cosmetic Enhancement:',
        description: `Gingival contouring is often sought by individuals who feel that their gums are too prominent or uneven,
        affecting the overall balance of their smile.`,
      },
      {
        title: 'Laser Gum Contouring:',
        description: `Laser technology is commonly used for gingival contouring. It is a minimally invasive procedure that
        involves the use of a laser to trim and shape the gum tissue. Laser procedures often result in less
        discomfort, swelling, and a quicker recovery compared to traditional methods.`,
      },
    ],
   
  };

const GingivalGumContouring = () => {

    return (
        <>
     
   <GenericServiceComponent {...gingivalGumContouringData}/>
            </>
    );
  };
  
  export default GingivalGumContouring;