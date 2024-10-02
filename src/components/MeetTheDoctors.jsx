import GenericServiceComponent from "./GenericServiceComponent";
import './MeetTheDoctors.css'
import parse from 'html-react-parser';
const meettheDoctorsData = {
    mainTitleText: 'Meet the Doctors',
  };

const MeettheDoctors = () => {
  const HandleMeetDoctors = () => {
    return (
      <>
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
      <ul className="list-style-disc">
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
      <ul className="list-style-disc">
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
    </div>
      </>
    )
  };
    return (
        <>
     
   <GenericServiceComponent {...meettheDoctorsData} AdditionalComponent={HandleMeetDoctors}/>
            </>
    );
  };
  
  export default MeettheDoctors;