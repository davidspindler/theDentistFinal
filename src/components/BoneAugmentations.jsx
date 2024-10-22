import GenericServiceComponent from "./GenericServiceComponent";
import './BoneAug.css'
const boneAugmentationsData = {
    mainTitleText: 'Bone Augmentations  / Bone Grafting',
    imgSrc: '/BoneAug.mp4'
  };

const BoneAugmentations = () => {
const BoneAugComponent = () => {
return (
  <>
  <h3 className="padding-bottom-5">Bone Augmentations and Bone Grafting</h3>
  <p className="padding-bottom-5">
    Bone augmentations and bone grafting involve the use of various materials and techniques to enhance bone volume/density, healing, and regeneration. Bone augmentations are necessitated due to reasons such as:
  </p>
  
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Trauma:</strong> Fractures or injuries that damage bone tissue.
    </li>
    <li className="padding-bottom-5">
      <strong>Tumors:</strong> Tumors in the jaw can destroy bone tissue.
    </li>
    <li className="padding-bottom-5">
      <strong>Surgery:</strong> Removal of bone for tumor treatment or other procedures.
    </li>
    <li className="padding-bottom-5">
      <strong>Congenital defects:</strong> Malformations present from birth.
    </li>
    <li className="padding-bottom-5">
      <strong>Periodontal disease:</strong> Bone loss around teeth.
    </li>
    <li className="padding-bottom-5">
      <strong>Missing teeth:</strong> When a tooth is lost, the surrounding jawbone begins to deteriorate over time.
    </li>
    <li className="padding-bottom-5">
      <strong>Insufficient bone mass:</strong> Insufficient bone mass in the jaw to support dental implants.
    </li>
  </ul>

  <h3 className="padding-top-10 padding-bottom-5">Types of Bone Grafts:</h3>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Autograft:</strong> Bone is taken from the patient's own body (often from the hip or jaw) and transplanted to the deficient area.
    </li>
    <li className="padding-bottom-5">
      <strong>Allograft:</strong> Bone is sourced from a donor, typically processed and sterilized before use.
    </li>
    <li className="padding-bottom-5">
      <strong>Xenograft:</strong> Bone is derived from an animal source, usually bovine (cow) or porcine (pig) bone, and processed for transplantation.
    </li>
    <li className="padding-bottom-5">
      <strong>Synthetic Graft:</strong> Artificial bone graft materials are used.
    </li>
  </ul>

  <p className="padding-bottom-5">
    The success rate of bone grafting is very high. In most cases, the bone graft will integrate with the jawbone and provide a strong foundation for dental implants or to preserve remaining teeth.
  </p>

  </>
)
}
    return (
        <>
     
   <GenericServiceComponent {...boneAugmentationsData} AdditionalComponent={BoneAugComponent}/>
            </>
    );
  };
  
  export default BoneAugmentations;