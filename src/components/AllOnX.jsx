import GenericServiceComponent from "./GenericServiceComponent";
// import './allOnX.css'
const allOnXData = {
    mainTitleText: 'All on X and All on 4s',
   
    imgSrc: '/AllOnXAllOn4s.jpg'
   
  };

const AllOnXContent = () => {
  return (
    <>
     <h3 className="padding-bottom-5">What is the All-on-X Dental Procedure?</h3>
  <p className="padding-bottom-5">
    The All-on-X dental procedure is a revolutionary treatment that can replace an entire arch of missing teeth. This approach is often employed when a patient has lost all or most of their natural teeth. The "X" in "All-on-X" represents the number of dental implants supporting the prosthetic teeth, with common variations being All-on-4 and All-on-6.
  </p>
  <p className="padding-bottom-5">
    This innovative technique offers several advantages over traditional methods of teeth replacement, such as:
  </p>

  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">
      <strong>Reduced number of implants:</strong> Traditionally, replacing all the teeth in an arch would require placing an implant for each missing tooth. The All-on-X procedure significantly reduces the number of implants needed, making it a more cost-effective and less invasive option.
    </li>
    <li className="padding-bottom-5">
      <strong>Shorter treatment time:</strong> Because fewer implants are required, the All-on-X procedure can be completed in a single visit, while traditional implant-supported restorations often take months or even years to complete.
    </li>
    <li className="padding-bottom-5">
      <strong>Improved stability, comfort, and permanence:</strong> The strategically angled implants used in the All-on-X procedure provide excellent support for the new teeth, resulting in a more stable, permanent, and comfortable fit than traditional dentures.
    </li>
    <li className="padding-bottom-5">
      <strong>Natural-looking results:</strong> The All-on-X procedure uses custom-made dentures that are designed to look and feel like natural teeth.
    </li>
    <li className="padding-bottom-5">
      <strong>Immediate restoration of function:</strong> Patients can eat and speak normally soon after the All-on-X procedure is completed.
    </li>
    <li className="padding-bottom-5">
      <strong>Permanence and stability:</strong> The All-on-X procedure provides a long-lasting solution for patients with significant tooth loss.
    </li>
  </ul>
    </>
  )
}
const AllOnX = () => {

    return (
        <>
     
   <GenericServiceComponent {...allOnXData} AdditionalComponent={AllOnXContent}/>
            </>
    );
  };
  
  export default AllOnX;