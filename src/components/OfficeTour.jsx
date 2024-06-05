import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const officeTourData = {
    mainTitleText: 'Office Tour',
    title: `Here is a look around at our office`,
    description: `Photos of building/entrance/waiting room/Operatories`,
  };

const OfficeTour = () => {

    return (
        <>
     
   <GenericServiceComponent {...officeTourData}/>
            </>
    );
  };
  
  export default OfficeTour;