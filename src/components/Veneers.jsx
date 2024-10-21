import GenericServiceComponent from "./GenericServiceComponent";
import './Veneers.css'
const veneersData = {
    mainTitleText: 'Veneers / Crowns',
    
    imgSrc: '/Veneers.mp4'
  };
const VeneersContent = () => {
  return (
    <>
    <div className="">
  <h3 className="padding-bottom-5">Veneers</h3>
  <p className="padding-bottom-5">
    Veneers are thin, custom-made shells that are bonded to the front surface of your teeth. They are typically made from porcelain or composite resin, both of which are strong, durable, stain resistant, and tooth-colored. Veneers are typically used to:
  </p>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Conceal flaws:</strong> They can hide chips, cracks, stains, gaps, and uneven teeth.
    </li>
    <li className="padding-bottom-5">
      <strong>Change the shape or size of teeth:</strong> They can make teeth appear longer, shorter, wider, or narrower.
    </li>
    <li className="padding-bottom-5">
      <strong>Close gaps between teeth:</strong> They can close small gaps between teeth to create a more even smile.
    </li>
    <li className="padding-bottom-5">
      <strong>Whiten teeth:</strong> They can be used to whiten teeth that are resistant to bleaching.
    </li>
    <li className="padding-bottom-5">
      <strong>Material:</strong>
    </li>
    <li className="padding-bottom-5">
      <strong>Porcelain veneers:</strong> These are considered the strongest and most durable type of veneer. They are also more stain-resistant than composite veneers. However, they are more expensive and require more preparation of the natural tooth.
    </li>
    <li className="padding-bottom-5">
      <strong>Composite resin veneers:</strong> These are less expensive than porcelain veneers and require less preparation of the natural tooth. However, they are not as strong or durable as porcelain veneers and may be more prone to staining.
    </li>
  </ul>

 

  <video className="responsive-video padding-20" controls>
          <source src={'/Crowns.mp4'} type={`video/mp4`} />
          Your browser does not support the video tag.
        </video>

  <h3 className="padding-bottom-5">Crowns</h3>
  <p className="padding-bottom-5">
    Dental crowns are essentially tooth-shaped caps custom-made to fit over your existing tooth, restoring its function and appearance. They're like little protective helmets for your teeth! Crowns serve various purposes, including:
  </p>
  <ul className="arrow-list">
    <li className="padding-bottom-5">
      <strong>Restoring a damaged or decayed tooth:</strong> Crowns can strengthen a weakened tooth, protect it from further damage, and prevent future decay.
    </li>
    <li className="padding-bottom-5">
      <strong>Improving functionality:</strong> They can rebuild a severely broken or worn-down tooth, allowing you to chew and speak effectively.
    </li>
    <li className="padding-bottom-5">
      <strong>Enhancing aesthetics:</strong> Crowns can cover discolored or misshapen teeth, improve a misaligned tooth, or even close gaps between teeth, creating a more aesthetically pleasing smile.
    </li>
    <li className="padding-bottom-5">
      <strong>Supporting other dental procedures:</strong> Crowns can anchor dental bridges or hold a tooth implant in place.
    </li>
    <li className="padding-bottom-5">
    <strong>Porcelain / Zirconia Crowns:</strong> These crowns provide a natural appearance and are suitable for front teeth.
    </li>
  </ul>
</div>
    </>
  )
}
const Veneers = () => {
    return (
        <>
        {/* <div className="bongo"> */}
   <GenericServiceComponent {...veneersData} AdditionalComponent={VeneersContent}/>
            </>
    );
  };
  
  export default Veneers;
  