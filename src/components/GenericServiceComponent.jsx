import './GenericServiceComponent.css';
// import { BookCheck } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import React from 'react';
import parse, {domToReact} from 'html-react-parser'


const SIDEBAR_CONFIG = {
    'Cosmetic and Restorative Dentistry': [
      { path: '/services/smiledesign', label: 'Smile Design' },
      { path: '/services/veneers', label: 'Veneers/Crowns' },
      { path: '/services/teethwhitening', label: 'Teeth Whitening' },
      { path: '/services/crownlengthening', label: 'Crown Lengthening' },
      { path: '/services/gingivalgumcontouring', label: 'Gingival/Gum Contouring' },
      { path: '/services/fillings', label: 'Fillings (Resin and porcelain)' },
      { path: '/services/rootcanals', label: 'Root Canals' },
    ],
    'Oral and Perio Surgery': [
      { path: '/services/toothextractions', label: 'Tooth Extractions (including Wisdom Teeth)' },
      { path: '/services/fullmouthextractions', label: 'Full Mouth Extractions' },
      { path: '/services/boneaugmentations', label: 'Bone Augmentations (PRF and BMP)' },
      { path: '/services/gingivalgumcontouring', label: 'Gingival/Gum Contouring' },
      { path: '/services/gumtreatment', label: 'Gum Treatment' },
    ],
    'Implants and Prosthetics': [
      { path: '/services/implanttreatment', label: 'Implant Treatment' },
      { path: '/services/failedimplanttreatment', label: 'Failed Implant Treatment' },
      { path: '/services/sinuslift', label: 'Sinus Lift' },
      { path: '/services/implantsupporteddentures', label: 'Implant Supported Dentures' },
      { path: '/services/allonx', label: 'All on X and All on 4s' },
      { path: '/services/otherprosthetics', label: 'Other Prosthetics' },
    ],
    'Preventative Dentistry': [
      { path: '/services/checkupandcleanings', label: 'Checkup and Cleanings' },
      { path: '/services/sealants', label: 'Sealants' },
      { path: '/services/flouridetreatments', label: 'Flouride Treatments' },
    ],
    'Sedation': [
      { path: '/services/sedation', label: 'Sedation' },
      // { path: '/services/oralsedation', label: 'Oral Sedation' },
    ],
    'Technological Advancements': [

      { path: '/services/3DDentalPrinters', label: '3D Dental Printers' },
      { path: '/services/3dimagectscans', label: '3D Image / CT Scans' },
      { path: '/services/intraoralscanners', label: 'Intraoral Scanners' },
      // { path: '/services/biolaselaser', label: 'Biolase Laser' },
      { path: '/services/softtissuelasers', label: 'Soft Tissue Lasers' },
      // { path: '/services/bonegrafting', label: 'Bone Grafting' },
    ],
    // 'More About Us': [
    //     // { path: '/about/occfad', label: 'OCCFAD' },
    //     { path: '/about/meetthedoctors', label: 'Meet the Doctors' },
    //     { path: '/about/address', label: 'Google Maps and Parking' },
    //     // { path: '/about/officetour', label: 'Office Tour' },
    //     // { path: '/about/patientexperiences', label: 'Patient Experiences' },
    //   ],
  };

