import GenericServiceComponent from "./GenericServiceComponent";
// import './smileDesign.css'
const smileDesignData = {
    mainTitleText: 'Smile Design',
    title: 'What is Smile Design?',
    description: `Smile design or smile makeover is a cosmetic dental procedure that focuses on creating a beautiful and
    natural-looking smile that complements your facial features. It harnesses various cosmetic and
    restorative dental procedures and also addresses any functional or oral health concerns. It&#39;s not just
    about getting straight teeth; it&#39;s about considering the shape, size, color, and alignment of your teeth in
    relation to your lips, gums, and overall facial aesthetics.`,
    sectionOneTitle: 'Here are a few things the Dentist will take into consideration during the smile design.',
    sectionOneData: [
        {
            title: 'Tooth shape and size:',
            description: `The ideal shape and size of teeth will depend on facial features and personal
            preferences. For example, if someone has a wide face, they may want to consider slightly wider teeth.`,
          },
          {
            title: 'Tooth color:',
            description: `The Dentist can use teeth whitening and other techniques to create the perfect shade of
            white for your teeth. She will also consider the color of your gums and skin to ensure that your teeth
            look natural.`,
          },
          {
            title: 'Gum line:',
            description: `The shape and position of gum line can also affect the look of your smile. A smile designer can
            use gum contouring or other techniques to create a more even gum line.`,
          },
          {
            title: 'Lip shape:',
            description: `The shape of your lips can also play a role in the look of your smile. The smile designer can
            work with you to create a smile that complements your natural lip shape.`,
          },
    ],
    sectionTwoTitle: 'Here are some key aspects of smile design:',
    sectionTwoData: [
        {
            title: 'Comprehensive Evaluation:',
            description: `The process begins with a thorough examination of the patient's oral health, including the teeth, gums,
            jaw alignment, and facial features. X-rays, CT-scans, intra-oral scans, photographs, and impressions may
            be taken to aid in the assessment.`,
          },
          {
            title: 'Communication and Goal Setting:',
            description: `Effective communication between the patient and the Dentist is crucial. The patient's preferences,
            concerns, and desired outcomes are discussed, and specific goals for the smile design are established.`,
          },
          {
            title: 'Functionality Considerations:',
            description: `While aesthetics are a primary focus, smile design also takes into account the functionality of the teeth
            and the overall oral health of the patient. The goal is to achieve a balance between a beautiful smile and
            optimal oral function.`,
          },
          {
            title: 'Customization:',
            description: `Smile design is highly personalized, considering each individual's unique facial features, tooth shape, and
            color. The dentist works to create a natural-looking and attractive smile that enhances the patient's
            overall appearance.`,
          },
          {
            title: 'Cosmetic Dental Procedures:',
            description: `Cosmetic dental procedures under smile design may involve a combination of Veneers, Crowns, Teeth
            Whitening, Crown Lengthening, Orthodontic treatment, Gum Contouring, and Dental implants.`,
          },
          {
            title: 'Digital Smile Design (DSD):',
            description: `Advanced technology, such as Digital Smile Design, may be used to plan and visualize the potential
            outcomes of the smile makeover. This involves digital imaging and simulation tools to help patients and
            dentists preview the expected results.`,
          },
          {
            title: 'Follow-Up and Maintenance:',
            description: `After the completion of cosmetic procedures, patients are advised on proper care and maintenance to
            ensure the longevity of the results. Regular dental check-ups are essential for monitoring the health and
            appearance of the smile.`,
          },
    ],
  };

const SmileDesign = () => {

    return (
        <>
     
   <GenericServiceComponent {...smileDesignData}/>
            </>
    );
  };
  
  export default SmileDesign;