import GenericServiceComponent from "./GenericServiceComponent";
import './MeetTheDoctors.css'
const meettheDoctorsData = {
    mainTitleText: 'Meet the Doctors',
    title: 'Who are we?',
    description: `We are a team dedicated to bringing you quality service in Orange County. `,
    


  };

const MeettheDoctors = () => {

    return (
        <>
     
   <GenericServiceComponent {...meettheDoctorsData}/>
   <div className="team-info-container">
    <div className="team-member">
      <h2>Dr. Divya Peddireddy, DDS, MS</h2>
      <p>
        Dr. Divya Peddireddy has been practicing dentistry for over 18 years. She graduated with DDS from the University of Southern California Ostrow School of Dentistry and was on the Dean’s list for the duration of the program. She was also awarded the gold medal in the Master of Science in Health Care program for the highest GPA by the President of California State University, Long Beach. She has served on the Clinical Advisory Board of one of the nation’s largest dental service providers.
      </p>
      <p>
        Over the years, Dr. Peddireddy has updated her knowledge and skills in surgical, aesthetic, and preventive dentistry. She has completed multiple fellowships across various disciplines:
      </p>
      <ul>
        <li>Periodontal fellowship with International Academy of Dental Implantology</li>
        <li>Implant fellowship with International Academy of Dental Implantology</li>
        <li>IV Sedation fellowship with International Academy of Dental Implantology</li>
      </ul>
      <p>
        Dr. Peddireddy keeps abreast of the latest developments in dentistry through interactions with leading experts and speaking engagements at conferences. She approaches patient care with care and respect, focusing on sustained oral health and aesthetic goals.
      </p>
      <p>
        Outside of work, she enjoys spending time with her family, exploring the restaurant scene in Orange County, cooking, hiking, going to the beach, and supporting her son in Taekwondo and swimming sessions.
      </p>
    </div>

    <div className="team-member">
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
    </div>
  </div>
            </>
    );
  };
  
  export default MeettheDoctors;