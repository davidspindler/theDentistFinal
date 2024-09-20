import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
const boneAugmentationsData = {
    mainTitleText: 'Bone Augmentations',
    title: 'Bone Augmentations (PRF and BMP)',
    description: `Bone augmentations involve the use of various materials and techniques to enhance bone volume/
    density, healing, and regeneration. Platelet-rich fibrin (PRF) and bone morphogenetic protein (BMP) are
    two components commonly used in bone augmentation procedures.`,
    sectionOneTitle: 'Bone augmentations are necessitated due to reasons such as:',
    sectionOneData: [
      {
        title: 'Trauma:',
        description: `Fractures or injuries that damage bone tissue.`,
      },
      {
        title: 'Surgery:',
        description: `Removal of bone for tumor treatment or other procedures.`,
      },
      {
        title: 'Congenital defects:',
        description: `Malformations present from birth.`,
      },
      {
        title: 'Periodontal disease:',
        description: `Bone loss around teeth.`,
      },
    ],
    sectionTwoTitle: 'Two commonly used methods for bone augmentation are:',
    sectionTwoData: [
      {
        title: 'Platelet-Rich Fibrin (PRF):',
        description: `PRF is a biomaterial derived from the patient's own blood, which is processed to concentrate platelets,
        growth factors, and fibrin. A blood sample is taken from the patient, and it undergoes centrifugation to
        separate its components. The resulting PRF is then applied to the surgical site.
        PRF contains a high concentration of platelets, which release growth factors that stimulate cell
        proliferation, angiogenesis (formation of new blood vessels), and tissue regeneration. In bone
        augmentation, PRF can enhance the healing process and promote bone formation.`,
      },
      {
        title: 'Bone Morphogenetic Protein (BMP):',
        description: `BMPs are a group of proteins naturally found in the body, with the ability to induce bone and cartilage
        formation. BMPs can be produced synthetically and applied during surgery. They are often used in
        conjunction with a carrier material such as collagen sponge. Recombinant human BMP-2 (rhBMP-2) is
        the most commonly used type of BMP in bone augmentation.
        BMPs play a crucial role in the induction of osteogenesis (bone formation). When applied to a specific
        area, they promote the differentiation of mesenchymal stem cells into osteoblasts, which are
        responsible for bone formation. This can be particularly useful in cases where there is a need for
        significant bone regeneration.`,
      },
    
     
    ],
    imgSrc: '/BoneAug.mp4'
  };

const BoneAugmentations = () => {

    return (
        <>
     
   <GenericServiceComponent {...boneAugmentationsData}/>
            </>
    );
  };
  
  export default BoneAugmentations;