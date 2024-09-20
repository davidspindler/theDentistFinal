import GenericServiceComponent from "./GenericServiceComponent";
import './CheckupAndCleanings.css'
const checkupAndCleaningsData = {
    mainTitleText: 'Check Ups and Cleanings:',
    title: 'What are Check Ups and Cleanings?',
    description: `Regular dental checkups and cleanings are the cornerstones of good oral health, offering a multitude of
    benefits that go beyond just a sparkling smile. Here's why they're so important:`,
    sectionOneTitle: '1. Early Detection and Prevention:',
    sectionOneData: [
      {
        title: 'Cavities:',
        description: `Regular checkups allow dentists to spot cavities in their earliest stages, when they're
        just tiny lesions on the tooth's surface. Early detection means treatment can be minimally
        invasive, often just a simple filling, saving you pain, time, and money in the long run.`,
      },
      {
        title: 'Gum Disease:',
        description: `Gum disease, if left untreated, can lead to tooth loss, bone damage, and even
        increase your risk of heart disease and stroke. Dental cleanings remove plaque and tartar
        buildup, the main culprits behind gum disease, and checkups allow dentists to monitor your
        gum health closely.`,
      },
      {
        title: 'Oral Cancer:',
        description: `Oral cancer screenings are a routine part of dental checkups. Early detection is
        crucial for successful treatment and improved prognosis.`,
      },
     
    ],
    sectionTwoTitle: '2. Maintaining a Healthy Smile:',
    sectionTwoData: [
      {
        title: 'Cleanings remove plaque and tartar:',
        description: `Brushing and flossing can only do so much. Dental
        cleanings use professional tools to remove stubborn plaque and tartar buildup, even in hard-to-
        reach areas, preventing cavities and gum disease.`,
      },
      {
        title: 'Polishing for a brighter smile:',
        description: `Cleanings also involve polishing your teeth, removing surface
        stains, and leaving them feeling smooth and looking shiny.`,
      },
    ],
    sectionThreeTitle: '3. Overall Health Benefits:',
    sectionThreeData: [
        {
            title: 'Connection to systemic health:',
            description:"Studies have shown a link between poor oral health and an increased risk of chronic diseases like heart disease, stroke, and diabetes. Regular dental care can help reduce these risks."
        },
        {
            title: 'Pain prevention:',
            description: 'Addressing dental problems early on can prevent the pain and discomfort associated with more advanced stages of cavities and gum disease.'
        }
    ],
    sectionFourTitle: '4. Cost-Effective in the Long Run:',
    sectionFourData: [
        {
            title: 'Preventive care is cheaper than treatment:',
            description:"Regular checkups and cleanings help prevent more costly procedures down the line, like fillings, root canals, or even implants."
        },
       
    ],
   imgSrc: '/CheckupandCleanings.jpg'
     
  };

const CheckupAndCleanings = () => {

    return (
        <>
     
   <GenericServiceComponent {...checkupAndCleaningsData}/>
   <div className="container3 margin-40">
    <h2>What happens during a regular dental checkups?</h2>
   </div>
        <div className="container3">
        <div className="cards-container">
    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Examination" />
      <div className="card-content">
        <h3>Examination</h3>
        <ul>
          <li>The dentist will examine your teeth, gums, and mouth for any signs of issues like cavities, gum disease, or oral cancer.</li>
          <li>X-rays may be taken to get a more detailed view of your teeth and jaw.</li>
        </ul>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Cleaning (Dental Prophylaxis)" />
      <div className="card-content">
        <h3>Cleaning (Dental Prophylaxis)</h3>
        <ul>
          <li>A dental hygienist will perform the cleaning, removing plaque and tartar from your teeth.</li>
          <li>Polishing is done to remove surface stains.</li>
        </ul>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Discussion and Advice" />
      <div className="card-content">
        <h3>Discussion and Advice</h3>
        <ul>
          <li>The dentist or hygienist may discuss your oral hygiene practices and offer guidance on proper brushing and flossing techniques.</li>
          <li>They might provide advice on diet and lifestyle choices that can impact oral health.</li>
        </ul>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Treatment Recommendations" />
      <div className="card-content">
        <h3>Treatment Recommendations</h3>
        <ul>
          <li>If any dental issues are identified, the dentist will discuss treatment options with you.</li>
        </ul>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Preventive Measures" />
      <div className="card-content">
        <h3>Preventive Measures</h3>
        <ul>
          <li>Fluoride treatment may be applied to strengthen your teeth.</li>
          <li>Sealants may be recommended for certain teeth to prevent cavities.</li>
        </ul>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Follow-Up Appointments" />
      <div className="card-content">
        <h3>Follow-Up Appointments</h3>
        <ul>
          <li>If necessary, follow-up appointments for specific treatments or further examinations may be scheduled.</li>
        </ul>
      </div>
    </div>
  </div>

        </div>
<div className="cardImplantTreatment">
It's crucial to attend regular dental checkups, usually recommended every six months, to catch potential
issues early and maintain optimal oral health. If you have any specific questions or concerns about
dental checkups and cleanings, feel let us know!
</div>
            </>
    );
  };
  
  export default CheckupAndCleanings;