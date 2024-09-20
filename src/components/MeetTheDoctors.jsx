import GenericServiceComponent from "./GenericServiceComponent";
import './MeetTheDoctors.css'
const meettheDoctorsData = {
    mainTitleText: 'Meet the Doctors',
    title: 'Who are we?',
    description: `We are a dedicated team committed to providing exceptional quality service to our valued clients in Orange County, ensuring that each visit exceeds your expectations and contributes to your overall well-being and satisfaction. `,
    


  };

const MeettheDoctors = () => {

    return (
        <>
     
   <GenericServiceComponent {...meettheDoctorsData}/>
   <div className="team-info-container">
    <div className="team-member">
      <h2>Divya Peddireddy, DDS, MS</h2>
      <p>
      Dr. Divya Peddireddy has been practicing dentistry for two decades. She graduated with a DDS degree
from the University of Southern California Ostrow School of Dentistry and was on the Dean’s list for the
duration of the program. She was also awarded the gold medal in the Master of Science in Health Care
program for the highest GPA by the President of California State University, Long Beach. She has served
on the Clinical Advisory Board of one of the nation’s largest dental service providers.
      </p>
      <p>
      Over the years she has constantly updated her knowledge and skills to be at the forefront of surgical,
aesthetic, and preventive dentistry. She has completed multiple fellowships across various disciplines in
the field of dentistry.
      </p>
      <ul>
        <li>Periodontal fellowship with International Academy of Dental Implantology</li>
        <li>Implant fellowship with International Academy of Dental Implantology</li>
        <li>Sedation fellowship with International Academy of Dental Implantology</li>
        <li>Mini residency in Oral and Maxillofacial radiology</li>
      </ul>
      <p>
      Dr. Peddireddy keeps abreast of the latest developments in dentistry through interactions with leading
experts in various disciplines. She has also spoken on implants and restorative techniques at
conferences organized by leading implant manufacturers.
      </p>
      <p>
      She approaches her patients with due care and respect and works with them to achieve sustained oral
health and any aesthetic goals they have. Dr. Peddireddy is conservative in her approach to dentistry
and prefers to save tooth structures and existing functionality as much as possible. She is an expert in
treating geriatric patients with pre-existing conditions like cancer, auto immune conditions, immune
suppression, diabetes, etc., and is happy to hear patients commonly express joy and happiness at their
experiences:

      </p>
      <ul>
        <li>The lack of trauma and dexterity with which she carries out complex teeth extractions and the
resulting quick recovery.</li>
<li>
How life changing an experience it’s been to have Dr. Peddireddy design and complete full
mouth reconstruction and provide All on X functionality.
</li>
<li>
Smiles designed and delivered that reflect patient’s objectives.
</li>
      </ul>
      <p>
      Outside of work Dr. Peddireddy likes spending time with her husband and 6-year-old son. She enjoys the
restaurant scene in the Orange County area, cooking at home, outdoor activities like hiking, going to the
beach, and watching her son in Taekwondo and swimming sessions.
      </p>
    </div>

    {/* <div className="team-member">
      <h2>Dr. Kevin Uyesugi, DDS</h2>
      <p>
        Dr. Kevin Uyesugi has been practicing general dentistry for over 30 years. He graduated with DDS from the University of Pacific in 1990. He is known for his conservative approach to dentistry and expertise in leveraging gold in dental procedures.
      </p>
      <p>
        Dr. Uyesugi was a varsity level wrestler in college and enjoys playing basketball in his spare time. He also takes pleasure in watching his son play college basketball in Oregon.
      </p>
    </div>

    <div className="team-member">
      <h2>Dr. Teruo Yamamoto, DDS</h2>
      <p>
        Dr. Teruo Yamamoto provided exceptional dental care for over 40 years to patients in the Orange County area before mostly retiring. He kept himself abreast of technology and served as the chief dentist to the Superbowl winning Rams team in 1978.
      </p>
    </div>

    <div className="team-member">
      <h2>Rebecca Martinez – Patient Care Administration Manager</h2>
    </div>

    <div className="team-member">
      <h2>Shahana – Patient Care Administrator</h2>
    </div>

    <div className="team-member">
      <h2>Louis Martinez - Registered Dental Assistant</h2>
    </div> */}
  </div>
            </>
    );
  };
  
  export default MeettheDoctors;