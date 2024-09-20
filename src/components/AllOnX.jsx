import GenericServiceComponent from "./GenericServiceComponent";
// import './allOnX.css'
const allOnXData = {
    mainTitleText: 'All on X and All on 4s',
    title: 'What is All on X and All on 4s?',
    description: `The All-on-X dental procedure is a revolutionary treatment that can replace an entire arch of missing
    teeth. This approach is often employed when a patient has lost all or most of their natural teeth. The "X"
    in "All-on-X" represents the number of dental implants supporting the prosthetic teeth, with common
    variations being All-on-4 and All-on-6.`,
    sectionOneTitle: 'This innovative technique offers several advantages over traditional methods of teeth replacement, such as:',
    sectionOneData: [
        {
            title: 'Reduced number of implants:',
            description: `Traditionally, replacing all the teeth in an arch would require
            placing an implant for each missing tooth. The All-on-X procedure significantly reduces the
            number of implants needed, making it a more cost-effective and less invasive option.`,
          },
          {
            title: 'Shorter treatment time:',
            description: `Because fewer implants are required, the All-on-X procedure can be
            completed in a single visit, while traditional implant-supported restorations often take months
            or even years to complete.`,
          },
          {
            title: 'Improved stability, comfort and permanence:',
            description: `The strategically angled implants used in the All-
            on-X procedure provide excellent support for the new teeth, resulting in a more stable,
            permanent and comfortable fit than traditional dentures.`,
          },
    
          {
            title: 'Natural-looking results:',
            description: `The All-on-X procedure uses custom-made dentures that are designed
            to look and feel like natural teeth.`,
          },
          {
            title: 'Immediate restoration of function:',
            description: `Patients can eat and speak normally soon after the All-on-X
            procedure is completed.`,
          },
          {
            title: 'Permanent and stable solution',
            description: ``,
          },
    
        
    ],
    imgSrc: '/AllOnXAllOn4s.jpg'
   
  };

const AllOnX = () => {

    return (
        <>
     
   <GenericServiceComponent {...allOnXData}/>
            </>
    );
  };
  
  export default AllOnX;