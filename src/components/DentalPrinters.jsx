import GenericServiceComponent from "./GenericServiceComponent";
// import './DentalPrinters.css'
const DentalPrintersData = {
    mainTitleText: 'Dental Printers',
    // imgSrc: '/DentalPrinters.mp4'
  };
const DentalPrintersComponent = () => {
  return (
    <>
  <div>
  3D dental printers are specialized devices used to create dental models, restorations, aligners, advanced
prosthetics, and other dental products through additive manufacturing. They use digital files and various
printing technologies, such as stereolithography (SLA), digital light processing (DLP), or fused deposition
modeling (FDM), to produce precise, customized dental solutions.
Key Features:
1. Precision and Accuracy: They can produce highly detailed and accurate dental parts, crucial for
fitting crowns, bridges, and aligners.
2. Material Variety: They work with different biocompatible materials, including resins,
thermoplastics, and metal alloys, suitable for various dental applications.
3. Efficiency: 3D printing significantly reduces production time and costs compared to traditional
methods, enabling faster turnaround for dental treatments.
Applications:
 Dental Models: Creating physical representations of teeth and gums for treatment planning.
 Prosthetics: Bridges, dentures, and oral and maxillofacial prosthetics.
 Orthodontics: Aligners and other orthodontic devices.

15

 Surgical Guides: For precise placement of implants.
 Restorative: Custom crowns, Inlays, Onlays.
These 3D printers are becoming increasingly popular in dentistry due to their ability to enhance patient
care and streamline workflows.
We leverage Pro 2 from SprintRay®, a next-generation dental 3D printer that delivers unprecedented
accuracy and throughput.
  </div>
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