import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
import officetour1 from '../../src/assets/images/officetour1.png'
import officetour2 from '../../src/assets/images/officetour2.jpg'
const officeTourData = {
    mainTitleText: 'Office Tour',
    title: `Here is a look around at our office`,
    description: `There is a validation ticket parking lot conveniently located next to our office. Take an ariel view of these photos of surrounding buildings, entrance, waiting room, and operatories.`,
    imgSrc: officetour1
  };

const OfficeTour = () => {

    return (
        <>
     
   <GenericServiceComponent {...officeTourData}/>
<div className="container3">
        <div className="padding-20">

   <img src={officetour2}className="styled-image2" ></img>
        </div>
</div>
            </>
    );
  };
  
  export default OfficeTour;