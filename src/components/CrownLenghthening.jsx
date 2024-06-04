import GenericServiceComponent from "./GenericServiceComponent";
import './CrownLenghthening.css'
const crownLengtheningData = {
    mainTitleText: 'Crown Lengthening',
    title: 'What is Crown Lengthening?',
    description: `Crown lengthening is a procedure that involves the removal of gum tissue, bone, or both to expose
    more of a tooth's structure. The goal of crown lengthening is to create more space between the
    supporting structures of the tooth, such as the bone and gums, and the crown of the tooth itself. This
    procedure is often performed for functional or aesthetic reasons.`,
    sectionOneTitle: 'What are some common reasons for crown lengthening?',
    sectionOneData: [
      {
        title: 'Restoration of Damaged Teeth:',
        description: `Crown lengthening may be necessary if a tooth is fractured or has
        extensive decay below the gum line. By exposing more of the tooth structure, a dentist can better access
        and restore the damaged area.`,
      },
      {
        title: 'Cosmetic Reasons:',
        description: `Some people may have what is known as a &quot;gummy smile,&quot; where a significant
        portion of their teeth is covered by excess gum tissue. Crown lengthening can be performed to expose
        more of the tooth, improving the overall aesthetics of the smile.`,
      },
      {
        title: 'Prosthetic Dentistry:',
        description: `Crown lengthening is often done in preparation for certain dental procedures, such
        as placing a crown or bridge. It ensures that there is enough tooth structure above the gum line for the
        prosthetic restoration to be properly fitted.`,
      },
      {
        title: 'Biological Width:',
        description: `Maintaining the proper biological width, the space needed for healthy gum tissue to
        attach to the tooth, is essential for long-term oral health. Crown lengthening can help establish the
        correct biological width when it has been compromised due to various reasons.`,
      },
    ],
  };

const CrownLengthening = () => {

    return (
        <>
     
   <GenericServiceComponent {...crownLengtheningData}/>
            </>
    );
  };
  
  export default CrownLengthening;