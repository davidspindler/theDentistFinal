import './GenericServiceComponent.css';
// import { BookCheck } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import React from 'react';

const SIDEBAR_CONFIG = {
    'Cosmetic and Restorative Dentistry': [
      { path: '/services/smiledesign', label: 'Smile Design' },
      { path: '/services/veneers', label: 'Veneers' },
      { path: '/services/crowns', label: 'Crowns' },
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
      { path: '/services/ivanesthesiasedation', label: 'IV Anesthesia Sedation' },
      { path: '/services/oralsedation', label: 'Oral Sedation' },
    ],
    'Technological Advancements': [
      { path: '/services/3dimagectscans', label: '3D Image / CT Scans' },
      { path: '/services/intraoralscanners', label: 'Intraoral Scanners' },
      { path: '/services/biolaselaser', label: 'Biolase Laser' },
      { path: '/services/softtissuelasers', label: 'Soft Tissue Lasers' },
      { path: '/services/bonegrafting', label: 'Bone Grafting' },
    ],
  };

const GenericServiceComponent = ({ 
  mainTitleText, title, description, sectionOneTitle, sectionOneData, 
  sectionTwoTitle, sectionTwoData, sectionThreeData, sectionThreeTitle, sectionFourData, sectionFourTitle 
}) => {

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

  return (
    <>
    
    <div className="container2">

    <div className="generic-service-component">
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
      <div className="main-content">
        <div className="smile-design">
      {
    mainTitleText && 
    <h1 className='main-title-text'>{mainTitleText}</h1>
    }
        
          <div className="styled-content">
            <div className="padding-20">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <img src="https://via.placeholder.com/300x200" alt="Placeholder" className="card-image padding-20" />
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
                <ul className="card-list">
                {sectionOneData?.map((item, index) => (
                    <li className="card" key={index}>
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
                    <ul className="feature-list">
                    {sectionTwoData.map((item, index) => (
                        <li className="feature" key={index}>
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
                    <ul className="feature-list">
                    {sectionThreeData?.map((item, index) => (
                        <li className="feature" key={index}>
                        <div className="feature-content">
                        <h3 className="feature-title">{item.title}</h3>
                        <p className="feature-description">{item.description}</p>
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
                    <ul className="feature-list">
                    {sectionFourData?.map((item, index) => (
                        <li className="feature" key={index}>
                        <div className="feature-content">
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