import GenericServiceComponent from "./GenericServiceComponent";
// import './DentalPrinters.css'
const DentalPrintersData = {
    mainTitleText: 'Dental Printers',
    imgSrc: '/3dprinter.jpg'
  };
const DentalPrintersComponent = () => {
  return (
    <>

<p className="padding-bottom-5">
    3D dental printers are specialized devices used to create dental models, restorations, aligners, advanced prosthetics, and other dental products through additive manufacturing. They use digital files and various printing technologies, such as stereolithography (SLA), digital light processing (DLP), or fused deposition modeling (FDM), to produce precise, customized dental solutions.
  </p>

  <h3 className="padding-bottom-5">Key Features:</h3>
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Precision and Accuracy: They can produce highly detailed and accurate dental parts, crucial for fitting crowns, bridges, and aligners.</li>
    <li className="padding-bottom-5">Material Variety: They work with different biocompatible materials, including resins, thermoplastics, and metal alloys, suitable for various dental applications.</li>
    <li className="padding-bottom-5">Efficiency: 3D printing significantly reduces production time and costs compared to traditional methods, enabling faster turnaround for dental treatments.</li>
  </ul>

  <h3 className="padding-bottom-5">Applications:</h3>
  <ul className="arrow-list padding-bottom-5">
    <li className="padding-bottom-5">Dental Models: Creating physical representations of teeth and gums for treatment planning.</li>
    <li className="padding-bottom-5">Prosthetics: Bridges, dentures, and oral and maxillofacial prosthetics.</li>
    <li className="padding-bottom-5">Orthodontics: Aligners and other orthodontic devices.</li>
    <li className="padding-bottom-5">Surgical Guides: For precise placement of implants.</li>
    <li className="padding-bottom-5">Restorative: Custom crowns, inlays, onlays.</li>
  </ul>

  <p className="padding-bottom-5">
    These 3D printers are becoming increasingly popular in dentistry due to their ability to enhance patient care and streamline workflows.
  </p>

  <p className="padding-bottom-5">
    We leverage Pro 2 from SprintRay®, a next-generation dental 3D printer that delivers unprecedented accuracy and throughput.
  </p>
    </>
  )
}
const DentalPrinters = () => {

    return (
        <>
     
   <GenericServiceComponent {...DentalPrintersData} AdditionalComponent={DentalPrintersComponent}/>
   {/* <div>pic will go here</div> */}
            </>
    );
  };
  
  export default DentalPrinters;