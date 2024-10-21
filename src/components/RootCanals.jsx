import GenericServiceComponent from "./GenericServiceComponent";
import './RootCanals.css'
const rootCanalsData = {
    mainTitleText: 'Root Canals',
    imgSrc: "/RootCanals.jpg"
  };
const RootCanalsContent = () => {
  return (
    <>
  <p className="padding-bottom-5">
    A root canal is a dental procedure designed to treat and save a tooth that is severely decayed, infected, or damaged. The procedure involves removing the pulp (soft tissue containing nerves and blood vessels) from the inside of the tooth, cleaning and disinfecting the root canals, and then filling and sealing them.
  </p>
  
  <p className="padding-bottom-5">
   <strong>
    
    A root canal is needed when there is severe tooth decay, dental infection or abscess, trauma or injury, or cracked or fractured teeth.
    </strong> 
  </p>

  <p className="padding-bottom-5">
    The procedure alleviates pain and discomfort associated with tooth decay or infection by removing the infected pulp.
  </p>

  <p className="padding-bottom-5">
    Root canal treatment is a common and highly successful procedure. It is essential to seek prompt dental care if one experiences symptoms such as severe toothache, swelling, or sensitivity, as these may indicate the need for a root canal.
  </p>


    </>
  )
}
const RootCanals = () => {

    return (
        <>
     
   <GenericServiceComponent {...rootCanalsData} AdditionalComponent={RootCanalsContent}/>
 
            </>
    );
  };
  
  export default RootCanals;