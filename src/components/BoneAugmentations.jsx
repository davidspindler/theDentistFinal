import GenericServiceComponent from "./GenericServiceComponent";
import './BoneAug.css'
const boneAugmentationsData = {
    mainTitleText: 'Bone Augmentations',
    // title: 'Bone Augmentations (PRF and BMP)',
    // description: `Bone augmentations involve the use of various materials and techniques to enhance bone volume/
    // density, healing, and regeneration. Platelet-rich fibrin (PRF) and bone morphogenetic protein (BMP) are
    // two components commonly used in bone augmentation procedures.`,
    // sectionOneTitle: 'Bone augmentations are necessitated due to reasons such as:',
    // sectionOneData: [
    //   {
    //     title: 'Trauma:',
    //     description: `Fractures or injuries that damage bone tissue.`,
    //   },
    //   {
    //     title: 'Surgery:',
    //     description: `Removal of bone for tumor treatment or other procedures.`,
    //   },
    //   {
    //     title: 'Congenital defects:',
    //     description: `Malformations present from birth.`,
    //   },
    //   {
    //     title: 'Periodontal disease:',
    //     description: `Bone loss around teeth.`,
    //   },
    // ],
    // sectionTwoTitle: 'Two commonly used methods for bone augmentation are:',
    // sectionTwoData: [
    //   {
    //     title: 'Platelet-Rich Fibrin (PRF):',
    //     description: `PRF is a biomaterial derived from the patient's own blood, which is processed to concentrate platelets,
    //     growth factors, and fibrin. A blood sample is taken from the patient, and it undergoes centrifugation to
    //     separate its components. The resulting PRF is then applied to the surgical site.
    //     PRF contains a high concentration of platelets, which release growth factors that stimulate cell
    //     proliferation, angiogenesis (formation of new blood vessels), and tissue regeneration. In bone
    //     augmentation, PRF can enhance the healing process and promote bone formation.`,
    //   },
    //   {
    //     title: 'Bone Morphogenetic Protein (BMP):',
    //     description: `BMPs are a group of proteins naturally found in the body, with the ability to induce bone and cartilage
    //     formation. BMPs can be produced synthetically and applied during surgery. They are often used in
    //     conjunction with a carrier material such as collagen sponge. Recombinant human BMP-2 (rhBMP-2) is
    //     the most commonly used type of BMP in bone augmentation.
    //     BMPs play a crucial role in the induction of osteogenesis (bone formation). When applied to a specific
    //     area, they promote the differentiation of mesenchymal stem cells into osteoblasts, which are
    //     responsible for bone formation. This can be particularly useful in cases where there is a need for
    //     significant bone regeneration.`,
    //   },
    
     
    // ],
    imgSrc: '/BoneAug.mp4'
  };

const BoneAugmentations = () => {
const BoneAugComponent = () => {
return (
  <>
 <div>
  <h2>Bone Augmentation</h2>
  <p>
    Bone augmentations involve the use of various materials and techniques to enhance bone volume/density, healing, and regeneration. Bone augmentations are necessitated due to various reasons such as:
  </p>

  <div>
    <div>
      <h3>Trauma</h3>
      <p>Fractures or injuries that damage bone tissue.</p>
    </div>
    <div>
      <h3>Tumors</h3>
      <p>Tumors in the jaw can destroy bone tissue.</p>
    </div>
    <div>
      <h3>Surgery</h3>
      <p>Removal of bone for tumor treatment or other procedures.</p>
    </div>
    <div>
      <h3>Congenital Defects</h3>
      <p>Malformations present from birth.</p>
    </div>
    <div>
      <h3>Periodontal Disease</h3>
      <p>Bone loss around teeth.</p>
    </div>
    <div>
      <h3>Missing Teeth</h3>
      <p>When a tooth is lost, the surrounding jawbone begins to deteriorate over time.</p>
    </div>
  </div>

  <h2>Bone Grafting</h2>
  <p>
    Bone grafting is a surgical procedure that involves replacing or augmenting the bone in the jaw to provide a stable foundation for dental implants or other restorative procedures. This is often necessary when there is insufficient bone mass in the jaw to support dental implants.
  </p>

  <h3>Types of Bone Grafts</h3>

  <div>
    <div>
      <h3>Autograft</h3>
      <p>
        Bone is taken from the patient's own body (often from the hip or jaw) and transplanted to the deficient area.
      </p>
    </div>
    <div>
      <h3>Allograft</h3>
      <p>
        Bone is sourced from a donor, typically processed and sterilized before use.
      </p>
    </div>
    <div>
      <h3>Xenograft</h3>
      <p>
        Bone is derived from an animal source, usually bovine (cow) or porcine (pig) bone, and processed for transplantation.
      </p>
    </div>
    <div>
      <h3>Synthetic Graft</h3>
      <p>Artificial bone graft materials are used.</p>
    </div>
  </div>

  <p>
    The success rate of bone grafting is very high. In most cases, the bone graft will integrate with the jawbone and provide a strong foundation for dental implants or to preserve remaining teeth.
  </p>
</div>

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