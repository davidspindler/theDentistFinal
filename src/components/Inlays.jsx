import GenericServiceComponent from "./GenericServiceComponent";
const inlaysData = {
    mainTitleText: 'Inlays',
    
    imgSrc: '/Veneers.mp4'
  };
const InlaysContent = () => {
  return (
    <>
<p className="padding-bottom-5">
    A dental inlay/onlay is a custom-made restoration that is used to repair a tooth that has moderate decay or damage. It is similar to a traditional filling, but they are stronger, more durable, and less likely to stain and shrink. Inlays/onlays are typically made from porcelain or composite resin, and they are bonded to the tooth using a special adhesive.
  </p>
  
  <p className="padding-bottom-5">
    They are a good option for repairing teeth that have:
  </p>
  
  <ul className="arrow-list">
    <li className="padding-bottom-5">Moderate cavities</li>
    <li className="padding-bottom-5">Cracked teeth</li>
    <li className="padding-bottom-5">Worn teeth</li>
    <li className="padding-bottom-5">Teeth that have been chipped</li>
  </ul>
    </>
  )
}
const Inlays = () => {
    return (
        <>
        {/* <div className="bongo"> */}
   <GenericServiceComponent {...inlaysData} AdditionalComponent={InlaysContent}/>
            </>
    );
  };
  
  export default Inlays;