const GenericServiceComponent = ({ 
  mainTitleText, title, description, sectionOneTitle, sectionOneData, 
  sectionTwoTitle, sectionTwoData, sectionThreeData, sectionThreeTitle, sectionFourData, sectionFourTitle, imgSrc, descriptionToBeParsed, AdditionalComponent 
}) => {
  const handleBlurb = () => {
    return parse(descriptionToBeParsed, {
      replace: (domNode) => {
        if (domNode.name === 'ul') {
          return (
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {domToReact(domNode.children)}
            </ul>
          );
        }
    }
  })
  };
    const location = useLocation();
    const createListFromString = (htmlString) => {
        const container = document.createElement('div');
        container.innerHTML = htmlString;
    
        const convertToReactElements = (node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return node.textContent;
          }
    
          const nodeName = node.nodeName.toLowerCase();
          const nodeProps = {};
    
          node.getAttributeNames().forEach((attrName) => {
            nodeProps[attrName] = node.getAttribute(attrName);
          });
    
          const children = Array.from(node.childNodes).map((childNode, index) =>
            convertToReactElements(childNode)
          );
    
          return React.createElement(nodeName, { ...nodeProps, key: Math.random() }, children);
        };
    
        return Array.from(container.childNodes).map((childNode) =>
          convertToReactElements(childNode)
        );
      };


    const getSidebarTitleAndLinks = () => {
        for (const [title, links] of Object.entries(SIDEBAR_CONFIG)) {
          for (const link of links) {
            if (location.pathname.includes(link.path.split('/')[2])) {
              return { title, links };
            }
          }
        }
        return { title: 'Sidebar', links: [] }; // Default title and empty links
      };
    
      const { title: sidebarTitle, links: sidebarLinks } = getSidebarTitleAndLinks();
      console.log(sidebarTitle)
      const isSidebar = sidebarTitle == "Sidebar"
      const isVideo = (imgSrc) => {
        const videoExtensions = ['mp4', 'webm', 'ogg'];
        const extension = imgSrc.split('.').pop().toLowerCase();
        return videoExtensions.includes(extension);
      };
  return (
    <>
    <div className="container2">

    <div className="generic-service-component">
      {!isSidebar &&
      
      <div className="sidebar">
        <h2>{sidebarTitle}</h2>
        <ul>
          {sidebarLinks.map((link, index) => (
              <li key={index} className={`sidebar-item ${location.pathname.includes(link.path) ? 'active' : ''}`}>
              <Link to={link.path} className="sidebar-link">
                <div className="sidebar-content">
                  <span className="sidebar-label">{link.label}</span>
                 
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* Add sidebar content here */}
      </div>
}
      <div className="main-content">
        <div className="smile-design">
      {
    mainTitleText && 
    <h1 className='main-title-text'>{mainTitleText}</h1>
    }
        
          <div className={`${AdditionalComponent ? 'styled-content-backwards' : 'styled-content'}`}>
            <div className="">
             {title && <h2>{title}</h2>} 
             {description &&  <p>{description}</p> }
              {AdditionalComponent && <AdditionalComponent />}
              {descriptionToBeParsed && handleBlurb()}
            </div>
            {imgSrc && (isVideo(imgSrc) ? (
        <video className="responsive-video padding-20" controls>
          <source src={imgSrc} type={`video/${imgSrc.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={imgSrc} alt={`Image for ${mainTitleText}`} className="responsive-image padding-20" />
      ))}
          </div>
      
        </div>
      </div>
    </div>
                    </div>
                        {/* <hr className='style-one'></hr> */}
                        {sectionOneData &&
                        
                <div className="container3">
                  
                     
                  

                <div className="section">
                <h2 className="section-title">{sectionOneTitle}</h2>
                <ul className="">
                {sectionOneData?.map((item, index) => (
                    <li className="" key={index}>
                    <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{createListFromString(item.description)}</p>
                    </div>
                    </li>
                    ))}
                    </ul>
                    </div>

                    </div>
                    }
                    {
                        sectionTwoData &&
                    <div className="container4">
                    
                    <div className="section">
                    <h2 className="section-title">{sectionTwoTitle}</h2>
                    <ul className="">
                    {sectionTwoData.map((item, index) => (
                        <li className="" key={index}>
                        <div className="feature-content">
                        <h3 className="feature-title">{item.title}</h3>
                        <p className="feature-description">{createListFromString(item.description)}</p>
                        </div>
                        </li>
                        ))}
                        </ul>
                        </div>
                    </div>
                      
                          
                    }
                     {sectionThreeData && 
                     <div className="container3">

                    <div className="section">
                    <h2 className="section-title">{sectionThreeTitle}</h2>
                    <ul className="">
                    {sectionThreeData?.map((item, index) => (
                        <li className="" key={index}>
                        <div className="">
                        <h3 className="">{item.title}</h3>
                        <p className="">{item.description}</p>
                        </div>
                        </li>
                        ))}
                        </ul>
                        </div>
                        </div>
                    }
                      {sectionFourData && 
                     <div className="container4">

                    <div className="section">
                    <h2 className="section-title">{sectionFourTitle}</h2>
                    <ul className="">
                    {sectionFourData?.map((item, index) => (
                        <li className="" key={index}>
                        <div className="">
                        <h3 className="feature-title">{item.title}</h3>
                        <p className="feature-description">{item.description}</p>
                        </div>
                        </li>
                        ))}
                        </ul>
                        </div>
                        </div>
                    }
                    </>
  );
};

export default GenericServiceComponent;