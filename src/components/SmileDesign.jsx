import GenericServiceComponent from "./GenericServiceComponent";
// import './smileDesign.css'
const smileDesignData = {
    mainTitleText: 'Smile Design',
    imgSrc: '/SmileDesignPic.jpg'
  };
  const SmileDesignComponent = () => {
    return (
      <>
    <div className="">
  <p className="padding-bottom-5">
    Smile design or smile makeover is a cosmetic dental procedure that focuses on creating a beautiful and natural-looking smile that complements your facial features. It harnesses various cosmetic and restorative dental procedures and addresses any functional or oral health concerns. It's not just about getting straight teeth; it's about considering the shape, size, color, and alignment of your teeth in relation to your lips, gums, and overall facial aesthetics.
  </p>
  <p className="padding-bottom-5">
    Here are a few things the Dentist will take into consideration during the smile design.
  </p>
  <ul className="">
    <li className="padding-bottom-5">
      <strong>Tooth shape and size:</strong> The ideal shape and size of teeth will depend on facial features and personal preferences. For example, if someone has a wide face, they may want to consider slightly wider teeth.
    </li>
    <li className="padding-bottom-5">
      <strong>Tooth color:</strong> The Dentist can use teeth whitening and other techniques to create the perfect shade of white for your teeth.
    </li>
    <li className="padding-bottom-5">
      <strong>Gum line and Lip Shape:</strong> The shape of your lip and position of gum can affect the look of your smile. A Smile designer can use gum contouring and create a smile that complements your natural lip shape.
    </li>
  <li className="padding-bottom-5">
    <strong>Gingival or gum contouring: </strong> Also known as gum reshaping or gum sculpting, is a cosmetic dental procedure designed to improve the appearance of the gums. The main goal of this procedure is to create a more aesthetically pleasing smile by reshaping the gum line. The procedure may involve the use of laser technology or traditional surgical methods to reshape the gum tissue.
  </li>
  <li>
  <strong className="padding-bottom-5">Digital Smile Design (DSD): </strong>
    Advanced technology, such as Digital Smile Design, may be used to plan and visualize the potential outcomes of the smile makeover. This involves digital imaging and simulation tools to help patients and dentists preview the expected results.
  </li>
  </ul>
</div>
      </>
    )
  }
const SmileDesign = () => {

    return (
        <>
     
   <GenericServiceComponent {...smileDesignData} AdditionalComponent={SmileDesignComponent}/>
            </>
    );
  };
  
  export default SmileDesign;