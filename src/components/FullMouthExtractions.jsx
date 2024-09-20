import GenericServiceComponent from "./GenericServiceComponent";
import './FullMouthExtractions.css'
const fullMouthExtractionsData = {
    mainTitleText: 'Full Mouth Extractions',
    title: 'What are Full Mouth Extractions?',
    description: `A full mouth extraction, also known as a complete dental extraction, is the surgical removal of all of a
    patient&#39;s natural teeth from both the upper and lower jaws. It&#39;s a major dental procedure typically
    recommended as a last resort when other options for preserving teeth have been exhausted.`,
    sectionOneTitle: 'What are the reasons for full mouth extractions?',
    sectionOneData: [
      {
        title: 'Severe Decay or Damage:',
        description: `Extensive decay or damage to multiple teeth that cannot be effectively
        treated with restorative procedures like fillings, crowns, or root canals.`,
      },
      {
        title: 'Gum Disease (Periodontal Disease):',
        description: `Advanced periodontal disease affecting the supporting structures
        of the teeth, such as the gums and bones, leading to tooth mobility and loss.`,
      },
      {
        title: 'Trauma:',
        description: `Significant facial trauma or injury that results in widespread damage to the teeth.`,
      },
      {
        title: 'Dental Prosthetics:',
        description: `In some cases, individuals may opt for full mouth extractions as a precursor to
        getting complete dentures or implant-supported dentures.`,
      },
      {
        title: 'Jaw Surgery:',
        description: `Sometimes, full mouth extractions are required before certain jaw surgeries to correct
        misalignment or other problems.`,
      },
      {
        title: 'Uncontrollable Pain:',
        description: `If chronic dental pain can&#39;t be managed with other treatments, extraction may be
        recommended.`,
      },
    ],
    imgSrc: '/FullMouthExtractions.jpg'
  };

const FullMouthExtractions = () => {

    return (
        <>
     
   <GenericServiceComponent {...fullMouthExtractionsData}/>
   <div className="cardFullMouthExtractions">
   The process of full mouth extractions typically involves a thorough examination, X-rays, and consultation
with the dentist/surgeon. The procedure can be done either under local anesthesia or general
anesthesia to ensure the patient's comfort and may be completed in one or more appointments,
depending on the complexity of the case and the experience of the dentist.
After the extractions, the dentist may provide immediate dentures or a temporary solution to help with
aesthetics and function while the mouth heals. It's important to follow post-extraction care instructions,
which may include avoiding certain foods, practicing good oral hygiene, and attending follow-up
appointments.
After the initial healing period, a more permanent dental restoration option, such as complete dentures
or implant-supported prosthetics, may be implemented. It is crucial for the patients to have
comprehensive discussions with their dentist to achieve the best outcomes.
   </div>
            </>
    );
  };
  
  export default FullMouthExtractions;