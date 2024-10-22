import GenericServiceComponent from "./GenericServiceComponent";
import './CrownLenghthening.css'
const crownLengtheningData = {
    mainTitleText: 'Crown Lengthening',
    imgSrc: "/CrownLengthening.mp4"
  };
const CrownLengtheningContent = () => {
  return (
    <>
     <h3 className="padding-bottom-5">What is Crown Lengthening?</h3>
  <p className="">
    Crown lengthening is a procedure that involves the removal of gum tissue, bone, or both to expose more of a tooth's structure. The goal of crown lengthening is to create more space between the supporting structures of the tooth, such as the bone and gums, and the crown of the tooth itself. This procedure is often performed for functional or aesthetic reasons.
  </p>

  <h3 className="padding-top-10 padding-bottom-5">What are some common reasons for crown lengthening?</h3>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Restoration of Damaged Teeth:</strong> Crown lengthening may be necessary if a tooth is fractured or has extensive decay below the gum line. By exposing more of the tooth structure, a dentist can better access and restore the damaged area.
    </li>
    <li className="padding-bottom-5">
      <strong>Cosmetic Reasons:</strong> Some people may have what is known as a "gummy smile," where a significant portion of their teeth is covered by excess gum tissue. Crown lengthening can be performed to expose more of the tooth, improving the overall aesthetics of the smile.
    </li>
    <li className="padding-bottom-5">
      <strong>Prosthetic Dentistry:</strong> Crown lengthening is often done in preparation for certain dental procedures, such as placing a crown or bridge. It ensures that there is enough tooth structure above the gum line for the prosthetic restoration to be properly fitted.
    </li>
    <li className="padding-bottom-5">
      <strong>Biological Width:</strong> Maintaining the proper biological width, the space needed for healthy gum tissue to attach to the tooth, is essential for long-term oral health. Crown lengthening can help establish the correct biological width when it has been compromised due to various reasons.
    </li>
  </ul>
    </>
  )
}
const CrownLengthening = () => {

    return (
        <>
     
   <GenericServiceComponent {...crownLengtheningData} AdditionalComponent={CrownLengtheningContent}/>
            </>
    );
  };
  
  export default CrownLengthening;