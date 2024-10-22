import GenericServiceComponent from "./GenericServiceComponent";
// import './oralSedation.css'
const sealantsData = {
    mainTitleText: 'Sealants',
    
    imgSrc: '/DentalSealants.jpg'
  };

const SealantsContent = () => {
  return (
    <>
    <p>Dental sealants are a great way to prevent cavities, especially in children. They are thin, protective coatings that are painted onto the chewing surfaces of the back teeth (molars and premolars). Once applied, they harden and form a shield that keeps out food particles and bacteria, which can cause cavities. </p>
    </>
  )
}
const Sealants = () => {

    return (
        <>
     
   <GenericServiceComponent {...sealantsData} AdditionalComponent={SealantsContent}/>
   
            </>
    );
  };
  
  export default Sealants;