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
      <section className="team-info-container">
    <section className="team-member">
      <h2>Divya Peddireddy, DDS, MS, QME</h2>
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
    </section> 
    </section>
      </>
    )
  };
    return (
        <>
     <HandleMeetDoctors />
     <section className="carder-container">

     <section className="carder">
    <section className="card-content">
      <h3>Our Location: 3070 Bristol Street SUITE 180 COSTA MESA CA 92626</h3>
     
      <iframe
        title="Google Maps Location"
        width="100%"
        height="400"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4199173739963!2d-117.8876723849641!3d33.68281648070424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcc6598ab5e731%3A0x8e2e6f8efed6826c!2s3070%20Bristol%20St%20%23180%2C%20Costa%20Mesa%2C%20CA%2092626%2C%20USA!5e0!3m2!1sen!2sus!4v1623238587310!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false"
        ></iframe>
         <h4>
      There is a validation ticket parking lot conveniently located next to our office. Take an ariel view of these photos of surrounding buildings, entrance, waiting room, and operatories.
      </h4>
    </section>
  </section>
        </section>
            </>
    );
  };
  
  export default MeettheDoctors;