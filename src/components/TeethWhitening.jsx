import GenericServiceComponent from "./GenericServiceComponent";
import './TeethWhitening.css'
const teethWhiteningData = {
    mainTitleText: 'Teeth Whitening',
    title: 'What is Teeth Whitening?',
    description: `Teeth whitening is a cosmetic dental procedure designed to lighten the color of your teeth and remove
    stains and discoloration. There are two major approaches to teeth whitening:`,
    sectionOneTitle: 'In Office Professional Whitening:',
    sectionOneData: [
      {
        title: 'Laser or Light-Activated Whitening:',
        description: `A high-concentration peroxide gel is applied to your teeth, and a
        special light or laser is used to enhance the whitening process.`,
      },
      {
        title: 'Chairside Bleaching:',
        description: `A highly concentrated bleaching agent is applied directly to the teeth, often in
        combination with a special light.`,
      },
  
    ],
    sectionTwoTitle: 'Home based Whitening:',
    sectionTwoData: [
      {
        title: 'Over the Counter (OTC) whitening products',
        description: `These include examples such as whitening toothpaste and whitening strips`,
      },
      {
        title: 'Tray based whitening::',
        description: `Your dentist provides you with custom-fit trays and a whitening gel with a lower
        concentration of peroxide. You wear the trays for a specified time period each day.`,
      }
    ],
  };

const TeethWhitening = () => {

    return (
        <>
     {/* <h1>Teeth Whitening</h1> */}
   <GenericServiceComponent {...teethWhiteningData}/>
   <div>Teeth whitening is a safe and effective way to brighten your smile. However, it&#39;s important to talk to
your dentist before you start any type of whitening treatment. An experienced dentist can assess the
condition of your teeth, recommend the most suitable method, and address any potential issues or
sensitivity. Teeth whitening may not be effective for all types of discoloration and the dentist can help
guide towards effective outcomes.</div>
<div>Additionally, maintaining good oral hygiene practices, such as regular brushing, flossing, and dental
check-ups, can contribute to overall oral health and help prevent future staining. Limiting the
consumption of staining substances like coffee, tea, and tobacco can also help preserve the results of
teeth whitening treatments.</div>
            </>
    );
  };
  
  export default TeethWhitening;