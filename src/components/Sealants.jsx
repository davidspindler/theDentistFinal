import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const sealantsData = {
    mainTitleText: 'Sealants',
    title: 'What are Sealants?',
    description: `Dental sealants are a great way to prevent cavities, especially in children. They are thin, protective
    coatings that are painted onto the chewing surfaces of the back teeth (molars and premolars). Once
    applied, they harden and form a shield that keeps out food particles and bacteria, which can cause
    cavities.`,
   
  };

const Sealants = () => {

    return (
        <>
     
   <GenericServiceComponent {...sealantsData}/>
   <div className="container3">
    <h2>Benefits of Sealants include:</h2>
   </div>
   <div className="container3">
   <div className="cards-container">
    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Prevent Cavities" />
      <div className="card-content">
        <h3>Prevent Cavities</h3>
        <p>Prevent up to 80% of cavities in molars for at least two years.</p>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Quick and Painless" />
      <div className="card-content">
        <h3>Quick and Painless</h3>
        <p>Quick and painless to apply.</p>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Inexpensive" />
      <div className="card-content">
        <h3>Relatively Inexpensive</h3>
        <p>They are relatively inexpensive.</p>
      </div>
    </div>

    <div className="card1">
      <img src="https://via.placeholder.com/150" alt="Long Lasting" />
      <div className="card-content">
        <h3>Long Lasting</h3>
        <p>They can last for several years, although they may need to be reapplied if they chip or wear down.</p>
      </div>
    </div>
  </div>
   </div>
            </>
    );
  };
  
  export default Sealants;