import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
const boneGraftingData = {
    mainTitleText: 'Bone Grafting',
    title: 'What is Bone Grafting?',
    description: `Dental bone grafting is a surgical procedure that involves replacing or augmenting the bone in the jaw to
    provide a stable foundation for dental implants or other restorative procedures. This is often necessary
    when there is insufficient bone mass in the jaw to support dental implants.`,
    sectionOneTitle: 'Bone loss in the jaw can occur due to several reasons, including:',
    sectionOneData: [
      {
        title: 'Missing teeth:',
        description: `When a tooth is lost, the surrounding jawbone begins to deteriorate over time.`,
      },
      {
        title: 'Gum disease:',
        description: `Severe gum disease can damage the bone that supports the teeth.`,
      },
      {
        title: 'Facial trauma:',
        description: `Injuries to the jaw can cause bone loss.`,
      },
      {
        title: 'Tumors:',
        description: `Tumors in the jaw can destroy bone tissue.`,
      },
    ],
    sectionTwoTitle: 'Types of Bone Grafts:',
    sectionTwoData: [
      {
        title: 'Autograft:',
        description: `Bone is taken from the patient&#39;s own body (often from the hip or jaw) and
        transplanted to the deficient area.`,
      },
      {
        title: 'Allograft:',
        description: `Bone is sourced from a donor, typically processed and sterilized before use.`,
      },
      {
        title: 'Xenograft:',
        description: `Bone is derived from an animal source, usually bovine (cow) or porcine (pig) bone,
        and processed for transplantation.`,
      },
      {
        title: 'Synthetic Graft:',
        description: `Artificial bone graft materials are used.`,
      },
     
    ],
  };

const BoneGrafting = () => {

    return (
        <>
     
   <GenericServiceComponent {...boneGraftingData}/>
   <div className="container3">
   The success rate of bone grafting is very high. In most cases, the bone graft will integrate with the
jawbone and provide a strong foundation for dental implants or to preserve remaining teeth. Dental
bone grafting is a common and effective procedure that has significantly improved the success rates of
dental implant placements, allowing individuals with insufficient bone mass to benefit from permanent
tooth replacements.
   </div>
            </>
    );
  };
  
  export default BoneGrafting;