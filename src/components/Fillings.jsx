import GenericServiceComponent from "./GenericServiceComponent";
import './Fillings.css'
const fillingsData = {
    mainTitleText: 'Resin Fillings',
    imgSrc: "/Fillings.mp4"
  };
const FillingsContent = () => {
  return (
    <>
    <section className="">
  <p className="padding-bottom-5">
    Dental fillings are common dental restorations used to repair cavities, cracks, chips, or worn-down areas in teeth. They play a crucial role in maintaining oral health by:
  </p>
  
  <ul className="padding-left-15 arrow-list">
    <li className="padding-bottom-5">
      <strong>Restoring the shape and function of the tooth:</strong> Fillings allow you to chew and bite normally without pain or discomfort.
    </li>
    <li className="padding-bottom-5">
      <strong>Preventing further decay:</strong> By filling in the gaps where bacteria can enter, fillings prevent cavities from getting larger and potentially harming the inner tooth structure.
    </li>
  </ul>

  <p className="">
    There are several types of dental filling materials available, most commonly used are:
  </p>

  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Composite resin:</strong> These tooth-colored fillings are the most common type today. They are aesthetically pleasing, bond well to the tooth, and can be easily sculpted to the desired shape. However, they may not be as durable as other materials, especially in areas of high chewing pressure.
    </li>
  </ul>
</section>
    </>
  )
}
const Fillings = () => {

    return (
        <>
     
   <GenericServiceComponent {...fillingsData} AdditionalComponent={FillingsContent}/>
 
            </>
    );
  };
  
  export default Fillings;