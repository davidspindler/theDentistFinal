import GenericServiceComponent from "./GenericServiceComponent";
// import './CrownLenghthening.css'
import biolase from '../../src/assets/images/biolase.jpg'
const biolaseData = {
    mainTitleText: 'BIOLASE® Waterlase® Laser',
    title: 'What is a BIOLASE® Waterlase® Laser?',
    description: `Technology continues to change our lives every day. Increasingly, cutting-edge tools like dental lasers
    are being leveraged to take care of your oral health. Depending on the type of laser your dentist uses,
    they can successfully treat many common dental conditions in a gentle, minimally invasive way.
    BIOLASE® is the world’s leading innovator in dental lasers. With thousands of lasers in use in
    operatories worldwide, millions of patients have experienced the benefits of laser dentistry, such as
    gentler procedures and comfortable healing.
    The award-winning Waterlase® system is a safe and gentle alternative to traditional dental tools. Using
    laser energy and water spray, Waterlase® can perform many procedures without a shot or a drill. The
    Waterlase® is a dental laser that enables the dentist to use minimal and in some cases even no
    anesthetic or drills to perform many routine dental procedures.`,
    sectionOneTitle: 'Some of the benefits include:',
    sectionOneData: [
      {
        title: 'Virtually Painless:',
        description: `Are you scared of going to the dentist because you’ll hear the dreaded drill screeching in your ear? Or
        maybe you are terrified of the needle — and who likes leaving the dental office with a droopy or puffy
        face? <li>These dental fears can be alleviated with a Waterlase® dentist. The Waterlase® is a dental laser
        that enables the dentist to use minimal and in some cases even no anesthetic or drills to perform many
        routine dental procedures!</li>`,
      },
      {
        title: 'More Natural Dentistry:',
        description: `The Waterlase® combines water, air, and laser energy for safe use on human tissue in the mouth. Our
        teeth are partially made up of water and when the laser makes contact with the tooth it excites the
        water molecules to cut through the tooth. <li>This patented technology helps prevent heat and gives a
        virtually pain-free experience while creating less aerosols than traditional dental handpieces.</li>`,
      },
      {
        title: 'More Convenient:',
        description: `Even for those who floss, brush, and use fluoride regularly, sometimes you still end up with a cavity.
        Between all of your commitments, you may not have the time to schedule another dental appointment.
        <li>
        With Waterlase® you don’t have to worry! Waterlase® is gentle enough that your dentist can complete
        most of your dental needs in a single visit. Plus, in some cases, your Waterlase® dentist can save you the
        hassle of going to a specialist or schedule multiple dental visits. </li>`,
      },
      {
        title: 'Safe and Precise:',
        description: `The Waterlase® is cleared for numerous dental applications that can be performed on both pediatric
        and adult patients. One of the Waterlase’s® greatest strengths is how precise it is!
        <li>
        The Waterlase® removes very precise amounts of tooth, without damaging or cracking the rest of the
        tooth! And because it is so precise, anesthetic is rarely needed. </li>
        If you are interested in more information about the benefits of Waterlase and laser dentistry in general
        please call for a consult with Dr. Peddireddy at OC Center For Advanced Dentistry.`,
      },
    ],
    imgSrc: biolase
  };

const BiolaseLaser = () => {

    return (
        <>
     
   <GenericServiceComponent {...biolaseData}/>
            </>
    );
  };
  
  export default BiolaseLaser;