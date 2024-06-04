import GenericServiceComponent from "./GenericServiceComponent";
import './Veneers.css'
const veneersData = {
    mainTitleText: 'Veneers',
    title: 'What are Veneers?',
    description: `Veneers are thin, custom-made shells that are bonded to the front surface of your teeth. They are
    typically made from porcelain or composite resin, both of which are strong, durable, and tooth-colored.`,
    sectionOneTitle: 'Veneers are typically used to:',
    sectionOneData: [
      {
        title: 'Conceal Flaws:',
        description: `They can hide chips, cracks, stains, gaps, and uneven teeth.`,
      },
      {
        title: 'Change the shape or size of teeth:',
        description: `They can make teeth appear longer, shorter, wider, or
        narrower.`,
      },
      {
        title: 'Close gaps between teeth:',
        description: `They can close small gaps between teeth to create a more even
        smile.`,
      },
      {
        title: 'Whiten teeth:',
        description: `They can be used to whiten teeth that are resistant to bleaching.`,
      },
    ],
    sectionTwoTitle: 'Materials:',
    sectionTwoData: [
      {
        title: 'Porcelain veneers',
        description: `These are considered the strongest and most durable type of veneer. They are also
        more stain-resistant than composite veneers. However, they are more expensive and require more
        preparation of the natural tooth.`,
      },
      {
        title: 'Composite resin veneers',
        description: `These are less expensive than porcelain veneers and require less preparation
        of the natural tooth. However, they are not as strong or durable as porcelain veneers and may be more
        prone to staining..`,
      },
     
    ],
    // sectionThreeTitle: 'Benefits / Considerations of Veneers',
    // sectionThreeData: [
    //   {
    //     title: 'Benefits of Veneers',
    //     description: `-Can dramatically improve the appearance of your smile
    //     -Durable and long-lasting
    //     -Stain-resistant
    //     -Relatively quick and easy procedure`,
    //   },
    //   {
    //     title: 'Considerations for Veneers:',
    //     description: `May require some removal of enamel
    //      Not as strong as natural teeth
    //      While veneers can provide a dramatic improvement, they may not be suitable for everyone. The
    //     Dentist will assess your oral health and discuss alternative options if necessary.`,
    //   },
     
    // ],
  };

const Veneers = () => {
    const benefits = [
        "Can dramatically improve the appearance of your smile",
        "Durable and long-lasting",
        "Stain-resistant",
        "Relatively quick and easy procedure"
      ];
    
      const considerations = [
        "May require some removal of enamel",
        "Not as strong as natural teeth",
        "While veneers can provide a dramatic improvement, they may not be suitable for everyone. The Dentist will assess your oral health and discuss alternative options if necessary."
      ];
    return (
        <>
        {/* <div className="bongo"> */}
   <GenericServiceComponent {...veneersData}/>
 
        {/* </div> */}
          <div className="veneers-benefits">
      <div className="section">
      <h2 className="section-title">Benefits of Veneers</h2>
      <ul className="card-list">
      {benefits.map((benefit, index) => (
          <li className="card" key={index}>
          <div className="card-content">
          <p className="card-description">{benefit}</p>
          </div>
          </li>
          ))}
          </ul>
          </div>
          
          <div className="section">
          <h2 className="section-title">Considerations for Veneers</h2>
          <ul className="feature-list">
          {considerations.map((consideration, index) => (
              <li className="feature" key={index}>
              <div className="feature-content">
              <p className="feature-description">{consideration}</p>
              </div>
              </li>
              ))}
              </ul>
              </div>
            </div>
            </>
    );
  };
  
  export default Veneers;
  