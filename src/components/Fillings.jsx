import GenericServiceComponent from "./GenericServiceComponent";
import './Fillings.css'
const fillingsData = {
    mainTitleText: 'Fillings (Resin and Porcelain)',
    title: 'What are dental fillings?',
    description: `Dental fillings are common dental restorations used to repair cavities, cracks, chips, or worn-down areas
    in teeth.`,
    sectionOneTitle: 'They play a crucial role in maintaining oral health by:',
    sectionOneData: [
      {
        title: 'Restoring the shape and function of the tooth:',
        description: `Fillings allow you to chew and bite normally
        without pain or discomfort.`,
      },
      {
        title: 'Preventing further decay:',
        description: `By filling in the gaps where bacteria can enter, fillings prevent cavities
        from getting larger and potentially harming the inner tooth structure.`,
      },
      {
        title: 'Protecting the sensitive inner pulp:',
        description: `When decay reaches the pulp (the area containing nerves
            and blood vessels), it can cause severe pain and tooth loss. Fillings create a barrier to protect the
            pulp from further damage.`,
      },
     
    ],
    sectionTwoTitle: 'There are several types of dental filling materials available, each with its own advantages and disadvantages:',
    sectionTwoData: [
      {
        title: 'Composite resin:',
        description: `These tooth-colored fillings are the most common type today. They are aesthetically
        pleasing, bond well to the tooth, and can be easily sculpted to the desired shape. However, they may
        not be as durable as other materials, especially in areas of high chewing pressure.`,
      },
      {
        title: 'Amalgam (silver fillings):',
        description: `These fillings are very strong and long-lasting, but they are not as aesthetically
        pleasing as composite resin fillings. Additionally, there are some concerns about the mercury content in
        amalgam.`,
      },
      {
        title: 'Gold:',
        description: `Gold fillings are extremely durable and aesthetically pleasing, but they are also the most expensive
        option.`,
      },
      {
        title: 'Ceramic:',
        description: `Ceramic fillings are strong and aesthetically pleasing, but they can be more brittle than other
        materials and may not be suitable for all teeth.`,
      },
     
    ],
    imgSrc: "/Fillings.mp4"
  };

const Fillings = () => {

    return (
        <>
     
   <GenericServiceComponent {...fillingsData}/>
   <div className="cardFillings">
    <div>

   The best type of filling depends on the location and size of the cavity, tooth structure left intact,
structural integrity of the tooth, and cosmetic preferences. The dentist can discuss your options and
recommend the best filling material for your individual needs.
    </div>
   </div>
            </>
    );
  };
  
  export default Fillings;